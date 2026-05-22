import { messagingChannelLabels } from "@/lib/contact"
import { cn } from "@/lib/utils"

import {
  ctaButtonPrimaryClass,
  ctaButtonSecondaryClass,
} from "@/lib/section-styles"

/** Canonical CTA copy — use across homepage for consistency */
export const ctaLabels = {
  line: messagingChannelLabels.line,
  lineShort: messagingChannelLabels.lineShort,
  whatsapp: messagingChannelLabels.whatsapp,
  exploreVisas: "Explore visa options",
  learnMore: "Learn more",
  readGuide: "Read guide",
  contactForm: "Contact form",
} as const

export const ctaHref = {
  exploreVisas: "/visas",
  contactForm: "/contact",
} as const

export { contactLinks } from "@/lib/contact"

/** Navbar / compact header buttons */
export const navbarCtaPrimaryClass = cn(
  ctaButtonPrimaryClass,
  "h-10 min-h-10 px-3 text-sm sm:h-9 sm:min-h-9"
)

export const navbarCtaSecondaryClass = cn(
  ctaButtonSecondaryClass,
  "h-10 min-h-10 px-3 text-sm sm:h-9 sm:min-h-9"
)

/** Full-width mobile menu buttons */
export const navbarMenuCtaPrimaryClass = ctaButtonPrimaryClass

export const navbarMenuCtaSecondaryClass = ctaButtonSecondaryClass
