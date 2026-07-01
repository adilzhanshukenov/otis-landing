"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedInView } from "./AnimatedInView";

const trustBadges = [
  "На рынке с 1997 года",
  "45 892 объекта под охраной",
  "18 филиалов",
  "Собственная служба реагирования",
];

const bullets = [
  "Установка камер без слепых зон",
  "Удаленный просмотр с телефона из любой точки мира",
  "Гарантия и сервисное обслуживание после установки",
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pb-12 pt-12 sm:pb-16 sm:pt-16"
    >
      <div className="hero-grid-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-16 -top-20 h-72 w-72 rounded-full bg-[#ff7d00]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-16 h-64 w-64 rounded-full bg-[#28374d]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-full bg-gradient-to-t from-slate-100/60 to-transparent" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:px-8">
        <AnimatedInView className="relative">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff7d00]/30 bg-[#ff7d00]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff7d00]">
            <span className="h-2 w-2 rounded-full bg-[#ff7d00]" />
            Системы видеонаблюдения под ключ
          </p>

          <h1 className="text-4xl font-black uppercase leading-[0.95] text-[#28374d] sm:text-5xl lg:text-6xl">
            Видеонаблюдение для бизнеса
            {/* <span className="mt-2 block text-[#ff7d00]">
              под ключ по всему Казахстану
            </span> */}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg font-roboto-condensed">
            Спроектируем, установим и возьмем на обслуживание систему
            видеонаблюдения
          </p>

          <ul className="mt-7 space-y-3 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            {bullets.map((bullet, index) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-slate-700 font-roboto-condensed"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#ff7d00]/30 bg-[#ff7d00]/10 text-xs font-bold text-[#ff7d00]">
                  {index + 1}
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#lead-form"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-[#ff7d00] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff7d00]/25 transition hover:bg-[#f06f00]"
            >
              Заказать бесплатный замер
            </motion.a>
            <motion.a
              href="/whatsapp"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-[#28374d] px-6 py-3 text-sm font-semibold text-[#28374d] transition hover:bg-[#28374d] hover:text-white"
            >
              Написать в WhatsApp
            </motion.a>
          </div>

          <p className="mt-3 text-xs text-slate-500 font-roboto-condensed">
            Ответим в рабочее время за 10-15 минут
          </p>
        </AnimatedInView>

        <AnimatedInView delay={0.12}>
          <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/hero.jpg"
                alt="Установленная система видеонаблюдения ОТИС на объекте"
                width={1200}
                height={900}
                priority
                className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px]"
              />

              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0f172a]/65 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div className="rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-white backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-200 font-roboto-condensed">
                    Реальный объект
                  </p>
                  <p className="text-lg font-bold uppercase">
                    Камеры в действии 24/7
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-300/15 px-3 py-1.5 text-xs font-semibold text-emerald-100 font-roboto-condensed backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  LIVE
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedInView>
      </div>

      <div className="mx-auto mt-8 grid w-full max-w-6xl gap-3 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {trustBadges.map((badge, index) => (
          <motion.div
            key={badge}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 + index * 0.07 }}
            className="relative overflow-hidden rounded-2xl border border-[#28374d]/18 bg-linear-to-r from-white to-[#fff5eb] px-4 py-3 text-sm font-semibold text-[#243247] font-roboto-condensed shadow-[0_10px_24px_rgba(40,55,77,0.08)]"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#ff7d00] via-[#ff9d42] to-transparent" />
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#ff7d00]/40 bg-[#ff7d00]/15 text-[11px] font-bold text-[#ff7d00]">
                {index + 1}
              </span>
              <span>{badge}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
