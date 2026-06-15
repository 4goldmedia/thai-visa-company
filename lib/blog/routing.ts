import { getBlogClusterById, getBlogPostsByClusterId, sortBlogPosts } from "@/lib/blog"
import { blogClusterIds } from "@/lib/blog/types"
import { isBlogClusterId } from "@/lib/blog/types"

export function getBlogClusterStaticParams() {
  return blogClusterIds.map((cluster) => ({ cluster }))
}

export function resolveBlogClusterArchive(slug: string) {
  if (!isBlogClusterId(slug)) return null
  const cluster = getBlogClusterById(slug)
  if (!cluster) return null

  const articles = sortBlogPosts(getBlogPostsByClusterId(slug))
  return { cluster, articles }
}

export type ResolvedBlogClusterArchive = NonNullable<
  ReturnType<typeof resolveBlogClusterArchive>
>

/** @deprecated Use `getBlogClusterStaticParams` */
export const getBlogCategoryStaticParams = getBlogClusterStaticParams

/** @deprecated Use `resolveBlogClusterArchive` */
export const resolveBlogCategoryArchive = resolveBlogClusterArchive

/** @deprecated Use `ResolvedBlogClusterArchive` */
export type ResolvedBlogCategoryArchive = ResolvedBlogClusterArchive
