import type { GuideTopicHub } from "@/lib/guides/types"

export const guideTopicHubs = [
  {
    slug: "dtv",
    title: "Thailand DTV Visa",
    description:
      "Who qualifies, requirements, and how the Destination Thailand Visa differs from tourist routes.",
    topicId: "dtv",
    pillarSlug: "dtv",
    path: "/guides/topic/dtv",
  },
  {
    slug: "retirement",
    title: "Thailand Retirement Visa",
    description:
      "Age requirements, financial proof, and how to prepare a retirement visa file before you apply.",
    topicId: "retirement",
    pillarSlug: "retirement",
    path: "/guides/topic/retirement",
  },
  {
    slug: "business",
    title: "Thailand Business Visa",
    description:
      "Work permits, company context, and business visa routes explained in plain language.",
    topicId: "business",
    pillarSlug: "business",
    path: "/guides/topic/business",
  },
  {
    slug: "education",
    title: "Thailand Education Visa",
    description:
      "Student visas, language schools, and education-route requirements for long-stay study.",
    topicId: "education",
    pillarSlug: "education",
    path: "/guides/topic/education",
  },
  {
    slug: "thailand-immigration",
    title: "Thailand Immigration",
    description:
      "Cross-cutting topics — extensions, reporting, and how visa routes fit together.",
    topicId: "general",
    path: "/guides/topic/thailand-immigration",
  },
] as const satisfies readonly GuideTopicHub[]
