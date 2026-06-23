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

function getBitrixLeadEndpoint(webhookUrl: string): string {
  const normalized = webhookUrl.trim().replace(/\/+$/, "");
  if (normalized.includes("crm.lead.add")) {
    return normalized;
  }

  return `${normalized}/crm.lead.add.json`;
}

function buildLeadComment(payload: LeadPayload): string {
  const notes: string[] = [];

  if (payload.objectType) {
    notes.push(`Тип объекта: ${payload.objectType}`);
  }

  if (payload.timeline) {
    notes.push(`Срок установки: ${payload.timeline}`);
  }

  if (payload.source) {
    notes.push(`Форма: ${payload.source}`);
  }

  return notes.join("\n");
}

async function sendToBitrix(payload: LeadPayload) {
  const webhookUrl = process.env.BITRIX_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("BITRIX_WEBHOOK_URL is not configured");
  }

  const comments = buildLeadComment(payload);
  const assignedById = Number(process.env.BITRIX_ASSIGNED_BY_ID);

  const response = await fetch(getBitrixLeadEndpoint(webhookUrl), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        TITLE: `Заявка с сайта OTIS${payload.source ? ` (${payload.source})` : ""}`,
        NAME: payload.name,
        PHONE: [{ VALUE: payload.phone, VALUE_TYPE: "WORK" }],
        COMMENTS: comments,
        SOURCE_ID: process.env.BITRIX_SOURCE_ID || "WEB",
        OPENED: "Y",
        ...(Number.isFinite(assignedById) && assignedById > 0
          ? { ASSIGNED_BY_ID: assignedById }
          : {}),
      },
      params: {
        REGISTER_SONET_EVENT: "Y",
      },
    }),
    cache: "no-store",
  });

  const data = await response.json().catch(() => null);
  if (!response.ok || data?.error) {
    throw new Error(
      data?.error_description || data?.error || "Bitrix request failed",
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

    const hasBitrix = Boolean(process.env.BITRIX_WEBHOOK_URL?.trim());
    const hasTelegram = Boolean(
      process.env.TELEGRAM_BOT_TOKEN?.trim() &&
      process.env.TELEGRAM_CHAT_ID?.trim(),
    );

    if (!hasBitrix && !hasTelegram) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "No delivery channel configured. Set Telegram or Bitrix env vars.",
        },
        { status: 500 },
      );
    }

    const deliveries: Array<{
      name: "Bitrix" | "Telegram";
      promise: Promise<unknown>;
    }> = [];

    if (hasBitrix) {
      deliveries.push({ name: "Bitrix", promise: sendToBitrix(payload) });
    }

    if (hasTelegram) {
      deliveries.push({ name: "Telegram", promise: sendToTelegram(payload) });
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
