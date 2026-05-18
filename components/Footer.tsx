import { wedding } from "@/lib/event";

export default function Footer() {
  return (
    <footer className="bg-coral-dark px-6 py-16 text-center text-white">
      <p className="font-serif text-lg font-medium italic leading-relaxed text-white sm:text-xl">
        {wedding.verse}
      </p>
      <div className="mx-auto my-8 h-px w-24 bg-white/50" />
      <p className="font-script text-5xl drop-shadow-md">
        {wedding.brideAndGroom.groom} & {wedding.brideAndGroom.bride}
      </p>
      <p className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.25em] text-white/85">
        Con amor · {wedding.dateLabel}
      </p>
    </footer>
  );
}
