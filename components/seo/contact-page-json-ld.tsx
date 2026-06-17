import { contactAiCopy } from "@/lib/seo/ai-search"
import {
  buildPageSchemaGraph,
  buildPlatformContactPoints,
  buildWebPage,
  JsonLdScript,
} from "@/lib/seo/schema"

/** Contact page  -  WebPage + customer contact points */
function ContactPageJsonLd() {
  const graph = buildPageSchemaGraph({
    nodes: [
      buildWebPage({
        path: "/contact",
        name: contactAiCopy.webPageName,
        description: contactAiCopy.extractableSummary,
      }),
      ...buildPlatformContactPoints(),
    ],
  })

  return <JsonLdScript data={graph} id="schema-contact" />
}

export { ContactPageJsonLd }
