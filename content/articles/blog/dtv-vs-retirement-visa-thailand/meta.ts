import { defineBlogArticle } from "@/lib/content/collections/blog"
import { blogArticlePhotography } from "@/lib/media/photography"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

/**
 * Editorial brief:
 * - Primary Search Query: dtv vs retirement visa
 * - Canonical Question: Should I choose DTV or a retirement visa for living in Thailand?
 * - primaryIntent: comparison
 */
export const meta = defineBlogArticle({
  contentType: "comparison",
  slug: "dtv-vs-retirement-visa-thailand",
  title: "DTV vs Retirement Visa",
  description:
    "DTV vs retirement visa in Thailand: compare age rules, income proof, remote work intent, costs, and which route fits applicants 50 and over.",
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  category: "Visa comparison",
  tags: [
    "dtv vs retirement visa",
    "destination thailand visa vs retirement",
    "remote work vs retirement thailand",
    "thailand visa comparison",
    "long stay thailand",
  ],
  published: true,
  featured: false,
  topicId: "dtv",
  pillarSlug: "dtv",
  seo: {
    title: "DTV vs Retirement Visa Thailand: Which Long-Stay Route Fits You",
    description:
      "DTV suits remote workers with foreign income. Retirement visas suit applicants 50+ with qualifying passive income. Compare intent, proof, and cost.",
    keywords: [
      "dtv vs retirement visa",
      "dtv vs retirement visa thailand",
      "destination thailand visa vs retirement visa",
      "remote work or retirement visa thailand",
      "which visa for retirees who still work",
    ],
    ogTitle: "DTV vs Retirement Visa",
    ogDescription:
      "Age alone does not decide the route. Compare work intent, financial proof, and stay goals before you file DTV or retirement.",
  },
  index: {
    clusterId: "dtv",
    clusterLabel: "DTV Visa",
  },
  headingId: "dtv-vs-retirement-visa-heading",
  eyebrow: "Visa comparison",
  lead:
    "Applicants over 50 sometimes assume retirement is automatic and DTV is only for younger remote workers. In practice, the choice is about intent: DTV fits ongoing remote work for foreign income, while retirement categories fit passive pension or savings-based living without Thai employment. This article compares DTV vs retirement visa so you pick the category that matches how you actually earn and spend time in Thailand.",
  answer:
    "Choose DTV if you perform remote work or freelance for foreign clients and meet DTV financial evidence rules. Choose a retirement visa if you are 50 or older, will live on qualifying retirement income or savings, and do not need visa status tied to active remote employment. Applicants 50+ who still earn active foreign work income often fit DTV better than retirement. Applicants with pensions and no ongoing work fit retirement better than DTV. Neither route authorizes Thai payroll employment without a business visa and work permit.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage: blogArticlePhotography["dtv-vs-retirement-visa-thailand"].hero.src,
  readingTime: "10 min read",
  tableOfContents: [
    { id: "who-this-article-is-for", label: "Who this article is for" },
    {
      id: "where-to-find-full-visa-requirements",
      label: "Where to find full visa requirements",
    },
    {
      id: "should-you-choose-dtv-or-retirement",
      label: "DTV or retirement?",
    },
    {
      id: "dtv-vs-retirement-at-a-glance",
      label: "DTV vs retirement at a glance",
    },
    { id: "what-dtv-is-for", label: "What DTV is for" },
    { id: "what-retirement-visa-is-for", label: "What retirement visa is for" },
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
      title: "Ministry of Foreign Affairs: Non-Immigrant Visa O-A",
      href: "https://www.mfa.go.th/en/publicservice/non-immigrant-visa-o-a",
      accessedAt: "2026-06-25",
    },
  ],
  faq: [
    {
      value: "faq-50-dtv",
      question: "Can I get DTV if I am over 50?",
      answer:
        "Yes, if you meet DTV rules and your primary intent is qualifying remote work or freelance activity for foreign income. Age does not disqualify you from DTV. Retirement may still be simpler if you live on pension income without active work.",
    },
    {
      value: "faq-pension-dtv",
      question: "Can I use pension income for DTV?",
      answer:
        "DTV evidence centres on remote work or qualifying activity patterns defined in current rules, not retiree-style passive income alone. Pension-led finances usually align better with retirement categories. Compare proof requirements on each visa page.",
    },
    {
      value: "faq-both",
      question: "Can I hold DTV and retirement logic at the same time?",
      answer:
        "You hold one immigration category at a time. Mixing stories between remote work and full retirement on applications creates refusal risk. Pick the intent that matches your next five years, not both.",
    },
    {
      value: "faq-o-vs-oa-here",
      question: "Does this article compare O vs O-A retirement?",
      answer:
        "No. O vs O-A is a retirement sub-choice. Read Retirement Visa O vs O-A Thailand after you confirm retirement beats DTV for your profile.",
    },
    {
      value: "faq-elite-instead",
      question: "What if I fit neither DTV nor retirement cleanly?",
      answer:
        "Compare Thailand Elite Visa Worth It and Thailand Elite Visa vs Retirement Visa if standard routes are weak matches and you can pay membership fees.",
    },
  ],
  related: [
    {
      category: "Route selection",
      title: "Best Visa for Living in Thailand",
      description: "Compare all long-stay routes before you choose DTV or retirement.",
      href: "/blog/best-visa-for-living-in-thailand",
    },
    {
      category: "Visa services",
      title: "Thailand DTV Visa",
      description: "DTV eligibility, financial proof, and application steps.",
      href: "/visas/dtv",
    },
    {
      category: "Visa services",
      title: "Thailand Retirement Visa",
      description: "Retirement income rules, O and O-A paths, and extensions.",
      href: "/visas/retirement",
    },
    {
      category: "Sibling comparison",
      title: "Retirement Visa O vs O-A Thailand",
      description: "After retirement wins, choose O or O-A.",
      href: "/blog/retirement-visa-o-vs-o-a-thailand",
    },
  ],
  relatedSlugs: [
    "best-visa-for-living-in-thailand",
    "retirement-visa-o-vs-o-a-thailand",
    "thailand-elite-visa-vs-retirement-visa",
    "can-foreigners-live-in-thailand-permanently",
  ],
  cta: {
    title: "Let Thai Visa Company compare DTV and retirement for your profile",
    description:
      "Share your age, income sources, and work activity. We confirm whether DTV or retirement matches your intent before you prepare bank letters.",
    footnote: defaultFinalCtaFootnote,
  },
})
