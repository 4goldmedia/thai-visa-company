import { visaPages } from "@/lib/visas/content"
import type { VisaPageContent, VisaSlug } from "@/lib/visas/types"

export function isVisaPublished(
  visa: Pick<VisaPageContent, "published">,
): boolean {
  return visa.published
}

export function isPublishedVisaSlug(slug: VisaSlug): boolean {
  return isVisaPublished(visaPages[slug])
}

export function getPublishedVisaSlugs(): VisaSlug[] {
  return (Object.keys(visaPages) as VisaSlug[]).filter(isPublishedVisaSlug)
}

export function getPublishedVisaPages(): VisaPageContent[] {
  return getPublishedVisaSlugs().map((slug) => visaPages[slug])
}
