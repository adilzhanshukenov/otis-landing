"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { FormEvent, useState } from "react";
import { AnimatedInView } from "./AnimatedInView";
import { formatKzPhone, isValidKzPhone, normalizeKzPhone } from "./phoneMask";

export function CtaSection() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const form = event.currentTarget;

    const formData = new FormData(form);
    const phoneInput = String(formData.get("phone") || "");

    if (!isValidKzPhone(phoneInput)) {
      setErrorMessage("Введите корректный номер: +7 (7XX) XXX-XX-XX");
      setIsSubmitting(false);
      return;
    }

    const normalizedPhone = normalizeKzPhone(phoneInput);

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: String(formData.get("name") || ""),
        phone: normalizedPhone,
        source: "CTA",
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.ok) {
      setErrorMessage("Не удалось отправить заявку. Попробуйте еще раз.");
      setIsSubmitting(false);
      return;
    }

    form.reset();
    router.push("/spasibo");
  };

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedInView className="rounded-3xl bg-gradient-to-r from-[#28374d] to-[#3b4f6d] p-8 text-white sm:p-10">
          <h2 className="text-3xl font-black sm:text-4xl">
            Одна компания, вместо трех подрядчиков
          </h2>
          <p className="mt-4 max-w-3xl text-slate-200">
            Делаем проект, монтаж и обслуживание без посредников. Перед работами
            бесплатно выезжаем на замер и показываем, где встанет каждая камера.
          </p>

          <form
            id="mini-form"
            onSubmit={handleSubmit}
            className="mt-7 grid gap-3 sm:grid-cols-[1fr_1fr_auto]"
          >
            <input
              required
              name="name"
              placeholder="Ваше имя"
              className="rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500"
            />
            <input
              required
              name="phone"
              inputMode="tel"
              autoComplete="tel"
              maxLength={18}
              placeholder="+7 (7__) ___-__-__"
              onInput={(event) => {
                event.currentTarget.value = formatKzPhone(
                  event.currentTarget.value,
                );
              }}
              className="rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="rounded-xl bg-[#ff7d00] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#f06f00]"
            >
              {isSubmitting ? "Отправка..." : "Заказать бесплатный замер"}
            </motion.button>
          </form>
          {errorMessage && (
            <p className="mt-3 text-sm text-red-200">{errorMessage}</p>
          )}
        </AnimatedInView>
      </div>
    </section>
  );
}
