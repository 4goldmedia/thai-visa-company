/**
 * AI-search copy & entity signals — single source for extractable summaries.
 * Used by metadata, JSON-LD, and visible “at a glance” blocks (not keyword lists).
 */

import { homepageTrustBar } from "@/lib/content/trust-bar"
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
  /** Eyebrow above homepage H1 */
  heroEyebrow: "Thailand Visa & Relocation Experts",
  /** Homepage H1 — visible hero headline */
  primaryHeading: "Your move to Thailand, made simple.",
  secondaryLine: `${siteBrand.name} — ${siteBrand.tagline}`,
  /** Visible hero lead — scannable in ~5 seconds */
  heroLeadLine:
    "We handle the paperwork and processes so you can focus on your new life in Thailand.",
  heroContactStrip: {
    title: "Chat with our team",
    subtitle: "Fast replies on visas, documents, and timelines.",
  },
  /** Standalone extractable summary (meta description + WebPage schema) */
  extractableSummary:
    "Thai Visa Company helps foreigners relocate to Thailand with clear visa guidance, document support, and hands-on application help. Tourist, business, DTV, retirement, Elite, and education routes—with replies on LINE and WhatsApp.",
  webPageName: "Your move to Thailand, made simple",
  faqSchemaName: "Thailand visa FAQ — Thai Visa Company",
  faqSchemaDescription:
    "Common questions about Thailand visa types, processing times, and how Thai Visa Company supports applications.",
  trustBar: homepageTrustBar,
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
