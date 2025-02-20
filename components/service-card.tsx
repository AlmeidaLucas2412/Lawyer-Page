import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const ServiceCard = ({ icon: Icon, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center px-2 py-8 text-center rounded-sm bg-background gap-y-4 md:w-1/3">
      <Icon className="stroke-current size-8 text-emphasis" />
      <span className="text-xl font-semibold text-foreground">{title}</span>
      <p className="text-description">{description}</p>
    </div>
  );
};
