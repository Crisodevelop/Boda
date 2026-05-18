import Reveal from "./Reveal";

export default function NoKids() {
  return (
    <section className="bg-beige px-6 py-24 text-center">
      <Reveal className="mx-auto max-w-xl rounded-3xl border-2 border-coral/30 bg-white px-8 py-14 shadow-md">
        <svg
          viewBox="0 0 24 24"
          className="mx-auto h-12 w-12 stroke-coral-dark"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
        </svg>
        <h2 className="mt-6 font-script text-5xl text-coral-dark sm:text-6xl">
          Solo adultos
        </h2>
        <p className="mt-6 font-serif text-xl font-medium leading-relaxed text-ink sm:text-2xl">
          Con todo el cariño, hemos planeado una celebración para adultos.
          Agradecemos que esta sea una noche para disfrutar sin los pequeños.
          ¡Gracias por comprenderlo!
        </p>
      </Reveal>
    </section>
  );
}
