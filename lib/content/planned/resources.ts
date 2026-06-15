import type { ResourceArticle } from "@/lib/resources/types"

/**
 * Planned resource articles — no MDX yet. Shown on the resources index only.
 * When shipped, add `content/articles/resources/<slug>/` and register in `lib/content/registry.ts`.
 */
export const plannedResourceArticles = [
  {
    slug: "what-is-thailand-dtv-visa",
    categoryId: "visa-guides",
    category: "DTV",
    title: "What Is the Thailand DTV Visa",
    description:
      "Who qualifies, how it differs from tourist visas, and what to confirm first.",
    path: "/blog/what-is-thailand-dtv-visa",
    readingTime: "6 min read",
    status: "planned" as const,
  },
  {
    slug: "how-long-does-thai-visa-take",
    categoryId: "process",
    category: "Timelines",
    title: "How Long Does a Thai Visa Take",
    description:
      "Typical processing windows by visa type and what can shorten or extend your timeline.",
    path: "/blog/how-long-does-thai-visa-take",
    readingTime: "5 min read",
    status: "planned",
  },
] as const satisfies readonly ResourceArticle[]
