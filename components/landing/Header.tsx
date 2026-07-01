"use client";

import { motion } from "motion/react";
import Image from "next/image";

const phoneHref = "/call";
const whatsappHref = "/whatsapp";

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12.1 24h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.7-8.5ZM12.2 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.3 12a9.8 9.8 0 0 1 9.8-9.8 9.6 9.6 0 0 1 6.9 2.9A9.7 9.7 0 0 1 22 12a9.8 9.8 0 0 1-9.8 9.8Zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1s-.8 1-1 1.1c-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9s0-.5.1-.7l.5-.6.2-.4c.1-.1.1-.3 0-.5s-.7-1.8-1-2.5c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4c0 1.4 1 2.7 1.2 2.9.1.2 2 3.2 4.8 4.4.7.3 1.2.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.8 2-1.5.2-.7.2-1.4.1-1.5-.2-.2-.4-.2-.7-.3Z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
          Работаем по всему Казахстану • Пн-Пт с 09:00 до 18:00
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <a href="#top" className="group min-w-0">
            <Image
              src="/Logo_RGB_h.svg"
              alt="ОТИС"
              width={172}
              height={46}
              className="h-auto w-[140px] sm:w-[172px]"
              priority
            />
            <div className="mt-1 text-xs text-slate-600 sm:text-sm">
              Видеонаблюдение для бизнеса
            </div>
          </a>

          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            <a
              href={phoneHref}
              aria-label="Позвонить +7 (708) 555-03-08"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-[#28374d] hover:text-[#28374d] sm:text-sm"
            >
              <PhoneIcon />
              <span className="hidden md:inline">+7 (708) 555-03-08</span>
            </a>
            <a
              href={whatsappHref}
              target="_self"
              aria-label="Написать в WhatsApp +7 (775) 258-11-55"
              className="inline-flex items-center gap-2 rounded-full border border-[#ff7d00]/25 bg-[#ff7d00]/10 px-3 py-2 text-xs font-semibold text-[#ff7d00] transition hover:bg-[#ff7d00] hover:text-white sm:text-sm"
            >
              <WhatsAppIcon />
              <span className="hidden md:inline">+7 (775) 258-11-55</span>
            </a>
            <motion.a
              href="#lead-form"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-[#28374d] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1e2a3c] sm:text-sm"
            >
              Заказать замер
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}
