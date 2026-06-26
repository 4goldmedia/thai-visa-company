import type { BlogPostCard } from "@/lib/blog/types"

/**
 * Planned blog articles  -  no MDX yet. Shown on the blog index only.
 */
export const plannedBlogArticles = [
  {
    slug: "what-is-thailand-dtv-visa",
    clusterId: "dtv",
    category: "DTV",
    title: "What Is the Thailand DTV Visa",
    description:
      "Who qualifies, how it differs from tourist visas, and what to confirm first.",
    path: "/blog/what-is-thailand-dtv-visa",
    publishedAt: "2026-06-01",
    readingTime: "6 min read",
    topicId: "dtv",
    status: "planned" as const,
  },
  {
    slug: "how-long-does-thai-visa-take",
    clusterId: "immigration-procedures",
    category: "Timelines",
    title: "How Long Does a Thai Visa Take",
    description:
      "Typical processing windows by visa type and what can shorten or extend your timeline.",
    path: "/blog/how-long-does-thai-visa-take",
    publishedAt: "2026-06-01",
    readingTime: "5 min read",
    topicId: "process",
    status: "planned",
  },
] as const satisfies readonly BlogPostCard[]
