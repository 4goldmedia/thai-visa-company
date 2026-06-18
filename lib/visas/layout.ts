/**
 * Section-driven visa page layout  -  order is data-defined per visa.
 * Optional modules render only when content is present (see section renderer).
 *
 * Blueprint v3 default order (DTV Authority Upgrade Plan).
 */
export const visaSectionIds = [
  "hero",
  "lastUpdated",
  "definition",
  "keyFacts",
  "bestFor",
  "overview",
  "officialSources",
  "entityGlossary",
  "requirements",
  "checklist",
  "feesAndTimelines",
  "governmentProcess",
  "pitfalls",
  "practiceInsights",
  "embassyVarianceTable",
  "comparison",
  "compliance",
  "legalBoundaries",
  "decisionGuides",
  "faq",
  "eeat",
  "relatedResources",
  "relatedVisas",
  "process",
  "finalCta",
] as const

export type VisaSectionId = (typeof visaSectionIds)[number]

/** Default section order for all visa pages until a visa overrides `layout` */
export const DEFAULT_VISA_PAGE_LAYOUT: ReadonlyArray<VisaSectionId> = [
  "hero",
  "lastUpdated",
  "keyFacts",
  "bestFor",
  "overview",
  "officialSources",
  "entityGlossary",
  "requirements",
  "checklist",
  "feesAndTimelines",
  "governmentProcess",
  "pitfalls",
  "practiceInsights",
  "embassyVarianceTable",
  "comparison",
  "compliance",
  "legalBoundaries",
  "decisionGuides",
  "faq",
  "relatedResources",
  "relatedVisas",
  "process",
  "finalCta",
]

export function resolveVisaPageLayout(
  layout?: ReadonlyArray<VisaSectionId>,
): ReadonlyArray<VisaSectionId> {
  return layout ?? DEFAULT_VISA_PAGE_LAYOUT
}
