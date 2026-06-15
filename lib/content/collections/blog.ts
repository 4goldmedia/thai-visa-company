import type { BlogClusterId } from "@/lib/blog/types"
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

export type BlogArticleContentType =
  | "guide"
  | "update"
  | "comparison"
  | "news"

export type BlogArticleIndexMeta = {
  clusterId: BlogClusterId
  clusterLabel: string
}

export type BlogArticleMeta = ContentArticleBase &
  ContentArticleLayoutMeta & {
    collection: "blog"
    path: `/blog/${string}`
    index: BlogArticleIndexMeta
    contentType?: BlogArticleContentType
    featured?: boolean
    related: ReadonlyArray<ContentRelatedLink>
    relatedSlugs?: ReadonlyArray<string>
    /** Canonical evergreen guide this post supplements */
    relatedGuideSlug?: string
    cta: ContentCta
  }

type DefineBlogArticleInput = Omit<BlogArticleMeta, "collection" | "path"> & {
  seo: ContentSeo
}

export function defineBlogArticle(input: DefineBlogArticleInput): BlogArticleMeta {
  return {
    ...input,
    collection: "blog",
    path: getArticlePath("blog", input.slug) as `/blog/${string}`,
  }
}

export function toBlogArticlePageProps(meta: BlogArticleMeta) {
  const readingTime = resolveReadingTimeForArticle({
    collection: "blog",
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
    relatedGuideSlug: meta.relatedGuideSlug,
    cta: meta.cta,
    schema: meta.schema,
    tags: meta.tags,
    publishedAt: meta.publishedAt,
    updatedAt: meta.updatedAt,
    description: meta.description,
    index: meta.index,
    contentType: meta.contentType,
    featured: meta.featured,
  }
}

export type BlogArticlePageProps = ReturnType<typeof toBlogArticlePageProps>
export type BlogArticleModule = ContentArticleModule<BlogArticleMeta>
