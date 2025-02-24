import { BlogCard } from "@/components/blog-card";
import { Heading } from "@/components/heading";

export const BlogSection = () => {
  return (
    <section className="flex flex-col px-4 py-8 gap-y-6 md:items-center">
      <Heading
        introduction="Nosso Blog"
        title="Notícias e artigos"
        alignCenter
      />
      <div className="flex flex-col items-center gap-y-10 md:flex-row md:gap-x-2">
        <BlogCard
          title="Tudo sobre leis industriais"
          image="/latest-case_1.jpg"
          day="19"
          month="Fevereiro"
          year="2025"
          description="Tendências legais emergentes"
        />
        <BlogCard
          title="Tudo sobre leis industriais"
          image="/latest-case_2.jpg"
          day="18"
          month="Fevereiro"
          year="2025"
          description="Guia completo para empresas"
        />
        <BlogCard
          title="Tudo sobre leis industriais"
          image="/latest-case_3.jpg"
          day="17"
          month="Fevereiro"
          year="2025"
          description="Direitos do trabalhador atualizados"
        />
      </div>
    </section>
  );
};
