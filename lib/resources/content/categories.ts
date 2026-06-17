import type { ResourceCategory } from "@/lib/resources/types"

export const resourceCategories = [
  {
    id: "visa-guides",
    label: "Visa guides",
    description:
      "Practical explainers on common long-stay and specialist visa routes.",
  },
  {
    id: "process",
    label: "Process & timelines",
    description:
      "What to expect when applying  -  processing times, steps, and follow-up.",
  },
  {
    id: "comparisons",
    label: "Comparisons",
    description:
      "Side-by-side looks at visa options when you are deciding between routes.",
    placeholder: true,
  },
] as const satisfies readonly ResourceCategory[]
