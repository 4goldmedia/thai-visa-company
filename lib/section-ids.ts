/**
 * Stable section and heading ids for `aria-labelledby`, in-page anchors, and tests.
 * Import from section components — do not duplicate string literals.
 */
export const sectionHeadingIds = {
  hero: "hero-heading",
  visaTypes: "visa-types-heading",
  whyChooseUs: "why-choose-us-heading",
  movingSimple: "moving-simple-heading",
  process: "process-heading",
  reviews: "reviews-heading",
  faq: "faq-heading",
  resources: "resources-preview-heading",
  finalCta: "final-cta-heading",
} as const

/** Optional `id` on `<section>` for skip links and deep linking */
export const sectionIds = {
  hero: "hero",
  visaTypes: "visa-services",
  whyChooseUs: "why-choose-us",
  movingSimple: "moving-simple",
  process: "process",
  reviews: "reviews",
  faq: "faq",
  resources: "resources",
  finalCta: "contact",
} as const

export type SectionHeadingId =
  (typeof sectionHeadingIds)[keyof typeof sectionHeadingIds]

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds]
