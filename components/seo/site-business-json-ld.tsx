import { buildPlatformBusinessSchemaGraph, JsonLdScript } from "@/lib/schema"

/**
 * Site-wide Organization + LocalBusiness JSON-LD (trust, contact, Google reviews).
 * Mounted in the root layout so every page inherits business entity signals.
 */
function SiteBusinessJsonLd() {
  return <JsonLdScript data={buildPlatformBusinessSchemaGraph()} id="schema-business" />
}

export { SiteBusinessJsonLd }
