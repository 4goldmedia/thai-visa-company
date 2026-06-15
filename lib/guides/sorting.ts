import type { GuidePostCard } from "@/lib/guides/types"

export function sortGuidePosts(posts: ReadonlyArray<GuidePostCard>): GuidePostCard[] {
  return [...posts].sort(
    (a, b) =>
      Date.parse(b.updatedAt ?? b.publishedAt) -
      Date.parse(a.updatedAt ?? a.publishedAt),
  )
}

export function getFeaturedGuidePost(
  posts: ReadonlyArray<GuidePostCard>,
): GuidePostCard | undefined {
  const featured = posts.find((post) => post.featured && post.status !== "planned")
  if (featured) return featured
  return posts.find((post) => post.status !== "planned")
}
