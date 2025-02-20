import Image from "next/image";

type Props = {
  feedback: string;
  name: string;
  role: string;
  image: string;
};

export const TestimonialCard = ({ feedback, name, role, image }: Props) => {
  return (
    <div className="flex flex-col p-2 border-b shadow-sm gap-y-4 lg:cursor-pointer lg:select-none">
      <p className="text-description">{feedback}</p>
      <div className="flex items-center gap-x-3">
        <Image
          src={image}
          alt={name}
          className="object-cover rounded-full size-16"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-y-1">
          <span className="text-xl font-semibold">{name}</span>
          <span className="text-sm font-semibold text-emphasis">{role}</span>
        </div>
      </div>
    </div>
  );
};
