import { defineBlogArticle } from "@/lib/content/collections/blog"
import { blogArticlePhotography } from "@/lib/media/photography"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

export const meta = defineBlogArticle({
  contentType: "comparison",
  slug: "business-visa-vs-work-permit-thailand",
  title: "Business Visa vs Work Permit in Thailand",
  description:
    "Business visa vs work permit in Thailand: most employees need both. Compare what each document does, the normal order, and when each applies.",
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  category: "Visa comparison",
  tags: [
    "business visa",
    "work permit",
    "non-immigrant b",
    "thailand employment",
    "visa comparison",
    "do i need both business visa and work permit",
    "can i work with business visa thailand",
  ],
  published: true,
  featured: true,
  topicId: "business",
  pillarSlug: "business",
  seo: {
    title: "Business Visa vs Work Permit in Thailand: What You Actually Need",
    description:
      "Most employees need both a business visa and a work permit. Compare the difference, whether you can work on a business visa alone, and the normal visa-then-permit sequence.",
    keywords: [
      "business visa vs work permit thailand",
      "thailand business visa vs work permit",
      "do i need both business visa and work permit thailand",
      "can i work with business visa thailand",
      "difference between business visa and work permit thailand",
      "non-immigrant b visa work permit",
    ],
    ogTitle: "Business Visa vs Work Permit in Thailand",
    ogDescription:
      "They are not the same document. Most employees need both. Learn what each one does and the normal visa-then-permit process.",
  },
  index: {
    clusterId: "business",
    clusterLabel: "Business Visa",
  },
  headingId: "business-visa-vs-work-permit-heading",
  eyebrow: "Business & work",
  lead:
    "Most foreign employees with a Thai sponsor need both a business visa and a work permit. They are different documents from different agencies: the visa lets you enter and stay; the permit authorizes the job. This article compares them, explains the normal sequence, and helps you decide if this route fits before you open the Thailand Business Visa page.",
  answer:
    "Yes, most foreign employees working for a Thai employer need both a Non-Immigrant B business visa and a work permit. The business visa is immigration permission to enter and stay for employment-linked activity with a sponsor. The work permit is labour authorization to perform the job after you arrive. The visa does not authorize work by itself.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage: blogArticlePhotography["business-visa-vs-work-permit-thailand"].hero.src,
  readingTime: "11 min read",
  tableOfContents: [
    { id: "who-this-article-is-for", label: "Who this article is for" },
    {
      id: "where-to-find-full-visa-requirements",
      label: "Where to find full visa requirements",
    },
    {
      id: "do-you-need-both-a-business-visa-and-a-work-permit",
      label: "Do you need both?",
    },
    {
      id: "business-visa-vs-work-permit-at-a-glance",
      label: "Business visa vs work permit",
    },
    { id: "what-is-a-business-visa", label: "What is a business visa" },
    { id: "what-is-a-work-permit", label: "What is a work permit" },
    {
      id: "how-this-applies-in-real-situations",
      label: "How this applies in real situations",
    },
    {
      id: "why-are-business-visas-and-work-permits-confused",
      label: "Why they are confused",
    },
    { id: "normal-process-timeline", label: "Normal process" },
    { id: "decision-framework", label: "Decision framework" },
    { id: "common-mistakes", label: "Common mistakes" },
  ],
  sources: [
    {
      title: "Ministry of Foreign Affairs: Non-Immigrant Visa B (Business and Work)",
      href: "https://www.mfa.go.th/en/publicservice/non-immigrant-visa-b-for-business-and-work",
      accessedAt: "2026-06-25",
    },
    {
      title: "Department of Employment, Ministry of Labour",
      href: "https://www.doe.go.th/",
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
      value: "faq-need-both",
      question: "Do I need both a business visa and a work permit in Thailand?",
      answer:
        "Yes, in most cases. Foreign employees working for a Thai employer usually need a Non-Immigrant B business visa to enter and stay on the correct status, and a work permit from the Ministry of Labour before they perform work. The visa does not authorize employment by itself.",
    },
    {
      value: "faq-difference",
      question: "What is the difference between a business visa and a work permit in Thailand?",
      answer:
        "A business visa is immigration permission issued by a Thai embassy or consulate. It lets you enter and stay for employment-linked activity with a sponsor. A work permit is labour authorization issued by the Department of Employment. It lets you perform a specific job for a specific Thai employer. Most employees need both.",
    },
    {
      value: "faq-visa-alone-work",
      question: "Can I work in Thailand with only a business visa?",
      answer:
        "No. A Non-Immigrant B visa supports entry and stay linked to your sponsor, but it does not authorize employment by itself. You still need a work permit from the Ministry of Labour before you perform work in Thailand, unless a specific exemption applies to your role.",
    },
    {
      value: "faq-permit-without-visa",
      question: "Can I get a work permit without a business visa?",
      answer:
        "Most employment cases start with the correct long-stay visa category first, usually Non-Immigrant B. A work permit application is tied to your sponsor and your immigration status. Arriving on a tourist visa and trying to convert without a clear route is a common failure pattern.",
    },
    {
      value: "faq-who-applies-permit",
      question: "Who applies for the work permit, me or my employer?",
      answer:
        "The Thai employer or sponsoring company typically leads the work permit application with the Department of Employment. You provide personal documents, but the sponsor submits company evidence and takes legal responsibility for the filing.",
    },
    {
      value: "faq-director-permit",
      question: "Do company directors need a work permit too?",
      answer:
        "Directors who perform work in Thailand usually need a work permit like other employees, even when they hold shares in the company. Titles on paper do not remove the permit requirement if you are working in Thailand.",
    },
    {
      value: "faq-timing-between-steps",
      question: "How long do I have after the visa to get a work permit?",
      answer:
        "You should plan the work permit soon after entry, often within the first 90 days of your permission to stay. Exact timing depends on your visa stamp, sponsor readiness, and local office practice. Do not start working while waiting.",
    },
    {
      value: "faq-change-employer",
      question: "If I change employers, do I need a new work permit?",
      answer:
        "Yes. A work permit is tied to a specific employer and position. Changing companies usually requires a new permit and may affect your visa extension path. Treat a job change as a full compliance review, not a paperwork update.",
    },
    {
      value: "faq-boi-streamlined",
      question: "Is the process different for BOI-promoted companies?",
      answer:
        "BOI-promoted sponsors may use streamlined channels such as the One Stop Service Center, but the visa and work permit remain separate instruments. Faster processing does not merge the two into one document.",
    },
    {
      value: "faq-remote-worker",
      question: "I work remotely for a foreign company. Do I need either document?",
      answer:
        "Remote work for foreign income without Thai employment is a different intent family. A business visa and work permit are for Thailand-linked employment or company activity. Compare the DTV visa page or other long-stay routes instead of forcing a Non-Immigrant B file.",
    },
  ],
  related: [
    {
      category: "Work authorization",
      title: "Can I Work in Thailand Without a Work Permit?",
      description: "When you need labour authorization beyond a business visa.",
      href: "/blog/can-i-work-in-thailand-without-a-work-permit",
    },
    {
      category: "Route selection",
      title: "Best Visa for Living in Thailand",
      description: "Compare long-stay routes before you commit to a business visa and work permit file.",
      href: "/blog/best-visa-for-living-in-thailand",
    },
    {
      category: "Visa services",
      title: "Thailand Business Visa",
      description:
        "Complete requirements, sponsorship pathways, documents, and comparison tables for Non-Immigrant B.",
      href: "/visas/business",
    },
    {
      category: "Article topic",
      title: "Thailand Business Visa Articles",
      description:
        "More articles on business visas, work permits, and company sponsorship.",
      href: "/blog/cluster/business",
    },
    {
      category: "Alternative route",
      title: "Thailand DTV Visa",
      description:
        "For remote workers and digital nomads without Thai employment, not a business visa substitute.",
      href: "/visas/dtv",
    },
  ],
  relatedSlugs: [
    "best-visa-for-living-in-thailand",
    "can-i-work-in-thailand-without-a-work-permit",
  ],
  cta: {
    title: "Let Thai Visa Company review your situation",
    description:
      "Share your role, sponsor status, and where you are applying from. We confirm the normal sequence and check your documents before you file.",
    footnote: defaultFinalCtaFootnote,
  },
})
