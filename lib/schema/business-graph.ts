import { buildLocalBusiness } from "@/lib/schema/local-business"
import { buildOrganization } from "@/lib/schema/organization"
import { buildPageSchemaGraph } from "@/lib/schema/graph"
import type { JsonLdGraphDocument } from "@/lib/schema/types"

/**
 * Core Organization + LocalBusiness graph for site-wide trust and AI discoverability.
 * Render once in the root layout; do not duplicate on child pages.
 */
export function buildPlatformBusinessSchemaGraph(): JsonLdGraphDocument {
  return buildPageSchemaGraph({
    nodes: [buildOrganization(), buildLocalBusiness()],
  })
}
