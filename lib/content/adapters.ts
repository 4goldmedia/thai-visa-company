import { blogMetaToIndexCard } from "@/lib/blog/adapters"
import { guideMetaToIndexCard } from "@/lib/guides/adapters"
import type { BlogArticleMeta } from "@/lib/content/collections/blog"
import type { BlogPostCard } from "@/lib/blog/types"
import type { ResourceArticleMeta } from "@/lib/content/collections/resources"
import type { ResourceArticle } from "@/lib/resources/types"

/** @deprecated Resources collection — use `blogMetaToIndexCard` */
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

export { blogMetaToIndexCard, guideMetaToIndexCard }

export function blogMetaToCard(meta: BlogArticleMeta): BlogPostCard {
  return blogMetaToIndexCard(meta)
}
