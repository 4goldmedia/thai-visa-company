import { getBlogIndexArticlesSync } from "@/lib/blog"
import type { ResourceArticle } from "@/lib/resources/types"

/** Published blog articles for homepage preview and legacy resource helpers */
export const resourceArticles: ResourceArticle[] = getBlogIndexArticlesSync().map(
  (article) => ({
    slug: article.slug,
    categoryId: article.clusterId,
    category: article.category,
    title: article.title,
    description: article.description,
    path: article.path,
    readingTime: article.readingTime,
    status: article.status,
  }),
)
