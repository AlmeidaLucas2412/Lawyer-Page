import { Heading } from "@/components/heading";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { CalendarClock, Crosshair, Handshake } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section
      className="flex flex-col px-4 py-8 gap-y-4 xl:flex-row xl:items-center xl:gap-x-8 xl:px-44"
      id="services"
    >
      <div className="flex flex-col gap-y-4">
        <Heading
          introduction="Serviços"
          title="Por que nos escolher?"
          description="Excelência Jurídica. Compromisso, Experiência e Dedicação Exclusiva ao Seu Caso."
        />
        <Button className="text-base w-fit p-7">
          <a href="#appointment">Consulta gratuita</a>
        </Button>
      </div>
      <div className="flex flex-col p-6 mt-4 -mx-4 gap-y-8 bg-emphasis md:flex-row md:gap-x-2">
        <ServiceCard
          icon={Handshake}
          title="Luta por justiça"
          description="Nosso compromisso é lutar por justiça, defendendo seus direitos com dedicação e determinação total."
        />
        <ServiceCard
          icon={Crosshair}
          title="Melhor estratégia"
          description="Desenvolvemos a melhor estratégia para cada caso, utilizando nosso conhecimento e experiência para obter os melhores resultados."
        />
        <ServiceCard
          icon={CalendarClock}
          title="Experiência"
          description="Com anos de experiência na área jurídica, nossos advogados possuem a expertise necessária para lidar com casos complexos."
        />
      </div>
    </section>
  );
};
