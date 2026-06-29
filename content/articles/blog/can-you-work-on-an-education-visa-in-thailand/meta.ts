import { defineBlogArticle } from "@/lib/content/collections/blog"
import { blogArticlePhotography } from "@/lib/media/photography"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

/**
 * Editorial brief:
 * - Primary Search Query: can i work on an education visa in thailand
 * - Canonical Question: Can I legally work while holding an Education Visa?
 * - primaryIntent: authority (work authorization)
 */
export const meta = defineBlogArticle({
  contentType: "guide",
  slug: "can-you-work-on-an-education-visa-in-thailand",
  title: "Can You Work on an Education Visa in Thailand?",
  description:
    "Can you work on an Education Visa in Thailand? Learn what employment, freelancing, consulting, and remote work are allowed, and when another visa fits better.",
  publishedAt: "2026-06-24",
  updatedAt: "2026-06-24",
  category: "Work authorization",
  tags: [
    "education visa work permit",
    "can i work on education visa thailand",
    "remote work education visa",
    "freelancing education visa thailand",
    "teaching on education visa",
    "education visa employment",
  ],
  published: true,
  featured: true,
  topicId: "education",
  pillarSlug: "education",
  seo: {
    title: "Can You Work on an Education Visa in Thailand? What Is Allowed",
    description:
      "Education Visa is for study, not Thai employment or general remote-work intent. See when work is allowed, when it is not, and which visa fits better.",
    keywords: [
      "can i work on an education visa in thailand",
      "education visa work permit thailand",
      "remote work on education visa",
      "freelancing on education visa thailand",
      "teaching on education visa",
      "can education visa holders work",
    ],
    ogTitle: "Can You Work on an Education Visa in Thailand?",
    ogDescription:
      "Education Visa does not authorize Thai employment or general remote-work intent. See practical rules and better-fit visa routes.",
  },
  index: {
    clusterId: "education",
    clusterLabel: "Education Visa",
  },
  headingId: "can-you-work-on-education-visa-in-thailand-heading",
  eyebrow: "Work authorization",
  lead:
    "Education Visa is one of the most misunderstood long-stay categories in Thailand. Many applicants assume that holding any long-stay visa allows them to work, freelance, consult, or run a remote business from Thailand. In practice, an Education Visa is enrollment-linked permission to study at a qualifying institution. It is not a work visa and not a general remote-work route. This article explains what you can and cannot do while holding an Education Visa, why the rules confuse people, and when DTV or a business visa may fit your real lifestyle better.",
  answer:
    "No, you cannot legally work in Thailand on an Education Visa in the way most people mean work. Education Visa does not authorize Thai employment, local freelancing for Thai clients, teaching for pay, or general remote-work intent as your primary activity. Qualifying remote work for foreign income may fit DTV instead. Thai payroll employment requires a business visa and work permit. Short unpaid study activity is not the same as lawful employment. If your real goal is earning income in Thailand, compare whether education, DTV, or business routes match your activity before you enroll.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage:
    blogArticlePhotography["can-you-work-on-an-education-visa-in-thailand"].hero.src,
  readingTime: "10 min read",
  tableOfContents: [
    { id: "who-this-article-is-for", label: "Who this article is for" },
    {
      id: "where-to-find-full-visa-requirements",
      label: "Where to find full visa requirements",
    },
    {
      id: "can-you-legally-work",
      label: "Can you legally work?",
    },
    {
      id: "remote-work-considerations",
      label: "Remote work considerations",
    },
    {
      id: "why-people-confuse-this-rule",
      label: "Why people confuse this rule",
    },
    {
      id: "alternatives-if-you-need-to-work",
      label: "Alternatives if you need to work",
    },
    {
      id: "common-misconceptions",
      label: "Common misconceptions",
    },
    { id: "decision-framework", label: "Decision framework" },
    { id: "common-mistakes", label: "Common mistakes" },
  ],
  sources: [
    {
      title: "Department of Employment, Ministry of Labour",
      href: "https://www.doe.go.th/",
      accessedAt: "2026-06-29",
    },
    {
      title: "Ministry of Foreign Affairs: Non-Immigrant Visa ED",
      href: "https://www.mfa.go.th/en/publicservice",
      accessedAt: "2026-06-29",
    },
  ],
  faq: [
    {
      value: "faq-work-at-all",
      question: "Can I work at all on an Education Visa?",
      answer:
        "Not in the sense of Thai employment or paid local work. Education Visa is for genuine study. If you need to earn income through work performed in Thailand, compare DTV for foreign remote income or a business visa and work permit for Thai employment.",
    },
    {
      value: "faq-remote-foreign",
      question: "Can I do remote work on an Education Visa?",
      answer:
        "Education Visa is not intended for remote-work-only intent. If your primary activity is qualifying remote work for foreign income, DTV is usually the better category. Do not use education enrollment as a workaround for full-time remote work.",
    },
    {
      value: "faq-teach-english",
      question: "Can I teach English on an Education Visa?",
      answer:
        "Paid teaching is work. It generally requires the correct employment authorization, not an Education Visa alone. Treat any paid teaching as a work-permit question, not a study-permit question.",
    },
    {
      value: "faq-freelance-thai-clients",
      question: "Can I freelance for Thai clients on an Education Visa?",
      answer:
        "Freelancing for Thai clients is usually treated as local work activity. Education Visa does not cover it. If Thai-market consulting is central to your income, compare business visa and work permit routes.",
    },
    {
      value: "faq-better-route",
      question: "What visa should I choose if I also need to work?",
      answer:
        "Remote foreign income often points to DTV. Thai employment points to business visa and work permit. If you are unsure, start with Best Visa for Living in Thailand, then compare DTV vs Education Visa Thailand.",
    },
  ],
  related: [
    {
      category: "Visa comparison",
      title: "DTV Visa vs Education Visa Thailand",
      description: "Compare study intent against remote-work long-stay intent.",
      href: "/blog/dtv-vs-education-visa-thailand",
    },
    {
      category: "Authority article",
      title: "Can I Work in Thailand Without a Work Permit?",
      description: "General work authorization rules across visa categories.",
      href: "/blog/can-i-work-in-thailand-without-a-work-permit",
    },
    {
      category: "Visa services",
      title: "Thailand Education Visa",
      description: "Enrollment-linked study routes and pathway fit.",
      href: "/visas/education",
    },
    {
      category: "Visa services",
      title: "Thailand DTV Visa",
      description: "Long-stay remote work for qualifying foreign income.",
      href: "/visas/dtv",
    },
  ],
  relatedSlugs: [
    "best-visa-for-living-in-thailand",
    "can-i-work-in-thailand-without-a-work-permit",
    "business-visa-vs-work-permit-thailand",
    "dtv-vs-education-visa-thailand",
  ],
  cta: {
    title: "Let Thai Visa Company confirm whether Education Visa fits your lifestyle",
    description:
      "Share your study plans, income source, and work activity. We confirm whether education, DTV, or business routes match before you enroll.",
    footnote: defaultFinalCtaFootnote,
  },
})
