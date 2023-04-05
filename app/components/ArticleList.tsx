import ArticleCard from "./ArticleCard";
import { VStack } from "@/app/common/components";
import { Article } from "@/app/types";

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <VStack spacing={4} as="ul">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </VStack>
  );
}
