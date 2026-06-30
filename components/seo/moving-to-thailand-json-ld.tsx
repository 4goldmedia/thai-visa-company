import {
  buildBreadcrumbList,
  buildPageSchemaGraph,
  buildWebPage,
  JsonLdScript,
} from "@/lib/seo/schema"
import { movingPageContent, movingPagePath } from "@/lib/moving/content"

function MovingToThailandJsonLd() {
  const { seo } = movingPageContent

  const graph = buildPageSchemaGraph({
    nodes: [
      buildWebPage({
        path: movingPagePath,
        name: seo.title,
        description: seo.description,
      }),
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Moving to Thailand", path: movingPagePath },
      ]),
    ],
  })

  return <JsonLdScript data={graph} id="schema-moving-to-thailand" />
}

export { MovingToThailandJsonLd }
