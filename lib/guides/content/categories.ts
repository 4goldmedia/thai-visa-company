import type { GuideCategory } from "@/lib/guides/types"

export const guideCategories = [
  {
    id: "visa-requirements",
    label: "Visa requirements",
    description:
      "Documents, financial proof, and eligibility rules explained step by step.",
  },
  {
    id: "visa-comparisons",
    label: "Visa comparisons",
    description:
      "Side-by-side looks at visa routes when you are deciding between options.",
    placeholder: true,
  },
  {
    id: "thailand-living",
    label: "Thailand living",
    description:
      "Practical relocation topics that sit alongside your visa planning.",
    placeholder: true,
  },
] as const satisfies readonly GuideCategory[]
