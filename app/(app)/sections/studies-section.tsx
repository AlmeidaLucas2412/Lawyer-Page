import { Heading } from "@/components/heading";
import { StudiesCard } from "@/components/studies-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Pointer } from "lucide-react";

export const StudiesSection = () => {
  return (
    <section className="flex flex-col px-4 py-8 gap-y-4" id="studies">
      <Heading
        introduction="Estudos de caso"
        title="1000+ Casos resolvidos com sucesso"
        alignCenter
      />
      <div className="flex flex-col gap-y-6 md:hidden">
        <StudiesCard
          image="/case-3.jpg"
          title="Separação Legal"
          description="Processos justos e equlibrados"
        />
        <StudiesCard
          image="/case-2.jpg"
          title="Direito Corporativo"
          description="Consultoria para sua empresa"
        />
        <StudiesCard
          image="/case-3.jpg"
          title="Direito Trabalhista"
          description="Proteção trabalhista"
        />
      </div>
      <Carousel
        opts={{ loop: true }}
        className="hidden md:flex md:flex-col md:px-20 md:gap-y-2 lg:px-44 xl:self-center xxl:px-72"
      >
        <CarouselContent>
          <CarouselItem className="xl:basis-1/2">
            <StudiesCard
              image="/case-3.jpg"
              title="Separação Legal"
              description="Processos justos e equlibrados"
            />
          </CarouselItem>
          <CarouselItem className="xl:basis-1/2">
            <StudiesCard
              image="/case-2.jpg"
              title="Direito Corporativo"
              description="Consultoria para sua empresa"
            />
          </CarouselItem>
          <CarouselItem className="xl:basis-1/2">
            <StudiesCard
              image="/case-3.jpg"
              title="Direito Trabalhista"
              description="Proteção dos direitos trabalhistas"
            />
          </CarouselItem>
          <CarouselItem className="xl:basis-1/2">
            <StudiesCard
              image="/case-2.jpg"
              title="Direito Imobiliário"
              description="Proteção e segurança em transações imobiliárias"
            />
          </CarouselItem>
        </CarouselContent>
        <div className="hidden md:flex md:self-center md:gap-x-2">
          <Pointer className="stroke-current text-description/60" />
          <span className="font-semibold uppercase text-description/60">
            Deslize para ver mais
          </span>
        </div>
      </Carousel>
    </section>
  );
};
