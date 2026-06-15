import type { ContentTopicId } from "@/lib/content/topics"
import type { VisaSlug } from "@/lib/visas/types"

export const guideCategoryIds = [
  "visa-requirements",
  "visa-comparisons",
  "thailand-living",
] as const

export type GuideCategoryId = (typeof guideCategoryIds)[number]

export type GuideCategory = {
  id: GuideCategoryId
  label: string
  description: string
  placeholder?: boolean
}

export const guideTopicHubSlugs = [
  "dtv",
  "retirement",
  "business",
  "education",
  "thailand-immigration",
] as const

export type GuideTopicHubSlug = (typeof guideTopicHubSlugs)[number]

export type GuideTopicHub = {
  slug: GuideTopicHubSlug
  title: string
  description: string
  topicId: ContentTopicId
  pillarSlug?: VisaSlug
  path: `/guides/topic/${GuideTopicHubSlug}`
}

export type GuidePostStatus = "published" | "planned"

export type GuidePostCard = {
  slug: string
  title: string
  description: string
  path: `/guides/${string}`
  categoryId: GuideCategoryId
  category: string
  topicId?: ContentTopicId
  readingTime?: string
  publishedAt: string
  updatedAt?: string
  status?: GuidePostStatus
  featured?: boolean
}

export type GuidesIndexContent = {
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

export function isGuideCategoryId(value: string): value is GuideCategoryId {
  return (guideCategoryIds as readonly string[]).includes(value)
}

export function isGuideTopicHubSlug(value: string): value is GuideTopicHubSlug {
  return (guideTopicHubSlugs as readonly string[]).includes(value)
}

export function guideCategoryPath(id: GuideCategoryId): `/guides/category/${GuideCategoryId}` {
  return `/guides/category/${id}`
}

export function guideTopicHubPath(slug: GuideTopicHubSlug): `/guides/topic/${GuideTopicHubSlug}` {
  return `/guides/topic/${slug}`
}
