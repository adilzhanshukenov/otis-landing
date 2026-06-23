"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatedInView } from "./AnimatedInView";

const certs = [
  {
    title: "Диплом за интерес к инновационной продукции компании Dahua",
    src: "/certificates/licenses-1.webp",
  },
  {
    title: "Отис - платиновый партнёр Dahua",
    src: "/certificates/licenses-2.webp",
  },
  {
    title:
      "В 2018 году - Компания «Отис» была признана «Лидером Отрасли» в области систем охраны по итогам экономических рейтингов.",
    src: "/certificates/licenses-3.webp",
  },
  {
    title:
      "Сертификат о прохождении курса Начальником службы развития видео сервисов. Сертификат, подтверждающий прохождении курса компании «Dahua».",
    src: "/certificates/licenses-4.webp",
  },
  {
    title:
      "Сертификат об обучении Начальника службы развития видео сервисов. Сертификат, свидетельствующий прохождение курса компании «Macroscop».",
    src: "/certificates/licenses-5.webp",
  },
  {
    title:
      "Национальный сертификат «Лидер отрасли 2017». По результатам ранжирования 2015-2016 года предприятие заняло Золотого рейтинга в Республике Казахстан ОКЭД.",
    src: "/certificates/licenses-6.webp",
  },
  {
    title:
      "Национальный сертификат «Лидер отрасли 2016». По результатам ранжирования 2014-2015 года предприятие заняло Золотого рейтинга в Республике Казахстан ОКЭД.",
    src: "/certificates/licenses-7.webp",
  },
  {
    title:
      "Национальный сертификат «Лидер отрасли 2014». По результатам ранжирования 2012-2013 года предприятие заняло Золотого рейтинга в Республике Казахстан ОКЭД.",
    src: "/certificates/licenses-8.webp",
  },
];

export function CertificatesSection() {
  const [activeCert, setActiveCert] = useState<(typeof certs)[number] | null>(
    null,
  );
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const cardsPerPage = isDesktop ? 4 : 1;

  const pages = useMemo(() => {
    const result: (typeof certs)[] = [];
    for (let index = 0; index < certs.length; index += cardsPerPage) {
      result.push(certs.slice(index, index + cardsPerPage));
    }
    return result;
  }, [cardsPerPage]);

  const maxPage = Math.max(0, pages.length - 1);
  const visiblePage = Math.min(currentPage, maxPage);

  const goToPage = (page: number) => {
    const nextPage = Math.max(0, Math.min(maxPage, page));

    if (!isDesktop && mobileTrackRef.current) {
      const track = mobileTrackRef.current;
      track.scrollTo({
        left: nextPage * track.clientWidth,
        behavior: "smooth",
      });
    }

    setCurrentPage(nextPage);
  };

  useEffect(() => {
    if (!activeCert) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCert(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [activeCert]);

  return (
    <>
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedInView>
            <h2 className="text-3xl uppercase font-black text-[#28374d] sm:text-4xl">
              Сертификаты
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Прозрачность и соответствие требованиям подтверждаем официальными
              документами.
            </p>
          </AnimatedInView>

          <div className="mt-8">
            <div className="hidden overflow-hidden lg:block">
              <motion.div
                className="flex"
                animate={{ x: `${-visiblePage * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {pages.map((page, pageIndex) => (
                  <div key={pageIndex} className="min-w-full">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      {page.map((cert, certIndex) => {
                        const absoluteIndex =
                          pageIndex * cardsPerPage + certIndex;

                        return (
                          <AnimatedInView
                            key={cert.src}
                            delay={absoluteIndex * 0.05}
                            y={0}
                            className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                          >
                            <button
                              type="button"
                              onClick={() => setActiveCert(cert)}
                              className="block text-left"
                              aria-label={`Открыть ${cert.title}`}
                            >
                              <div className="mb-4 h-56 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:h-64">
                                <Image
                                  src={cert.src}
                                  alt={cert.title}
                                  width={480}
                                  height={640}
                                  className="h-full w-full object-contain p-2"
                                />
                              </div>
                            </button>
                            <h3 className="text-base font-semibold text-[#28374d]">
                              {cert.title}
                            </h3>
                            <button
                              type="button"
                              onClick={() => setActiveCert(cert)}
                              className="mt-3 inline-block text-left text-sm font-semibold text-[#ff7d00] hover:text-[#e66e00]"
                            >
                              Открыть сертификат
                            </button>
                          </AnimatedInView>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div
              ref={mobileTrackRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-1 touch-pan-x lg:hidden"
              onScroll={(event) => {
                const track = event.currentTarget;
                if (!track.clientWidth) {
                  return;
                }

                const nextPage = Math.max(
                  0,
                  Math.min(
                    maxPage,
                    Math.round(track.scrollLeft / track.clientWidth),
                  ),
                );
                if (nextPage !== currentPage) {
                  setCurrentPage(nextPage);
                }
              }}
            >
              {certs.map((cert, index) => (
                <div key={cert.src} className="min-w-full snap-start">
                  <AnimatedInView
                    delay={index * 0.05}
                    y={0}
                    className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveCert(cert)}
                      className="block text-left"
                      aria-label={`Открыть ${cert.title}`}
                    >
                      <div className="mb-4 h-56 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:h-64">
                        <Image
                          src={cert.src}
                          alt={cert.title}
                          width={480}
                          height={640}
                          className="h-full w-full object-contain p-2"
                        />
                      </div>
                    </button>
                    <h3 className="text-base font-semibold text-[#28374d]">
                      {cert.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActiveCert(cert)}
                      className="mt-3 inline-block text-left text-sm font-semibold text-[#ff7d00] hover:text-[#e66e00]"
                    >
                      Открыть сертификат
                    </button>
                  </AnimatedInView>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm text-slate-600">
                {visiblePage + 1} / {pages.length}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goToPage(visiblePage - 1)}
                  disabled={visiblePage === 0}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-[#28374d] transition hover:border-[#28374d] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Предыдущая страница сертификатов"
                >
                  Назад
                </button>
                <button
                  type="button"
                  onClick={() => goToPage(visiblePage + 1)}
                  disabled={visiblePage === maxPage}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-[#28374d] transition hover:border-[#28374d] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Следующая страница сертификатов"
                >
                  Далее
                </button>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {pages.map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  type="button"
                  onClick={() => goToPage(pageIndex)}
                  aria-label={`Перейти к странице ${pageIndex + 1}`}
                  className={`h-2.5 rounded-full transition ${
                    pageIndex === visiblePage
                      ? "w-8 bg-[#ff7d00]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-900/75 p-4"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label={activeCert.title}
              className="max-h-[92vh] w-full max-w-4xl overflow-auto rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-[#28374d] sm:text-xl">
                  {activeCert.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="rounded-full border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:border-[#28374d] hover:text-[#28374d]"
                >
                  Закрыть
                </button>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <Image
                  src={activeCert.src}
                  alt={activeCert.title}
                  width={1200}
                  height={1600}
                  className="h-auto max-h-[75vh] w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
