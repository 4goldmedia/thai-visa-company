import {
  getGuideCategoryById,
  getGuidePostsByCategoryId,
  getGuidePostsByTopicId,
  getGuideTopicHubBySlug,
  sortGuidePosts,
} from "@/lib/guides"
import type { GuideCategoryId, GuideTopicHubSlug } from "@/lib/guides/types"
import { isGuideCategoryId, isGuideTopicHubSlug } from "@/lib/guides/types"
import { getVisaFromRegistry } from "@/lib/visas/registry"
import { isVisaPublished } from "@/lib/visas/registry"

export function getGuideTopicHubStaticParams() {
  return (["dtv", "retirement", "business", "education", "thailand-immigration"] as const).map(
    (topic) => ({ topic }),
  )
}

export function getGuideCategoryStaticParams() {
  return (["visa-requirements", "visa-comparisons", "thailand-living"] as const).map(
    (category) => ({ category }),
  )
}

export function resolveGuideTopicHub(slug: string) {
  if (!isGuideTopicHubSlug(slug)) return null
  const hub = getGuideTopicHubBySlug(slug)
  if (!hub) return null

  const articles = sortGuidePosts(getGuidePostsByTopicId(hub.topicId))
  const pillar =
    hub.pillarSlug && isVisaPublished(getVisaFromRegistry(hub.pillarSlug))
      ? getVisaFromRegistry(hub.pillarSlug)
      : undefined

  return { hub, articles, pillar }
}

export function resolveGuideCategoryArchive(slug: string) {
  if (!isGuideCategoryId(slug)) return null
  const category = getGuideCategoryById(slug)
  if (!category) return null

  const articles = sortGuidePosts(getGuidePostsByCategoryId(slug))
  return { category, articles }
}

export type ResolvedGuideTopicHub = NonNullable<ReturnType<typeof resolveGuideTopicHub>>
export type ResolvedGuideCategoryArchive = NonNullable<
  ReturnType<typeof resolveGuideCategoryArchive>
>
