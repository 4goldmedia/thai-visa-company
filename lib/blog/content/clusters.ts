import type { BlogCluster } from "@/lib/blog/types"

/**
 * Blog content clusters  -  user-intent subject areas.
 * Canonical definitions: `rules/content/content-clusters.mdc`
 */
export const blogClusters = [
  {
    id: "dtv",
    label: "DTV Visa",
    description:
      "Destination Thailand Visa requirements, costs, remote work rules, rejections, dependents, and extensions.",
    pillarHref: "/visas/dtv",
  },
  {
    id: "retirement",
    label: "Retirement Visa",
    description:
      "Retirement visa income rules, eligibility, renewals, and how retirement compares to other long-stay routes.",
    pillarHref: "/visas/retirement",
  },
  {
    id: "business",
    label: "Business Visa",
    description:
      "Work permits, company sponsorship, BOI routes, and employment visa requirements for Thailand.",
    pillarHref: "/visas/business",
  },
  {
    id: "education",
    label: "Education Visa",
    description:
      "Language school and university visas, enrollment requirements, and education visa renewals.",
    pillarHref: "/visas/education",
  },
  {
    id: "immigration-procedures",
    label: "Immigration Procedures",
    description:
      "90-day reporting, TM30, re-entry permits, visa extensions, and immigration appointments in Thailand.",
  },
  {
    id: "living-in-thailand",
    label: "Living in Thailand",
    description:
      "Banking, housing, healthcare, taxes, and practical relocation guidance for foreigners in Thailand.",
  },
] as const satisfies readonly BlogCluster[]
