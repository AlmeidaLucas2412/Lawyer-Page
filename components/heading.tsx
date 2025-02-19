import { cn } from "@/lib/utils";

type Props = {
  introduction: string;
  title: string;
  description?: string;
  alignCenter?: boolean;
};

export const Heading = ({
  introduction,
  title,
  description,
  alignCenter,
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-4",
        alignCenter && "items-center text-center"
      )}
    >
      <div className="flex flex-col gap-y-1">
        <span className="font-bold capitalize text-emphasis xl:text-lg">
          {introduction}
        </span>
        <h2 className="text-3xl font-bold capitalize text-foreground xl:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-description xl:text-lg">{description}</p>
      )}
    </div>
  );
};
