import { defineBlogArticle } from "@/lib/content/collections/blog"
import { blogArticlePhotography } from "@/lib/media/photography"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

/**
 * Editorial brief:
 * - Primary Search Query: can i work in thailand without a work permit
 * - Canonical Question: Can foreigners legally work in Thailand without first obtaining a work permit?
 * - primaryIntent: authority (work authorization)
 */
export const meta = defineBlogArticle({
  contentType: "guide",
  slug: "can-i-work-in-thailand-without-a-work-permit",
  title: "Can I Work in Thailand Without a Work Permit?",
  description:
    "Can you work in Thailand without a work permit? Learn when labour authorization is required, and when remote work, meetings, or volunteering follow different rules.",
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  category: "Work authorization",
  tags: [
    "work permit thailand",
    "can i work without work permit thailand",
    "thailand work permit required",
    "working illegally thailand",
    "remote work thailand",
    "business visa work permit",
  ],
  published: true,
  featured: false,
  topicId: "business",
  pillarSlug: "business",
  seo: {
    title: "Can I Work in Thailand Without a Work Permit? When It Is and Is Not Legal",
    description:
      "Most work performed in Thailand for a Thai employer requires a work permit. Remote work for foreign income, short meetings, and some activities follow different rules. See when you need authorization.",
    keywords: [
      "can i work in thailand without a work permit",
      "work in thailand without work permit",
      "do i need a work permit to work in thailand",
      "can foreigners work in thailand without work permit",
      "remote work thailand work permit",
      "thailand work permit requirements",
    ],
    ogTitle: "Can I Work in Thailand Without a Work Permit?",
    ogDescription:
      "A work permit authorizes specific jobs in Thailand. A visa alone does not. See when you need a permit and when another route fits.",
  },
  index: {
    clusterId: "business",
    clusterLabel: "Business Visa",
  },
  headingId: "can-i-work-in-thailand-without-a-work-permit-heading",
  eyebrow: "Work authorization",
  lead:
    "Foreigners often ask whether they can work in Thailand without a work permit because visas, remote jobs, and business travel blur together online. In practice, Thai labour law ties permission to work to a work permit for most jobs performed in Thailand, especially on a Thai payroll. Remote work for foreign employers, short business meetings, and some visa categories follow different rules. This article explains when a work permit is legally required and when it is not, so you can choose the right visa route before you start working.",
  answer:
    "No, in most cases you cannot legally perform work in Thailand without a work permit when the activity counts as working in Thailand under labour law. A work permit authorizes a named foreign national to perform a specific job for a specific Thai employer. A business visa or DTV does not replace that authorization for Thai employment. Remote work for foreign income without Thai payroll may fit DTV or other long-stay routes instead of a work permit, but local employment, most consulting billed to Thai clients, and active director roles usually require a business visa and work permit. Short business meetings without local employment are a different pattern.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage:
    blogArticlePhotography["can-i-work-in-thailand-without-a-work-permit"].hero.src,
  readingTime: "12 min read",
  tableOfContents: [
    { id: "who-this-article-is-for", label: "Who this article is for" },
    {
      id: "where-to-find-full-visa-requirements",
      label: "Where to find full visa requirements",
    },
    {
      id: "do-you-need-a-work-permit-to-work-in-thailand",
      label: "Do you need a work permit?",
    },
    { id: "what-a-work-permit-authorizes", label: "What a work permit authorizes" },
    {
      id: "common-misconceptions-about-working-in-thailand",
      label: "Common misconceptions",
    },
    {
      id: "how-this-applies-in-real-situations",
      label: "How this applies in real situations",
    },
    { id: "decision-framework", label: "Decision framework" },
    { id: "common-mistakes", label: "Common mistakes" },
  ],
  sources: [
    {
      title: "Department of Employment, Ministry of Labour",
      href: "https://www.doe.go.th/",
      accessedAt: "2026-06-25",
    },
    {
      title: "Ministry of Foreign Affairs: Non-Immigrant Visa B (Business and Work)",
      href: "https://www.mfa.go.th/en/publicservice/non-immigrant-visa-b-for-business-and-work",
      accessedAt: "2026-06-25",
    },
  ],
  faq: [
    {
      value: "faq-visa-enough",
      question: "Can I work in Thailand with only a business visa?",
      answer:
        "No. A Non-Immigrant B business visa supports entry and stay linked to a sponsor but does not authorize employment by itself. You still need an approved work permit from the Ministry of Labour before you perform work in Thailand for a Thai employer, unless a narrow exemption applies to your role.",
    },
    {
      value: "faq-dtv-work",
      question: "Can I work in Thailand on a DTV without a work permit?",
      answer:
        "DTV supports qualifying remote work or freelance activity for foreign income without Thai payroll employment. It does not authorize working for a Thai employer or performing work in the Thai labour market without a work permit. If you take a Thai job, you need a business visa and work permit route instead.",
    },
    {
      value: "faq-remote-foreign",
      question: "Do I need a work permit for remote work for a foreign company?",
      answer:
        "If you earn from abroad, perform work for foreign clients or employers, and have no Thai payroll job, you may fit DTV or another long-stay category rather than a work permit. If you perform work in Thailand that labour law treats as local employment, a work permit is usually required regardless of where income is paid.",
    },
    {
      value: "faq-meetings",
      question: "Can I attend business meetings in Thailand without a work permit?",
      answer:
        "Short business visits for meetings, negotiations, or site visits without taking local employment often use visitor or short-stay permission rather than a full work permit file. The line depends on whether you perform work in Thailand, not only attend meetings. Confirm intent before you rely on tourist entry for repeated business activity.",
    },
    {
      value: "faq-director",
      question: "Do company directors need a work permit in Thailand?",
      answer:
        "Directors who actively manage operations in Thailand usually need a work permit like other employees, even when they hold shares. A title on paper does not remove labour authorization requirements when you perform work locally.",
    },
  ],
  related: [
    {
      category: "Visa comparison",
      title: "Business Visa vs Work Permit in Thailand",
      description: "How the business visa and work permit differ and why most employees need both.",
      href: "/blog/business-visa-vs-work-permit-thailand",
    },
    {
      category: "Route selection",
      title: "Best Visa for Living in Thailand",
      description: "Choose the right long-stay route before you assess work authorization.",
      href: "/blog/best-visa-for-living-in-thailand",
    },
    {
      category: "Visa services",
      title: "Thailand Business Visa",
      description: "Sponsorship, Non-Immigrant B, and work permit context for Thai employment.",
      href: "/visas/business",
    },
    {
      category: "Alternative route",
      title: "Thailand DTV Visa",
      description: "Long-stay remote work for foreign income without Thai payroll employment.",
      href: "/visas/dtv",
    },
  ],
  relatedSlugs: [
    "business-visa-vs-work-permit-thailand",
    "best-visa-for-living-in-thailand",
    "can-foreigners-live-in-thailand-permanently",
  ],
  cta: {
    title: "Let Thai Visa Company confirm your work authorization path",
    description:
      "Share your job role, employer location, and visa status. We confirm whether you need a work permit, a different visa route, or both before you start working.",
    footnote: defaultFinalCtaFootnote,
  },
})
