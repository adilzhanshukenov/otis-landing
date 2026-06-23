"use client";

import { motion } from "motion/react";
import { AnimatedInView } from "./AnimatedInView";

export function LeadFormSection() {
  return (
    <section id="lead-form" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <AnimatedInView className="relative overflow-hidden rounded-3xl bg-[#28374d] p-8 text-white sm:p-10">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#ff7d00]/30 blur-3xl" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.14em] text-[#ffb56f]">
              Бесплатный выезд инженера
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Получите бесплатный замер и проект для вашего объекта
            </h2>
            <p className="mt-4 text-slate-200">
              Покажем, какие зоны важно контролировать, предложим оптимальный
              комплект и точную смету без лишних позиций.
            </p>
          </div>
        </AnimatedInView>

        <AnimatedInView
          delay={0.08}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h3 className="text-2xl font-black text-[#28374d]">
            Закажите бесплатный замер видеонаблюдения
          </h3>
          <form action="/spasibo" className="mt-6 space-y-3">
            <input
              required
              name="name"
              placeholder="Как к вам обращаться? Например: Айдар"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-500 focus:border-[#28374d] focus:outline-none"
            />
            <input
              required
              name="phone"
              placeholder="+7 (___) ___-__-__"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-500 focus:border-[#28374d] focus:outline-none"
            />
            <select
              required
              name="objectType"
              defaultValue=""
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 focus:border-[#28374d] focus:outline-none"
            >
              <option value="" disabled>
                Тип объекта
              </option>
              <option>Магазин</option>
              <option>Сеть магазинов</option>
              <option>Склад</option>
              <option>Бизнес-центр</option>
              <option>Банк</option>
              <option>АЗС</option>
              <option>Кафе или ресторан</option>
              <option>Офис</option>
              <option>Дом или квартира</option>
              <option>Другое</option>
            </select>
            <select
              required
              name="timeline"
              defaultValue=""
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 focus:border-[#28374d] focus:outline-none"
            >
              <option value="" disabled>
                Когда планируете установку?
              </option>
              <option>Срочно, в ближайшие дни</option>
              <option>В течение 1-2 недель</option>
              <option>В течение месяца</option>
              <option>Просто прицениваюсь</option>
            </select>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-xl bg-[#ff7d00] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#f06f00]"
            >
              Заказать бесплатный замер
            </motion.button>
          </form>
        </AnimatedInView>
      </div>
    </section>
  );
}
