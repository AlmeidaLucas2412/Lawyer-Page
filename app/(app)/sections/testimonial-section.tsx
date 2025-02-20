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
      <Heading introduction="Testimonial" title="Happy Clients" alignCenter />
      <Carousel className="p-2" opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate distinctio mollitia et fugiat libero minus sapiente illo."
              name="Roger Scott"
              role="Marketing Manager"
              image="/client_1.jpg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate distinctio mollitia et fugiat libero minus sapiente illo."
              name="John Doe"
              role="Senior Consultant"
              image="/client_2.jpg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate distinctio mollitia et fugiat libero minus sapiente illo."
              name="Tom Smith"
              role="Sales Manager"
              image="/client_3.jpg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate distinctio mollitia et fugiat libero minus sapiente illo."
              name="Roger Scott"
              role="Marketing Manager"
              image="/client_1.jpg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate distinctio mollitia et fugiat libero minus sapiente illo."
              name="John Doe"
              role="Senior Consultant"
              image="/client_2.jpg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <TestimonialCard
              feedback="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate distinctio mollitia et fugiat libero minus sapiente illo."
              name="Tom Smith"
              role="Sales Manager"
              image="/client_3.jpg"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex self-center gap-x-2">
        <Pointer className="stroke-current text-description/60" />
        <span className="font-semibold uppercase text-description/60">
          Swipe to see more
        </span>
      </div>
    </section>
  );
};
