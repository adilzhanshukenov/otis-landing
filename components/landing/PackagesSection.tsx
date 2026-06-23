"use client";

import { motion } from "motion/react";
import { AnimatedInView } from "./AnimatedInView";

const packageItems = [
  {
    title: "2 камеры",
    description: "Небольшой объект: магазин, офис, отдельная точка",
  },
  {
    title: "4 камеры",
    description: "Средний объект: кафе, небольшой склад, офис",
  },
  {
    title: "6 камер",
    description:
      "Крупный объект: магазин с залом и складом, автомойка, клиника",
  },
  {
    title: "8 камер",
    description: "Большой объект: супермаркет, склад, бизнес-центр",
  },
];

const included =
  "Камеры, регистратор, PoE-коммутатор (если требуется), жесткий диск, кабель, монтаж, прокладка кабеля и пуско-наладка, ежемесячное сервисное обслуживание.";

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
                <p className="inline-flex items-center gap-2 rounded-full border border-[#ff7d00]/25 bg-[#ff7d00]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#ff7d00]">
                  Пакет
                </p>

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
          className="mt-6 rounded-2xl bg-[#28374d] p-5 text-sm text-slate-100"
        >
          Для объектов больше 8 камер (сети, склады, бизнес-центры) собираем
          индивидуальный проект после бесплатного замера.
        </AnimatedInView>
      </div>
    </section>
  );
}
