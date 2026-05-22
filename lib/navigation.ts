/** Main navigation — shared by Navbar and Footer. Paths mirror `lib/site-routes.ts`. */

export const mainNavLinks = [
  { label: "Visa Services", href: "/visas" },
  { label: "Reviews", href: "/reviews" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const

export type MainNavLink = (typeof mainNavLinks)[number]

/** Footer navigation — shared structure for SEO and consistent site IA */
export const footerVisaLinks = [
  { label: "All visa services", href: "/visas" },
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
  {
    label: "Visa processing times",
    href: "/resources/how-long-does-thai-visa-take",
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
