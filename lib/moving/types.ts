import type { BlogPostCard } from "@/lib/blog/types"
import type { ContentFaqItem } from "@/lib/content/types"
import type { VisaGalleryImage } from "@/lib/media/photography"
import type { VisaSlug } from "@/lib/visas/types"

import type { MovingSectionId } from "@/lib/moving/layout"

export type MovingEditorialLink = {
  label: string
  href: string
}

/** @deprecated Used by legacy mosaic component — why-move now uses MovingEditorialSection */
export type MovingWhyTopic = {
  id: string
  title: string
  description: string
  href?: string
}

export type MovingEditorialSubsection = {
  id: string
  title: string
  quickAnswer?: string
  paragraphs: ReadonlyArray<string>
  bullets?: ReadonlyArray<string>
}

export type MovingEditorialSection = {
  title: string
  description?: string
  quickAnswer?: string
  paragraphs?: ReadonlyArray<string>
  bullets?: ReadonlyArray<string>
  subsections?: ReadonlyArray<MovingEditorialSubsection>
  links?: ReadonlyArray<MovingEditorialLink>
  imageKey?: string
  reversed?: boolean
}

export type MovingEditorialPoint = {
  id: string
  title: string
  detail: string
}

export type MovingVisaNavLink = {
  id: string
  label: string
  href: string
}

export type MovingCanForeignersMove = {
  title: string
  intro: string
  shortAnswer: {
    lead: string
    body: string
    support: string
  }
  visaNav: {
    bridge: string
    heading: string
    description: string
    links: ReadonlyArray<MovingVisaNavLink>
  }
}

export type MovingIsThailandGood = {
  eyebrow?: string
  title: string
  quickAnswer: string
  advantagesTitle: string
  advantages: ReadonlyArray<MovingEditorialPoint>
  considerationsTitle: string
  considerations: ReadonlyArray<MovingEditorialPoint>
  fitHeading: string
  fitProsTitle: string
  fitPros: ReadonlyArray<string>
  fitConsTitle: string
  fitCons: ReadonlyArray<string>
}

export type MovingCityTag =
  | "digital-nomads"
  | "families"
  | "retirement"
  | "business"
  | "luxury"
  | "nature"

export type MovingCityMetadata = {
  walkability: string
  healthcare: string
  internet: string
  intlCommunity: string
  lifestyleScore?: string
}

export type MovingCity = {
  id: string
  name: string
  lifestyle: string
  intro: string
  atmosphere: string
  whoItSuits: string
  strengths: ReadonlyArray<string>
  considerations: ReadonlyArray<string>
  bestFor: string
  monthlyBudget: string
  averageRent: string
  tags: ReadonlyArray<MovingCityTag>
  imageKey: string
  cityPageHref?: string
  metadata?: MovingCityMetadata
}

export type MovingFaqItem = ContentFaqItem & {
  readMoreHref?: string
}

export type MovingCostSummary = {
  title: string
  items: ReadonlyArray<{ label: string; value: string }>
  note: string
}

export type MovingCostTier = {
  id: string
  label: string
  monthlyRange: string
  housing: string
  lifestyle: string
}

export type MovingCostCategory = {
  id: string
  label: string
  modest: string
  comfortable: string
  premium: string
  note?: string
}

export type MovingEditorialFeatureCard = {
  id: string
  title: string
  summary: string
  body: string
  goodToKnow?: string
}

/** @deprecated Use MovingEditorialFeatureCard */
export type MovingFamiliesCard = MovingEditorialFeatureCard

export type MovingRetirementBudgetLine = {
  label: string
  value: string
}

export type MovingRetirementBudgetProfile = {
  id: string
  label: string
  lines: ReadonlyArray<MovingRetirementBudgetLine>
  total: string
}

export type MovingRetirementContent = {
  eyebrow: string
  title: string
  intro: string
  imageKey: string
  cards: ReadonlyArray<MovingEditorialFeatureCard>
  budget: {
    title: string
    profiles: ReadonlyArray<MovingRetirementBudgetProfile>
  }
  guides: ReadonlyArray<MovingEditorialLink>
}

export type MovingFamiliesContent = {
  eyebrow: string
  title: string
  intro: string
  cards: ReadonlyArray<MovingEditorialFeatureCard>
  links: ReadonlyArray<MovingEditorialLink>
}

export type MovingWorkingContent = {
  eyebrow: string
  title: string
  intro: string
  subsections: ReadonlyArray<MovingEditorialSubsection>
  links: ReadonlyArray<MovingEditorialLink>
}

export type MovingTopicBand = MovingEditorialSection & {
  id: string
  links: ReadonlyArray<MovingEditorialLink>
}

export type MovingVisaRoute = {
  slug: VisaSlug
  title: string
  description: string
  bestFor: string
  typicalApplicant: string
  href: string
  image: VisaGalleryImage
}

export type MovingBudgetEstimator = {
  eyebrow: string
  title: string
  intro: string
  controls: {
    city: string
    lifestyle: string
    household: string
  }
  results: {
    totalLabel: string
    usdLabel: string
    breakdownTitle: string
    cityInsightTitle: string
    lifestyleSummaryTitle: string
  }
  disclaimer: string
  faq: {
    title: string
    items: ReadonlyArray<MovingFaqItem>
  }
}

export type MovingPageContent = {
  path: "/moving-to-thailand"
  seo: {
    title: string
    description: string
    keywords: ReadonlyArray<string>
  }
  layout: ReadonlyArray<MovingSectionId>
  hero: {
    eyebrow: string
    title: string
    titleLines?: ReadonlyArray<string>
    subtitle?: string
    lead: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    imageKey: string
  }
  quickAnswer: {
    question: string
    paragraphs: ReadonlyArray<string>
  }
  whyMove: MovingEditorialSection
  isThailandGood: MovingIsThailandGood
  canForeignersMove: MovingCanForeignersMove
  everydayLife: MovingEditorialSection
  costOfLiving: {
    eyebrow: string
    title: string
    intro: string
    tiers: ReadonlyArray<MovingCostTier>
    featuredCategoryIds: ReadonlyArray<string>
    categories: ReadonlyArray<MovingCostCategory>
    summary: MovingCostSummary
    disclaimer: string
    links?: ReadonlyArray<MovingEditorialLink>
  }
  budgetEstimator: MovingBudgetEstimator
  cities: {
    eyebrow: string
    title: string
    intro: string
    bridge: string
    items: ReadonlyArray<MovingCity>
  }
  working: MovingWorkingContent
  families: MovingFamiliesContent
  retirement: MovingRetirementContent
  visaRoutes: {
    eyebrow?: string
    title: string
    intro: string
    items: ReadonlyArray<MovingVisaRoute>
    decisionGuide?: { label: string; href: string }
  }
  faq: {
    title: string
    description?: string
    items: ReadonlyArray<MovingFaqItem>
  }
  finalCta: {
    title: string
    description: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
}

/** @deprecated Persona paths removed from page layout — kept for article resolution if needed */
export type MovingPersonaId =
  | "retiring"
  | "remote-work"
  | "business"
  | "studying"
  | "family"
  | "digital-nomad"
  | "exploring"

export type MovingPersonaPath = {
  id: MovingPersonaId
  title: string
  description: string
  visaLabel: string
  visaHref?: string
  cityLabel: string
  articleSlugs: ReadonlyArray<string>
}

export type MovingPersonaPathResolved = MovingPersonaPath & {
  articles: ReadonlyArray<BlogPostCard>
}
