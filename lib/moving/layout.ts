/**
 * Moving to Thailand — intent-based section order.
 * Each section answers a question people search before relocating.
 */

export const movingSectionIds = [
  "hero",
  "why-move",
  "is-thailand-good",
  "can-foreigners-move",
  "everyday-life",
  "cost-of-living",
  "budget-estimator",
  "cities",
  "working",
  "families",
  "retirement",
  "visa-routes",
  "faq",
  "final-cta",
] as const

export type MovingSectionId = (typeof movingSectionIds)[number]

export const MOVING_PAGE_LAYOUT: ReadonlyArray<MovingSectionId> = [
  "hero",
  "why-move",
  "is-thailand-good",
  "can-foreigners-move",
  "everyday-life",
  "cost-of-living",
  "budget-estimator",
  "cities",
  "working",
  "families",
  "retirement",
  "visa-routes",
  "faq",
  "final-cta",
]

export function resolveMovingPageLayout(
  layout?: ReadonlyArray<MovingSectionId>,
): ReadonlyArray<MovingSectionId> {
  return layout ?? MOVING_PAGE_LAYOUT
}
