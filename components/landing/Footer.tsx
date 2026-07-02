"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8">
        <div>
          <Image
            src="/Logo_RGB_h.svg"
            alt="ОТИС"
            width={172}
            height={46}
            className="h-auto w-[140px] sm:w-[172px]"
          />
          <p className="mt-1 text-sm text-slate-600">
            Видеонаблюдение для бизнеса
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <Link
              className="block text-slate-700 hover:text-[#28374d]"
              href="/?page=call"
            >
              +7 (708) 555 03 08
            </Link>
            <Link
              className="block text-slate-700 hover:text-[#28374d]"
              href="mailto:info@otis.kz"
            >
              info@otis.kz
            </Link>
            <Link
              className="block text-[#ff7d00] hover:text-[#e66e00]"
              href="/?page=whatsapp"
            >
              WhatsApp: +7 (775) 258-11-55
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Контакты
          </h3>
          <p className="mt-3 text-sm text-slate-700">
            Республика Казахстан, 050004, г. Алматы, ул. Гоголя, 89А
          </p>
          <p className="mt-2 text-sm text-slate-700">Пн-Пт с 09:00 до 18:00</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Документы и соцсети
          </h3>
          <div className="mt-3 space-y-2 text-sm">
            <a
              href="/privacy"
              className="block text-slate-700 hover:text-[#28374d]"
            >
              Политика конфиденциальности
            </a>
            <a
              href="/files/oferta.pdf"
              target="_blank"
              rel="noreferrer"
              className="block text-slate-700 hover:text-[#28374d]"
            >
              Договор оферты
            </a>
            <a
              href="https://www.instagram.com/otis.kz"
              target="_blank"
              rel="noreferrer"
              className="block text-[#ff7d00] hover:text-[#e66e00]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
