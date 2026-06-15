import { buildBlogIndexSchemaGraph, JsonLdScript } from "@/lib/seo/schema"
import type { ResolvedBlogClusterArchive } from "@/lib/blog/routing"
import { blogClusterPath } from "@/lib/blog/types"

type BlogClusterJsonLdProps = {
  context: ResolvedBlogClusterArchive
}

function BlogClusterJsonLd({ context }: BlogClusterJsonLdProps) {
  const { cluster, articles } = context
  const published = articles.filter((article) => article.status !== "planned")
  const path = blogClusterPath(cluster.id)

  const graph = buildBlogIndexSchemaGraph({
    path,
    name: cluster.label,
    description: cluster.description,
    articles: published.map((article) => ({
      name: article.title,
      path: article.path,
    })),
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: cluster.label, path },
    ],
  })

  return <JsonLdScript data={graph} id={`schema-blog-cluster-${cluster.id}`} />
}

export { BlogClusterJsonLd }
