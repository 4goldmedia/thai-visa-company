import type { GuideCategoryId } from "@/lib/guides/types"
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

export type GuideArticleIndexMeta = {
  categoryId: GuideCategoryId
  categoryLabel: string
}

export type GuideArticleMeta = ContentArticleBase &
  ContentArticleLayoutMeta & {
    collection: "guides"
    path: `/guides/${string}`
    index: GuideArticleIndexMeta
    featured?: boolean
    related: ReadonlyArray<ContentRelatedLink>
    relatedSlugs?: ReadonlyArray<string>
    relatedGuideSlugs?: ReadonlyArray<string>
    cta: ContentCta
  }

type DefineGuideArticleInput = Omit<GuideArticleMeta, "collection" | "path"> & {
  seo: ContentSeo
}

export function defineGuideArticle(input: DefineGuideArticleInput): GuideArticleMeta {
  return {
    ...input,
    collection: "guides",
    path: getArticlePath("guides", input.slug) as `/guides/${string}`,
  }
}

export function toGuideArticlePageProps(meta: GuideArticleMeta) {
  const readingTime = resolveReadingTimeForArticle({
    collection: "guides",
    slug: meta.slug,
    readingTime: meta.readingTime,
  })

  return {
    slug: meta.slug,
    collection: meta.collection,
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
    relatedGuideSlugs: meta.relatedGuideSlugs,
    cta: meta.cta,
    schema: meta.schema,
    tags: meta.tags,
    publishedAt: meta.publishedAt,
    updatedAt: meta.updatedAt,
    description: meta.description,
    index: meta.index,
    featured: meta.featured,
  }
}

export type GuideArticlePageProps = ReturnType<typeof toGuideArticlePageProps>
export type GuideArticleModule = ContentArticleModule<GuideArticleMeta>
