import type { ContentTopicId } from "@/lib/content/topics"
import type { VisaSlug } from "@/lib/visas/types"

/** Where FAQ content originated — for future /faq aggregation */
export type FaqSourceType = "article" | "guide" | "visa" | "standalone"

export type FaqSource = {
  type: FaqSourceType
  /** Canonical path of the source page */
  path: string
  title: string
  topicId?: ContentTopicId
  visaSlug?: VisaSlug
}

export type FaqRecord = {
  id: string
  question: string
  answer: string
  source: FaqSource
  updatedAt?: string
}

export type FaqHubTopicSlug = ContentTopicId | "thailand-immigration"

export type FaqHubConfig = {
  slug: FaqHubTopicSlug
  title: string
  description: string
  /** Future route — not exposed in nav yet */
  path: `/faq/topic/${string}`
}
