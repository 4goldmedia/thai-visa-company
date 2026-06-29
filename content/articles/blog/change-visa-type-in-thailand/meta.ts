import { defineBlogArticle } from "@/lib/content/collections/blog"
import { blogArticlePhotography } from "@/lib/media/photography"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

/**
 * Editorial brief:
 * - Primary Search Query: change visa type in thailand
 * - Canonical Question: Can I change my visa type while in Thailand?
 * - primaryIntent: transition
 */
export const meta = defineBlogArticle({
  contentType: "guide",
  slug: "change-visa-type-in-thailand",
  title: "Change Visa Type in Thailand",
  description:
    "Can you change visa type in Thailand? Learn when in-country conversion is possible, when you must leave and reapply, and how to avoid status gaps.",
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  category: "Immigration procedures",
  tags: [
    "change visa type thailand",
    "visa conversion thailand",
    "switch visa thailand",
    "change non-immigrant visa",
    "immigration procedures",
  ],
  published: true,
  featured: false,
  topicId: "general",
  seo: {
    title: "Change Visa Type in Thailand: When You Can and Cannot Switch",
    description:
      "Visa type changes in Thailand depend on your current status and target category. Some switches happen in-country; many require leaving and reapplying abroad.",
    keywords: [
      "change visa type in thailand",
      "can i change visa type in thailand",
      "switch visa in thailand",
      "convert tourist visa to non-immigrant thailand",
      "change immigration status thailand",
    ],
    ogTitle: "Change Visa Type in Thailand",
    ogDescription:
      "There is no universal in-country visa switch. See when conversion is realistic, when you must reapply abroad, and how to protect your status.",
  },
  index: {
    clusterId: "immigration-procedures",
    clusterLabel: "Immigration Procedures",
  },
  headingId: "change-visa-type-in-thailand-heading",
  eyebrow: "Immigration procedures",
  lead:
    "Many foreigners ask whether they can change visa type while already in Thailand. The answer depends on your current immigration status, the category you want, and whether Thai immigration or a Thai embassy will accept the transition. Some changes happen through in-country extensions or conversions. Others require leaving Thailand and applying abroad on the correct category. This article explains when a visa type change is realistic and when it is not, so you can plan before your permission to stay expires.",
  answer:
    "You cannot freely change visa type in Thailand on any stamp. Some transitions are possible in-country when your current status and target category align with immigration rules, such as certain extensions or conversions with qualifying sponsors. Many common goals, including moving from tourist entry to employment, DTV, or retirement, require leaving Thailand and applying at a Thai embassy or consulate for the correct Non-Immigrant category. Treat visa type changes as eligibility decisions first and paperwork second. Confirm your current stamp, days remaining, and target route before you file.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage: blogArticlePhotography["change-visa-type-in-thailand"].hero.src,
  readingTime: "12 min read",
  tableOfContents: [
    { id: "who-this-article-is-for", label: "Who this article is for" },
    {
      id: "where-to-find-full-visa-requirements",
      label: "Where to find full visa requirements",
    },
    {
      id: "can-you-change-visa-type-in-thailand",
      label: "Can you change visa type?",
    },
    {
      id: "in-country-changes-vs-reapply-abroad",
      label: "In-country vs reapply abroad",
    },
    {
      id: "common-visa-change-scenarios",
      label: "Common change scenarios",
    },
    {
      id: "normal-process-for-a-clean-route-change",
      label: "Normal process",
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
    {
      title: "Thailand e-Visa portal",
      href: "https://thaievisa.go.th/",
      accessedAt: "2026-06-25",
    },
  ],
  faq: [
    {
      value: "faq-tourist-to-nb",
      question: "Can I change from tourist visa to Non-Immigrant B in Thailand?",
      answer:
        "Usually not as a simple in-country swap. Employment routes typically require a Non-Immigrant B issued abroad with sponsor documents and often WP3. Arriving on tourist status and expecting an in-country conversion to employment is a common failure pattern. Plan the business visa before entry when possible.",
    },
    {
      value: "faq-tourist-to-dtv",
      question: "Can I convert a tourist visa to DTV inside Thailand?",
      answer:
        "DTV is normally applied for at a qualifying Thai embassy or consulate with the DTV evidence pack. Do not assume tourist entry can convert to DTV in-country. Compare DTV requirements on the Thailand DTV Visa page and apply from the correct post before you rely on tourist days.",
    },
    {
      value: "faq-overstay-switch",
      question: "Can I change visa type if I overstayed?",
      answer:
        "Overstay complicates any transition. Fines, departure orders, and future refusals may apply. Clear overstay issues with immigration or border officials before you plan a new category. Do not file new applications while ignoring overstay days.",
    },
    {
      value: "faq-how-long",
      question: "How long does a visa type change take?",
      answer:
        "In-country extensions that immigration accepts may take days to weeks depending on office workload. Route changes that require leaving Thailand add embassy processing time abroad plus re-entry planning. Build margin before your current permission to stay expires.",
    },
    {
      value: "faq-reentry-after-change",
      question: "Do I need a re-entry permit after changing visa type?",
      answer:
        "If you hold a long-stay extension or visa that is single-entry, leaving Thailand without a re-entry permit can end your permission to stay. After any successful change, confirm entry type and apply for a re-entry permit before international travel if needed.",
    },
  ],
  related: [
    {
      category: "Route selection",
      title: "Best Visa for Living in Thailand",
      description: "Choose the right target category before you attempt a status change.",
      href: "/blog/best-visa-for-living-in-thailand",
    },
    {
      category: "Compliance",
      title: "Re-Entry Permit Thailand",
      description: "Protect your stay permission when you leave after a visa change.",
      href: "/blog/re-entry-permit-thailand",
    },
    {
      category: "Article topic",
      title: "Immigration Procedures Articles",
      description: "More articles on extensions, reporting, and compliance.",
      href: "/blog/cluster/immigration-procedures",
    },
    {
      category: "Visa services",
      title: "Thailand DTV Visa",
      description: "Requirements if DTV is your target category after leaving Thailand.",
      href: "/visas/dtv",
    },
  ],
  relatedSlugs: ["best-visa-for-living-in-thailand", "re-entry-permit-thailand"],
  cta: {
    title: "Let Thai Visa Company map your visa change path",
    description:
      "Share your current stamp, expiry date, and target category. We confirm whether in-country change is realistic or you should reapply abroad.",
    footnote: defaultFinalCtaFootnote,
  },
})
