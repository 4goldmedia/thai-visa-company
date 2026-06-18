import { blogClusters } from "@/lib/blog/content/clusters"
import { blogClusterPath, isBlogClusterId } from "@/lib/blog/types"
import { isContentTopicId } from "@/lib/content/topics"
import type { ContentTopicId } from "@/lib/content/topics"
import type { VisaPageContent, VisaSlug } from "@/lib/visas/types"

/** Resolve semantic topic id for cluster linking (defaults to slug when valid). */
export function resolveVisaTopicId(
  visa: Pick<VisaPageContent, "slug" | "topicId">,
): ContentTopicId | undefined {
  if (visa.topicId) return visa.topicId
  if (isContentTopicId(visa.slug)) return visa.slug
  return undefined
}

/** Blog cluster archive URL when this visa is a cluster pillar. */
export function resolveVisaClusterHref(
  visa: Pick<VisaPageContent, "path" | "clusterHref" | "slug">,
): string | undefined {
  if (visa.clusterHref) return visa.clusterHref

  const cluster = blogClusters.find(
    (entry) => "pillarHref" in entry && entry.pillarHref === visa.path,
  )
  if (!cluster || !isBlogClusterId(cluster.id)) return undefined

  return blogClusterPath(cluster.id)
}

export function isVisaSlugTopic(slug: VisaSlug): boolean {
  return isContentTopicId(slug)
}
