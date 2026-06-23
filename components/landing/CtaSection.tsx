"use client";

import { motion } from "motion/react";
import { AnimatedInView } from "./AnimatedInView";

export function CtaSection() {
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
            action="/spasibo"
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
              placeholder="+7 (___) ___-__-__"
              className="rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-[#ff7d00] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#f06f00]"
            >
              Заказать бесплатный замер
            </motion.button>
          </form>
        </AnimatedInView>
      </div>
    </section>
  );
}
