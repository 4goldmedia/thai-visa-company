/**
 * Section-driven visa page layout — order is data-defined per visa.
 * Optional modules render only when content is present (see section renderer).
 */
export const visaSectionIds = [
  "hero",
  "lastUpdated",
  "keyFacts",
  "bestFor",
  "overview",
  "comparison",
  "requirements",
  "checklist",
  "process",
  "faq",
  "relatedVisas",
  "relatedResources",
  "finalCta",
] as const

export type VisaSectionId = (typeof visaSectionIds)[number]

/** Default section order for all visa pages until a visa overrides `layout` */
export const DEFAULT_VISA_PAGE_LAYOUT: ReadonlyArray<VisaSectionId> = [
  "hero",
  "keyFacts",
  "bestFor",
  "overview",
  "comparison",
  "requirements",
  "checklist",
  "process",
  "faq",
  "relatedVisas",
  "relatedResources",
  "finalCta",
]

export function resolveVisaPageLayout(
  layout?: ReadonlyArray<VisaSectionId>,
): ReadonlyArray<VisaSectionId> {
  return layout ?? DEFAULT_VISA_PAGE_LAYOUT
}
