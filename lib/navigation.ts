/** Main navigation — shared by Navbar and Footer. Paths mirror `lib/site-routes.ts`. */

/** Homepage section anchors until `/visas` and `/reviews` routes ship */
export const homeSectionAnchors = {
  visaServices: "/#visa-services",
  reviews: "/#reviews",
} as const

export const mainNavLinks = [
  { label: "Visa Services", href: homeSectionAnchors.visaServices },
  { label: "Reviews", href: homeSectionAnchors.reviews },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const

export type MainNavLink = (typeof mainNavLinks)[number]

/** Footer navigation — shared structure for SEO and consistent site IA */
export const footerVisaLinks = [
  { label: "All visa services", href: homeSectionAnchors.visaServices },
  { label: "Retirement visa", href: "/visas/retirement" },
  { label: "DTV visa", href: "/visas/dtv" },
  { label: "Business visa", href: "/visas/business" },
] as const

export const footerResourceLinks = [
  { label: "All guides", href: "/resources" },
  {
    label: "Retirement visa guide",
    href: "/resources/how-to-get-thailand-retirement-visa",
  },
] as const

export const footerLegalLinks = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
] as const

export type FooterLink = {
  label: string
  href: string
}
