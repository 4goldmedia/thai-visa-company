import { consultationPageContent } from "@/lib/content/consultation-page"
import {
  buildBreadcrumbList,
  buildPageSchemaGraph,
  buildWebPage,
  JsonLdScript,
} from "@/lib/seo/schema"

function ConsultationPageJsonLd() {
  const { seo } = consultationPageContent

  const graph = buildPageSchemaGraph({
    nodes: [
      buildWebPage({
        path: "/consultation",
        name: seo.title,
        description: seo.description,
      }),
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Request a consultation", path: "/consultation" },
      ]),
    ],
  })

  return <JsonLdScript data={graph} id="schema-consultation" />
}

export { ConsultationPageJsonLd }
