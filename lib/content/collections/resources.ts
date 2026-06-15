import { getArticlePath } from "@/lib/content/collections"
import { resolveReadingTimeForArticle } from "@/lib/content/series"
import { toArticleLayoutMetadata } from "@/lib/content/schema"
import type {
  ContentArticleBase,
  ContentArticleLayoutMeta,
  ContentArticleModule,
  ContentCta,
  ContentRelatedLink,
  ContentSeo,
} from "@/lib/content/types"
import type { ResourceCategoryId } from "@/lib/resources/types"

export type ResourceArticleIndexMeta = {
  categoryId: ResourceCategoryId
  categoryLabel: string
}

export type ResourceArticleMeta = ContentArticleBase &
  ContentArticleLayoutMeta & {
    collection: "resources"
    path: `/resources/${string}`
    index: ResourceArticleIndexMeta
    related: ReadonlyArray<ContentRelatedLink>
    relatedSlugs?: ReadonlyArray<string>
    cta: ContentCta
  }

type DefineResourceArticleInput = Omit<
  ResourceArticleMeta,
  "collection" | "path"
> & {
  seo: ContentSeo
}

export function defineResourceArticle(
  input: DefineResourceArticleInput,
): ResourceArticleMeta {
  return {
    ...input,
    collection: "resources",
    path: getArticlePath("resources", input.slug) as `/resources/${string}`,
  }
}

export function toResourceArticlePageProps(meta: ResourceArticleMeta) {
  const readingTime = resolveReadingTimeForArticle({
    collection: "resources",
    slug: meta.slug,
    readingTime: meta.readingTime,
  })

  return {
    slug: meta.slug,
    collection: "resources" as const,
    path: meta.path,
    published: meta.published,
    seo: meta.seo,
    headingId: meta.headingId,
    eyebrow: meta.eyebrow,
    title: meta.title,
    lead: meta.lead,
    answer: meta.answer,
    author: meta.author,
    reviewedBy: meta.reviewedBy,
    heroImage: meta.heroImage ?? meta.schema?.featuredImage,
    topicId: meta.topicId,
    pillarSlug: meta.pillarSlug,
    sources: meta.sources,
    series: meta.series,
    metadata: toArticleLayoutMetadata({
      category: meta.category,
      publishedAt: meta.publishedAt,
      updatedAt: meta.updatedAt,
      readingTime,
      author: meta.author,
      reviewedBy: meta.reviewedBy,
    }),
    tableOfContents: meta.tableOfContents,
    faq: meta.faq,
    related: meta.related,
    relatedSlugs: meta.relatedSlugs,
    cta: meta.cta,
    schema: meta.schema,
    tags: meta.tags,
    publishedAt: meta.publishedAt,
    updatedAt: meta.updatedAt,
    description: meta.description,
    index: meta.index,
  }
}

export type ResourceArticlePageProps = ReturnType<typeof toResourceArticlePageProps>

export type ResourceArticleModule = ContentArticleModule<ResourceArticleMeta>

/** @deprecated Use ResourceArticleMeta */
export type ResourceArticleDefinition = ResourceArticleMeta

/** @deprecated Use ResourceArticlePageProps */
export type ResourceArticlePageContent = ResourceArticlePageProps
