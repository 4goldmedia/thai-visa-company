import { getBlogClusterById } from "@/lib/blog"
import { blogClusterPath } from "@/lib/blog/types"
import type { BlogArticleMeta } from "@/lib/content/collections/blog"
import {
  resolveArticleCrossLinks,
  type ResolveRelatedArticlesInput,
  type ResolvedCrossLinks,
} from "@/lib/content/related"
import type { ContentRelatedLink } from "@/lib/content/types"
import { getVisaFromRegistry } from "@/lib/visas/registry"
import { visaToRelatedLink } from "@/lib/content/related"
import { isRegisteredContentArticleKey, loadArticleMeta } from "@/lib/content/registry"
import { toContentArticleKey } from "@/lib/content/collections"

export type ResolvedBlogCrossLinks = ResolvedCrossLinks & {
  relatedGuide?: ContentRelatedLink
  pillarVisa?: ContentRelatedLink
}

export async function buildRelatedGuideLink(
  relatedGuideSlug?: string,
): Promise<ContentRelatedLink | undefined> {
  if (!relatedGuideSlug) return undefined

  const key = toContentArticleKey("guides", relatedGuideSlug)
  if (!isRegisteredContentArticleKey(key)) return undefined

  const meta = await loadArticleMeta(key)
  if (!meta?.published || meta.collection !== "guides") return undefined

  return {
    category: "Guide",
    title: meta.title,
    description: meta.description,
    href: meta.path,
  }
}

export function buildPillarVisaLink(
  meta: Pick<BlogArticleMeta, "pillarSlug">,
): ContentRelatedLink | undefined {
  if (!meta.pillarSlug) return undefined
  const visa = getVisaFromRegistry(meta.pillarSlug)
  return visaToRelatedLink(visa)
}

export async function resolveBlogCrossLinks(
  input: ResolveRelatedArticlesInput & {
    topicId?: BlogArticleMeta["topicId"]
    pillarSlug?: BlogArticleMeta["pillarSlug"]
    clusterId?: BlogArticleMeta["index"]["clusterId"]
    relatedGuideSlug?: BlogArticleMeta["relatedGuideSlug"]
  },
): Promise<ResolvedBlogCrossLinks> {
  const crossLinks = await resolveArticleCrossLinks({
    ...input,
    collection: "blog",
    resourceCategoryId: input.clusterId ?? input.resourceCategoryId,
  })

  const [relatedGuide, pillarVisa] = await Promise.all([
    buildRelatedGuideLink(input.relatedGuideSlug),
    Promise.resolve(
      input.pillarSlug ? buildPillarVisaLink({ pillarSlug: input.pillarSlug }) : undefined,
    ),
  ])

  return {
    ...crossLinks,
    relatedGuide,
    pillarVisa,
  }
}

export function getBlogArticleClusterBreadcrumb(meta: BlogArticleMeta): {
  label: string
  href: `/blog/cluster/${string}`
} {
  const cluster = getBlogClusterById(meta.index.clusterId)
  return {
    label: cluster?.label ?? meta.index.clusterLabel,
    href: blogClusterPath(meta.index.clusterId),
  }
}

/** @deprecated Use `getBlogArticleClusterBreadcrumb` */
export const getBlogArticleCategoryBreadcrumb = getBlogArticleClusterBreadcrumb
