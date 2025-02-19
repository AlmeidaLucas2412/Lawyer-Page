import { Heading } from "@/components/heading";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { CalendarClock, Crosshair, Handshake } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section className="flex flex-col px-4 py-8 gap-y-4 xl:flex-row xl:items-center xl:gap-x-8 xl:px-44">
      <div className="flex flex-col gap-y-4">
        <Heading
          introduction="Services"
          title="Why select us?"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate distinctio mollitia et fugiat libero minus sapiente illo?"
        />
        <Button className="text-base w-fit p-7">
          <span>Free Consultation</span>
        </Button>
      </div>
      <div className="flex flex-col p-6 mt-4 -mx-4 gap-y-8 bg-emphasis md:flex-row md:gap-x-2">
        <ServiceCard
          icon={Handshake}
          title="Fight for Justice"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate distinctio mollitia et fugiat libero minus sapiente illo?"
        />
        <ServiceCard
          icon={Crosshair}
          title="Best Case Strategy"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate distinctio mollitia et fugiat libero minus sapiente illo?"
        />
        <ServiceCard
          icon={CalendarClock}
          title="Experienced Attorney"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate distinctio mollitia et fugiat libero minus sapiente illo?"
        />
      </div>
    </section>
  );
};
