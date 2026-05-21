import { platformBusinessProfile } from "@/lib/schema/business-profile"
import { compactNode } from "@/lib/schema/utils"
import type { ContactPointInput, JsonLdNode } from "@/lib/schema/types"

export function buildContactPoint(input: ContactPointInput): JsonLdNode {
  return compactNode({
    "@type": "ContactPoint",
    contactType: input.contactType ?? "customer support",
    ...(input.telephone ? { telephone: input.telephone } : {}),
    ...(input.email ? { email: input.email } : {}),
    ...(input.url ? { url: input.url } : {}),
    ...(input.availableLanguage?.length
      ? { availableLanguage: input.availableLanguage }
      : {}),
    ...(input.areaServed ? { areaServed: input.areaServed } : {}),
    ...(input.contactOption ? { contactOption: input.contactOption } : {}),
  })
}

/** LINE, WhatsApp, email, and phone contact points for the platform */
export function buildPlatformContactPoints(): JsonLdNode[] {
  const { contact, areaServed, availableLanguages } = platformBusinessProfile
  const languages = [...availableLanguages]
  const served = [...areaServed]

  const points: ContactPointInput[] = [
    {
      contactType: "customer support",
      url: contact.line,
      availableLanguage: languages,
      areaServed: served,
    },
    {
      contactType: "customer support",
      url: contact.whatsapp,
      availableLanguage: languages,
      areaServed: served,
    },
    {
      contactType: "customer support",
      email: contact.email,
      availableLanguage: languages,
      areaServed: served,
    },
  ]

  if (contact.telephone) {
    points.push({
      contactType: "customer support",
      telephone: contact.telephone,
      availableLanguage: languages,
      areaServed: served,
    })
  }

  return points.map(buildContactPoint)
}
