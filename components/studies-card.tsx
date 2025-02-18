import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

export const StudiesCard = ({ image, title, description }: Props) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Image
        src={image}
        width={500}
        height={500}
        alt="Attorney"
        className="object-cover w-full  h-80"
      />
      <div className="absolute flex flex-col w-[calc(100%-2rem)] h-[calc(100%-2rem)] bg-emphasis/70 text-background items-center justify-center">
        <span className="text-2xl">{title}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};
