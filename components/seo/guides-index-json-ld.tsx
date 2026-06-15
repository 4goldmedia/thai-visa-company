import { getSyncPublishedGuideIndexArticles } from "@/lib/guides"
import { guidesIndexContent } from "@/lib/guides/content/index"
import { buildGuidesIndexSchemaGraph, JsonLdScript } from "@/lib/seo/schema"

function GuidesIndexJsonLd() {
  const articles = getSyncPublishedGuideIndexArticles()
  const { hero } = guidesIndexContent

  const graph = buildGuidesIndexSchemaGraph({
    path: "/guides",
    name: hero.title,
    description: hero.overview,
    articles: articles.map((article) => ({
      name: article.title,
      path: article.path,
    })),
  })

  return <JsonLdScript data={graph} id="schema-guides-index" />
}

export { GuidesIndexJsonLd }
