/**
 * Frozen editorial knowledge graph — canonical roles, linking, and hub backlinks.
 * Reference: docs/editorial-knowledge-graph.md
 * Governance: rules/content/internal-linking.mdc
 */

export const editorialArticleRoles = {
  "best-visa-for-living-in-thailand": "DecisionHub",
  "business-visa-vs-work-permit-thailand": "ComparisonArticle",
  "retirement-visa-o-vs-o-a-thailand": "ComparisonArticle",
  "thailand-elite-visa-worth-it": "DecisionArticle",
  "change-visa-type-in-thailand": "TransitionArticle",
  "dtv-visa-rejection-reasons": "TroubleshootingArticle",
  "dtv-vs-retirement-visa-thailand": "ComparisonArticle",
  "thailand-elite-visa-vs-retirement-visa": "ComparisonArticle",
  "re-entry-permit-thailand": "ComplianceArticle",
  "dtv-visa-vs-tourist-visa-thailand": "ComparisonArticle",
  "can-i-work-in-thailand-without-a-work-permit": "AuthorityArticle",
  "can-foreigners-live-in-thailand-permanently": "LifestyleHub",
  "dtv-vs-education-visa-thailand": "ComparisonArticle",
  "can-you-work-on-an-education-visa-in-thailand": "AuthorityArticle",
} as const

export type EditorialArticleSlug = keyof typeof editorialArticleRoles
export type EditorialArticleRole =
  (typeof editorialArticleRoles)[EditorialArticleSlug]

/** Frozen `relatedSlugs` graph — cap 3–4 per article; remainder via `related` or in-body links. */
export const frozenRelatedSlugs: Readonly<
  Record<EditorialArticleSlug, readonly string[]>
> = {
  "best-visa-for-living-in-thailand": [
    "can-foreigners-live-in-thailand-permanently",
    "business-visa-vs-work-permit-thailand",
    "dtv-vs-retirement-visa-thailand",
    "can-i-work-in-thailand-without-a-work-permit",
  ],
  "business-visa-vs-work-permit-thailand": [
    "best-visa-for-living-in-thailand",
    "can-i-work-in-thailand-without-a-work-permit",
  ],
  "retirement-visa-o-vs-o-a-thailand": [
    "best-visa-for-living-in-thailand",
    "dtv-vs-retirement-visa-thailand",
  ],
  "thailand-elite-visa-worth-it": [
    "best-visa-for-living-in-thailand",
    "thailand-elite-visa-vs-retirement-visa",
    "can-foreigners-live-in-thailand-permanently",
  ],
  "change-visa-type-in-thailand": [
    "best-visa-for-living-in-thailand",
    "re-entry-permit-thailand",
  ],
  "dtv-visa-rejection-reasons": [
    "best-visa-for-living-in-thailand",
    "dtv-visa-vs-tourist-visa-thailand",
  ],
  "dtv-vs-retirement-visa-thailand": [
    "best-visa-for-living-in-thailand",
    "retirement-visa-o-vs-o-a-thailand",
    "thailand-elite-visa-vs-retirement-visa",
    "can-foreigners-live-in-thailand-permanently",
  ],
  "thailand-elite-visa-vs-retirement-visa": [
    "best-visa-for-living-in-thailand",
    "thailand-elite-visa-worth-it",
    "dtv-vs-retirement-visa-thailand",
    "can-foreigners-live-in-thailand-permanently",
  ],
  "re-entry-permit-thailand": [
    "best-visa-for-living-in-thailand",
    "change-visa-type-in-thailand",
  ],
  "dtv-visa-vs-tourist-visa-thailand": [
    "best-visa-for-living-in-thailand",
    "dtv-visa-rejection-reasons",
  ],
  "can-i-work-in-thailand-without-a-work-permit": [
    "business-visa-vs-work-permit-thailand",
    "best-visa-for-living-in-thailand",
    "can-foreigners-live-in-thailand-permanently",
  ],
  "can-foreigners-live-in-thailand-permanently": [
    "best-visa-for-living-in-thailand",
    "dtv-vs-retirement-visa-thailand",
    "thailand-elite-visa-worth-it",
    "can-i-work-in-thailand-without-a-work-permit",
  ],
  "dtv-vs-education-visa-thailand": [
    "best-visa-for-living-in-thailand",
    "dtv-visa-vs-tourist-visa-thailand",
    "dtv-vs-retirement-visa-thailand",
    "can-you-work-on-an-education-visa-in-thailand",
  ],
  "can-you-work-on-an-education-visa-in-thailand": [
    "best-visa-for-living-in-thailand",
    "can-i-work-in-thailand-without-a-work-permit",
    "business-visa-vs-work-permit-thailand",
    "dtv-vs-education-visa-thailand",
  ],
}

export type EditorialHubSlug = "dtv" | "retirement" | "elite" | "business" | "education"

/** Visa hub → primary cluster blog articles (plus best-visa on all hubs). */
export const hubPrimaryArticleSlugs: Readonly<
  Record<EditorialHubSlug, readonly EditorialArticleSlug[]>
> = {
  dtv: [
    "dtv-visa-rejection-reasons",
    "dtv-visa-vs-tourist-visa-thailand",
    "dtv-vs-retirement-visa-thailand",
  ],
  retirement: [
    "retirement-visa-o-vs-o-a-thailand",
    "dtv-vs-retirement-visa-thailand",
    "thailand-elite-visa-vs-retirement-visa",
  ],
  elite: ["thailand-elite-visa-worth-it", "thailand-elite-visa-vs-retirement-visa"],
  business: [
    "business-visa-vs-work-permit-thailand",
    "can-i-work-in-thailand-without-a-work-permit",
  ],
  education: [
    "dtv-vs-education-visa-thailand",
    "can-you-work-on-an-education-visa-in-thailand",
  ],
}

export const hubDecisionHubSlug = "best-visa-for-living-in-thailand" as const

/** Canonical vocabulary for editorial copy — see docs/editorial-knowledge-graph.md §3 */
export const editorialEntityTerms = {
  dtv: "Thailand DTV Visa",
  retirement: "Thailand Retirement Visa",
  elite: "Thailand Elite Visa",
  business: "Thailand Business Visa",
  education: "Thailand Education Visa",
  workPermit: "Work Permit",
  nonImmigrantB: "Non-Immigrant B",
  nonImmigrantO: "Non-Immigrant O",
  nonImmigrantOA: "Non-Immigrant O-A",
  reEntryPermit: "Re-Entry Permit",
  visaPage: "visa page",
  blogArticle: "blog article",
} as const

export function isEditorialArticleSlug(
  slug: string,
): slug is EditorialArticleSlug {
  return slug in editorialArticleRoles
}
