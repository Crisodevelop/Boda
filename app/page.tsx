import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Details from "@/components/Details";
import Location from "@/components/Location";
import DressCode from "@/components/DressCode";
import NoKids from "@/components/NoKids";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Details />
      <Location />
      <DressCode />
      <NoKids />
      <Rsvp />
      <Footer />
    </main>
  );
}
