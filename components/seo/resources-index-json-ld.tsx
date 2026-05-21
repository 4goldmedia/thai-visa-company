import { getResourceArticles } from "@/lib/resources"
import {
  buildBreadcrumbList,
  buildCollectionPage,
  buildItemList,
  buildPageSchemaGraph,
  JsonLdScript,
} from "@/lib/schema"

function ResourcesIndexJsonLd() {
  const articles = getResourceArticles()

  const graph = buildPageSchemaGraph({
    nodes: [
      buildCollectionPage({
        path: "/resources",
        name: "Thailand visa guides",
        description:
          "Practical Thailand visa guides for foreigners planning time in Thailand.",
      }),
      buildItemList({
        items: articles.map((article) => ({
          name: article.title,
          path: article.path,
        })),
      }),
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
      ]),
    ],
  })

  return <JsonLdScript data={graph} />
}

export { ResourcesIndexJsonLd }
