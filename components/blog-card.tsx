import Image from "next/image";
import { Button } from "./ui/button";

type Props = {
  title: string;
  image: string;
  day: string;
  month: string;
  year: string;
  description: string;
};

export const BlogCard = ({
  title,
  image,
  day,
  month,
  year,
  description,
}: Props) => {
  return (
    <div className="flex flex-col gap-y-6">
      <span className="self-center font-semibold transition-colors lg:hover:text-emphasis">
        {title}
      </span>
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-cover"
        />
        <div className="absolute bottom-0 flex px-3 py-2 left-4 bg-emphasis">
          <div className="flex items-center justify-center gap-x-2">
            <span className="text-3xl text-background">{day}</span>
            <div className="flex flex-col gap-y-1">
              <span className="text-sm text-background/70">{year}</span>
              <span className="text-sm text-background/70">{month}</span>
            </div>
          </div>
        </div>
        <div className="absolute b-0 left-6 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-emphasis" />
      </div>
      <p className="text-description">{description}</p>
      <Button className="w-fit">
        <span>Ler Mais</span>
      </Button>
    </div>
  );
};
