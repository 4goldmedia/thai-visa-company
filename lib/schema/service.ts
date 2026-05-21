import { buildOrganizationReference } from "@/lib/schema/organization"
import type { JsonLdNode, ServiceInput } from "@/lib/schema/types"
import { compactNode, toAbsoluteUrl } from "@/lib/schema/utils"

export function buildService(input: ServiceInput): JsonLdNode {
  const provider = input.provider ?? buildOrganizationReference()

  return compactNode({
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: toAbsoluteUrl(input.path),
    provider,
    ...(input.serviceType ? { serviceType: input.serviceType } : {}),
    ...(input.areaServed ? { areaServed: input.areaServed } : {}),
  })
}
