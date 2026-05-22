import type { ResourceArticleMeta } from "@/lib/content/collections/resources"
import type { ResourceArticle } from "@/lib/resources/types"

/** Resources index card from collection meta */
export function resourceMetaToIndexCard(meta: ResourceArticleMeta): ResourceArticle {
  return {
    slug: meta.slug,
    categoryId: meta.index.categoryId,
    category: meta.index.categoryLabel,
    title: meta.title,
    description: meta.description,
    path: meta.path,
    readingTime: meta.readingTime,
    status: "published",
  }
}
