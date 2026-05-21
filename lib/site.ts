/**
 * Brand and site identity — shared by UI, metadata, JSON-LD, and sitemap.
 * SEO fields live in `lib/seo.ts`.
 */
export const siteConfig = {
  name: "Thai Visa Company",
  tagline: "Thailand visas, made simple.",
  /** Default meta description for pages without a custom one */
  defaultDescription:
    "Trusted Thailand visa support for foreigners. Clear guidance on tourist, business, DTV, and long-stay visas with fast replies on LINE and WhatsApp.",
  /** HTML lang attribute */
  locale: "en",
  /** Open Graph locale */
  localeOpenGraph: "en_US",
  /**
   * Canonical site origin — set `NEXT_PUBLIC_SITE_URL` in production
   * (e.g. https://www.thaivisacompany.com)
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const

export type SiteConfig = typeof siteConfig
