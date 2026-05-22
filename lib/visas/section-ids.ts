import type { VisaSlug } from "@/lib/visas/types"

/** Stable section and heading ids per visa page — for landmarks and SEO */
export function getVisaSectionIds(slug: VisaSlug) {
  return {
    hero: `${slug}-hero`,
    heroHeading: `${slug}-hero-heading`,
    overview: `${slug}-overview`,
    overviewHeading: `${slug}-overview-heading`,
    requirements: `${slug}-requirements`,
    requirementsHeading: `${slug}-requirements-heading`,
    process: `${slug}-process`,
    processHeading: `${slug}-process-heading`,
    faq: `${slug}-faq`,
    faqHeading: `${slug}-faq-heading`,
    relatedVisas: `${slug}-related-visas`,
    relatedVisasHeading: `${slug}-related-visas-heading`,
    resources: `${slug}-resources`,
    resourcesHeading: `${slug}-resources-heading`,
    finalCta: `${slug}-contact`,
    finalCtaHeading: `${slug}-contact-heading`,
  } as const
}

export type VisaSectionIds = ReturnType<typeof getVisaSectionIds>
