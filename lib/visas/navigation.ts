import type { VisaSlug } from "@/lib/visas/types"

export const visasHubPath = "/visas" as const

export type VisaNavItem = {
  slug: VisaSlug
  title: string
  description: string
  href: `/visas/${VisaSlug}` | "/visas/retirement"
}

/** Canonical visa nav order — hub, flyout, mobile menu, footer */
export const visaNavItems = [
  {
    slug: "dtv",
    title: "DTV Visa",
    description: "For remote workers and digital nomads",
    href: "/visas/dtv",
  },
  {
    slug: "retirement",
    title: "Retirement Visa",
    description: "For long-term retirement in Thailand",
    href: "/visas/retirement",
  },
  {
    slug: "elite",
    title: "Elite Visa",
    description: "Premium residency through Thailand Privilege membership",
    href: "/visas/elite",
  },
  {
    slug: "business",
    title: "Business Visa",
    description: "Work and company-related visa options",
    href: "/visas/business",
  },
  {
    slug: "education",
    title: "Education Visa",
    description: "Study and language programmes",
    href: "/visas/education",
  },
] as const satisfies ReadonlyArray<VisaNavItem>

export function isVisasSectionActive(pathname: string): boolean {
  return pathname === visasHubPath || pathname.startsWith(`${visasHubPath}/`)
}
