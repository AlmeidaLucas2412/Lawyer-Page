"use client";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export const WelcomeSection = () => {
  const [text, setText] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const handleText = (textToShow: string, button: string) => {
    setText(textToShow);
    setActiveButton(button);
  };

  return (
    <section className="flex flex-col px-4 py-8 gap-y-8 md:flex-row md:items-start xl:px-44 xl:items-center">
      <Image
        src="/welcome.jpg"
        width={500}
        height={500}
        alt="Attorney"
        className="self-center md:h-[500px] md:object-cover md:w-1/3"
      />
      <div className="flex flex-col gap-y-2 md:p-8 md:text-center md:flex-1">
        <Heading
          introduction="Welcome to legalcare"
          title="We always fight for your justice to win"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
        <Button
          onClick={() =>
            handleText(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id itaque amet expedita sapiente autem. Tempore voluptas assumenda nesciunt consectetur perferendis.",
              "mission"
            )
          }
          variant={activeButton === "mission" ? "default" : "ghost"}
          className="p-6"
        >
          <span className="text-base font-semibold">Our Mission</span>
        </Button>
        <Button
          onClick={() =>
            handleText(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id itaque amet expedita sapiente autem.",
              "vision"
            )
          }
          variant={activeButton === "vision" ? "default" : "ghost"}
          className="p-6"
        >
          <span className="text-base font-semibold">Our Vision</span>
        </Button>
        <Button
          onClick={() =>
            handleText(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              "values"
            )
          }
          variant={activeButton === "values" ? "default" : "ghost"}
          className="p-6"
        >
          <span className="text-base font-semibold">Our values</span>
        </Button>
        <p className="xl:h-20 text-description">{text}</p>
        <div className="p-4 bg-emphasis md:hidden">
          <span className="text-xl text-background">
            40 Years of Experience
          </span>
        </div>
      </div>
    </section>
  );
};
