"use client";

import { Typewritter } from "@/components/typewritter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      className="relative flex flex-col justify-center h-screen"
      style={{
        backgroundImage: "url('/hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-10 bg-black/40">{""}</div>
      <motion.div
        className="z-20 flex flex-col px-4 gap-y-4 md:w-1/2 xl:w-1/3 xl:ml-[20%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="font-bold uppercase text-emphasis xl:text-lg">
          Welcome to legalcare
        </span>
        <h1 className="text-4xl font-bold capitalize text-background xl:text-6xl">
          Attorneys fighting for your
          <Typewritter textToShow="Freedom." />
        </h1>
        <span className="text-neutral-50/70 xl:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          cupiditate distinctio mollitia et fugiat libero minus sapiente illo?
        </span>
        <Button className="flex p-5 capitalize gap-x-2 w-fit xl:p-6">
          <span className="xl:text-lg">Get legal advice</span>
          <ChevronRight />
        </Button>
      </motion.div>
    </section>
  );
};
