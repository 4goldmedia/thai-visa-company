import { defineBlogArticle } from "@/lib/content/collections/blog"
import { blogArticlePhotography } from "@/lib/media/photography"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

/**
 * Editorial brief:
 * - Primary Search Query: thailand elite visa vs retirement visa
 * - Canonical Question: Should I choose Thailand Elite or a retirement visa?
 * - primaryIntent: comparison
 */
export const meta = defineBlogArticle({
  contentType: "comparison",
  slug: "thailand-elite-visa-vs-retirement-visa",
  title: "Thailand Elite Visa vs Retirement Visa",
  description:
    "Elite vs retirement visa in Thailand: compare cost, financial proof, stay length, benefits, and which route fits applicants 50 and over.",
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  category: "Visa comparison",
  tags: [
    "elite vs retirement visa",
    "thailand elite visa vs retirement",
    "elite or retirement thailand",
    "retirement vs elite visa",
    "thailand long stay comparison",
  ],
  published: true,
  featured: false,
  topicId: "elite",
  pillarSlug: "elite",
  seo: {
    title: "Thailand Elite Visa vs Retirement Visa: Cost, Proof & Fit",
    description:
      "Retirement visas cost less when you qualify at 50+. Elite trades membership fees for fewer financial proof hurdles and premium services. Compare fit.",
    keywords: [
      "thailand elite visa vs retirement visa",
      "elite vs retirement visa thailand",
      "elite or retirement visa thailand",
      "thailand elite vs o-a visa",
      "retirement visa or elite visa",
    ],
    ogTitle: "Thailand Elite Visa vs Retirement Visa",
    ogDescription:
      "At 50+, retirement is usually cheaper. Elite can win on simplicity and services when retirement proof is painful. Compare before you pay.",
  },
  index: {
    clusterId: "elite",
    clusterLabel: "Thailand Elite Visa",
  },
  headingId: "thailand-elite-visa-vs-retirement-visa-heading",
  eyebrow: "Visa comparison",
  lead:
    "Applicants 50 and over often narrow to Thailand Elite membership or a retirement visa (Non-Immigrant O or O-A). Retirement is usually far cheaper when you meet income or savings rules. Elite costs more upfront but can appeal when retirement paperwork, insurance, or bank seasoning feels unworkable. This article compares Elite vs retirement visa on cost, proof, and lifestyle fit so you choose before paying membership fees or locking retirement bank balances.",
  answer:
    "Choose a retirement visa when you are 50 or older, meet qualifying income or savings rules, and want the lowest-cost lawful long-stay path. Choose Thailand Elite when you can pay membership fees and prefer programme-based stay permission with premium services over retirement financial proof. Elite is rarely the better financial deal if you cleanly qualify for retirement. Elite can still win when retirement evidence is borderline, insurance requirements are difficult, or you value concierge-style support enough to justify the fee.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage:
    blogArticlePhotography["thailand-elite-visa-vs-retirement-visa"].hero.src,
  readingTime: "10 min read",
  tableOfContents: [
    { id: "who-this-article-is-for", label: "Who this article is for" },
    {
      id: "where-to-find-full-visa-requirements",
      label: "Where to find full visa requirements",
    },
    {
      id: "should-you-choose-elite-or-retirement",
      label: "Elite or retirement?",
    },
    {
      id: "elite-vs-retirement-at-a-glance",
      label: "Elite vs retirement at a glance",
    },
    { id: "what-elite-offers", label: "What Elite offers" },
    { id: "what-retirement-offers", label: "What retirement offers" },
    {
      id: "how-this-applies-in-real-situations",
      label: "How this applies in real situations",
    },
    { id: "decision-framework", label: "Decision framework" },
    { id: "common-mistakes", label: "Common mistakes" },
  ],
  sources: [
    {
      title: "Thailand Privilege Card (official programme)",
      href: "https://www.thailandprivilege.co.th/",
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
      value: "faq-cheaper",
      question: "Is retirement visa cheaper than Elite?",
      answer:
        "Yes for most applicants who qualify. Retirement routes use embassy and extension fees plus financial proof costs. Elite requires a substantial upfront membership fee. Retirement is usually the lower-cost option when income or savings rules are met.",
    },
    {
      value: "faq-skip-proof",
      question: "Does Elite skip retirement financial proof?",
      answer:
        "Elite uses programme eligibility rules instead of pension-style proof, but it is not proof-free. You still pay membership fees and meet programme requirements. Compare total cost, not only paperwork.",
    },
    {
      value: "faq-o-oa-which",
      question: "If retirement wins, is it O or O-A?",
      answer:
        "That is a separate comparison. Read Retirement Visa O vs O-A Thailand after you decide retirement beats Elite.",
    },
    {
      value: "faq-dtv-not-retire",
      question: "What if I still work remotely at 55?",
      answer:
        "Active remote work may fit DTV better than retirement. Compare DTV vs Retirement Visa before you choose Elite to avoid retirement proof.",
    },
    {
      value: "faq-worth-it-link",
      question: "Where do I read about Elite value alone?",
      answer:
        "See Thailand Elite Visa Worth It for a single-route cost-benefit view. This article compares Elite directly against retirement only.",
    },
  ],
  related: [
    {
      category: "Route selection",
      title: "Best Visa for Living in Thailand",
      description: "Compare all routes before you choose Elite or retirement.",
      href: "/blog/best-visa-for-living-in-thailand",
    },
    {
      category: "Visa services",
      title: "Thailand Elite Visa",
      description: "Membership packages, fees, and benefits.",
      href: "/visas/elite",
    },
    {
      category: "Visa services",
      title: "Thailand Retirement Visa",
      description: "Income thresholds, O and O-A filing, extensions.",
      href: "/visas/retirement",
    },
    {
      category: "Sibling article",
      title: "Thailand Elite Visa Worth It",
      description: "When Elite makes sense against all alternatives.",
      href: "/blog/thailand-elite-visa-worth-it",
    },
  ],
  relatedSlugs: [
    "best-visa-for-living-in-thailand",
    "thailand-elite-visa-worth-it",
    "dtv-vs-retirement-visa-thailand",
    "can-foreigners-live-in-thailand-permanently",
  ],
  cta: {
    title: "Let Thai Visa Company compare Elite and retirement for you",
    description:
      "Share your age, finances, and tolerance for paperwork. We model Elite against O and O-A retirement before you commit funds.",
    footnote: defaultFinalCtaFootnote,
  },
})
