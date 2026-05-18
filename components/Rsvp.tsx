import { whatsappLink } from "@/lib/event";
import Reveal from "./Reveal";

export default function Rsvp() {
  return (
    <section
      id="rsvp"
      className="bg-gradient-to-b from-coral-dark via-coral to-coral-light px-6 py-28 text-center text-white"
    >
      <Reveal className="mx-auto max-w-xl">
        <h2 className="font-script text-5xl drop-shadow-md sm:text-6xl">
          Confirma tu asistencia
        </h2>
        <p className="mt-6 font-serif text-xl font-medium leading-relaxed text-white sm:text-2xl">
          Tu compañía es nuestro mejor regalo. Por favor confirma tu asistencia
          para reservar tu lugar.
        </p>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex animate-soft-pulse items-center gap-3 rounded-full bg-white px-12 py-6 font-sans text-lg font-bold uppercase tracking-[0.12em] text-coral-dark shadow-2xl ring-4 ring-white/50 transition hover:bg-beige sm:text-xl"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
            <path d="M12.04 2a9.9 9.9 0 0 0-8.46 14.95L2 22l5.2-1.36A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.81.82-3.01-.2-.31a8.2 8.2 0 1 1 6.95 3.83zm4.5-6.13c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.16 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.11-.22-.17-.47-.29z" />
          </svg>
          Confirmar por WhatsApp
        </a>
        <p className="mt-5 font-sans text-sm font-medium text-white/85">
          Se abrirá WhatsApp con un mensaje listo para enviar.
        </p>
      </Reveal>
    </section>
  );
}
