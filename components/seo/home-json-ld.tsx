import { buildHomepageSchemaGraph, JsonLdScript } from "@/lib/seo/schema"

/** Homepage graph  -  FAQ JSON-LD is rendered by `FaqSection` (visible Q&A parity) */
function HomeJsonLd() {
  return <JsonLdScript data={buildHomepageSchemaGraph()} id="schema-homepage" />
}

export { HomeJsonLd }
