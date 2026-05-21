import type { VisaHeroProps } from "@/components/sections/visa-hero"
import type { VisaOverviewContent } from "@/components/sections/visa-overview"
import type { VisaRequirementsBlock } from "@/components/sections/visa-requirements"

export const visaSlugs = [
  "retirement",
  "dtv",
  "elite",
  "business",
  "education",
] as const

export type VisaSlug = (typeof visaSlugs)[number]

export type VisaProcessStep = {
  step: number
  title: string
  description: string
}

export type VisaFaqItem = {
  value: string
  question: string
  answer: string
}

export type VisaRelatedResource = {
  category: string
  title: string
  description: string
  href: string
}

export type VisaPageSeo = {
  /** Metadata title segment — uses root title template */
  title: string
  description: string
  keywords?: string[]
}

export type VisaPageContent = {
  slug: VisaSlug
  path: `/visas/${VisaSlug}`
  seo: VisaPageSeo
  hero: Pick<
    VisaHeroProps,
    "title" | "overview" | "eyebrow" | "trustItems" | "reviewProof"
  >
  overview: {
    title?: string
    description?: string
    eyebrow?: string
    audience: VisaOverviewContent
    eligibility: VisaOverviewContent
    practicalOverview: VisaOverviewContent
  }
  requirements: {
    title?: string
    description?: string
    eyebrow?: string
    requirements: VisaRequirementsBlock
    eligibility: VisaRequirementsBlock
    documents: VisaRequirementsBlock
  }
  process: {
    title?: string
    description?: string
    eyebrow?: string
    steps: ReadonlyArray<VisaProcessStep>
  }
  faq: {
    title?: string
    description?: string
    eyebrow?: string
    items: ReadonlyArray<VisaFaqItem>
  }
  relatedResources: {
    title?: string
    description?: string
    eyebrow?: string
    items: ReadonlyArray<VisaRelatedResource>
    indexHref?: string
  }
  finalCta: {
    title: string
    description: string
    eyebrow?: string
    footnote?: string
  }
}
