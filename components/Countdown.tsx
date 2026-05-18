"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/lib/event";

function diff(target: number) {
  const total = Math.max(0, target - Date.now());
  return {
    dias: Math.floor(total / 86_400_000),
    horas: Math.floor((total / 3_600_000) % 24),
    min: Math.floor((total / 60_000) % 60),
    seg: Math.floor((total / 1000) % 60),
  };
}

export default function Countdown() {
  const target = wedding.date.getTime();
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells: [string, number][] = [
    ["Días", t?.dias ?? 0],
    ["Horas", t?.horas ?? 0],
    ["Min", t?.min ?? 0],
    ["Seg", t?.seg ?? 0],
  ];

  return (
    <section id="cuenta" className="bg-beige px-6 py-24 text-center">
      <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.3em] text-coral-dark sm:text-3xl">
        Falta poco
      </h2>
      <div className="divider mx-auto mt-6 w-full max-w-xs" />
      <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-3 sm:gap-6">
        {cells.map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border-2 border-coral/40 bg-white px-2 py-7 shadow-md"
          >
            <div className="font-serif text-4xl font-bold text-coral-dark sm:text-6xl">
              {String(value).padStart(2, "0")}
            </div>
            <div className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink sm:text-sm">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
