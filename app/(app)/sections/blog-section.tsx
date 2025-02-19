import { BlogCard } from "@/components/blog-card";
import { Heading } from "@/components/heading";

export const BlogSection = () => {
  return (
    <section className="flex flex-col px-4 py-8 gap-y-6">
      <Heading introduction="Our Blog" title="Recent Blog" alignCenter />
      <div className="flex flex-col items-center gap-y-10 md:flex-row md:gap-x-2">
        <BlogCard
          title="All you want to know about industrial laws"
          image="/latest-case_1.jpg"
          day="19"
          month="February"
          year="2025"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
        <BlogCard
          title="All you want to know about industrial laws"
          image="/latest-case_2.jpg"
          day="18"
          month="February"
          year="2025"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
        <BlogCard
          title="All you want to know about industrial laws"
          image="/latest-case_3.jpg"
          day="17"
          month="February"
          year="2025"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
      </div>
    </section>
  );
};
