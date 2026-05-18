import { wedding } from "@/lib/event";
import Reveal from "./Reveal";

function Icon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10 stroke-coral-dark"
      fill="none"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

export default function Details() {
  const items = [
    {
      title: "Ceremonia",
      icon: "M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z M9 11l2 2 4-4",
      lines: [wedding.venue.name],
    },
    {
      title: "Fecha",
      icon: "M7 3v3 M17 3v3 M4 8h16 M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
      lines: [wedding.dateLabel],
    },
    {
      title: "Hora",
      icon: "M12 7v5l3 2 M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
      lines: [wedding.timeLabel],
    },
  ];

  return (
    <section className="bg-beige-dark px-6 py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.3em] text-coral-dark sm:text-3xl">
          Detalles del evento
        </h2>
        <div className="divider mx-auto mt-6 w-full max-w-xs" />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
        {items.map((it, i) => (
          <Reveal
            key={it.title}
            delay={i * 120}
            className="flex flex-col items-center rounded-2xl border-2 border-coral/30 bg-white px-6 py-10 text-center shadow-md"
          >
            <Icon path={it.icon} />
            <h3 className="mt-4 font-serif text-3xl font-bold text-coral-dark">
              {it.title}
            </h3>
            {it.lines.map((l) => (
              <p
                key={l}
                className="mt-2 font-sans text-lg font-medium leading-snug text-ink"
              >
                {l}
              </p>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
