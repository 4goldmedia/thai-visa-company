import { defineBlogArticle } from "@/lib/content/collections/blog"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

/**
 * Editorial brief (governance):
 * - Primary Search Query: best visa for living in thailand
 * - Canonical Question: What is the best visa for living in Thailand based on my situation?
 * - primaryIntent: decision
 * - Role: primary entry point into Thailand Visa Company content ecosystem
 */
export const meta = defineBlogArticle({
  contentType: "guide",
  slug: "best-visa-for-living-in-thailand",
  title: "Best Visa for Living in Thailand",
  description:
    "Compare Thailand visa routes by profile: DTV, business, retirement, elite, and education. Choose the right long-stay path before you apply.",
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  category: "Living in Thailand",
  tags: [
    "best visa for living in thailand",
    "thailand long stay visa",
    "visa route selection",
    "dtv",
    "retirement visa",
    "business visa",
    "thailand elite visa",
    "education visa",
  ],
  published: true,
  featured: true,
  topicId: "general",
  seo: {
    title: "Best Visa for Living in Thailand: How to Choose the Right Route",
    description:
      "No single visa fits everyone. Compare DTV, business, retirement, elite, and education routes by your work, age, and goals, then continue to the relevant visa guide.",
    keywords: [
      "best visa for living in thailand",
      "best visa for long stay in thailand",
      "which visa is best for thailand",
      "move to thailand visa options",
      "thailand visa comparison",
      "choose thailand visa",
    ],
    ogTitle: "Best Visa for Living in Thailand",
    ogDescription:
      "A profile-based guide to choosing the right Thailand visa for long-term living. Compare routes, trade-offs, and next steps.",
  },
  index: {
    clusterId: "living-in-thailand",
    clusterLabel: "Living in Thailand",
  },
  headingId: "best-visa-for-living-in-thailand-heading",
  eyebrow: "Route selection",
  lead:
    "There is no single best visa for living in Thailand. The right route depends on how you earn income, whether you work for a Thai employer, your age, how long you plan to stay, and whether family will relocate with you. This guide compares the five main long-stay paths and helps you identify which visa fits your profile before you study detailed requirements or start an application.",
  answer:
    "The best visa for living in Thailand depends on your situation, not one universal answer. Remote workers earning foreign income usually fit the DTV (Destination Thailand Visa). People employed by a Thai company need a business visa and work permit. Applicants 50 and over with qualifying retirement income fit O or O-A retirement routes. Enrolled students fit education visas. The Thailand Elite Visa suits applicants who want a premium long-stay option when other routes are a weak match. Use the relevant visa guide for eligibility, documents, and filing steps.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage: "/images/visas/dtv-remote-work.jpg",
  readingTime: "16 min read",
  tableOfContents: [
    { id: "key-takeaways", label: "Key takeaways" },
    { id: "who-this-article-is-for", label: "Who this article is for" },
    { id: "where-to-find-full-visa-requirements", label: "Where to find full visa requirements" },
    { id: "is-there-one-best-visa-for-living-in-thailand", label: "Is there one best visa for living in Thailand?" },
    { id: "how-should-i-think-about-my-profile", label: "How should I think about my profile?" },
    {
      id: "which-thailand-visa-is-best-for-different-situations",
      label: "Which Thailand visa is best for different situations?",
    },
    { id: "how-do-i-choose-the-right-thailand-visa", label: "How do I choose the right Thailand visa?" },
    { id: "how-do-the-main-thailand-visas-compare", label: "How do the main Thailand visas compare?" },
    { id: "what-should-i-do-after-choosing-a-route", label: "What should I do after choosing a route?" },
    { id: "what-are-common-visa-choosing-mistakes", label: "What are common visa-choosing mistakes?" },
  ],
  sources: [
    {
      title: "Ministry of Foreign Affairs: Thailand Visa Information",
      href: "https://www.mfa.go.th/en/publicservice",
      accessedAt: "2026-06-25",
    },
    {
      title: "Thailand Immigration Bureau",
      href: "https://www.immigration.go.th/",
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
      value: "faq-switch-routes-later",
      question: "Can I switch to a different Thailand visa later?",
      answer:
        "Yes, in many cases, but switches are not automatic. Whether you can change route depends on your current visa, time left on stay, and the category you want next. Some moves require leaving Thailand and reapplying; others allow in-country steps when policy permits. Map your current status and target route using the relevant visa guide before you file anything new.",
    },
    {
      value: "faq-family-with-children",
      question: "What is the best visa for families moving to Thailand?",
      answer:
        "There is no single family visa. Households usually anchor on the primary applicant's route: employment leads to business and permit logic, retirement leads to O or O-A for the qualifying retiree, and study leads to education visas for enrolled children. Dependants may follow or parallel-file depending on rules for that category. Choose the main earner's or retiree's route first, then read dependant guidance in that visa guide.",
    },
    {
      value: "faq-remote-worker-thai-spouse",
      question: "I work remotely but my spouse is Thai. Which visa fits?",
      answer:
        "Remote foreign income often points to DTV when programme rules are met. Marriage to a Thai national may also open stay options tied to family status, which can differ from DTV proof requirements. Compare which story matches your primary purpose, income documentation, and travel plans. A short case review helps when two legitimate paths compete.",
    },
    {
      value: "faq-part-time-work-thailand",
      question: "Can I do part-time work in Thailand on a DTV or retirement visa?",
      answer:
        "Local work in Thailand generally requires the correct business visa and work permit, not DTV or retirement permission. Small or part-time roles still count as work if performed in Thailand for a Thai entity or local labour market. Treat any Thailand-based job as a business-route question and read the Thailand Business Visa guide before you accept work.",
    },
    {
      value: "faq-wrong-visa-already-inside",
      question: "I am already in Thailand on the wrong visa. What should I do?",
      answer:
        "Stop and assess before your next border crossing or extension. Working, studying, or retiring on the wrong category can create overstay, permit, or re-entry problems. Document your current stamp, employer or income reality, and target lifestyle. Then get case-specific advice on whether to extend, change, leave and reapply, or regularize through the correct visa route.",
    },
    {
      value: "faq-dtv-vs-retirement-50",
      question: "I am 50. Should I choose DTV or a retirement visa?",
      answer:
        "At 50, both may be on the table, but the better fit follows your income story. Active remote work for foreign clients usually favors DTV. Stopping work and relying on pension or investment proof usually favors retirement. If you will keep earning remotely, DTV is often Excellent fit; if you will not work, retirement is often Best fit. Compare both visa guides before you file.",
    },
    {
      value: "faq-education-language-school-only",
      question: "Is an education visa right if I only want language school?",
      answer:
        "It can be Good fit to Best fit when you enroll full time at a compliant school that sponsors education-category visas and you maintain attendance. Language study is not a shortcut for living in Thailand without study compliance. Verify the school's visa support history before you pay fees. Full programme and renewal rules are in the Thailand Education Visa guide.",
    },
    {
      value: "faq-elite-vs-retirement",
      question: "Thailand Elite Visa vs retirement visa: which is better?",
      answer:
        "Neither is universally better. Retirement is usually Best fit at 50+ when you meet financial proof and do not intend to work. Elite is often Good fit when you want premium long-stay services and membership benefits despite qualifying elsewhere. Compare membership cost, travel needs, and proof burden using the Thailand Elite Visa and Thailand Retirement Visa guides side by side.",
    },
    {
      value: "faq-tourist-visa-long-stay",
      question: "Can I use a tourist visa to live in Thailand long term?",
      answer:
        "Tourist and visa-exempt stays are Usually not recommended as a long-term living strategy. They suit short visits, not relocation. Immigration watches entry patterns and purpose. If you plan to live in Thailand, choose a long-stay category such as DTV, business, retirement, education, or Elite that matches your real circumstances.",
    },
    {
      value: "faq-best-visa-digital-nomad",
      question: "What is the best visa for digital nomads in Thailand?",
      answer:
        "For many digital nomads with qualifying foreign income and no Thai employer, DTV is Best fit among current long-stay options. You must meet programme activity and proof rules; tourist entry is not a substitute. Thai employment or local client work pushes you toward business and work permit routes instead. Confirm your profile on the Thailand DTV Visa page before you apply.",
    },
  ],
  related: [
    {
      category: "Guide topic",
      title: "Thailand Immigration Guides",
      description: "Cross-cutting guides on how visa routes fit together.",
      href: "/blog/cluster/living-in-thailand",
    },
    {
      category: "DTV",
      title: "Thailand DTV Visa",
      description: "Complete requirements for the Destination Thailand Visa and remote-work route.",
      href: "/visas/dtv",
    },
    {
      category: "Business",
      title: "Thailand Business Visa",
      description: "Employment and company-linked routes, sponsorship, and work permit context.",
      href: "/visas/business",
    },
    {
      category: "Retirement",
      title: "Thailand Retirement Visa",
      description: "O and O-A retirement routes for applicants 50+ with qualifying income.",
      href: "/visas/retirement",
    },
    {
      category: "Elite",
      title: "Thailand Elite Visa",
      description: "Premium long-stay membership when convenience outweighs other routes.",
      href: "/visas/elite",
    },
    {
      category: "Education",
      title: "Thailand Education Visa",
      description: "Student and language-school routes for study-based long stays.",
      href: "/visas/education",
    },
    {
      category: "Visa comparison",
      title: "Business Visa vs Work Permit in Thailand",
      description: "Employment path detail when a Thai employer is involved.",
      href: "/blog/business-visa-vs-work-permit-thailand",
    },
  ],
  relatedSlugs: ["business-visa-vs-work-permit-thailand"],
  cta: {
    title: "Get expert guidance before you apply",
    description:
      "Share your age, work setup, income source, and how long you plan to stay. We confirm the right route and manage your application to reduce delays and mistakes.",
    footnote: defaultFinalCtaFootnote,
  },
})
