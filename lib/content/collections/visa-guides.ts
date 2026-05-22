import { getArticlePath } from "@/lib/content/collections"
import { toArticleLayoutMetadata } from "@/lib/content/schema"
import type {
  ContentArticleBase,
  ContentArticleLayoutMeta,
  ContentArticleModule,
  ContentSeo,
} from "@/lib/content/types"

export type VisaGuideArticleMeta = ContentArticleBase &
  ContentArticleLayoutMeta & {
    collection: "visa-guides"
    path: `/visas/guides/${string}`
    visaSlug?: string
  }

type DefineVisaGuideArticleInput = Omit<
  VisaGuideArticleMeta,
  "collection" | "path"
> & {
  seo: ContentSeo
}

export function defineVisaGuideArticle(
  input: DefineVisaGuideArticleInput,
): VisaGuideArticleMeta {
  return {
    ...input,
    collection: "visa-guides",
    path: getArticlePath("visa-guides", input.slug) as `/visas/guides/${string}`,
  }
}

export function toVisaGuideArticlePageProps(meta: VisaGuideArticleMeta) {
  return {
    slug: meta.slug,
    path: meta.path,
    published: meta.published,
    seo: meta.seo,
    headingId: meta.headingId,
    eyebrow: meta.eyebrow,
    title: meta.title,
    lead: meta.lead,
    metadata: toArticleLayoutMetadata({
      category: meta.category,
      publishedAt: meta.publishedAt,
      updatedAt: meta.updatedAt,
      readingTime: meta.readingTime,
    }),
    tableOfContents: meta.tableOfContents,
    faq: meta.faq,
    tags: meta.tags,
    visaSlug: meta.visaSlug,
  }
}

export type VisaGuideArticleModule = ContentArticleModule<VisaGuideArticleMeta>
