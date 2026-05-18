import { wedding } from "@/lib/event";
import Reveal from "./Reveal";

export default function Location() {
  return (
    <section className="bg-beige px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.3em] text-coral-dark sm:text-3xl">
          Ubicación
        </h2>
        <div className="divider mx-auto mt-6 w-full max-w-xs" />

        <div className="mt-12 rounded-3xl border-2 border-coral/30 bg-white px-8 py-12 shadow-md">
          <h3 className="font-serif text-3xl font-bold text-coral-dark sm:text-4xl">
            {wedding.venue.name}
          </h3>
          <a
            href={wedding.venue.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-sans text-lg font-semibold text-coral-dark underline underline-offset-4"
          >
            @{wedding.venue.instagram}
          </a>

          <div className="mt-8">
            <a
              href={wedding.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-10 py-4 font-sans text-base font-semibold uppercase tracking-[0.15em] text-white shadow-md transition hover:bg-coral-dark"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
              Cómo llegar
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
