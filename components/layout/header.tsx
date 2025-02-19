"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "bg-black/90 lg:w-full transition-colors duration-1000 ease-in-out",
        isSticky && "sticky top-0 z-50 bg-background"
      )}
    >
      <nav className="flex flex-col px-4 py-2 text-sm xl:flex-row xl:justify-between xl:py-4">
        <div className="flex items-center justify-between xl:justify-normal">
          <div className="flex flex-col">
            <h1
              className={cn(
                "text-xl font-bold tracking-wide uppercase text-background",
                isSticky && "text-foreground"
              )}
            >
              Legalcare
            </h1>
            <span
              className={cn(
                "text-xs uppercase text-background",
                isSticky && "text-foreground"
              )}
            >
              A law firm agency
            </span>
          </div>
          <button className="p-2 xl:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="size-6" stroke={isSticky ? "black" : "white"} />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } xl:flex xl:items-center xl:px-2`}
        >
          <ul
            className={cn(
              "flex flex-col gap-4 px-0 py-2 font-light text-background xl:gap-8 xl:flex-row",
              isSticky && "text-foreground"
            )}
          >
            <li className="text-emphasis">
              <a href="#">Home</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#concepts">Services</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#pricing">About us</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#premium">Case Studies</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#premium">Appointment</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#premium">Last Cases</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#premium">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
