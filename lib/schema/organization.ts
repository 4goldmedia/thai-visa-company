import { buildPlatformContactPoints } from "@/lib/schema/contact"
import { getDefaultOrganizationInput, getSchemaEntityIds } from "@/lib/schema/site"
import { compactNode, toAbsoluteUrl } from "@/lib/schema/utils"
import type { ContactPointInput, JsonLdNode, OrganizationInput } from "@/lib/schema/types"

function resolveContactPoints(input: OrganizationInput): JsonLdNode[] {
  if (input.contactPoint?.length) {
    return input.contactPoint.map((point) =>
      "@type" in point && typeof point["@type"] === "string"
        ? (point as JsonLdNode)
        : compactNode({
            "@type": "ContactPoint",
            ...(point as ContactPointInput),
          }),
    )
  }
  return buildPlatformContactPoints()
}

export function buildOrganization(
  input: OrganizationInput = {},
): JsonLdNode {
  const defaults = getDefaultOrganizationInput()
  const ids = getSchemaEntityIds()
  const url = input.url ?? defaults.url
  const contactPoint = resolveContactPoints(input)

  return compactNode({
    "@type": "Organization",
    "@id": ids.organization,
    name: input.name ?? defaults.name,
    url,
    description: input.description ?? defaults.description,
    ...(input.tagline ?? defaults.tagline
      ? { slogan: input.tagline ?? defaults.tagline }
      : {}),
    ...(input.knowsAbout ?? defaults.knowsAbout
      ? { knowsAbout: input.knowsAbout ?? defaults.knowsAbout }
      : {}),
    ...(input.serviceType ?? defaults.serviceType
      ? { serviceType: input.serviceType ?? defaults.serviceType }
      : {}),
    areaServed: input.areaServed ?? defaults.areaServed,
    ...(input.logo ? { logo: toAbsoluteUrl(input.logo) } : {}),
    ...(input.image ? { image: toAbsoluteUrl(input.image) } : {}),
    ...(input.sameAs?.length || defaults.sameAs.length
      ? { sameAs: input.sameAs ?? [...defaults.sameAs] }
      : {}),
    ...(input.contactEmail ?? defaults.contactEmail
      ? { email: input.contactEmail ?? defaults.contactEmail }
      : {}),
    ...(contactPoint.length ? { contactPoint } : {}),
  })
}

/** Lightweight reference for `publisher`, `provider`, etc. */
export function buildOrganizationReference(
  input: Pick<OrganizationInput, "name" | "url"> = {},
): JsonLdNode {
  const defaults = getDefaultOrganizationInput()
  const ids = getSchemaEntityIds()

  return {
    "@type": "Organization",
    "@id": ids.organization,
    name: input.name ?? defaults.name,
    url: input.url ?? defaults.url,
  }
}
