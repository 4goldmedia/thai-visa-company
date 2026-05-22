/**
 * AI-search copy & entity signals — single source for extractable summaries.
 * Used by metadata, JSON-LD, and visible “at a glance” blocks (not keyword lists).
 */

import { siteBrand, siteMetadata } from "@/lib/site/config"

export const aiSearchEntity = {
  /** Primary service entity */
  name: siteBrand.name,
  serviceType: "Thailand visa consulting and application support",
  geographicFocus: "Thailand",
  audience:
    "Foreign nationals planning to visit, work, retire, or study in Thailand",
  knowsAboutTopics: [
    "Thailand tourist visa",
    "Thailand retirement visa",
    "Thailand DTV visa",
    "Thailand business visa",
    "Thailand Elite visa",
    "Thailand education visa",
    "visa extension and renewal",
  ],
} as const

export const homepageAiCopy = {
  /** Topic-first h1 — answers “what is this page?” for crawlers and AI */
  primaryHeading: "Thailand visa support for foreigners",
  secondaryLine: `${siteBrand.name} — ${siteBrand.tagline}`,
  /** Visible hero lead — scannable in ~5 seconds */
  heroLeadLine:
    "Clear guidance on tourist, long-stay, and specialist routes—with fast replies on LINE and WhatsApp.",
  /** Standalone extractable summary (meta description + WebPage schema) */
  extractableSummary:
    "Thai Visa Company helps foreigners understand Thailand visa requirements, prepare documents, and apply with clear guidance. Support covers tourist, business, DTV, retirement, Elite, and education routes—with replies on LINE and WhatsApp.",
  webPageName: "Thailand visa support for foreigners",
  faqSchemaName: "Thailand visa FAQ — Thai Visa Company",
  faqSchemaDescription:
    "Common questions about Thailand visa types, processing times, and how Thai Visa Company supports applications.",
  atAGlance: [
    "Visa guidance for tourist, business, DTV, retirement, Elite, and education routes.",
    "Support on LINE and WhatsApp—most inquiries answered the same business day.",
    "Based in Bangkok; serving applicants worldwide and already in Thailand.",
  ] as const,
} as const

export const contactAiCopy = {
  webPageName: "Contact Thai Visa Company",
  extractableSummary:
    "Contact Thai Visa Company about your Thailand visa on LINE, WhatsApp, or a short inquiry form. Typical reply within one business day.",
} as const

/** Homepage document title — topic before brand */
export function getHomepageDocumentTitle(): string {
  return `${homepageAiCopy.webPageName} | ${siteBrand.shortName}`
}

/** Re-export default description when pages do not override */
export const defaultExtractableDescription = siteMetadata.defaultDescription
