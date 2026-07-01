"use client";

import { motion } from "motion/react";
import { AnimatedInView } from "./AnimatedInView";

const packageItems = [
  {
    title: "2 камеры",
    description: "Небольшой объект: магазин, офис, отдельная точка",
    icon: "shop",
  },
  {
    title: "4 камеры",
    description: "Средний объект: кафе, небольшой склад, офис",
    icon: "office",
  },
  {
    title: "6 камер",
    description:
      "Крупный объект: магазин с залом и складом, автомойка, клиника",
    icon: "clinic",
  },
  {
    title: "8 камер",
    description: "Большой объект: супермаркет, склад, бизнес-центр",
    icon: "business-center",
  },
] as const;

const included =
  "Камеры, регистратор, PoE-коммутатор (если требуется), жесткий диск, кабель, монтаж, прокладка кабеля и пуско-наладка, ежемесячное сервисное обслуживание.";

function PackageIcon({
  type,
  className = "h-4 w-4",
}: {
  type: "shop" | "office" | "clinic" | "business-center";
  className?: string;
}) {
  if (type === "shop") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10h18" />
        <path d="M4 10V7l2-3h12l2 3v3" />
        <path d="M5 10v9h14v-9" />
        <path d="M9 19v-5h6v5" />
      </svg>
    );
  }

  if (type === "office") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M6 21V5h12v16" />
        <path d="M9 9h2" />
        <path d="M13 9h2" />
        <path d="M9 13h2" />
        <path d="M13 13h2" />
      </svg>
    );
  }

  if (type === "clinic") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 21h16" />
        <path d="M6 21V7l6-3 6 3v14" />
        <path d="M12 9v6" />
        <path d="M9 12h6" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 21h20" />
      <path d="M5 21V9h4v12" />
      <path d="M10 21V5h4v16" />
      <path d="M15 21v-8h4v8" />
    </svg>
  );
}

export function PackagesSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedInView>
          <h2 className="text-3xl font-black uppercase text-[#28374d] sm:text-4xl">
            Готовые пакеты видеонаблюдения под ключ
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Выберите пакет по размеру объекта. Точный состав подбираем
            индивидуально под ваши задачи и бюджет.
          </p>
          <p className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            Что входит в каждый пакет: {included}
          </p>
        </AnimatedInView>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {packageItems.map((item, index) => (
            <AnimatedInView
              key={item.title}
              delay={index * 0.08}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#28374d]/25 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute -right-2 -top-9 text-[128px] font-black leading-none text-[#28374d]/6 transition group-hover:text-[#28374d]/10">
                {item.title.split(" ")[0]}
              </div>

              <div className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ff7d00]/40 bg-linear-to-br from-[#ff7d00]/20 to-[#ff7d00]/5 text-[#ff7d00] shadow-[0_10px_22px_rgba(255,125,0,0.24)]">
                  <PackageIcon type={item.icon} className="h-7 w-7" />
                </div>

                {/* <p className="inline-flex items-center gap-2 rounded-full border border-[#ff7d00]/25 bg-[#ff7d00]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#ff7d00]">
                  Пакет
                </p> */}

                <div className="mt-4 flex items-end gap-3">
                  <span className="text-6xl font-black leading-none text-[#28374d] sm:text-7xl">
                    {item.title.split(" ")[0]}
                  </span>
                  <span className="pb-2 text-base font-semibold uppercase tracking-[0.08em] text-slate-600">
                    {item.title.split(" ").slice(1).join(" ")}
                  </span>
                </div>

                <div className="mt-4 h-px w-full bg-gradient-to-r from-[#ff7d00]/40 to-transparent" />
              </div>

              <p className="relative mt-4 flex-1 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <motion.a
                href="#lead-form"
                whileTap={{ scale: 0.98 }}
                className="relative mt-5 rounded-full border border-[#28374d] px-4 py-2 text-center text-sm font-semibold text-[#28374d] transition group-hover:bg-[#28374d] group-hover:text-white"
              >
                Получить консультацию
              </motion.a>
            </AnimatedInView>
          ))}
        </div>

        <AnimatedInView
          delay={0.2}
          className="relative mt-6 overflow-hidden rounded-3xl border border-[#28374d]/35 bg-linear-to-r from-[#28374d] to-[#1f2c3f] p-5 text-slate-100 shadow-[0_16px_34px_rgba(40,55,77,0.28)]"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#ff7d00]/20 blur-2xl" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ff7d00]/45 bg-[#ff7d00]/15 text-[#ffb56f]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 21h20" />
                  <path d="M5 21V9h4v12" />
                  <path d="M10 21V5h4v16" />
                  <path d="M15 21v-8h4v8" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ffb56f]">
                  Индивидуальный проект
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-100">
                  Для объектов больше 8 камер (сети, склады, бизнес-центры)
                  собираем решение под задачу после бесплатного замера.
                </p>
              </div>
            </div>

            <motion.a
              href="#lead-form"
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-[#ff7d00] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#f06f00]"
            >
              Обсудить крупный объект
            </motion.a>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
