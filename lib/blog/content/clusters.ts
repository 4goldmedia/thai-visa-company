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
      "DTV visa articles on Destination Thailand Visa requirements, remote work, tourist comparisons, rejection reasons, and how DTV compares with other long-stay routes.",
    pillarHref: "/visas/dtv",
  },
  {
    id: "retirement",
    label: "Retirement Visa",
    description:
      "Retirement visa articles on Non-Immigrant O vs O-A, income proof, renewals, and how retirement compares with DTV and Elite for long stays in Thailand.",
    pillarHref: "/visas/retirement",
  },
  {
    id: "business",
    label: "Business Visa",
    description:
      "Business visa articles on work permits, Thai employment, and when a Non-Immigrant B visa is enough versus when you also need a separate work permit.",
    pillarHref: "/visas/business",
  },
  {
    id: "education",
    label: "Education Visa",
    description:
      "Education visa articles on study-only rules, language-school and university routes, and when an ED visa is a better fit than DTV for living in Thailand.",
    pillarHref: "/visas/education",
  },
  {
    id: "elite",
    label: "Thailand Elite Visa",
    description:
      "Elite visa articles on membership value, Elite vs retirement, and when a Thailand Privilege / Elite visa is worth comparing with other long-stay routes.",
    pillarHref: "/visas/elite",
  },
  {
    id: "immigration-procedures",
    label: "Immigration Procedures",
    description:
      "Thailand immigration articles on re-entry permits, changing visa types, and how to protect your stay permission when you travel or switch categories.",
  },
  {
    id: "living-in-thailand",
    label: "Living in Thailand",
    description:
      "Living-in-Thailand articles on choosing a visa, long-stay options, and how foreigners make Thailand home through lawful routes rather than tourist stays.",
    pillarHref: "/moving-to-thailand",
  },
] as const satisfies readonly BlogCluster[]
