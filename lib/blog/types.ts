import type { ContentTopicId } from "@/lib/content/topics"
import type { VisaSlug } from "@/lib/visas/types"

/** Content clusters  -  aligned with `rules/content/content-clusters.mdc` */
export const blogClusterIds = [
  "dtv",
  "retirement",
  "business",
  "education",
  "elite",
  "immigration-procedures",
  "living-in-thailand",
] as const

export type BlogClusterId = (typeof blogClusterIds)[number]

export type BlogCluster = {
  id: BlogClusterId
  label: string
  description: string
  /** Optional pillar guide or visa path for cluster hub linking */
  pillarHref?: string
}

export type BlogPostStatus = "published" | "planned"

export type BlogPostCard = {
  slug: string
  title: string
  description: string
  path: `/blog/${string}`
  clusterId: BlogClusterId
  /** Cluster label shown on cards (e.g. DTV Visa) */
  category: string
  topicId?: ContentTopicId
  pillarSlug?: VisaSlug
  readingTime?: string
  publishedAt: string
  updatedAt?: string
  status?: BlogPostStatus
  featured?: boolean
  heroImage?: string
}

export type BlogIndexContent = {
  seo: {
    title: string
    description: string
    keywords: ReadonlyArray<string>
  }
  hero: {
    eyebrow: string
    title: string
    overview: string
  }
}

export type BlogPostSort = "recent" | "updated"

export function isBlogClusterId(value: string): value is BlogClusterId {
  return (blogClusterIds as readonly string[]).includes(value)
}

export function blogClusterPath(id: BlogClusterId): `/blog/cluster/${BlogClusterId}` {
  return `/blog/cluster/${id}`
}

/** @deprecated Use `blogClusterPath` */
export function blogCategoryPath(id: BlogClusterId): `/blog/cluster/${BlogClusterId}` {
  return blogClusterPath(id)
}

/** @deprecated Use `isBlogClusterId` */
export function isBlogCategoryId(value: string): value is BlogClusterId {
  return isBlogClusterId(value)
}
