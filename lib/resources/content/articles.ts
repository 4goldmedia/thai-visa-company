import { meta as retirementVisaGuide } from "@/content/articles/resources/how-to-get-thailand-retirement-visa/meta"
import { resourceMetaToIndexCard } from "@/lib/content/adapters"
import type { ResourceArticle } from "@/lib/resources/types"

/** Planned articles — add under `content/articles/resources/<slug>/` when ready */
const plannedResourceArticles = [
  {
    slug: "what-is-thailand-dtv-visa",
    categoryId: "visa-guides",
    category: "DTV",
    title: "What Is the Thailand DTV Visa",
    description:
      "Who qualifies, how it differs from tourist visas, and what to confirm first.",
    path: "/resources/what-is-thailand-dtv-visa",
    readingTime: "6 min read",
  },
  {
    slug: "how-long-does-thai-visa-take",
    categoryId: "process",
    category: "Timelines",
    title: "How Long Does a Thai Visa Take",
    description:
      "Typical processing windows by visa type and what can shorten or extend your timeline.",
    path: "/resources/how-long-does-thai-visa-take",
    readingTime: "5 min read",
  },
] satisfies readonly ResourceArticle[]

export const resourceArticles = [
  resourceMetaToIndexCard(retirementVisaGuide),
  ...plannedResourceArticles,
] satisfies readonly ResourceArticle[]
