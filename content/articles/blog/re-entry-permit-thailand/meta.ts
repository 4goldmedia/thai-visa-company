import { defineBlogArticle } from "@/lib/content/collections/blog"
import { blogArticlePhotography } from "@/lib/media/photography"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

/**
 * Editorial brief:
 * - Primary Search Query: re-entry permit thailand
 * - Canonical Question: Do I need a re-entry permit to leave and return to Thailand?
 * - primaryIntent: compliance
 */
export const meta = defineBlogArticle({
  contentType: "guide",
  slug: "re-entry-permit-thailand",
  title: "Re-Entry Permit Thailand",
  description:
    "Do you need a re-entry permit in Thailand? Learn when departure cancels your stay, single vs multiple entry, and how to apply before you travel.",
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  category: "Immigration procedures",
  tags: [
    "re-entry permit thailand",
    "thailand reentry permit",
    "single entry re-entry",
    "multiple entry thailand",
    "immigration compliance",
  ],
  published: true,
  featured: false,
  topicId: "general",
  seo: {
    title: "Re-Entry Permit Thailand: When You Need One & How to Apply",
    description:
      "Leaving Thailand without a re-entry permit can cancel your extension. See when you need single or multiple re-entry and how to apply at immigration.",
    keywords: [
      "re-entry permit thailand",
      "thailand re entry permit",
      "do i need re-entry permit thailand",
      "single re-entry permit thailand",
      "multiple re-entry permit thailand",
    ],
    ogTitle: "Re-Entry Permit Thailand",
    ogDescription:
      "A valid extension does not always survive departure. Confirm entry type and apply for re-entry before international travel.",
  },
  index: {
    clusterId: "immigration-procedures",
    clusterLabel: "Immigration Procedures",
  },
  headingId: "re-entry-permit-thailand-heading",
  eyebrow: "Immigration compliance",
  lead:
    "Long-stay residents often assume an approved visa extension automatically survives any trip abroad. In Thailand, that is not always true. If your permission to stay is tied to a single-entry stamp or certain extension types, leaving without a re-entry permit can end your status when you depart. This article explains when you need a re-entry permit, single versus multiple entry options, and how to apply before you book flights.",
  answer:
    "You need a re-entry permit before leaving Thailand when your current permission to stay is single-entry or would otherwise be cancelled by departure. A re-entry permit preserves your extension or visa status so you can return without starting over. If you already hold multiple-entry permission that survives travel, you may not need one. Check your passport stamp, extension stamp, and entry type at Thai immigration before international travel. Apply for a single or multiple re-entry permit before departure if required.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage: blogArticlePhotography["re-entry-permit-thailand"].hero.src,
  readingTime: "9 min read",
  tableOfContents: [
    { id: "who-this-article-is-for", label: "Who this article is for" },
    {
      id: "where-to-find-full-visa-requirements",
      label: "Where to find full visa requirements",
    },
    {
      id: "do-you-need-a-re-entry-permit",
      label: "Do you need a re-entry permit?",
    },
    {
      id: "single-vs-multiple-re-entry-permit",
      label: "Single vs multiple re-entry",
    },
    {
      id: "how-to-apply-for-a-re-entry-permit",
      label: "How to apply",
    },
    {
      id: "what-happens-if-you-leave-without-one",
      label: "What happens if you leave without one",
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
  ],
  faq: [
    {
      value: "faq-extension-enough",
      question: "Is my visa extension enough to leave and come back?",
      answer:
        "Not always. An extension can still be cancelled when you depart on single-entry permission unless you hold a valid re-entry permit or multiple-entry status that survives travel. Read your stamps and confirm with immigration before flying.",
    },
    {
      value: "faq-where-apply",
      question: "Where do I apply for a re-entry permit in Thailand?",
      answer:
        "Apply at Thai immigration offices that handle extensions for your province, often the same office that issued your extension. Bring passport, photos, and forms per current office practice. Allow time before departure.",
    },
    {
      value: "faq-tourist",
      question: "Do tourists need re-entry permits?",
      answer:
        "Tourist and visa-exempt entries follow different rules than long-stay extensions. Tourists usually do not apply for re-entry permits to preserve a retirement or business extension because they are not on that status. This article focuses on long-stay residents.",
    },
    {
      value: "faq-validity",
      question: "How long is a re-entry permit valid?",
      answer:
        "Validity depends on single versus multiple re-entry type and your underlying permission to stay end date. A re-entry permit does not extend your stay beyond the original permission end date unless you receive a separate extension.",
    },
    {
      value: "faq-change-visa",
      question: "Do I need a re-entry permit after changing visa type?",
      answer:
        "After any successful extension or visa change, re-check entry type before travel. See Change Visa Type in Thailand for the transition, then confirm re-entry needs here before departure.",
    },
  ],
  related: [
    {
      category: "Route selection",
      title: "Best Visa for Living in Thailand",
      description: "Choose the right long-stay route, then manage travel compliance.",
      href: "/blog/best-visa-for-living-in-thailand",
    },
    {
      category: "Immigration procedures",
      title: "Change Visa Type in Thailand",
      description: "After a status change, confirm re-entry rules before you fly.",
      href: "/blog/change-visa-type-in-thailand",
    },
    {
      category: "Article topic",
      title: "Immigration Procedures Articles",
      description: "Extensions, reporting, and compliance for residents.",
      href: "/blog/cluster/immigration-procedures",
    },
    {
      category: "Visa services",
      title: "Thailand Retirement Visa",
      description: "Retirement extensions often pair with re-entry planning.",
      href: "/visas/retirement",
    },
  ],
  relatedSlugs: ["best-visa-for-living-in-thailand", "change-visa-type-in-thailand"],
  cta: {
    title: "Let Thai Visa Company check your re-entry status",
    description:
      "Share photos of your passport stamps and extension. We confirm whether you need a re-entry permit before your next trip.",
    footnote: defaultFinalCtaFootnote,
  },
})
