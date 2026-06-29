import { defineBlogArticle } from "@/lib/content/collections/blog"
import { blogArticlePhotography } from "@/lib/media/photography"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

/**
 * Editorial brief:
 * - Primary Search Query: can foreigners live in thailand permanently
 * - Canonical Question: Can foreigners legally live in Thailand long-term, and what visa options make that possible?
 * - primaryIntent: lifestyle hub (upstream of route selection)
 */
export const meta = defineBlogArticle({
  contentType: "guide",
  slug: "can-foreigners-live-in-thailand-permanently",
  title: "Can Foreigners Live in Thailand Permanently?",
  description:
    "Can foreigners live in Thailand permanently? Yes — most people make Thailand a long-term home through renewable visas, not tourist stays. See which route fits your lifestyle.",
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  category: "Living in Thailand",
  tags: [
    "live in thailand permanently",
    "can foreigners live in thailand",
    "long term stay thailand",
    "move to thailand",
    "thailand permanent residence",
    "retire in thailand",
  ],
  published: true,
  featured: true,
  topicId: "general",
  seo: {
    title: "Can Foreigners Live in Thailand Permanently? Long-Stay Options Explained",
    description:
      "Yes, foreigners can make Thailand a long-term home through lawful visas such as DTV, retirement, business, elite, and education. There is no single permanent living visa. The best route depends on your circumstances.",
    keywords: [
      "can foreigners live in thailand permanently",
      "live in thailand permanently",
      "can i live in thailand permanently",
      "move to thailand permanently",
      "long term living thailand foreigners",
      "thailand permanent residency vs visa",
    ],
    ogTitle: "Can Foreigners Live in Thailand Permanently?",
    ogDescription:
      "Most searchers mean long-term living, not a PR stamp. See how foreigners make Thailand home through the right visa route.",
  },
  index: {
    clusterId: "living-in-thailand",
    clusterLabel: "Living in Thailand",
  },
  headingId: "can-foreigners-live-in-thailand-permanently-heading",
  eyebrow: "Living in Thailand",
  lead:
    "Most people who ask whether foreigners can live in Thailand permanently are really asking a simpler question: can I make Thailand my long-term home? The answer is yes. Thousands of foreigners live in Thailand for years by maintaining the appropriate long-stay visa, renewing on schedule, and staying compliant. There is no single visa called a permanent living visa. The right route depends on how you earn income, your age, whether you work remotely or for a Thai employer, and whether you study or retire. This article answers that lifestyle question first, then points you to the visa route that fits before you open detailed requirements on a visa page.",
  answer:
    "Yes, foreigners can make Thailand a long-term home. Most people do this by holding and renewing a lawful long-stay visa that matches their real life, such as DTV, retirement, business, elite, or education categories. There is no one-size-fits-all permanent living visa. The best route depends on your circumstances. Tourist entry does not support relocation. Formal permanent residency is a separate legal status and is not what most searchers mean by living here permanently.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage:
    blogArticlePhotography["can-foreigners-live-in-thailand-permanently"].hero.src,
  readingTime: "11 min read",
  tableOfContents: [
    { id: "who-this-article-is-for", label: "Who this article is for" },
    {
      id: "where-to-find-full-visa-requirements",
      label: "Where to find full visa requirements",
    },
    {
      id: "can-foreigners-live-in-thailand-permanently",
      label: "Can foreigners live permanently?",
    },
    {
      id: "permanent-residency-vs-long-stay-visas",
      label: "Permanent residency vs long-stay visas",
    },
    {
      id: "which-visa-fits-different-lifestyles",
      label: "Which visa fits your lifestyle",
    },
    {
      id: "common-misconceptions-about-living-in-thailand",
      label: "Common misconceptions",
    },
    { id: "decision-framework", label: "Decision framework" },
    { id: "common-mistakes", label: "Common mistakes" },
  ],
  sources: [
    {
      title: "Thailand Immigration Bureau",
      href: "https://www.immigration.go.th/",
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
      value: "faq-really-permanent",
      question: "Can foreigners live in Thailand forever?",
      answer:
        "Most foreigners who make Thailand a long-term home do so through renewable long-stay visas renewed over many years, not through a single forever stamp on arrival. Choose the visa category that matches how you actually live and work, then maintain renewals and compliance.",
    },
    {
      value: "faq-pr-status",
      question: "Is permanent residency required to live in Thailand long term?",
      answer:
        "No. Permanent residency is a separate legal immigration status with annual quotas. Most long-term residents never hold it. They live lawfully on renewable visas such as DTV, retirement, business, elite, or education categories instead.",
    },
    {
      value: "faq-tourist-live",
      question: "Can I live in Thailand on a tourist visa?",
      answer:
        "No. Tourist and visa-exempt stays are for temporary visits. Using repeated tourist entries as a living strategy creates refusal, overstay, and ban risk. Choose a long-stay visa that matches relocation intent.",
    },
    {
      value: "faq-property",
      question: "Can I live in Thailand permanently if I buy property?",
      answer:
        "Property ownership does not grant immigration status or permanent living rights by itself. You still need a lawful visa category that matches how you live and earn income in Thailand.",
    },
    {
      value: "faq-family",
      question: "Can my family live in Thailand with me?",
      answer:
        "Families usually anchor on the primary applicant's visa route. Dependants may follow through parallel or derivative filings depending on the category. Plan the main earner's or retiree's route first, then confirm dependant rules on that visa page.",
    },
    {
      value: "faq-next-step",
      question: "What should I do after deciding I want to live in Thailand?",
      answer:
        "Shortlist the visa that matches your work, income, and age using Best Visa for Living in Thailand, then open the relevant visa page for eligibility, documents, and filing steps.",
    },
  ],
  related: [
    {
      category: "Route selection",
      title: "Best Visa for Living in Thailand",
      description: "Compare DTV, business, retirement, elite, and education routes by profile.",
      href: "/blog/best-visa-for-living-in-thailand",
    },
    {
      category: "Visa services",
      title: "Thailand Retirement Visa",
      description: "Long-stay retirement routes for applicants 50+ with qualifying income.",
      href: "/visas/retirement",
    },
    {
      category: "Visa services",
      title: "Thailand DTV Visa",
      description: "Remote work and foreign-income long stays.",
      href: "/visas/dtv",
    },
    {
      category: "Visa services",
      title: "Thailand Elite Visa",
      description: "Premium membership-based long-stay option.",
      href: "/visas/elite",
    },
  ],
  relatedSlugs: [
    "best-visa-for-living-in-thailand",
    "dtv-vs-retirement-visa-thailand",
    "thailand-elite-visa-worth-it",
    "can-i-work-in-thailand-without-a-work-permit",
  ],
  cta: {
    title: "Let Thai Visa Company map your long-stay path",
    description:
      "Share your age, income, family plans, and how long you want to stay. We confirm which lawful route fits before you relocate.",
    footnote: defaultFinalCtaFootnote,
  },
})
