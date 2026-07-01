"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const whatsappUrl = "https://wa.me/77752581155";

export default function WhatsAppPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#25d366] p-6">
      <div className="flex flex-col items-center justify-center text-white">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Открыть WhatsApp"
          onClick={() => {
            window.fbq?.("track", "Lead", {
              source: "whatsapp_click",
            });
          }}
          className="group inline-flex"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-[58vmin] w-[58vmin] max-h-[440px] max-w-[440px] min-h-[220px] min-w-[220px] drop-shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-[1.03]"
            fill="currentColor"
          >
            <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12.1 24h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.7-8.5ZM12.2 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.3 12a9.8 9.8 0 0 1 9.8-9.8 9.6 9.6 0 0 1 6.9 2.9A9.7 9.7 0 0 1 22 12a9.8 9.8 0 0 1-9.8 9.8Zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1s-.8 1-1 1.1c-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9s0-.5.1-.7l.5-.6.2-.4c.1-.1.1-.3 0-.5s-.7-1.8-1-2.5c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4c0 1.4 1 2.7 1.2 2.9.1.2 2 3.2 4.8 4.4.7.3 1.2.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.8 2-1.5.2-.7.2-1.4.1-1.5-.2-.2-.4-.2-.7-.3Z" />
          </svg>
        </a>
        <p className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white/95 sm:text-base">
          Нажмите на иконку, чтобы открыть WhatsApp
        </p>
      </div>
    </main>
  );
}
