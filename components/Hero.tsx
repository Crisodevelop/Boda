import { wedding } from "@/lib/event";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-coral-dark via-coral to-coral-light px-6 py-20 text-center">
      {/* Adornos suaves */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 max-w-2xl animate-fade-up">
        <p className="font-serif text-base font-semibold uppercase tracking-[0.4em] text-white sm:text-lg">
          Nos casamos
        </p>

        <h1 className="mt-10 font-script text-7xl leading-tight text-white drop-shadow-md sm:text-9xl">
          {wedding.brideAndGroom.groom}
        </h1>
        <div className="my-4 flex items-center justify-center gap-5">
          <span className="h-px w-16 bg-white/70" />
          <span className="font-serif text-4xl text-white sm:text-5xl">&</span>
          <span className="h-px w-16 bg-white/70" />
        </div>
        <h1 className="font-script text-7xl leading-tight text-white drop-shadow-md sm:text-9xl">
          {wedding.brideAndGroom.bride}
        </h1>

        {/* Tarjeta de alto contraste con los datos clave */}
        <div className="mx-auto mt-12 inline-block rounded-2xl bg-white/95 px-8 py-6 shadow-xl">
          <p className="font-serif text-2xl font-semibold text-coral-dark sm:text-3xl">
            {wedding.dateLabel}
          </p>
          <p className="mt-1 font-sans text-lg font-medium text-ink sm:text-xl">
            {wedding.timeLabel}
          </p>
          <p className="mt-3 font-sans text-base leading-snug text-ink sm:text-lg">
            {wedding.venue.name}
          </p>
        </div>
      </div>

      <a
        href="#cuenta"
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-white"
        aria-label="Desliza hacia abajo"
      >
        <span className="font-serif text-sm uppercase tracking-[0.3em]">
          Desliza
        </span>
        <span className="block h-9 w-px animate-soft-pulse bg-white" />
      </a>
    </section>
  );
}
