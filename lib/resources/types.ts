export const resourceCategoryIds = [
  "visa-guides",
  "process",
  "comparisons",
] as const

export type ResourceCategoryId = (typeof resourceCategoryIds)[number]

export type ResourceCategory = {
  id: ResourceCategoryId
  label: string
  description?: string
  /** When true, UI shows a calm placeholder instead of an empty grid */
  placeholder?: boolean
}

export type ResourceArticleStatus = "published" | "planned"

export type ResourceArticle = {
  slug: string
  categoryId: ResourceCategoryId
  /** Display label on cards, e.g. Retirement */
  category: string
  title: string
  description: string
  path: `/resources/${string}`
  readingTime?: string
  /** Planned stubs are visible on the index but not linked until MDX ships */
  status?: ResourceArticleStatus
}

import type { ContentSeo } from "@/lib/content/types"

/** @alias ContentSeo — resources index metadata */
export type ResourceIndexSeo = Pick<
  ContentSeo,
  "title" | "description" | "keywords"
>

export type ResourcesIndexContent = {
  seo: ResourceIndexSeo
  hero: {
    eyebrow?: string
    title: string
    overview: string
  }
}
