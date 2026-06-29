import { defineBlogArticle } from "@/lib/content/collections/blog"
import { blogArticlePhotography } from "@/lib/media/photography"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

/**
 * Editorial brief:
 * - Primary Search Query: dtv visa vs tourist visa thailand
 * - Canonical Question: Should I choose DTV or a tourist visa for Thailand?
 * - primaryIntent: comparison
 */
export const meta = defineBlogArticle({
  contentType: "comparison",
  slug: "dtv-visa-vs-tourist-visa-thailand",
  title: "DTV Visa vs Tourist Visa Thailand",
  description:
    "DTV vs tourist visa in Thailand: compare stay length, remote work intent, costs, and when tourist entry is enough versus DTV long-stay.",
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  category: "Visa comparison",
  tags: [
    "dtv vs tourist visa",
    "destination thailand visa vs tourist",
    "tourist visa vs dtv thailand",
    "digital nomad tourist visa",
    "thailand long stay",
  ],
  published: true,
  featured: false,
  topicId: "dtv",
  pillarSlug: "dtv",
  seo: {
    title: "DTV Visa vs Tourist Visa Thailand: Stay Length & Remote Work",
    description:
      "Tourist visas suit short visits without long-stay remote work intent. DTV suits qualifying remote workers who need lawful long-stay permission.",
    keywords: [
      "dtv visa vs tourist visa thailand",
      "dtv vs tourist visa thailand",
      "destination thailand visa vs tourist visa",
      "tourist visa or dtv thailand",
      "can i work remotely on tourist visa thailand",
    ],
    ogTitle: "DTV Visa vs Tourist Visa Thailand",
    ogDescription:
      "Tourist entry is not a long-stay remote work strategy. Compare DTV when you need months of lawful stay with qualifying activity.",
  },
  index: {
    clusterId: "dtv",
    clusterLabel: "DTV Visa",
  },
  headingId: "dtv-vs-tourist-visa-heading",
  eyebrow: "Visa comparison",
  lead:
    "Many remote workers debate whether a Thailand tourist visa is enough or whether they need the Destination Thailand Visa (DTV). Tourist routes suit short visits and holidays without long-stay remote work intent. DTV suits applicants who meet financial and activity rules and need lawful long-stay permission tied to qualifying foreign income work. This article compares DTV vs tourist visa so you choose the category that matches stay length and activity before you fly.",
  answer:
    "Choose a tourist visa or visa-exempt entry for short Thailand stays without long-stay remote work intent. Choose DTV when you need multi-month lawful stay and meet DTV financial and activity evidence for remote work or qualifying freelance income from abroad. Tourist status does not support long-term remote work intent and creates overstay risk if you stay beyond permitted days. DTV costs more preparation but matches long-stay digital nomad plans when you qualify.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage: blogArticlePhotography["dtv-visa-vs-tourist-visa-thailand"].hero.src,
  readingTime: "9 min read",
  tableOfContents: [
    { id: "who-this-article-is-for", label: "Who this article is for" },
    {
      id: "where-to-find-full-visa-requirements",
      label: "Where to find full visa requirements",
    },
    {
      id: "should-you-choose-dtv-or-tourist-visa",
      label: "DTV or tourist visa?",
    },
    {
      id: "dtv-vs-tourist-visa-at-a-glance",
      label: "DTV vs tourist at a glance",
    },
    { id: "what-tourist-visa-is-for", label: "What tourist visa is for" },
    { id: "what-dtv-is-for", label: "What DTV is for" },
    {
      id: "how-this-applies-in-real-situations",
      label: "How this applies in real situations",
    },
    { id: "decision-framework", label: "Decision framework" },
    { id: "common-mistakes", label: "Common mistakes" },
  ],
  sources: [
    {
      title: "Thailand e-Visa portal",
      href: "https://thaievisa.go.th/",
      accessedAt: "2026-06-25",
    },
    {
      title: "Ministry of Foreign Affairs: Thailand Visa Information",
      href: "https://www.mfa.go.th/en/publicservice",
      accessedAt: "2026-06-25",
    },
  ],
  faq: [
    {
      value: "faq-work-tourist",
      question: "Can I work remotely on a tourist visa in Thailand?",
      answer:
        "Tourist status is for temporary visits, not long-stay remote work intent. Working remotely while on tourist entry for extended periods creates compliance risk. If you need months of lawful stay with remote work, compare DTV requirements instead.",
    },
    {
      value: "faq-extend-tourist",
      question: "Can I extend a tourist visa to match DTV length?",
      answer:
        "Tourist extensions are limited and do not turn tourist intent into DTV intent. If you need long-stay remote work permission, apply for DTV from a qualifying embassy rather than stacking tourist extensions.",
    },
    {
      value: "faq-dtv-harder",
      question: "Is DTV harder to get than a tourist visa?",
      answer:
        "DTV requires stronger financial and activity evidence. Tourist visas suit simpler short visits. DTV difficulty usually reflects document quality, not mystery rules. See DTV Visa Rejection Reasons if you worry about refusal.",
    },
    {
      value: "faq-visa-exempt",
      question: "How does visa-exempt entry compare?",
      answer:
        "Visa-exempt entry is the shortest tourist-style path for eligible nationalities. It is not a substitute for DTV when you plan long stays with remote work. Compare permitted days against your timeline.",
    },
    {
      value: "faq-after-tourist-dtv",
      question: "Can I apply for DTV after entering on tourist?",
      answer:
        "Do not assume in-country conversion from tourist to DTV. Plan DTV from a qualifying embassy before you rely on tourist days. See Change Visa Type in Thailand for transition rules.",
    },
  ],
  related: [
    {
      category: "Route selection",
      title: "Best Visa for Living in Thailand",
      description: "Compare all long-stay routes beyond tourist entry.",
      href: "/blog/best-visa-for-living-in-thailand",
    },
    {
      category: "Visa services",
      title: "Thailand DTV Visa",
      description: "DTV eligibility, financial proof, and application steps.",
      href: "/visas/dtv",
    },
    {
      category: "Troubleshooting",
      title: "DTV Visa Rejection Reasons",
      description: "Why DTV files fail and how to fix them before reapplication.",
      href: "/blog/dtv-visa-rejection-reasons",
    },
    {
      category: "Article topic",
      title: "DTV Visa Articles",
      description: "More DTV comparisons and troubleshooting.",
      href: "/blog/cluster/dtv",
    },
  ],
  relatedSlugs: [
    "best-visa-for-living-in-thailand",
    "dtv-visa-rejection-reasons",
  ],
  cta: {
    title: "Let Thai Visa Company confirm DTV or tourist fits your stay",
    description:
      "Share your nationality, stay length, and work activity. We confirm whether tourist entry is enough or you should file DTV.",
    footnote: defaultFinalCtaFootnote,
  },
})
