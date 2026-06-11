/** Main navigation — shared by Navbar and Footer. Paths mirror `lib/site-routes.ts`. */

import { visasHubPath } from "@/lib/visas/navigation"

/** Primary marketing routes */
export const consultationPath = "/consultation" as const
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

/** Footer navigation — shared structure for SEO and consistent site IA */
export const footerVisaLinks = [
  { label: "DTV Visa", href: "/visas/dtv" },
  { label: "Retirement Visa", href: "/visas/retirement" },
  { label: "Business Visa", href: "/visas/business" },
  { label: "Education Visa", href: "/visas/education" },
  { label: "Elite Visa", href: "/visas/elite" },
  { label: "All Visa Services", href: visasHubPath },
] as const

export const footerResourcesLinks = [
  { label: "Blog", href: blogPath },
  { label: "Guides", href: resourcesPath },
] as const

/** @deprecated Use `footerResourcesLinks` */
export const footerBlogLinks = footerResourcesLinks

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
