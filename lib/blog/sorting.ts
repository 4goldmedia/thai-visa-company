import type { BlogPostCard, BlogPostSort } from "@/lib/blog/types"

function sortTimestamp(post: BlogPostCard, sort: BlogPostSort): number {
  const value = sort === "updated" ? (post.updatedAt ?? post.publishedAt) : post.publishedAt
  return Date.parse(value)
}

export function sortBlogPosts(
  posts: ReadonlyArray<BlogPostCard>,
  sort: BlogPostSort = "updated",
): BlogPostCard[] {
  return [...posts].sort((a, b) => sortTimestamp(b, sort) - sortTimestamp(a, sort))
}

export function getFeaturedBlogPost(
  posts: ReadonlyArray<BlogPostCard>,
): BlogPostCard | undefined {
  const featured = posts.find((post) => post.featured && post.status !== "planned")
  if (featured) return featured
  return posts.find((post) => post.status !== "planned")
}
