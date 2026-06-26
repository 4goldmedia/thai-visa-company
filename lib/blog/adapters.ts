import type { BlogArticleMeta } from "@/lib/content/collections/blog"
import type { BlogPostCard } from "@/lib/blog/types"
import type { ContentRelatedLink } from "@/lib/content/types"

export function blogMetaToIndexCard(meta: BlogArticleMeta): BlogPostCard {
  return {
    slug: meta.slug,
    clusterId: meta.index.clusterId,
    category: meta.index.clusterLabel,
    title: meta.title,
    description: meta.description,
    path: meta.path,
    readingTime: meta.readingTime,
    publishedAt: meta.publishedAt,
    updatedAt: meta.updatedAt,
    topicId: meta.topicId,
    status: "published",
    featured: meta.featured,
    heroImage: meta.heroImage,
  }
}

export function blogMetaToRelatedLink(meta: BlogArticleMeta): ContentRelatedLink {
  const card = blogMetaToIndexCard(meta)

  return {
    category: card.category,
    title: card.title,
    description: card.description,
    href: card.path,
    image: meta.heroImage,
    publishedAt: meta.publishedAt,
    readingTime: meta.readingTime,
    authorName: meta.author?.name,
  }
}
