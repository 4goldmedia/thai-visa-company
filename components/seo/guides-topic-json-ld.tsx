import {
  buildGuidesIndexSchemaGraph,
  buildPageSchemaGraph,
  buildService,
  JsonLdScript,
} from "@/lib/seo/schema"
import type { ResolvedGuideTopicHub } from "@/lib/guides/routing"

type GuidesTopicJsonLdProps = {
  context: ResolvedGuideTopicHub
}

function GuidesTopicJsonLd({ context }: GuidesTopicJsonLdProps) {
  const { hub, articles, pillar } = context
  const published = articles.filter((article) => article.status !== "planned")

  const collectionGraph = buildGuidesIndexSchemaGraph({
    path: hub.path,
    name: hub.title,
    description: hub.description,
    articles: published.map((article) => ({
      name: article.title,
      path: article.path,
    })),
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
      { name: hub.title, path: hub.path },
    ],
  })

  if (!pillar) {
    return <JsonLdScript data={collectionGraph} id={`schema-guides-topic-${hub.slug}`} />
  }

  const graph = buildPageSchemaGraph({
    nodes: [
      ...collectionGraph["@graph"],
      buildService({
        path: pillar.path,
        name: pillar.hero.title,
        description: pillar.seo.description,
      }),
    ],
  })

  return <JsonLdScript data={graph} id={`schema-guides-topic-${hub.slug}`} />
}

export { GuidesTopicJsonLd }
