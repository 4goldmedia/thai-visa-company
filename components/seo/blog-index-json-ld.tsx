import { getSyncPublishedBlogIndexArticles } from "@/lib/blog"
import { blogIndexContent } from "@/lib/blog/content/index"
import { buildBlogIndexSchemaGraph, JsonLdScript } from "@/lib/seo/schema"

function BlogIndexJsonLd() {
  const articles = getSyncPublishedBlogIndexArticles()
  const { hero } = blogIndexContent

  const graph = buildBlogIndexSchemaGraph({
    path: "/blog",
    name: hero.title,
    description: hero.overview,
    articles: articles.map((article) => ({
      name: article.title,
      path: article.path,
    })),
  })

  return <JsonLdScript data={graph} id="schema-blog-index" />
}

export { BlogIndexJsonLd }
