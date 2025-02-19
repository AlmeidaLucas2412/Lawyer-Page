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
    <section className="flex flex-col px-4 py-8 gap-y-4">
      <Heading
        introduction="Explore case studies"
        title="1000+ completed cases successfully"
        alignCenter
      />
      <div className="flex flex-col gap-y-6 md:hidden">
        <StudiesCard
          image="/case-3.jpg"
          title="Legal Separation"
          description="Corporate"
        />
        <StudiesCard
          image="/case-2.jpg"
          title="Legal Separation"
          description="Corporate"
        />
        <StudiesCard
          image="/case-3.jpg"
          title="Legal Separation"
          description="Corporate"
        />
      </div>
      <Carousel
        opts={{ loop: true }}
        className="hidden md:flex md:flex-col md:px-20 md:gap-y-2"
      >
        <CarouselContent>
          <CarouselItem>
            <StudiesCard
              image="/case-3.jpg"
              title="Legal Separation"
              description="Corporate"
            />
          </CarouselItem>
          <CarouselItem>
            <StudiesCard
              image="/case-2.jpg"
              title="Legal Separation"
              description="Corporate"
            />
          </CarouselItem>
          <CarouselItem>
            <StudiesCard
              image="/case-3.jpg"
              title="Legal Separation"
              description="Corporate"
            />
          </CarouselItem>
        </CarouselContent>
        <div className="hidden md:flex md:self-center md:gap-x-2">
          <Pointer className="stroke-current text-description/60" />
          <span className="font-semibold uppercase text-description/60">
            Swipe to see more
          </span>
        </div>
      </Carousel>
    </section>
  );
};
