import type { GuidePostCard } from "@/lib/guides/types"

/**
 * Planned guide articles — no MDX yet. Shown on the guides index only.
 * When shipped, add `content/articles/guides/<slug>/` and run `npm run sync:articles`.
 */
export const plannedGuideArticles = [
  {
    slug: "what-is-thailand-dtv-visa",
    categoryId: "visa-requirements",
    category: "DTV",
    title: "What Is the Thailand DTV Visa",
    description:
      "Who qualifies, how it differs from tourist visas, and what to confirm first.",
    path: "/guides/what-is-thailand-dtv-visa",
    publishedAt: "2026-06-01",
    readingTime: "6 min read",
    topicId: "dtv",
    status: "planned" as const,
  },
  {
    slug: "how-long-does-thai-visa-take",
    categoryId: "visa-requirements",
    category: "Timelines",
    title: "How Long Does a Thai Visa Take",
    description:
      "Typical processing windows by visa type and what can shorten or extend your timeline.",
    path: "/guides/how-long-does-thai-visa-take",
    publishedAt: "2026-06-01",
    readingTime: "5 min read",
    topicId: "process",
    status: "planned",
  },
] as const satisfies readonly GuidePostCard[]
