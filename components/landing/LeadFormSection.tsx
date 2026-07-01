"use client";

import { useEffect, useRef } from "react";
import { AnimatedInView } from "./AnimatedInView";
import Image from "next/image";

export function LeadFormSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const anchor = document.createElement("script");
    anchor.setAttribute("data-b24-form", "inline/25/hfzd4g");
    anchor.setAttribute("data-skip-moving", "true");
    container.appendChild(anchor);

    const loader = document.createElement("script");
    loader.async = true;
    loader.src = `https://bitrix.otis.kz/upload/crm/form/loader_25_hfzd4g.js?${Math.floor(Date.now() / 180000)}`;
    container.appendChild(loader);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section id="lead-form" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <AnimatedInView className="relative flex flex-col gap-2 overflow-hidden rounded-3xl bg-[#28374d] p-8 text-white sm:p-10">
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
          <div className="relative mt-6 h-60 md:h-80 w-full overflow-hidden rounded-2xl bg-white/90 shadow-sm">
            <Image src="/images/CTA.jpg" alt="" fill className=" max-w-none" />
          </div>
        </AnimatedInView>

        <AnimatedInView
          delay={0.08}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div ref={containerRef} />
        </AnimatedInView>
      </div>
    </section>
  );
}
