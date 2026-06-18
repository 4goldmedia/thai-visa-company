import type { VisaSlug } from "@/lib/visas/types"

/** Stable section and heading ids per visa page  -  for landmarks and SEO */
export function getVisaSectionIds(slug: VisaSlug) {
  return {
    hero: `${slug}-hero`,
    heroHeading: `${slug}-hero-heading`,
    lastUpdated: `${slug}-last-updated`,
    keyFacts: `${slug}-key-facts`,
    keyFactsHeading: `${slug}-key-facts-heading`,
    gettingStarted: `${slug}-getting-started`,
    gettingStartedHeading: `${slug}-getting-started-heading`,
    bestFor: `${slug}-best-for`,
    bestForHeading: `${slug}-best-for-heading`,
    overview: `${slug}-overview`,
    overviewHeading: `${slug}-overview-heading`,
    comparison: `${slug}-comparison`,
    comparisonHeading: `${slug}-comparison-heading`,
    requirements: `${slug}-requirements`,
    requirementsHeading: `${slug}-requirements-heading`,
    checklist: `${slug}-checklist`,
    checklistHeading: `${slug}-checklist-heading`,
    process: `${slug}-process`,
    processHeading: `${slug}-process-heading`,
    faq: `${slug}-faq`,
    faqHeading: `${slug}-faq-heading`,
    relatedVisas: `${slug}-related-visas`,
    relatedVisasHeading: `${slug}-related-visas-heading`,
    finalCta: `${slug}-contact`,
    finalCtaHeading: `${slug}-contact-heading`,
  } as const
}

export type VisaSectionIds = ReturnType<typeof getVisaSectionIds>
