import { buildPageSchemaGraph, buildWebSite, JsonLdScript } from "@/lib/schema"

/** Homepage graph — FAQ JSON-LD is rendered by `FaqSection` (visible Q&A parity) */
function HomeJsonLd() {
  const graph = buildPageSchemaGraph({
    nodes: [buildWebSite()],
  })

  return <JsonLdScript data={graph} id="schema-homepage" />
}

export { HomeJsonLd }
