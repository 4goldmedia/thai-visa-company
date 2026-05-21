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

export type ResourceArticle = {
  slug: string
  categoryId: ResourceCategoryId
  /** Display label on cards, e.g. Retirement */
  category: string
  title: string
  description: string
  path: `/resources/${string}`
  readingTime?: string
}

export type ResourceIndexSeo = {
  title: string
  description: string
  keywords?: string[]
}

export type ResourcesIndexContent = {
  seo: ResourceIndexSeo
  hero: {
    eyebrow?: string
    title: string
    overview: string
  }
}
