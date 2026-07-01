"use client";

import { useEffect, useRef } from "react";
import { AnimatedInView } from "./AnimatedInView";

export function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector('script[data-b24-form]')) return;

    const script = document.createElement("script");
    script.setAttribute("data-b24-form", "inline/26/q4l6ym");
    script.setAttribute("data-skip-moving", "true");
    script.textContent = `(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://bitrix.otis.kz/upload/crm/form/loader_26_q4l6ym.js');`;

    container.appendChild(script);
  }, []);

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

          <div ref={containerRef} className="mt-7" />
        </AnimatedInView>
      </div>
    </section>
  );
}
