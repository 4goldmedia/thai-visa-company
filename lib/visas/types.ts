import type { VisaHeroProps } from "@/components/sections/visa-hero"
import type { VisaOverviewContent } from "@/components/sections/visa-overview"
import type { VisaRequirementsBlock } from "@/components/sections/visa-requirements"
import type {
  ContentFaqItem,
  ContentFaqSection,
  ContentRelatedLink,
  ContentRelatedSection,
  ContentVisaFinalCta,
  ContentVisaPageSeo,
  ContentVisaProcessStep,
  ContentVisaPath,
} from "@/lib/content/types"

export const visaSlugs = [
  "retirement",
  "dtv",
  "elite",
  "business",
  "education",
] as const

export type VisaSlug = (typeof visaSlugs)[number]

/** @alias ContentVisaProcessStep */
export type VisaProcessStep = ContentVisaProcessStep

/** @alias ContentFaqItem — shared with MDX articles */
export type VisaFaqItem = ContentFaqItem

/** @alias ContentRelatedLink */
export type VisaRelatedResource = ContentRelatedLink

/** @alias ContentVisaPageSeo */
export type VisaPageSeo = ContentVisaPageSeo

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
  faq: ContentFaqSection
  /** Optional manual related visa cards — merged with `relatedVisaSlugs` / defaults */
  relatedVisas?: ContentRelatedSection
  /** Registry slugs for automatic related visa suggestions */
  relatedVisaSlugs?: ReadonlyArray<VisaSlug>
  relatedResources: ContentRelatedSection
  finalCta: ContentVisaFinalCta
}

/** Narrow visa path for a known slug */
export function visaPath(slug: VisaSlug): ContentVisaPath {
  return `/visas/${slug}`
}
