import { AppointmentSection } from "./appointment-section";
import { Hero } from "./hero";
import { ServicesSection } from "./services-section";
import { StudiesSection } from "./studies-section";
import { WelcomeSection } from "./welcome-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WelcomeSection />
      <StudiesSection />
      <AppointmentSection />
    </>
  );
}
