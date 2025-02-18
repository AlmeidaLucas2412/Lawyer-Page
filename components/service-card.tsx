import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const ServiceCard = ({ icon: Icon, title, description }: Props) => {
  return (
    <div className="bg-background flex flex-col px-2 py-8 rounded-sm gap-y-4 items-center text-center">
      <Icon className="size-8 stroke-current text-emphasis" />
      <span className="text-foreground text-xl font-semibold">{title}</span>
      <p className="text-description">{description}</p>
    </div>
  );
};
