"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedInView } from "./AnimatedInView";

const features = [
  "Высокое разрешение - видно лица и автомобильные номера",
  "Ночная съемка Full Color - цветная картинка даже в полной темноте",
  "Уличное исполнение - камеры работают круглый год",
  "Удаленный просмотр - контроль объекта из любой точки",
  "Видеоаналитика - распознавание номеров, контроль кассы, охрана периметра",
];

export function QualitySection() {
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!previewImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [previewImage]);

  return (
    <section className="bg-[#1f2b3d] py-14 text-white sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedInView>
          <h2 className="text-3xl uppercase font-black sm:text-4xl">
            Четкая картинка днем и ночью
          </h2>
          <p className="mt-3 max-w-3xl text-slate-200">
            Показываем контраст между обычной и полноцветной ночной съемкой,
            чтобы вы заранее понимали качество контроля в темное время.
          </p>
        </AnimatedInView>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <AnimatedInView className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-900 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                  Обычная камера
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setPreviewImage({
                      src: "/images/before.png",
                      alt: "Инфракрасный ночной кадр обычной камеры",
                    });
                  }}
                  className="mt-3 block w-full overflow-hidden rounded-xl"
                  aria-label="Открыть изображение обычной камеры"
                >
                  <Image
                    src="/images/before.png"
                    alt="Инфракрасный ночной кадр обычной камеры"
                    width={800}
                    height={500}
                    className="h-40 w-full rounded-xl object-cover grayscale contrast-110 transition duration-300 hover:scale-[1.02]"
                  />
                </button>
              </div>
              <div className="rounded-2xl bg-slate-900 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[#ffb56f]">
                  Full Color ночью
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setPreviewImage({
                      src: "/images/after.png",
                      alt: "Полноцветная ночная съемка с высокой детализацией",
                    });
                  }}
                  className="mt-3 block w-full overflow-hidden rounded-xl"
                  aria-label="Открыть изображение Full Color"
                >
                  <Image
                    src="/images/after.png"
                    alt="Полноцветная ночная съемка с высокой детализацией"
                    width={800}
                    height={500}
                    className="h-40 w-full rounded-xl object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="mt-4 rounded-2xl border border-white/20 bg-black/30 p-4"
            >
              <p className="text-sm text-slate-200">
                Видео ночной съемки объекта
              </p>
              <video
                controls
                preload="metadata"
                poster="/images/thumbnail.png"
                className="mt-3 h-60 w-full rounded-xl bg-slate-900 object-cover"
              >
                <source src="/videos/nightvideo.mp4" type="video/mp4" />
                Ваш браузер не поддерживает воспроизведение видео.
              </video>
              <a
                href="/videos/nightvideo.mp4"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs font-semibold text-[#ffb56f] hover:text-[#ffd4a2]"
              >
                Открыть видео в новом окне
              </a>
            </motion.div>
          </AnimatedInView>

          <AnimatedInView
            delay={0.12}
            className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur"
          >
            <ul className="space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-slate-100"
                >
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff7d00]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </AnimatedInView>
        </div>
      </div>

      <AnimatePresence>
        {previewImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-120 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/55 px-3 py-1 text-sm font-semibold text-white transition hover:bg-black/70"
                aria-label="Закрыть просмотр изображения"
              >
                Закрыть
              </button>

              <Image
                src={previewImage.src}
                alt={previewImage.alt}
                width={1920}
                height={1200}
                className="max-h-[88vh] w-full rounded-2xl border border-white/20 bg-slate-900 object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
