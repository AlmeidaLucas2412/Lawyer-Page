import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col px-4 py-8 gap-y-8 bg-foreground">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-3xl font-bold uppercase text-background">
          Legalcare
        </h2>
        <span className="-mt-6 font-bold uppercase text-emphasis">
          A law firm agency
        </span>
        <p className="text-neutral-50/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          velit doloremque blanditiis maxime alias saepe ad repellendus unde aut
          iste!
        </p>
      </div>
      <div className="flex gap-x-2">
        <div className="flex items-center justify-center rounded-full size-12 bg-background/20">
          <a href="#">
            <Image
              src="/twitter.svg"
              width={20}
              height={20}
              alt="twitter"
              className="object-cover p-1 size-8"
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
        <div className="flex items-center justify-center rounded-full size-12 bg-background/20">
          <a href="#">
            <Image
              src="/facebook.svg"
              width={20}
              height={20}
              alt="facebook"
              className="object-cover p-1 size-8"
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
        <div className="flex items-center justify-center rounded-full size-12 bg-background/20">
          <a href="#">
            <Image
              src="/instagram.svg"
              width={20}
              height={20}
              alt="instagram"
              className="object-cover p-1 size-8"
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
      </div>
      <ul className="flex flex-col gap-y-4 text-background">
        <span className="text-xl font-semibold">Practice Areas</span>
        <li className="flex items-center gap-x-2 lg:hover:text-emphasis">
          <ChevronRight className="size-4" />
          <a href="#" className="lg:hover:text-emphasis">
            Family Law
          </a>
        </li>
        <li className="flex items-center transition-colors duration-500 gap-x-2 lg:hover:text-emphasis">
          <ChevronRight className="size-4" />
          <a href="#">Business Law</a>
        </li>
        <li className="flex items-center transition-colors duration-500 gap-x-2 lg:hover:text-emphasis">
          <ChevronRight className="size-4" />
          <a href="#">Insurance Law</a>
        </li>
        <li className="flex items-center transition-colors duration-500 gap-x-2 lg:hover:text-emphasis">
          <ChevronRight className="size-4" />
          <a href="#">Criminal Law</a>
        </li>
        <li className="flex items-center transition-colors duration-500 gap-x-2 lg:hover:text-emphasis">
          <ChevronRight className="size-4" />
          <a href="#">Property Law</a>
        </li>
        <li className="flex items-center transition-colors duration-500 gap-x-2 lg:hover:text-emphasis">
          <ChevronRight className="size-4" />
          <a href="#">Fire Accident</a>
        </li>
      </ul>
      <div className="flex flex-col gap-y-4 text-background">
        <span className="text-xl font-semibold">Have a Question?</span>
        <div className="flex items-center gap-x-2">
          <MapPin className="size-5" />
          <span className="text-sm">123 Main Street, Anytown, USA</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Phone className="size-5" />
          <span className="text-sm">+1-123-456-7890</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Mail className="size-5" />
          <span className="text-sm">3b5tO@example.com</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <span className="text-xl font-semibold text-background">
          Business Hours
        </span>
        <div className="flex flex-col gap-y-2">
          <span className="text-sm text-emphasis">Opening Days:</span>
          <span className="text-sm text-background">
            Monday - Friday: 9am - 8pm
          </span>
          <span className="text-sm text-background">Saturday: 9am - 5pm</span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="text-sm text-emphasis">Vacations:</span>
          <span className="text-sm text-background">
            All sunday days and all official holidays
          </span>
        </div>
      </div>
    </footer>
  );
};
