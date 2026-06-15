import type { ArticleMetadata } from "@/components/layout/article-layout"
import { getArticlePath } from "@/lib/content/collections"
import type {
  ContentArticleAuthor,
  ContentArticleBase,
  ContentArticleReviewedBy,
  ContentSeo,
} from "@/lib/content/types"

/** Map ISO content dates to layout metadata bar */
export function toArticleLayoutMetadata(
  meta: Pick<
    ContentArticleBase,
    "category" | "publishedAt" | "updatedAt"
  > & {
    readingTime?: string
    author?: ContentArticleAuthor
    reviewedBy?: ContentArticleReviewedBy
  },
): ArticleMetadata {
  return {
    category: meta.category,
    published: meta.publishedAt,
    updated: meta.updatedAt,
    readingTime: meta.readingTime,
    author: meta.author,
    reviewedBy: meta.reviewedBy,
  }
}

export function defineContentSeo(seo: ContentSeo): ContentSeo {
  return seo
}
