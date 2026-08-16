/**
 * AI-search copy & entity signals  -  single source for extractable summaries.
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
  /** Homepage H1  -  visible hero headline */
  primaryHeading: "Your Thailand Visa, made simple.",
  secondaryLine: `${siteBrand.name}  -  ${siteBrand.tagline}`,
  /** Visible hero lead  -  scannable in ~5 seconds */
  heroLeadLine:
    "We handle the paperwork and processes so you can focus on your new life in Thailand.",
  heroContactStrip: {
    title: "Speak with a specialist",
    subtitle:
      "Replies within 24 hours on visas, timelines, and relocation guidance.",
    guarantee: "Guaranteed visa approval or your money back.",
  },
  /** Standalone extractable summary (WebPage schema) */
  extractableSummary:
    "Get Thailand visa help for DTV, retirement, business, Elite, and education. We support documents and applications, with specialist replies on LINE or WhatsApp.",
  /** Homepage meta description  -  search snippet, distinct from OG description */
  metaDescription:
    "Get Thailand visa help for DTV, retirement, business, Elite, and education. We handle documents and applications with specialist guidance from start to finish.",
  webPageName: "Your Thailand Visa, made simple",
  faqSchemaName: "Thailand visa FAQ  -  Thai Visa Company",
  faqSchemaDescription:
    "Common questions about Thailand visa types, processing times, and how Thai Visa Company supports applications.",
  trustBar: homepageTrustBar,
} as const

export const contactAiCopy = {
  webPageName: "Contact Thai Visa Company",
  extractableSummary:
    "Contact Thai Visa Company on LINE, WhatsApp, or email. Visit our Bangkok office or send a short inquiry and a specialist will reply about your visa plans.",
} as const

/** Homepage document title  -  search-facing; OG title stays the H1 proposition */
export function getHomepageDocumentTitle(): string {
  return "Thailand Visa Services, Made Simple | Thai Visa Company"
}

/** Re-export default description when pages do not override */
export const defaultExtractableDescription = siteMetadata.defaultDescription
