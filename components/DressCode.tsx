import Reveal from "./Reveal";

export default function DressCode() {
  const swatches = [
    { name: "Coral", hex: "#E8806B" },
    { name: "Coral suave", hex: "#F2A088" },
    { name: "Beige", hex: "#EFE3D3" },
    { name: "Arena", hex: "#E3D2BC" },
  ];

  return (
    <section className="bg-beige-dark px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.3em] text-coral-dark sm:text-3xl">
          Código de vestimenta
        </h2>
        <div className="divider mx-auto mt-6 w-full max-w-xs" />
        <p className="mt-8 font-serif text-2xl font-semibold leading-relaxed text-ink sm:text-3xl">
          Vestimenta formal · Inspírate en nuestra paleta
        </p>
        <p className="mt-3 font-sans text-lg font-medium text-ink">
          Tonos coral y beige para acompañar la celebración.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {swatches.map((s) => (
            <div key={s.name} className="flex flex-col items-center">
              <span
                className="h-24 w-24 rounded-full border-4 border-white shadow-lg"
                style={{ backgroundColor: s.hex }}
              />
              <span className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-ink">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
