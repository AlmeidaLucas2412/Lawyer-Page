import { AppointmentSection } from "./sections/appointment-section";
import { ContactUsSection } from "./sections/contact-us-section";
import { Hero } from "./sections/hero";
import { ServicesSection } from "./sections/services-section";
import { StudiesSection } from "./sections/studies-section";
import { TestimonialSection } from "./sections/testimonial-section";
import { WelcomeSection } from "./sections/welcome-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WelcomeSection />
      <StudiesSection />
      <AppointmentSection />
      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
