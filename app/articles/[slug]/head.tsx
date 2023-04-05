import DefaultTags from "@/app/DefaultTags";
import { Article } from "@/app/types";

const getArticle = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data as Article;
};

export default async function Head({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  return (
    <>
      <title>{article?.title}</title>
      <meta name="description" content={article?.content} />
      <DefaultTags />
    </>
  );
}
