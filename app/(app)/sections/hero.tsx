import { Typewritter } from "@/components/typewritter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      className="flex flex-col justify-center h-screen relative"
      style={{
        backgroundImage: "url('/hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-10">{""}</div>
      <div className="flex flex-col gap-y-4 z-20 px-4">
        <span className="uppercase text-emphasis font-bold">
          Welcome to legalcare
        </span>
        <h1 className="text-4xl font-bold text-background capitalize">
          Attorneys fighting for your
          <Typewritter textToShow="Freedom." />
        </h1>
        <span className="text-neutral-50/70">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          cupiditate distinctio mollitia et fugiat libero minus sapiente illo?
        </span>
        <Button className="flex gap-x-2 w-fit capitalize p-5">
          <span>Get legal advice</span>
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
};
