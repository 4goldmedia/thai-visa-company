import {
  buildArticleImageObject,
  resolveArticleFeaturedImageUrl,
} from "@/lib/schema/article-images"
import { buildOrganizationReference } from "@/lib/schema/organization"
import { getSchemaEntityIds } from "@/lib/schema/site"
import type { ArticleAuthorInput, ArticleInput, JsonLdNode } from "@/lib/schema/types"
import { compactNode, toAbsoluteUrl } from "@/lib/schema/utils"
import { getSiteUrl } from "@/lib/seo"
import { siteBrand, siteLocale } from "@/lib/site"

function resolveArticleAuthor(
  author: ArticleInput["author"],
  publisher: JsonLdNode,
): JsonLdNode {
  if (!author) return publisher
  if ("@type" in author && typeof author["@type"] === "string") {
    return author as JsonLdNode
  }

  const input = author as ArticleAuthorInput
  return compactNode({
    "@type": input.type ?? "Organization",
    name: input.name,
    ...(input.url ? { url: input.url } : {}),
  })
}

export function buildArticle(input: ArticleInput): JsonLdNode {
  const pageUrl = toAbsoluteUrl(input.path)
  const publisher = input.publisher ?? buildOrganizationReference()
  const author = resolveArticleAuthor(input.author, publisher)
  const ids = getSchemaEntityIds()
  const slug = input.slug ?? input.path.split("/").filter(Boolean).pop() ?? "article"

  const imageUrl = resolveArticleFeaturedImageUrl({
    slug,
    featuredImage: input.featuredImage,
  })

  return compactNode({
    "@type": input.type ?? "Article",
    "@id": `${pageUrl}#article`,
    headline: input.headline,
    name: input.headline,
    description: input.description,
    ...(input.abstract ? { abstract: input.abstract } : {}),
    url: pageUrl,
    inLanguage: siteLocale.html,
    datePublished: input.datePublished,
    dateModified: input.dateUpdated ?? input.datePublished,
    ...(input.articleSection ? { articleSection: input.articleSection } : {}),
    ...(input.tags?.length ? { keywords: input.tags.join(", ") } : {}),
    author,
    publisher,
    isPartOf: {
      "@type": "WebSite",
      "@id": ids.website,
      name: siteBrand.name,
      url: getSiteUrl().origin,
    },
    ...(imageUrl
      ? {
          image: buildArticleImageObject(imageUrl),
          thumbnailUrl: imageUrl,
        }
      : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  })
}
