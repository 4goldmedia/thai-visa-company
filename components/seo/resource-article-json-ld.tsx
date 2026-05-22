import { ArticleJsonLd } from "@/components/seo/article-json-ld"
import type { ResourceArticlePageProps } from "@/lib/content"

type ResourceArticleJsonLdProps = {
  article: ResourceArticlePageProps
}

function ResourceArticleJsonLd({ article }: ResourceArticleJsonLdProps) {
  return <ArticleJsonLd article={article} />
}

export { ResourceArticleJsonLd }
