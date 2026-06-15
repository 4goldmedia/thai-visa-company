import { readFileSync } from "node:fs"
import { join } from "node:path"

import { getArticlePath } from "@/lib/content/collections"
import {
  getRegistryKeysForCollection,
  isRegisteredContentArticleKey,
  loadArticleMeta,
} from "@/lib/content/registry"
import { computeReadingTimeFromText } from "@/lib/content/reading-time"
import type {
  ContentArticleBase,
  ContentArticleLayoutMeta,
  ContentArticleSeries,
  ContentCollectionId,
  ContentSlug,
} from "@/lib/content/types"
import type { ContentTopicId } from "@/lib/content/topics"

export type ArticleSeriesNavLink = {
  title: string
  href: string
  label: string
}

export type ArticleSeriesNav = {
  prev?: ArticleSeriesNavLink
  next?: ArticleSeriesNavLink
  seriesTitle?: string
}

type SeriesArticleCandidate = {
  slug: ContentSlug
  title: string
  path: string
  publishedAt: string
  series?: ContentArticleSeries
  topicId?: ContentTopicId
}

function getLayoutMeta(
  meta: ContentArticleBase,
): Pick<ContentArticleLayoutMeta, "series" | "topicId"> {
  const layout = meta as ContentArticleBase & ContentArticleLayoutMeta
  return {
    series: layout.series,
    topicId: layout.topicId,
  }
}

async function loadSeriesCandidates(
  collection: ContentCollectionId,
): Promise<SeriesArticleCandidate[]> {
  const keys = getRegistryKeysForCollection(collection)
  const metas = await Promise.all(
    keys.map(async (key) => {
      const meta = await loadArticleMeta(key)
      if (!meta?.published) return null
      const layout = getLayoutMeta(meta)
      return {
        slug: meta.slug,
        title: meta.title,
        path: meta.path,
        publishedAt: meta.publishedAt,
        series: layout.series,
        topicId: layout.topicId,
      } satisfies SeriesArticleCandidate
    }),
  )

  return metas.filter((item): item is NonNullable<typeof item> => item !== null)
}

export async function resolveArticleSeriesNav(input: {
  collection: ContentCollectionId
  slug: ContentSlug
  series?: ContentArticleSeries
  topicId?: ContentTopicId
  publishedAt: string
}): Promise<ArticleSeriesNav> {
  const candidates = await loadSeriesCandidates(input.collection)
  const currentPath = getArticlePath(input.collection, input.slug)

  if (input.series) {
    const siblings = candidates
      .filter((item) => item.series?.id === input.series?.id)
      .sort((a, b) => (a.series?.order ?? 0) - (b.series?.order ?? 0))

    const index = siblings.findIndex((item) => item.path === currentPath)
    if (index === -1) return {}

    const prev = siblings[index - 1]
    const next = siblings[index + 1]

    return {
      seriesTitle: input.series.title,
      prev: prev
        ? { title: prev.title, href: prev.path, label: "Previous" }
        : undefined,
      next: next
        ? { title: next.title, href: next.path, label: "Next" }
        : undefined,
    }
  }

  if (input.topicId) {
    const siblings = candidates
      .filter((item) => item.topicId === input.topicId)
      .sort((a, b) => a.publishedAt.localeCompare(b.publishedAt))

    const index = siblings.findIndex((item) => item.path === currentPath)
    if (index === -1) return {}

    const prev = siblings[index - 1]
    const next = siblings[index + 1]

    return {
      prev: prev
        ? { title: prev.title, href: prev.path, label: "Previous in topic" }
        : undefined,
      next: next
        ? { title: next.title, href: next.path, label: "Next in topic" }
        : undefined,
    }
  }

  return {}
}

export function resolveReadingTimeForArticle(input: {
  collection: ContentCollectionId
  slug: ContentSlug
  readingTime?: string
}): string | undefined {
  if (input.readingTime) return input.readingTime

  const key = `${input.collection}/${input.slug}`
  if (!isRegisteredContentArticleKey(key)) return undefined

  try {
    const mdxPath = join(
      process.cwd(),
      "content/articles",
      input.collection,
      input.slug,
      "content.mdx",
    )
    const source = readFileSync(mdxPath, "utf8")
    return computeReadingTimeFromText(source)
  } catch {
    return undefined
  }
}
