/**
 * Internal linking automation — semantic related content across articles and visas.
 *
 * Integrates: article registry, visa registry, content types, SEO link model.
 * Strategies: manual curation (highest priority) → explicit slugs → tag/category/topic scoring.
 */

import {
  blogMetaToIndexCard,
  guideMetaToIndexCard,
  resourceMetaToIndexCard,
} from "@/lib/content/adapters"
import type { BlogArticleMeta } from "@/lib/content/collections/blog"
import type { GuideArticleMeta } from "@/lib/content/collections/guides"
import type { ResourceArticleMeta } from "@/lib/content/collections/resources"
import { toContentArticleKey } from "@/lib/content/collections"
import {
  getRegistryKeysForCollection,
  isRegisteredContentArticleKey,
  loadArticleMeta,
  parseContentArticleKey,
  type RegisteredContentArticleKey,
} from "@/lib/content/registry"
import type { ContentArticleBase } from "@/lib/content/types"
import type {
  ContentCollectionId,
  ContentRelatedLink,
  ContentSlug,
} from "@/lib/content/types"
import {
  getVisaFromRegistry,
  isVisaSlug,
  isVisaPublished,
} from "@/lib/visas/registry"
import { contentTopicIds, type ContentTopicId } from "@/lib/content/topics"
import { getPublishedVisaSlugs } from "@/lib/visas/publish"
import type { VisaPageContent, VisaSlug } from "@/lib/visas/types"

export { contentTopicIds, type ContentTopicId } from "@/lib/content/topics"

// -----------------------------------------------------------------------------
// Scoring weights — explicit curation always wins over algorithmic matches
// -----------------------------------------------------------------------------

const SCORE = {
  MANUAL: 1_000,
  EXPLICIT_SLUG: 500,
  TOPIC_CLUSTER: 50,
  TAG_EXACT: 40,
  CATEGORY: 35,
  RESOURCE_CATEGORY: 30,
  VISA_TOPIC: 60,
  TAG_PARTIAL: 20,
  KEYWORD: 15,
  CTA_CONTACT: 200,
  CTA_VISA: 180,
  CTA_RESOURCES: 120,
} as const

const DEFAULT_MAX_RELATED = 3
const DEFAULT_MAX_CROSS_LINKS = 3

// -----------------------------------------------------------------------------
// Semantic topic taxonomy — topical clusters for AI-search + crawl depth
// -----------------------------------------------------------------------------

export type ContentTopicDefinition = {
  id: ContentTopicId
  label: string
  tags: ReadonlyArray<string>
  categories: ReadonlyArray<string>
  resourceCategoryIds: ReadonlyArray<string>
  visaSlugs: ReadonlyArray<VisaSlug>
}

export const contentTopicTaxonomy: Record<ContentTopicId, ContentTopicDefinition> =
  {
    retirement: {
      id: "retirement",
      label: "Retirement",
      tags: ["retirement", "retirement visa", "long-stay", "retire", "age 50"],
      categories: ["visa guide", "retirement"],
      resourceCategoryIds: ["visa-guides"],
      visaSlugs: ["retirement"],
    },
    dtv: {
      id: "dtv",
      label: "DTV",
      tags: ["dtv", "digital nomad", "remote work", "destination thailand"],
      categories: ["visa guide", "dtv"],
      resourceCategoryIds: ["visa-guides"],
      visaSlugs: ["dtv"],
    },
    elite: {
      id: "elite",
      label: "Elite",
      tags: ["elite", "thailand elite", "premium", "membership"],
      categories: ["visa guide", "elite"],
      resourceCategoryIds: ["visa-guides"],
      visaSlugs: ["elite"],
    },
    business: {
      id: "business",
      label: "Business",
      tags: ["business", "work visa", "employment", "company"],
      categories: ["visa guide", "business"],
      resourceCategoryIds: ["visa-guides"],
      visaSlugs: ["business"],
    },
    education: {
      id: "education",
      label: "Education",
      tags: ["education", "student", "study"],
      categories: ["visa guide", "education"],
      resourceCategoryIds: ["visa-guides"],
      visaSlugs: ["education"],
    },
    marriage: {
      id: "marriage",
      label: "Marriage & family",
      tags: ["marriage", "spouse", "family", "dependent"],
      categories: ["visa guide", "marriage"],
      resourceCategoryIds: ["visa-guides"],
      visaSlugs: ["marriage"],
    },
    tourist: {
      id: "tourist",
      label: "Tourist",
      tags: ["tourist", "tourism", "short stay", "holiday"],
      categories: ["visa guide", "tourist"],
      resourceCategoryIds: ["visa-guides"],
      visaSlugs: ["tourist"],
    },
    ltr: {
      id: "ltr",
      label: "Long-Term Resident",
      tags: ["ltr", "long-term resident", "10-year"],
      categories: ["visa guide", "ltr"],
      resourceCategoryIds: ["visa-guides"],
      visaSlugs: ["ltr"],
    },
    process: {
      id: "process",
      label: "Process & timelines",
      tags: ["timeline", "processing", "how long", "extension", "renewal"],
      categories: ["timelines", "process"],
      resourceCategoryIds: ["process"],
      visaSlugs: [],
    },
    general: {
      id: "general",
      label: "Thailand visas",
      tags: ["thailand visa", "visa application", "visa support"],
      categories: ["visa guide"],
      resourceCategoryIds: ["visa-guides", "comparisons"],
      visaSlugs: [],
    },
  }

/** Default visa-to-visa clusters — override per page with `relatedVisaSlugs` */
export const defaultRelatedVisaSlugs: Partial<
  Record<VisaSlug, ReadonlyArray<VisaSlug>>
> = {
  retirement: ["dtv", "elite"],
  dtv: ["retirement", "tourist", "business"],
  elite: ["retirement", "dtv"],
  business: ["dtv", "education"],
  education: ["business", "retirement"],
  marriage: ["tourist", "retirement"],
  tourist: ["dtv", "marriage"],
  ltr: ["elite", "retirement"],
}

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export type LinkScoreReason =
  | "manual"
  | "explicit-slug"
  | "tag-exact"
  | "tag-partial"
  | "category"
  | "topic"
  | "resource-category"
  | "visa-topic"
  | "keyword"
  | "cta"

export type ScoredRelatedLink = {
  link: ContentRelatedLink
  score: number
  reasons: ReadonlyArray<LinkScoreReason>
}

export type ContentArticleSummary = {
  key: `${ContentCollectionId}/${string}`
  collection: ContentCollectionId
  slug: ContentSlug
  path: string
  title: string
  description: string
  category: string
  tags: ReadonlyArray<string>
  publishedAt: string
  updatedAt?: string
  published: boolean
  readingTime?: string
}

export type ArticleLinkSource = {
  collection: ContentCollectionId
  slug: ContentSlug
  path: string
  title: string
  description: string
  category: string
  tags: ReadonlyArray<string>
  resourceCategoryId?: string
}

export type VisaLinkSource = {
  slug: VisaSlug
  path: string
  title: string
  description: string
  keywords?: ReadonlyArray<string>
}

export type ResolveRelatedArticlesInput = {
  collection: ContentCollectionId
  slug: ContentSlug
  related: ReadonlyArray<ContentRelatedLink>
  relatedSlugs?: ReadonlyArray<string>
  tags?: ReadonlyArray<string>
  category?: string
  resourceCategoryId?: string
  max?: number
}

export type ResolveRelatedVisasInput = Pick<
  VisaPageContent,
  "slug" | "hero" | "seo" | "path" | "relatedVisas" | "relatedVisaSlugs"
>

export type CtaLinkIntent = "contact" | "visa" | "resources" | "article"

export type CtaLinkOpportunity = ContentRelatedLink & {
  intent: CtaLinkIntent
  score: number
}

async function loadArticleMetaBySlug(
  collection: ContentCollectionId,
  slug: ContentSlug,
): Promise<ContentArticleBase | null> {
  const key = toContentArticleKey(collection, slug)
  if (!isRegisteredContentArticleKey(key)) return null
  return loadArticleMeta(key)
}

// -----------------------------------------------------------------------------
// Normalization & topic utilities
// -----------------------------------------------------------------------------

export function normalizeTag(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ")
}

export function normalizeCategory(value: string): string {
  return normalizeTag(value)
}

export function getTopicsForTags(
  tags: ReadonlyArray<string>,
): ReadonlyArray<ContentTopicId> {
  const normalized = tags.map(normalizeTag)
  const matched = new Set<ContentTopicId>()

  for (const topicId of contentTopicIds) {
    const def = contentTopicTaxonomy[topicId]
    const hit = def.tags.some((topicTag) =>
      normalized.some(
        (tag) =>
          tag === normalizeTag(topicTag) ||
          tag.includes(normalizeTag(topicTag)) ||
          normalizeTag(topicTag).includes(tag),
      ),
    )
    if (hit) matched.add(topicId)
  }

  if (matched.size === 0) matched.add("general")
  return [...matched]
}

export function getTopicsForCategory(category: string): ReadonlyArray<ContentTopicId> {
  const normalized = normalizeCategory(category)
  const matched: ContentTopicId[] = []

  for (const topicId of contentTopicIds) {
    const def = contentTopicTaxonomy[topicId]
    if (def.categories.some((c) => normalizeCategory(c) === normalized)) {
      matched.push(topicId)
    }
  }

  return matched.length ? matched : ["general"]
}

export function getTopicsForVisaSlug(slug: VisaSlug): ReadonlyArray<ContentTopicId> {
  for (const topicId of contentTopicIds) {
    if (contentTopicTaxonomy[topicId].visaSlugs.includes(slug)) {
      return [topicId]
    }
  }
  return ["general"]
}

export function getVisaSlugsForTopics(
  topics: ReadonlyArray<ContentTopicId>,
): VisaSlug[] {
  const slugs = new Set<VisaSlug>()
  for (const topic of topics) {
    for (const visaSlug of contentTopicTaxonomy[topic].visaSlugs) {
      slugs.add(visaSlug)
    }
  }
  return [...slugs]
}

export function getSharedTopics(
  a: ReadonlyArray<ContentTopicId>,
  b: ReadonlyArray<ContentTopicId>,
): ContentTopicId[] {
  const setB = new Set(b)
  return a.filter((topic) => setB.has(topic))
}

// -----------------------------------------------------------------------------
// Link builders
// -----------------------------------------------------------------------------

export function articleSummaryToRelatedLink(
  summary: ContentArticleSummary,
): ContentRelatedLink {
  return {
    category: summary.category,
    title: summary.title,
    description: summary.description,
    href: summary.path,
  }
}

export function visaToRelatedLink(visa: VisaPageContent): ContentRelatedLink {
  return {
    category: "Visa service",
    title: visa.hero.title,
    description: visa.seo.description,
    href: visa.path,
  }
}

export function metaToArticleLinkSource(
  meta: ContentArticleBase & {
    index?: { categoryId?: string; clusterId?: string }
  },
  collection: ContentCollectionId,
  slug: ContentSlug,
): ArticleLinkSource {
  const index = "index" in meta ? meta.index : undefined
  const resourceCategoryId =
    index && "clusterId" in index && index.clusterId
      ? String(index.clusterId)
      : index?.categoryId
        ? String(index.categoryId)
        : undefined

  return {
    collection,
    slug,
    path: meta.path,
    title: meta.title,
    description: meta.description,
    category: meta.category,
    tags: meta.tags,
    resourceCategoryId,
  }
}

// -----------------------------------------------------------------------------
// Scoring
// -----------------------------------------------------------------------------

function scoreTagOverlap(
  sourceTags: ReadonlyArray<string>,
  targetTags: ReadonlyArray<string>,
): { score: number; reasons: LinkScoreReason[] } {
  let score = 0
  const reasons: LinkScoreReason[] = []
  const normalizedTarget = targetTags.map(normalizeTag)

  for (const tag of sourceTags) {
    const normalized = normalizeTag(tag)
    if (normalizedTarget.includes(normalized)) {
      score += SCORE.TAG_EXACT
      reasons.push("tag-exact")
      continue
    }
    const partial = normalizedTarget.some(
      (t) => t.includes(normalized) || normalized.includes(t),
    )
    if (partial) {
      score += SCORE.TAG_PARTIAL
      reasons.push("tag-partial")
    }
  }

  return { score, reasons }
}

export function scoreArticleToArticle(
  source: ArticleLinkSource,
  target: ContentArticleSummary,
): ScoredRelatedLink {
  const reasons: LinkScoreReason[] = []
  let score = 0

  const tagScore = scoreTagOverlap(source.tags, target.tags)
  score += tagScore.score
  reasons.push(...tagScore.reasons)

  if (
    normalizeCategory(source.category) === normalizeCategory(target.category)
  ) {
    score += SCORE.CATEGORY
    reasons.push("category")
  }

  if (
    source.resourceCategoryId &&
    (target.key.startsWith("blog/") || target.key.startsWith("guides/"))
  ) {
    score += SCORE.RESOURCE_CATEGORY
    reasons.push("resource-category")
  }

  const sharedTopics = getSharedTopics(
    getTopicsForTags(source.tags),
    getTopicsForTags(target.tags),
  )
  if (sharedTopics.length > 0) {
    score += sharedTopics.length * SCORE.TOPIC_CLUSTER
    reasons.push("topic")
  }

  return {
    link: articleSummaryToRelatedLink(target),
    score,
    reasons,
  }
}

export function scoreArticleToVisa(
  source: ArticleLinkSource,
  visa: VisaPageContent,
): ScoredRelatedLink {
  const reasons: LinkScoreReason[] = []
  let score = 0

  const articleTopics = getTopicsForTags(source.tags)
  const visaTopics = getTopicsForVisaSlug(visa.slug)
  const shared = getSharedTopics(articleTopics, visaTopics)

  if (shared.length > 0) {
    score += shared.length * SCORE.VISA_TOPIC
    reasons.push("visa-topic")
  }

  const tagScore = scoreTagOverlap(
    source.tags,
    [...(visa.seo.keywords ?? []), visa.slug, visa.hero.title],
  )
  score += tagScore.score
  reasons.push(...tagScore.reasons)

  return {
    link: visaToRelatedLink(visa),
    score,
    reasons,
  }
}

export function scoreVisaToArticle(
  visa: VisaLinkSource,
  article: ContentArticleSummary,
): ScoredRelatedLink {
  const pseudoSource: ArticleLinkSource = {
    collection: "blog",
    slug: visa.slug,
    path: visa.path,
    title: visa.title,
    description: visa.description,
    category: "Visa service",
    tags: [...(visa.keywords ?? []), visa.slug],
  }
  return scoreArticleToArticle(pseudoSource, article)
}

// -----------------------------------------------------------------------------
// Merge & rank
// -----------------------------------------------------------------------------

async function isPublishedArticleHrefForCollection(
  href: string,
  collection: "blog" | "guides",
): Promise<boolean> {
  const prefix = collection === "blog" ? "/blog" : "/guides"
  const match = href.match(new RegExp(`^${prefix}/([^/?#]+)/?$`))
  if (!match) return true

  const key = toContentArticleKey(collection, match[1] as ContentSlug)
  if (!isRegisteredContentArticleKey(key)) return false

  const meta = await loadArticleMeta(key)
  return meta?.published === true
}

/** True when a `/blog/*` href resolves to a published MDX article */
export async function isPublishedBlogHref(href: string): Promise<boolean> {
  return isPublishedArticleHrefForCollection(href, "blog")
}

/** True when a `/guides/*` href resolves to a published MDX article */
export async function isPublishedGuideHref(href: string): Promise<boolean> {
  return isPublishedArticleHrefForCollection(href, "guides")
}

export async function isPublishedArticleHref(href: string): Promise<boolean> {
  if (href.startsWith("/blog/")) return isPublishedBlogHref(href)
  if (href.startsWith("/guides/")) return isPublishedGuideHref(href)
  return true
}

/** @deprecated Use `isPublishedArticleHref` */
export const isPublishedResourceHref = isPublishedArticleHref

/** Drop planned resource stubs so visa/article pages never link to 404s */
export async function filterPublishedRelatedLinks(
  links: ReadonlyArray<ContentRelatedLink>,
): Promise<ContentRelatedLink[]> {
  const filtered = await Promise.all(
    links.map(async (item) => ({
      item,
      published: await isPublishedArticleHref(item.href),
    })),
  )

  return filtered.filter((entry) => entry.published).map((entry) => entry.item)
}

/** Merge link lists in order — manual entries first, deduped by href */
export function mergeRelatedLinks(
  ...lists: ReadonlyArray<ReadonlyArray<ContentRelatedLink>>
): ContentRelatedLink[] {
  const seen = new Set<string>()
  const merged: ContentRelatedLink[] = []

  for (const list of lists) {
    for (const item of list) {
      if (seen.has(item.href)) continue
      seen.add(item.href)
      merged.push(item)
    }
  }

  return merged
}

export function mergeScoredRelatedLinks(
  candidates: ReadonlyArray<ScoredRelatedLink>,
  options: { max: number; excludeHrefs?: ReadonlyArray<string> },
): ContentRelatedLink[] {
  const exclude = new Set(options.excludeHrefs ?? [])
  const byHref = new Map<string, ScoredRelatedLink>()

  for (const candidate of candidates) {
    const href = candidate.link.href
    if (exclude.has(href)) continue

    const existing = byHref.get(href)
    if (!existing || candidate.score > existing.score) {
      byHref.set(href, candidate)
    }
  }

  return [...byHref.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, options.max)
    .map((item) => item.link)
}

export function groupLinksByTopic(
  links: ReadonlyArray<ContentRelatedLink>,
): Array<{ topicId: ContentTopicId; label: string; links: ContentRelatedLink[] }> {
  const groups = new Map<ContentTopicId, ContentRelatedLink[]>()

  for (const link of links) {
    const topics = getTopicsForTags([
      link.category,
      link.title,
      link.description,
    ])
    const primary = topics[0] ?? "general"
    const list = groups.get(primary) ?? []
    list.push(link)
    groups.set(primary, list)
  }

  return [...groups.entries()].map(([topicId, topicLinks]) => ({
    topicId,
    label: contentTopicTaxonomy[topicId].label,
    links: topicLinks,
  }))
}

export function groupLinksByTag(
  sourceTags: ReadonlyArray<string>,
  links: ReadonlyArray<ContentRelatedLink>,
): Array<{ tag: string; links: ContentRelatedLink[] }> {
  const map = new Map<string, ContentRelatedLink[]>()

  for (const tag of sourceTags) {
    const normalized = normalizeTag(tag)
    const matching = links.filter((link) => {
      const haystack = normalizeTag(
        `${link.title} ${link.description} ${link.category}`,
      )
      return haystack.includes(normalized)
    })
    if (matching.length) map.set(tag, matching)
  }

  return [...map.entries()].map(([tag, tagLinks]) => ({ tag, links: tagLinks }))
}

// -----------------------------------------------------------------------------
// Article ↔ article
// -----------------------------------------------------------------------------

function toArticleSummary(
  key: RegisteredContentArticleKey,
  meta: ContentArticleBase,
): ContentArticleSummary {
  const parsed = parseContentArticleKey(key)
  return {
    key,
    collection: parsed?.collection ?? meta.collection,
    slug: meta.slug,
    path: meta.path,
    title: meta.title,
    description: meta.description,
    category: meta.category,
    tags: meta.tags,
    publishedAt: meta.publishedAt,
    updatedAt: meta.updatedAt,
    published: meta.published,
    readingTime:
      "readingTime" in meta && typeof meta.readingTime === "string"
        ? meta.readingTime
        : undefined,
  }
}

async function loadPublishedArticleSummaries(
  collection: ContentCollectionId,
): Promise<ContentArticleSummary[]> {
  const keys = getRegistryKeysForCollection(collection)
  const summaries = await Promise.all(
    keys.map(async (key) => {
      if (!isRegisteredContentArticleKey(key)) return null
      const meta = await loadArticleMeta(key)
      if (!meta?.published) return null
      return toArticleSummary(key, meta)
    }),
  )
  return summaries
    .filter((item): item is ContentArticleSummary => item !== null)
    .sort(
      (a, b) =>
        Date.parse(b.updatedAt ?? b.publishedAt) -
        Date.parse(a.updatedAt ?? a.publishedAt),
    )
}

export async function rankRelatedArticles(
  source: ArticleLinkSource,
  options: { collection?: ContentCollectionId; max?: number } = {},
): Promise<ScoredRelatedLink[]> {
  const collection = options.collection ?? source.collection
  const candidates = await loadPublishedArticleSummaries(collection)

  return candidates
    .filter((target) => target.slug !== source.slug)
    .map((target) => scoreArticleToArticle(source, target))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
}

export async function resolveRelatedArticles(
  input: ResolveRelatedArticlesInput,
): Promise<ReadonlyArray<ContentRelatedLink>> {
  const max = input.max ?? DEFAULT_MAX_RELATED
  const scored: ScoredRelatedLink[] = []
  const excludeHrefs = new Set<string>()

  for (const [index, link] of input.related.entries()) {
    if (!(await isPublishedArticleHref(link.href))) continue

    scored.push({
      link,
      score: SCORE.MANUAL - index,
      reasons: ["manual"],
    })
    excludeHrefs.add(link.href)
  }

  if (input.relatedSlugs?.length) {
    for (const [index, relatedSlug] of input.relatedSlugs.entries()) {
      if (relatedSlug === input.slug) continue

      const meta = await loadArticleMetaBySlug(input.collection, relatedSlug)
      if (!meta?.published) continue

      const href = meta.path
      if (excludeHrefs.has(href)) continue

      const relatedLink: ContentRelatedLink =
        input.collection === "blog" && isBlogArticleMeta(meta)
          ? (() => {
              const card = blogMetaToIndexCard(meta)
              return {
                category: card.category,
                title: card.title,
                description: card.description,
                href: card.path,
              }
            })()
          : input.collection === "guides" && isGuideArticleMeta(meta)
            ? (() => {
                const card = guideMetaToIndexCard(meta)
                return {
                  category: card.category,
                  title: card.title,
                  description: card.description,
                  href: card.path,
                }
              })()
            : input.collection === "resources" && isResourceArticleMeta(meta)
            ? (() => {
                const card = resourceMetaToIndexCard(meta)
                return {
                  category: card.category,
                  title: card.title,
                  description: card.description,
                  href: card.path,
                }
              })()
            : {
              category: meta.category,
              title: meta.title,
              description: meta.description,
              href: meta.path,
            }

      scored.push({
        link: relatedLink,
        score: SCORE.EXPLICIT_SLUG - index,
        reasons: ["explicit-slug"],
      })
      excludeHrefs.add(href)
    }
  }

  const meta = await loadArticleMetaBySlug(input.collection, input.slug)
  const source: ArticleLinkSource = meta
    ? metaToArticleLinkSource(meta, input.collection, input.slug)
    : {
        collection: input.collection,
        slug: input.slug,
        path: `/${input.collection}/${input.slug}`,
        title: "",
        description: "",
        category: input.category ?? "",
        tags: input.tags ?? [],
        resourceCategoryId: input.resourceCategoryId,
      }

  const semantic = await rankRelatedArticles(source, {
    collection: input.collection,
  })

  for (const item of semantic) {
    if (!excludeHrefs.has(item.link.href)) {
      scored.push(item)
    }
  }

  return mergeScoredRelatedLinks(scored, {
    max,
    excludeHrefs: [source.path],
  })
}

function isBlogArticleMeta(meta: ContentArticleBase): meta is BlogArticleMeta {
  return meta.collection === "blog"
}

function isGuideArticleMeta(meta: ContentArticleBase): meta is GuideArticleMeta {
  return meta.collection === "guides"
}

function isResourceArticleMeta(
  meta: ContentArticleBase,
): meta is ResourceArticleMeta {
  return meta.collection === "resources"
}

// -----------------------------------------------------------------------------
// Visa ↔ visa
// -----------------------------------------------------------------------------

export function rankRelatedVisas(
  source: VisaLinkSource,
  options: { slugHints?: ReadonlyArray<VisaSlug> } = {},
): ScoredRelatedLink[] {
  const scored: ScoredRelatedLink[] = []
  const slugHints =
    options.slugHints ?? defaultRelatedVisaSlugs[source.slug] ?? []

  for (const [index, relatedSlug] of slugHints.entries()) {
    if (relatedSlug === source.slug || !isVisaSlug(relatedSlug)) continue
    const relatedVisa = getVisaFromRegistry(relatedSlug)
    if (!isVisaPublished(relatedVisa)) continue
    scored.push({
      link: visaToRelatedLink(relatedVisa),
      score: SCORE.EXPLICIT_SLUG - index,
      reasons: ["explicit-slug"],
    })
  }

  for (const visaSlug of getPublishedVisaSlugs()) {
    if (visaSlug === source.slug) continue
    const visa = getVisaFromRegistry(visaSlug)
    const item = scoreArticleToVisa(
      {
        collection: "blog",
        slug: source.slug,
        path: source.path,
        title: source.title,
        description: source.description,
        category: "Visa service",
        tags: [...(source.keywords ?? []), source.slug],
      },
      visa,
    )
    if (item.score > 0) scored.push(item)
  }

  return scored.sort((a, b) => b.score - a.score)
}

export function resolveRelatedVisas(
  input: ResolveRelatedVisasInput,
): ReadonlyArray<ContentRelatedLink> {
  const max = DEFAULT_MAX_RELATED
  const scored: ScoredRelatedLink[] = []
  const excludeHrefs = new Set<string>()

  for (const [index, link] of (input.relatedVisas?.items ?? []).entries()) {
    scored.push({
      link,
      score: SCORE.MANUAL - index,
      reasons: ["manual"],
    })
    excludeHrefs.add(link.href)
  }

  const source: VisaLinkSource = {
    slug: input.slug,
    path: input.path,
    title: input.hero.title,
    description: input.seo.description,
    keywords: input.seo.keywords,
  }

  const hints = input.relatedVisaSlugs ?? defaultRelatedVisaSlugs[input.slug]
  const ranked = rankRelatedVisas(source, { slugHints: hints })

  for (const item of ranked) {
    if (!excludeHrefs.has(item.link.href)) scored.push(item)
  }

  return mergeScoredRelatedLinks(scored, {
    max,
    excludeHrefs: [input.path],
  })
}

// -----------------------------------------------------------------------------
// Cross-type: article ↔ visa
// -----------------------------------------------------------------------------

export async function resolveRelatedVisasForArticle(
  source: ArticleLinkSource,
  options: { max?: number } = {},
): Promise<ReadonlyArray<ContentRelatedLink>> {
  const max = options.max ?? DEFAULT_MAX_CROSS_LINKS
  const topics = getTopicsForTags(source.tags)
  const visaSlugs = getVisaSlugsForTopics(topics)

  const scored: ScoredRelatedLink[] = visaSlugs
    .filter((visaSlug) => isVisaSlug(visaSlug) && isVisaPublished(getVisaFromRegistry(visaSlug)))
    .map((visaSlug, index) => ({
      link: visaToRelatedLink(getVisaFromRegistry(visaSlug)),
      score: SCORE.VISA_TOPIC - index,
      reasons: ["visa-topic"] as const,
    }))

  for (const visaSlug of getPublishedVisaSlugs()) {
    const visa = getVisaFromRegistry(visaSlug)
    const item = scoreArticleToVisa(source, visa)
    if (item.score > 0) scored.push(item)
  }

  return mergeScoredRelatedLinks(scored, { max, excludeHrefs: [source.path] })
}

export async function resolveRelatedArticlesForVisa(
  visa: Pick<VisaPageContent, "slug" | "hero" | "seo" | "path">,
  options: { max?: number; collection?: ContentCollectionId } = {},
): Promise<ReadonlyArray<ContentRelatedLink>> {
  const max = options.max ?? DEFAULT_MAX_CROSS_LINKS
  const collection = options.collection ?? "guides"

  const source: VisaLinkSource = {
    slug: visa.slug,
    path: visa.path,
    title: visa.hero.title,
    description: visa.seo.description,
    keywords: visa.seo.keywords,
  }

  const candidates = await loadPublishedArticleSummaries(collection)
  const scored = candidates
    .map((article) => scoreVisaToArticle(source, article))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  return mergeScoredRelatedLinks(scored, { max, excludeHrefs: [visa.path] })
}

// -----------------------------------------------------------------------------
// CTA-aware linking
// -----------------------------------------------------------------------------

const CTA_PATHS = {
  contact: "/consultation",
  guides: "/guides",
  blog: "/blog",
} as const

export function resolveCtaLinkOpportunities(input: {
  sourceType: "article" | "visa"
  tags?: ReadonlyArray<string>
  visaSlug?: VisaSlug
  articlePath?: string
  max?: number
}): ReadonlyArray<CtaLinkOpportunity> {
  const max = input.max ?? 4
  const opportunities: CtaLinkOpportunity[] = [
    {
      intent: "contact",
      score: SCORE.CTA_CONTACT,
      category: "Support",
      title: "Request a consultation",
      description:
        "Questions about your visa file? Message us on LINE or WhatsApp.",
      href: CTA_PATHS.contact,
    },
    {
      intent: "resources",
      score: SCORE.CTA_RESOURCES,
      category: "Guides",
      title: "Thailand visa guides",
      description: "Evergreen answers on requirements, timelines, and preparation.",
      href: CTA_PATHS.guides,
    },
  ]

  const topics = getTopicsForTags(input.tags ?? [])
  const visaSlugs = input.visaSlug
    ? [input.visaSlug]
    : getVisaSlugsForTopics(topics)

  for (const [index, slug] of visaSlugs.entries()) {
    if (!isVisaSlug(slug)) continue
    const visa = getVisaFromRegistry(slug)
    if (!isVisaPublished(visa)) continue
    opportunities.push({
      intent: "visa",
      score: SCORE.CTA_VISA - index,
      ...visaToRelatedLink(visa),
    })
  }

  return opportunities
    .filter((item) => item.href !== input.articlePath)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
}

// -----------------------------------------------------------------------------
// Unified cross-link resolver
// -----------------------------------------------------------------------------

export type ResolvedCrossLinks = {
  articles: ReadonlyArray<ContentRelatedLink>
  visas: ReadonlyArray<ContentRelatedLink>
  cta: ReadonlyArray<CtaLinkOpportunity>
}

export async function resolveArticleCrossLinks(
  input: ResolveRelatedArticlesInput,
): Promise<ResolvedCrossLinks> {
  const meta = await loadArticleMetaBySlug(input.collection, input.slug)
  const source = meta
    ? metaToArticleLinkSource(meta, input.collection, input.slug)
    : ({
        collection: input.collection,
        slug: input.slug,
        path: `/${input.collection}/${input.slug}`,
        title: "",
        description: "",
        category: input.category ?? "",
        tags: input.tags ?? [],
        resourceCategoryId: input.resourceCategoryId,
      } satisfies ArticleLinkSource)

  const [articles, visas] = await Promise.all([
    resolveRelatedArticles({
      ...input,
      tags: input.tags ?? source.tags,
      category: input.category ?? source.category,
      resourceCategoryId:
        input.resourceCategoryId ?? source.resourceCategoryId,
    }),
    resolveRelatedVisasForArticle(source),
  ])

  const cta = resolveCtaLinkOpportunities({
    sourceType: "article",
    tags: source.tags,
    articlePath: source.path,
  })

  return { articles, visas, cta }
}

export async function resolveVisaCrossLinks(
  visa: ResolveRelatedVisasInput,
): Promise<ResolvedCrossLinks> {
  const [articles, visas] = await Promise.all([
    resolveRelatedArticlesForVisa(visa),
    Promise.resolve(resolveRelatedVisas(visa)),
  ])

  const cta = resolveCtaLinkOpportunities({
    sourceType: "visa",
    tags: [...(visa.seo.keywords ?? []), visa.slug],
    visaSlug: visa.slug,
  })

  return { articles, visas, cta }
}
