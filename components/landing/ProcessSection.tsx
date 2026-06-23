"use client";

import { motion } from "motion/react";
import { AnimatedInView } from "./AnimatedInView";

const steps = [
  {
    title: "Заявка",
    text: "Оставляете заявку на сайте или звоните менеджеру.",
  },
  {
    title: "Бесплатный замер",
    text: "Выезжаем на объект, изучаем задачи и готовим смету.",
  },
  {
    title: "Монтаж",
    text: "Устанавливаем камеры, прокладываем кабель и настраиваем доступ.",
  },
  {
    title: "Запуск и обучение",
    text: "Сдаем объект, показываем интерфейс и берем на сервис.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedInView>
          <h2 className="text-3xl font-black text-[#28374d] sm:text-4xl">
            Как мы работаем
          </h2>
        </AnimatedInView>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#28374d] text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-xl font-bold text-[#28374d]">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{step.text}</p>
              {index < steps.length - 1 && (
                <span className="pointer-events-none absolute -right-2 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-[#ff7d00] lg:block" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
