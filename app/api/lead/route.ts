import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  phone: string;
  objectType?: string;
  timeline?: string;
  source?: string;
};

function clean(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function normalizeKzPhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  let local = digits;

  if (local.startsWith("8")) {
    local = local.slice(1);
  } else if (local.startsWith("7")) {
    local = local.slice(1);
  }

  local = local.slice(0, 10);
  return local.length === 10 ? `+7${local}` : "";
}

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function normalizePhoneForMetaHash(phone: string): string {
  return phone.replace(/\D/g, "");
}

async function sendToMeta(
  payload: LeadPayload,
  context: {
    clientIpAddress: string;
    clientUserAgent: string;
    sourceUrl: string;
  },
) {
  const accessToken = process.env.META_ACCESS_TOKEN?.trim();
  const pixelId =
    process.env.META_PIXEL_ID?.trim() ||
    process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();

  if (!accessToken || !pixelId) {
    throw new Error("META_ACCESS_TOKEN or META_PIXEL_ID is not configured");
  }

  const normalizedName = payload.name.trim().toLowerCase();
  const normalizedPhone = normalizePhoneForMetaHash(payload.phone);

  const response = await fetch(
    `https://graph.facebook.com/v23.0/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [
          {
            event_name: "Lead",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: context.sourceUrl,
            user_data: {
              ph: normalizedPhone ? [sha256(normalizedPhone)] : undefined,
              fn: normalizedName ? [sha256(normalizedName)] : undefined,
              client_ip_address: context.clientIpAddress || undefined,
              client_user_agent: context.clientUserAgent || undefined,
            },
            custom_data: {
              object_type: payload.objectType || undefined,
              timeline: payload.timeline || undefined,
              source: payload.source || undefined,
            },
          },
        ],
        test_event_code: process.env.META_TEST_EVENT_CODE?.trim() || undefined,
      }),
      cache: "no-store",
    },
  );

  const data = await response.json().catch(() => null);
  if (!response.ok || data?.error) {
    throw new Error(
      data?.error?.message ||
        data?.error ||
        "Meta Conversions API request failed",
    );
  }

  return data;
}

async function sendToTelegram(payload: LeadPayload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured");
  }

  const lines = [
    "Новая заявка OTIS",
    "",
    `Имя: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    payload.objectType ? `Тип объекта: ${payload.objectType}` : "",
    payload.timeline ? `Срок установки: ${payload.timeline}` : "",
    payload.source ? `Форма: ${payload.source}` : "",
  ].filter(Boolean);

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_thread_id: process.env.TELEGRAM_MESSAGE_THREAD_ID
          ? Number(process.env.TELEGRAM_MESSAGE_THREAD_ID)
          : undefined,
        text: lines.join("\n"),
        disable_web_page_preview: true,
      }),
      cache: "no-store",
    },
  );

  const data = await response.json().catch(() => null);
  if (!response.ok || !data?.ok) {
    throw new Error(data?.description || "Telegram request failed");
  }

  return data;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>;
    const clientIpAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
    const clientUserAgent = request.headers.get("user-agent") || "";
    const sourceUrl =
      request.headers.get("origin") ||
      request.headers.get("referer") ||
      "https://otis-landing";

    const payload: LeadPayload = {
      name: clean(body.name),
      phone: normalizeKzPhone(clean(body.phone)),
      objectType: clean(body.objectType),
      timeline: clean(body.timeline),
      source: clean(body.source),
    };

    if (!payload.name || !payload.phone) {
      return NextResponse.json(
        { ok: false, error: "Name and valid Kazakhstan phone are required" },
        { status: 400 },
      );
    }

    const hasTelegram = Boolean(
      process.env.TELEGRAM_BOT_TOKEN?.trim() &&
      process.env.TELEGRAM_CHAT_ID?.trim(),
    );
    const hasMeta = Boolean(
      process.env.META_ACCESS_TOKEN?.trim() &&
      (process.env.META_PIXEL_ID?.trim() ||
        process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim()),
    );

    if (!hasTelegram && !hasMeta) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "No delivery channel configured. Set Telegram or Meta env vars.",
        },
        { status: 500 },
      );
    }

    const deliveries: Array<{
      name: "Telegram" | "Meta";
      promise: Promise<unknown>;
    }> = [];

    if (hasTelegram) {
      deliveries.push({ name: "Telegram", promise: sendToTelegram(payload) });
    }

    if (hasMeta) {
      deliveries.push({
        name: "Meta",
        promise: sendToMeta(payload, {
          clientIpAddress,
          clientUserAgent,
          sourceUrl,
        }),
      });
    }

    const results = await Promise.allSettled(
      deliveries.map((item) => item.promise),
    );

    const errors: string[] = [];
    let successCount = 0;

    results.forEach((result, index) => {
      const channel = deliveries[index]?.name || "Unknown";

      if (result.status === "fulfilled") {
        successCount += 1;
        return;
      }

      errors.push(`${channel}: ${result.reason?.message || "failed"}`);
    });

    if (successCount === 0) {
      return NextResponse.json(
        { ok: false, error: errors.join("; ") },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      warning: errors.length > 0 ? errors.join("; ") : undefined,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error ? error.message : "Unexpected server error",
      },
      { status: 500 },
    );
  }
}
