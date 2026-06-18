import {
  isPublishedBlogHref,
  isPublishedGuideHref,
  resolveRelatedArticlesForVisa,
} from "@/lib/content/related"
import type { ContentCollectionId, ContentRelatedLink } from "@/lib/content/types"
import { blogClusters } from "@/lib/blog/content/clusters"
import { resolveVisaClusterHref } from "@/lib/visas/topic"
import type { VisaPageContent } from "@/lib/visas/types"

const DEFAULT_MAX_RELATED = 6

type ResolveVisaRelatedResourcesInput = Pick<
  VisaPageContent,
  | "slug"
  | "path"
  | "hero"
  | "seo"
  | "relatedResources"
  | "relatedArticleSlugs"
  | "clusterHref"
> & {
  max?: number
}

async function filterPublishedManualLinks(
  items: ReadonlyArray<ContentRelatedLink>,
): Promise<ContentRelatedLink[]> {
  const published: ContentRelatedLink[] = []

  for (const item of items) {
    if (item.href.startsWith("/blog/")) {
      if (await isPublishedBlogHref(item.href)) published.push(item)
      continue
    }
    if (item.href.startsWith("/guides/")) {
      if (await isPublishedGuideHref(item.href)) published.push(item)
      continue
    }
    published.push(item)
  }

  return published
}

async function resolveExplicitArticleSlugs(
  slugs: ReadonlyArray<string>,
  collections: ReadonlyArray<ContentCollectionId>,
): Promise<ContentRelatedLink[]> {
  const { loadArticleMetaBySlug } = await import("@/lib/content/articles")
  const links: ContentRelatedLink[] = []

  for (const slug of slugs) {
    for (const collection of collections) {
      const meta = await loadArticleMetaBySlug(collection, slug)
      if (!meta?.published) continue
      links.push({
        category: meta.category,
        title: meta.title,
        description: meta.description,
        href: meta.path,
      })
      break
    }
  }

  return links
}

function clusterArchiveLink(
  visa: Pick<VisaPageContent, "path" | "clusterHref" | "slug">,
): ContentRelatedLink | null {
  const href = resolveVisaClusterHref(visa)
  if (!href) return null

  const cluster = blogClusters.find(
    (entry) => "pillarHref" in entry && entry.pillarHref === visa.path,
  )
  if (!cluster) return null

  return {
    category: cluster.label,
    title: `All ${cluster.label} articles`,
    description: cluster.description,
    href,
  }
}

function mergeRelatedLinks(
  groups: ReadonlyArray<ReadonlyArray<ContentRelatedLink>>,
  excludeHref: string,
  max: number,
): ContentRelatedLink[] {
  const seen = new Set<string>()
  const merged: ContentRelatedLink[] = []

  for (const group of groups) {
    for (const link of group) {
      if (link.href === excludeHref || seen.has(link.href)) continue
      seen.add(link.href)
      merged.push(link)
      if (merged.length >= max) return merged
    }
  }

  return merged
}

/**
 * Merges manual, explicit, cluster, and auto-scored article links for visa hubs.
 * Published URLs only.
 */
export async function resolveVisaRelatedResources(
  visa: ResolveVisaRelatedResourcesInput,
): Promise<ReadonlyArray<ContentRelatedLink>> {
  const max = visa.max ?? DEFAULT_MAX_RELATED
  const collections: ContentCollectionId[] = ["blog", "guides"]

  const [manual, explicit, auto] = await Promise.all([
    filterPublishedManualLinks(visa.relatedResources.items),
    visa.relatedArticleSlugs?.length
      ? resolveExplicitArticleSlugs(visa.relatedArticleSlugs, collections)
      : Promise.resolve([]),
    resolveRelatedArticlesForVisa(visa, { max, collections }),
  ])

  const cluster = clusterArchiveLink(visa)

  return mergeRelatedLinks(
    [manual, explicit, auto, cluster ? [cluster] : []],
    visa.path,
    max,
  )
}
