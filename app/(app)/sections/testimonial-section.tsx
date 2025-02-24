import { Heading } from "@/components/heading";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Pointer } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section
      className="flex flex-col px-4 py-8 gap-y-6 xl:px-44"
      id="testimonial"
    >
      <Heading
        introduction="Feedbacks"
        title="Clientes Satitsfeitos"
        alignCenter
      />
      <Carousel className="p-2" opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Apoio e orientação excepcionais. Minha confiança foi plenamente justificada."
              name="João Silva"
              role="Engenheiro"
              image="/client_1.jpg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Apoio e orientação excepcionais. Minha confiança foi plenamente justificada."
              name="Pedro Santos"
              role="Médico"
              image="/client_2.jpg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Apoio e orientação excepcionais. Minha confiança foi plenamente justificada."
              name="Lucas Ferreira"
              role="Professor"
              image="/client_3.jpg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Apoio e orientação excepcionais. Minha confiança foi plenamente justificada."
              name="Gabriel Costa"
              role="Arquiteto"
              image="/client_1.jpg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Apoio e orientação excepcionais. Minha confiança foi plenamente justificada."
              name="Rodrigo Almeida"
              role="Contador"
              image="/client_2.jpg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Apoio e orientação excepcionais. Minha confiança foi plenamente justificada."
              name="Rafael Pereira"
              role="Psicólogo"
              image="/client_3.jpg"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex self-center gap-x-2">
        <Pointer className="stroke-current text-description/60" />
        <span className="font-semibold uppercase text-description/60">
          Deslize para ver mais
        </span>
      </div>
    </section>
  );
};
