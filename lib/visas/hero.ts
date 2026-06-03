import { BadgeCheck, ClipboardList, MessageCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { visaGalleryPhotography, type VisaGalleryImage } from "@/lib/media/photography"
import type { VisaSlug } from "@/lib/visas/types"

export type VisaHeroTrustBullet = {
  icon: LucideIcon
  label: string
}

export const defaultVisaHeroTrustBullets: ReadonlyArray<VisaHeroTrustBullet> = [
  { icon: BadgeCheck, label: "Licensed Thai visa specialists" },
  { icon: ClipboardList, label: "Clear requirements and next steps" },
  { icon: MessageCircle, label: "Fast replies via LINE and WhatsApp" },
] as const

export type VisaHeroTestimonial = {
  quote: string
  attribution: string
}

export type VisaPageHeroContent = {
  /** Visa category label above the title */
  eyebrow?: string
  title: string
  /** Optional second line under the title */
  subtitle?: string
  /** Plain-English lead — keep to 2–3 short lines in content */
  overview: string
  heroImage?: string
  heroImageAlt?: string
  objectPosition?: string
  ctaText?: string
  /** Override default trust bullet labels (icons stay consistent) */
  trustBullets?: ReadonlyArray<string>
  testimonial?: VisaHeroTestimonial
}

export function getVisaHeroGalleryImage(slug: VisaSlug): VisaGalleryImage | undefined {
  return visaGalleryPhotography[slug as keyof typeof visaGalleryPhotography]
}

export function resolveVisaHeroMedia(
  slug: VisaSlug,
  hero: Pick<
    VisaPageHeroContent,
    "heroImage" | "heroImageAlt" | "objectPosition"
  >,
): { src: string; alt: string; objectPosition?: string } {
  const fallback = getVisaHeroGalleryImage(slug)
  return {
    src: hero.heroImage ?? fallback?.src ?? "/images/editorial/krabi-thailand-beachside.webp",
    alt:
      hero.heroImageAlt ??
      fallback?.alt ??
      "Lifestyle in Thailand representing long-stay visa outcomes",
    objectPosition: hero.objectPosition ?? fallback?.objectPosition,
  }
}

export function resolveVisaHeroTrustBullets(
  labels?: ReadonlyArray<string>,
): ReadonlyArray<VisaHeroTrustBullet> {
  if (!labels?.length) return defaultVisaHeroTrustBullets
  return labels.map((label, index) => ({
    icon:
      defaultVisaHeroTrustBullets[index]?.icon ??
      defaultVisaHeroTrustBullets[0].icon,
    label,
  }))
}
