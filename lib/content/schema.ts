import type { ArticleMetadata } from "@/components/layout/article-layout"
import { getArticlePath } from "@/lib/content/collections"
import type { ContentArticleBase, ContentSeo } from "@/lib/content/types"

/** Map ISO content dates to layout metadata bar */
export function toArticleLayoutMetadata(
  meta: Pick<
    ContentArticleBase,
    "category" | "publishedAt" | "updatedAt"
  > & { readingTime?: string },
): ArticleMetadata {
  return {
    category: meta.category,
    published: meta.publishedAt,
    updated: meta.updatedAt,
    readingTime: meta.readingTime,
  }
}

export function defineContentSeo(seo: ContentSeo): ContentSeo {
  return seo
}
