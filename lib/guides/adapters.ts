import type { GuideArticleMeta } from "@/lib/content/collections/guides"
import type { GuidePostCard } from "@/lib/guides/types"

export function guideMetaToIndexCard(meta: GuideArticleMeta): GuidePostCard {
  return {
    slug: meta.slug,
    categoryId: meta.index.categoryId,
    category: meta.index.categoryLabel,
    title: meta.title,
    description: meta.description,
    path: meta.path,
    readingTime: meta.readingTime,
    publishedAt: meta.publishedAt,
    updatedAt: meta.updatedAt,
    topicId: meta.topicId,
    status: "published",
    featured: meta.featured,
  }
}
