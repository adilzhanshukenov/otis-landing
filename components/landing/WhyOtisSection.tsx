"use client";

import { AnimatedInView } from "./AnimatedInView";

function WindowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 4v16" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l7 3v6c0 4.4-3 7.8-7 9-4-1.2-7-4.6-7-9V6l7-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M8 7.5 10.8 16" />
      <path d="M16 7.5 13.2 16" />
      <path d="M8 6h8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

const reasonIcons = [WindowIcon, ShieldIcon, NetworkIcon, PhoneIcon];

const reasons = [
  {
    title: "Работа в одно окно",
    text: "Один договор с одной компанией: проектирование, монтаж и обслуживание.",
  },
  {
    title: "На рынке с 1997 года",
    text: "Учитываем слепые зоны и реальные сценарии вашего бизнеса — камеры снимают важное, а не случайные участки.",
  },
  {
    title: "Один объект или сеть",
    text: "Подключаем как одну точку, так и сеть филиалов по стране. Все камеры можно контролировать с единого экрана.",
  },
  {
    title: "Весь объект в телефоне",
    text: "В любой момент открываете приложение и видите, что происходит прямо сейчас: из офиса, дома или другой страны.",
  },
];

export function WhyOtisSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedInView>
          <h2 className="text-3xl font-black uppercase text-[#28374d] sm:text-4xl">
            Почему бизнес выбирает ОТИС?
          </h2>
        </AnimatedInView>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <AnimatedInView
              key={reason.title}
              delay={index * 0.08}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#ff7d00]/25 bg-[#ff7d00]/10 text-[#ff7d00]">
                {(() => {
                  const Icon = reasonIcons[index];
                  return <Icon />;
                })()}
              </div>
              <h3 className="text-xl font-bold text-[#28374d]">
                {reason.title}
              </h3>
              <p className="mt-3 text-slate-600">{reason.text}</p>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
