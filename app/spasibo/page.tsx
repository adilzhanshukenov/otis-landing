export default function SpasiboPage() {
  return (
    <main className="flex min-h-screen items-center bg-slate-50 px-4 py-14 sm:px-6">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#ff7d00]">
          Заявка отправлена
        </p>
        <h1 className="mt-3 text-3xl font-black leading-tight text-[#28374d] sm:text-4xl">
          Готово! Вы сделали первый шаг к спокойствию за свой объект.
        </h1>
        <p className="mt-4 text-slate-700">
          Держите телефон под рукой. Наш специалист свяжется с вами в течение 15
          минут в рабочее время, ответит на вопросы и согласует бесплатный
          замер.
        </p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <h2 className="text-xl font-bold text-[#28374d]">
            Пока ждете звонок
          </h2>
          <p className="mt-3 text-slate-700">
            Загляните в наш Instagram: реальные кадры с объектов днем и ночью,
            советы по выбору камер и разбор частых ошибок при экономии на
            видеонаблюдении.
          </p>
          <a
            href="https://www.instagram.com/otis.kz"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-full bg-[#ff7d00] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#f06f00]"
          >
            Посмотреть наш Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
