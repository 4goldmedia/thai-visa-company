import { getPublishedResourceArticles } from "@/lib/resources"
import { resourcesIndexContent } from "@/lib/resources"
import {
  buildResourcesIndexSchemaGraph,
  JsonLdScript,
} from "@/lib/seo/schema"

function ResourcesIndexJsonLd() {
  const articles = getPublishedResourceArticles()
  const { hero } = resourcesIndexContent

  const graph = buildResourcesIndexSchemaGraph({
    name: hero.title,
    description: hero.overview,
    articles: articles.map((article) => ({
      name: article.title,
      path: article.path,
    })),
  })

  return <JsonLdScript data={graph} id="schema-resources-index" />
}

export { ResourcesIndexJsonLd }
