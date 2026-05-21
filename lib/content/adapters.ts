import type { ResourceArticleMeta } from "@/lib/content/articles/resources"
import type { ResourceArticle } from "@/lib/resources/types"

/** Resources index card */
export function resourceMetaToIndexCard(meta: ResourceArticleMeta): ResourceArticle {
  return {
    slug: meta.slug,
    categoryId: meta.index.categoryId,
    category: meta.index.categoryLabel,
    title: meta.title,
    description: meta.description,
    path: meta.path,
    readingTime: meta.readingTime,
  }
}
