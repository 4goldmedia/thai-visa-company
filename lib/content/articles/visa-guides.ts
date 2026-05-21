import { getArticlePath } from "@/lib/content/collections"
import { toArticleLayoutMetadata } from "@/lib/content/schema"
import type {
  ContentArticleBase,
  ContentArticleTocItem,
  ContentSeo,
} from "@/lib/content/types"
import type { VisaFaqItem } from "@/lib/visas/types"

/**
 * Long-form visa guides (future route: `/visas/guides/[slug]`).
 * Mirrors resource articles but lives in the visa-guides collection.
 */
export type VisaGuideArticleMeta = ContentArticleBase & {
  collection: "visa-guides"
  path: `/visas/guides/${string}`
  /** Visa slug this guide supports, e.g. `retirement` */
  visaSlug?: string
  eyebrow: string
  lead: string
  headingId: string
  readingTime?: string
  tableOfContents: ReadonlyArray<ContentArticleTocItem>
  faq: ReadonlyArray<VisaFaqItem>
}

type DefineVisaGuideArticleInput = Omit<VisaGuideArticleMeta, "collection" | "path"> & {
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
