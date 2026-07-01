"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const phoneHref = "tel:+77085550308";

export default function CallPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#28374d] p-6">
      <div className="flex flex-col items-center justify-center text-white">
        <a
          href={phoneHref}
          aria-label="Позвонить"
          onClick={() => {
            window.fbq?.("track", "Lead", {
              source: "call_click",
            });
          }}
          className="group inline-flex"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-[58vmin] w-[58vmin] max-h-[440px] max-w-[440px] min-h-[220px] min-w-[220px] drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-[1.03]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9z" />
          </svg>
        </a>
        <p className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white/95 sm:text-base">
          Нажмите на иконку, чтобы позвонить
        </p>
      </div>
    </main>
  );
}
