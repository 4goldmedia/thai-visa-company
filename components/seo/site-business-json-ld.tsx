import { buildSiteBusinessSchemaGraph, JsonLdScript } from "@/lib/seo/schema"

/**
 * Organization + LocalBusiness — render once in root layout.
 * Branding and contact points come from `lib/site/config` via `platformBusinessProfile`.
 */
function SiteBusinessJsonLd() {
  return (
    <JsonLdScript data={buildSiteBusinessSchemaGraph()} id="schema-business" />
  )
}

export { SiteBusinessJsonLd }
