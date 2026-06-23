"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { AnimatedInView } from "./AnimatedInView";

const testimonials = [
  {
    author: "Айгерим, сеть кофеен",
    quote: "Камеры поставили за два дня",
    text: "Видим кассы и зал в реальном времени, можем быстро проверять спорные ситуации с гостями и персоналом.",
  },
  {
    author: "Руслан, складская компания",
    quote: "Контроль погрузки без слепых зон",
    text: "Команда ОТИС заранее показала, куда ставить камеры. После запуска заметно сократились спорные моменты по отгрузкам.",
  },
  {
    author: "Алина, частная клиника",
    quote: "Доступ к архиву за секунды",
    text: "Важно было быстро находить записи. Интерфейс понятный, сотрудников обучили в день запуска.",
  },
  {
    author: "Нурбек, автосервис",
    quote: "Ночной режим реально помогает",
    text: "Даже ночью видно номера машин на въезде. Для нас это ключевой аргумент по безопасности.",
  },
  {
    author: "Дана, магазин у дома",
    quote: "Одна компания закрыла все",
    text: "Не пришлось отдельно искать монтажников и сервис. Вопросы решаются через одного менеджера.",
  },
  {
    author: "Ержан, бизнес-центр",
    quote: "Удобно следить за филиалами",
    text: "Смотрим несколько объектов с одного экрана. Руководству теперь проще контролировать ситуацию везде.",
  },
];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollTrack = (direction: "left" | "right") => {
    if (!trackRef.current) {
      return;
    }

    const distance = trackRef.current.clientWidth * 0.82;
    trackRef.current.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedInView className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-black text-[#28374d] sm:text-4xl">
            Что говорят наши клиенты
          </h2>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollTrack("left")}
              className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#28374d] hover:text-[#28374d]"
              aria-label="Прокрутить отзывы влево"
            >
              Назад
            </button>
            <button
              type="button"
              onClick={() => scrollTrack("right")}
              className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#28374d] hover:text-[#28374d]"
              aria-label="Прокрутить отзывы вправо"
            >
              Далее
            </button>
          </div>
        </AnimatedInView>

        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-2"
        >
          {testimonials.map((item, index) => (
            <motion.article
              key={item.author}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="flex h-[200px] min-w-[86%] snap-start flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:min-w-[58%] lg:min-w-[36%]"
            >
              <p className="text-lg font-bold leading-7 text-[#28374d]">
                {item.quote}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
              <p className="mt-auto pt-4 text-sm font-semibold text-[#ff7d00]">
                {item.author}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
