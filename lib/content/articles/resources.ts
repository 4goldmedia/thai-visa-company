import type { RelatedResourceItem } from "@/components/sections/related-resources"
import { getArticlePath } from "@/lib/content/collections"
import { toArticleLayoutMetadata } from "@/lib/content/schema"
import type {
  ContentArticleBase,
  ContentArticleModule,
  ContentArticleTocItem,
  ContentSeo,
} from "@/lib/content/types"
import type { ResourceCategoryId } from "@/lib/resources/types"
import type { VisaFaqItem } from "@/lib/visas/types"

// -----------------------------------------------------------------------------
// Resource article meta (SEO / resources index)
// -----------------------------------------------------------------------------

export type ResourceArticleIndexMeta = {
  categoryId: ResourceCategoryId
  /** Short label on cards, e.g. Retirement */
  categoryLabel: string
}

export type ResourceArticleMeta = ContentArticleBase & {
  collection: "resources"
  path: `/resources/${string}`
  index: ResourceArticleIndexMeta
  eyebrow: string
  lead: string
  headingId: string
  readingTime?: string
  tableOfContents: ReadonlyArray<ContentArticleTocItem>
  faq: ReadonlyArray<VisaFaqItem>
  related: ReadonlyArray<RelatedResourceItem>
  /**
   * Optional registry slugs in this collection — merged with `related` at route time.
   * Use for articles not yet in MDX (paths resolved when published).
   */
  relatedSlugs?: ReadonlyArray<string>
  cta: {
    title: string
    description: string
    footnote?: string
  }
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

/** Layout + template props derived from collection meta */
export function toResourceArticlePageProps(meta: ResourceArticleMeta) {
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
