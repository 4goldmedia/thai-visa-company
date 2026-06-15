import { getGuideCategoryById, getGuideTopicHubForTopicId } from "@/lib/guides"
import { guideCategoryPath } from "@/lib/guides/types"
import type { GuideArticleMeta } from "@/lib/content/collections/guides"
import {
  resolveArticleCrossLinks,
  type ResolveRelatedArticlesInput,
  type ResolvedCrossLinks,
} from "@/lib/content/related"
import type { ContentRelatedLink } from "@/lib/content/types"
import { getVisaFromRegistry } from "@/lib/visas/registry"
import { visaToRelatedLink } from "@/lib/content/related"

export type ResolvedGuideCrossLinks = ResolvedCrossLinks & {
  topicHub?: ContentRelatedLink
  pillarVisa?: ContentRelatedLink
}

export function buildGuideTopicHubLink(
  meta: Pick<GuideArticleMeta, "topicId">,
): ContentRelatedLink | undefined {
  if (!meta.topicId) return undefined
  const hub = getGuideTopicHubForTopicId(meta.topicId)
  if (!hub) return undefined

  return {
    category: "Guide topic",
    title: hub.title,
    description: hub.description,
    href: hub.path,
  }
}

export function buildGuidePillarVisaLink(
  meta: Pick<GuideArticleMeta, "pillarSlug">,
): ContentRelatedLink | undefined {
  if (!meta.pillarSlug) return undefined
  const visa = getVisaFromRegistry(meta.pillarSlug)
  return visaToRelatedLink(visa)
}

export async function resolveGuideCrossLinks(
  input: ResolveRelatedArticlesInput & {
    topicId?: GuideArticleMeta["topicId"]
    pillarSlug?: GuideArticleMeta["pillarSlug"]
    categoryId?: GuideArticleMeta["index"]["categoryId"]
  },
): Promise<ResolvedGuideCrossLinks> {
  const crossLinks = await resolveArticleCrossLinks({
    ...input,
    collection: "guides",
    resourceCategoryId: input.categoryId ?? input.resourceCategoryId,
  })

  const topicHub = input.topicId
    ? buildGuideTopicHubLink({ topicId: input.topicId })
    : undefined

  const pillarVisa = input.pillarSlug
    ? buildGuidePillarVisaLink({ pillarSlug: input.pillarSlug })
    : undefined

  return {
    ...crossLinks,
    topicHub,
    pillarVisa,
  }
}

export function getGuideArticleCategoryBreadcrumb(meta: GuideArticleMeta): {
  label: string
  href: `/guides/category/${string}`
} {
  const category = getGuideCategoryById(meta.index.categoryId)
  return {
    label: category?.label ?? meta.index.categoryLabel,
    href: guideCategoryPath(meta.index.categoryId),
  }
}
