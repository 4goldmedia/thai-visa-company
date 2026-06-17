import type { ResourcesIndexContent } from "@/lib/resources/types"

export { resourceArticles } from "@/lib/resources/content/articles"
export { resourceCategories } from "@/lib/resources/content/categories"

export const resourcesIndexContent: ResourcesIndexContent = {
  seo: {
    title: "Thailand Visa Guides & Resources",
    description:
      "Practical Thailand visa guides for foreigners. Eligibility, timelines, and requirements in clear, readable articles.",
    keywords: [
      "Thailand visa guides",
      "Thai visa resources",
      "Thailand visa help",
    ],
  },
  hero: {
    eyebrow: "Resources",
    title: "Thailand visa guides",
    overview:
      "Clear articles on eligibility, documents, and timelines  -  written for real questions, not search algorithms. New guides are added as rules and client needs evolve.",
  },
}
