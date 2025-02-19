import { Heading } from "@/components/heading";
import { StudiesCard } from "@/components/studies-card";

export const StudiesSection = () => {
  return (
    <section className="flex flex-col px-4 py-8 gap-y-4">
      <Heading
        introduction="Explore case studies"
        title="1000+ completed cases successfully"
        alignCenter
      />
      <div className="flex flex-col gap-y-6">
        <StudiesCard
          image="/case-1.jpg"
          title="Legal Separation"
          description="Corporate"
        />
        <StudiesCard
          image="/case-2.jpg"
          title="Legal Separation"
          description="Corporate"
        />
        <StudiesCard
          image="/case-3.jpg"
          title="Legal Separation"
          description="Corporate"
        />
      </div>
    </section>
  );
};
