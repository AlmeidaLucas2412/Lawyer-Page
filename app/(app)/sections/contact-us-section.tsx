import { Button } from "@/components/ui/button";
import Image from "next/image";

export const ContactUsSection = () => {
  return (
    <section
      className="flex flex-col px-4 py-8 gap-y-4 items-center bg-foreground/90 lg:flex-row lg:justify-around lg:py-12"
      id="contact-us"
    >
      <div className="flex flex-col items-center">
        <span className="font-bold capitalize xl:text-lg text-emphasis md:text-2xl">
          Fale conosco
        </span>
        <h2 className="text-3xl font-bold capitalize text-background md:text-4xl">
          Entre em contato
        </h2>
      </div>
      <div className="flex flex-col items-center gap-y-1">
        <span className="text-background md:text-xl">
          Ficou com alguma dúvida?
        </span>
        <a
          href="https://wa.me/5511999999999?text=Olá,%20vim%20pelo%20site!"
          className="w-full"
        >
          <Button className="flex gap-x-2 w-full">
            <Image
              src="/whatsapp.svg"
              width={20}
              height={20}
              alt="facebook"
              className="object-cover p-1 size-8"
              style={{ filter: "invert(1)" }}
            />
            <span className="xs:text-xs m:text-sm">
              Mande uma mensagem no Whatsapp
            </span>
          </Button>
        </a>
      </div>
    </section>
  );
};
