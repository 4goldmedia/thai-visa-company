import type { VisaPageHeroContent } from "@/lib/visas/hero"
import type { VisaOverviewContent } from "@/components/sections/visa-overview"
import type { VisaRequirementsBlock } from "@/components/sections/visa-requirements"
import type {
  ContentFaqItem,
  ContentFaqSection,
  ContentIsoDate,
  ContentRelatedLink,
  ContentRelatedSection,
  ContentVisaBestForSection,
  ContentVisaDocumentChecklistSection,
  ContentVisaFinalCta,
  ContentVisaKeyFactsSection,
  ContentVisaComparisonSection,
  ContentVisaGettingStarted,
  ContentVisaLastReviewed,
  ContentVisaPageSeo,
  ContentVisaProcessStep,
  ContentVisaPath,
  ContentVisaQualificationPathway,
  ContentVisaRequirementsClarification,
  ContentVisaRequirementsDocumentsOverview,
} from "@/lib/content/types"
import type { VisaSectionId } from "@/lib/visas/layout"

export const visaSlugs = [
  "retirement",
  "dtv",
  "elite",
  "business",
  "education",
  "marriage",
  "tourist",
  "ltr",
] as const

export type VisaSlug = (typeof visaSlugs)[number]

/** @alias ContentVisaProcessStep */
export type VisaProcessStep = ContentVisaProcessStep

/** @alias ContentFaqItem  -  shared with MDX articles */
export type VisaFaqItem = ContentFaqItem

/** @alias ContentRelatedLink */
export type VisaRelatedResource = ContentRelatedLink

/** @alias ContentVisaPageSeo */
export type VisaPageSeo = ContentVisaPageSeo

export type VisaPageContent = {
  slug: VisaSlug
  path: `/visas/${VisaSlug}`
  published: boolean
  publishedAt: ContentIsoDate
  updatedAt?: ContentIsoDate
  lastReviewed?: ContentVisaLastReviewed
  layout?: ReadonlyArray<VisaSectionId>
  seo: VisaPageSeo
  hero: VisaPageHeroContent
  keyFacts?: ContentVisaKeyFactsSection
  gettingStarted?: ContentVisaGettingStarted
  bestFor?: ContentVisaBestForSection
  comparison?: ContentVisaComparisonSection
  checklist?: ContentVisaDocumentChecklistSection
  overview: {
    title?: string
    description?: string
    /** Lead paragraph shown directly under the section heading */
    intro?: string | ReadonlyArray<string>
    eyebrow?: string
    audience: VisaOverviewContent
    eligibility: VisaOverviewContent
    practicalOverview: VisaOverviewContent
  }
  requirements: {
    title?: string
    description?: string
    eyebrow?: string
    /** Pathway-first layout  -  when present, replaces legacy requirement cards */
    pathways?: ReadonlyArray<ContentVisaQualificationPathway>
    documentsOverview?: ContentVisaRequirementsDocumentsOverview
    clarification?: ContentVisaRequirementsClarification
    /** Legacy three-column layout */
    requirements?: VisaRequirementsBlock
    eligibility?: VisaRequirementsBlock
    documents?: VisaRequirementsBlock
    showRequirementsChangeCallout?: boolean
  }
  process: {
    title?: string
    description?: string
    eyebrow?: string
    steps: ReadonlyArray<VisaProcessStep>
  }
  faq: ContentFaqSection
  /** Optional manual related visa cards  -  merged with `relatedVisaSlugs` / defaults */
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
