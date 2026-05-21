import type { Metadata } from "next"

import type { ResourceArticleMeta } from "@/lib/content"
import { createPageMetadata, resolvePageTitle } from "@/lib/seo"

export function buildResourceArticleMetadata(meta: ResourceArticleMeta): Metadata {
  const title = meta.seo.ogTitle ?? meta.seo.title
  const description = meta.seo.ogDescription ?? meta.seo.description
  const resolvedTitle = resolvePageTitle(title)

  const base = createPageMetadata({
    title,
    description,
    path: meta.path,
    keywords: meta.seo.keywords,
    noIndex: meta.seo.noIndex,
  })

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      title: resolvedTitle,
      description,
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt ?? meta.publishedAt,
      tags: meta.tags,
    },
    twitter: base.twitter,
  }
}
