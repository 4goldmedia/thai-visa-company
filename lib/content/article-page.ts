import type { ArticleMetadata } from "@/components/layout/article-layout"
import type { BlogArticlePageProps } from "@/lib/content/collections/blog"
import type { ResourceArticlePageProps } from "@/lib/content/collections/resources"
import type {
  ContentArticleSchema,
  ContentArticleSeries,
  ContentArticleAuthor,
  ContentArticleReviewedBy,
  ContentCta,
  ContentCollectionId,
  ContentFaqItem,
  ContentRelatedLink,
  ContentSeo,
  ContentSourceRef,
  ContentArticleTocItem,
} from "@/lib/content/types"
import type { ContentTopicId } from "@/lib/content/topics"
import type { VisaSlug } from "@/lib/visas/types"
import type { BlogClusterId } from "@/lib/blog/types"
import type { ResourceCategoryId } from "@/lib/resources/types"

/** Shared article page props for the unified Article Engine template */
export type ArticlePageProps = {
  slug: string
  collection: ContentCollectionId
  path: string
  published: boolean
  seo: ContentSeo
  headingId: string
  eyebrow: string
  title: string
  lead: string
  answer?: string
  author?: ContentArticleAuthor
  reviewedBy?: ContentArticleReviewedBy
  heroImage?: string
  topicId?: ContentTopicId
  pillarSlug?: VisaSlug
  sources?: ReadonlyArray<ContentSourceRef>
  series?: ContentArticleSeries
  metadata: ArticleMetadata
  tableOfContents: ReadonlyArray<ContentArticleTocItem>
  faq: ReadonlyArray<ContentFaqItem>
  related: ReadonlyArray<ContentRelatedLink>
  relatedSlugs?: ReadonlyArray<string>
  cta: ContentCta
  schema?: ContentArticleSchema
  tags: ReadonlyArray<string>
  publishedAt: string
  updatedAt?: string
  description: string
  index?: {
    clusterId?: BlogClusterId
    clusterLabel?: string
    categoryId?: ResourceCategoryId | string
    categoryLabel?: string
  }
  topicHubHref?: string
  topicHubLabel?: string
  relatedGuide?: ContentRelatedLink
  relatedVisas?: ReadonlyArray<ContentRelatedLink>
}

export function toArticlePageProps(
  article: ResourceArticlePageProps | BlogArticlePageProps,
): ArticlePageProps {
  return article
}
