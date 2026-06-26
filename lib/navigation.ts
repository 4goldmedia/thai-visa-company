/** Main navigation  -  shared by Navbar and Footer. Paths mirror `lib/site-routes.ts`. */

import { visasHubPath } from "@/lib/visas/navigation"

/** Primary marketing routes */
export const consultationPath = "/consultation" as const
/** @deprecated Public articles live at `/blog`. Kept for legacy redirects. */
export const guidesPath = "/blog" as const
export const blogPath = "/blog" as const
export const resourcesPath = "/resources" as const

/** Homepage section anchors until dedicated hub pages ship */
export const homeSectionAnchors = {
  reviews: "/#reviews",
  faq: "/#faq",
} as const

export { visasHubPath }

export const secondaryNavLinks = [
  { label: "Blog", href: blogPath },
  { label: "Reviews", href: homeSectionAnchors.reviews },
] as const

/** @deprecated Use `secondaryNavLinks` plus `VisasNavFlyout` / `visasHubPath` */
export const mainNavLinks = [
  { label: "Visas", href: visasHubPath },
  ...secondaryNavLinks,
] as const

export type MainNavLink = (typeof mainNavLinks)[number]

/** Footer navigation  -  shared structure for SEO and consistent site IA */
export const footerVisaLinks = [
  { label: "DTV Visa", href: "/visas/dtv" },
  { label: "Retirement Visa", href: "/visas/retirement" },
  { label: "Business Visa", href: "/visas/business" },
  { label: "Education Visa", href: "/visas/education" },
  { label: "Elite Visa", href: "/visas/elite" },
  { label: "All Visa Services", href: visasHubPath },
] as const

export const footerBlogLinks = [
  { label: "All articles", href: blogPath },
  { label: "DTV Visa", href: "/blog/cluster/dtv" },
  { label: "Retirement Visa", href: "/blog/cluster/retirement" },
  { label: "Business Visa", href: "/blog/cluster/business" },
  { label: "Education Visa", href: "/blog/cluster/education" },
  { label: "Immigration procedures", href: "/blog/cluster/immigration-procedures" },
  { label: "Living in Thailand", href: "/blog/cluster/living-in-thailand" },
] as const

/** @deprecated Guides are supporting SEO assets  -  not in primary nav */
export const footerGuidesLinks = [] as const

/** @deprecated Use `footerBlogLinks` */
export const footerResourcesLinks = footerBlogLinks

export const footerCompanyLinks = [
  { label: "Reviews", href: homeSectionAnchors.reviews },
  { label: "FAQ", href: homeSectionAnchors.faq },
  { label: "Contact", href: consultationPath },
  { label: "Request a Consultation", href: consultationPath },
] as const

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const

export type FooterLink = {
  label: string
  href: string
}
