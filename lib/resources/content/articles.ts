import { getGuideIndexArticlesSync } from "@/lib/guides"
import type { ResourceArticle } from "@/lib/resources/types"

/** @deprecated Use `getGuideIndexArticlesSync` — kept for homepage preview compatibility */
export const resourceArticles: ResourceArticle[] = getGuideIndexArticlesSync().map(
  (article) => ({
    slug: article.slug,
    categoryId: article.categoryId,
    category: article.category,
    title: article.title,
    description: article.description,
    path: article.path,
    readingTime: article.readingTime,
    status: article.status,
  }),
)
