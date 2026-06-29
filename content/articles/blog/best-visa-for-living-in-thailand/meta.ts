import { defineBlogArticle } from "@/lib/content/collections/blog"
import { blogArticlePhotography } from "@/lib/media/photography"
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
      "No single visa fits everyone. Compare DTV, business, retirement, elite, and education routes by your work, age, and goals, then continue to the relevant visa page.",
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
      "No single visa fits everyone. Compare DTV, business, retirement, elite, and education routes by profile, then open the visa page for your shortlisted route.",
  },
  index: {
    clusterId: "living-in-thailand",
    clusterLabel: "Living in Thailand",
  },
  headingId: "best-visa-for-living-in-thailand-heading",
  eyebrow: "Route selection",
  lead:
    "There is no single best visa for living in Thailand. The right route depends on how you earn income, whether you work for a Thai employer, your age, how long you plan to stay, and whether family will relocate with you. This article compares the five main long-stay paths and helps you identify which visa fits your profile before you study detailed requirements or start an application.",
  answer:
    "The best visa for living in Thailand depends on your situation, not one universal answer. Remote workers earning foreign income usually fit the DTV (Destination Thailand Visa). People employed by a Thai company need a business visa and work permit. Applicants 50 and over with qualifying retirement income fit O or O-A retirement routes. Enrolled students fit education visas. The Thailand Elite Visa suits applicants who want a premium long-stay option when other routes are a weak match. Use the relevant visa page for eligibility, documents, and filing steps.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage: blogArticlePhotography["best-visa-for-living-in-thailand"].hero.src,
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
        "Yes, in many cases, but switches are not automatic. Whether you can change route depends on your current visa, time left on stay, and the category you want next. Some moves require leaving Thailand and reapplying; others allow in-country steps when policy permits. Read Change Visa Type in Thailand and map your target route on the relevant visa page before you file anything new.",
    },
    {
      value: "faq-family-with-children",
      question: "What is the best visa for families moving to Thailand?",
      answer:
        "There is no single family visa. Households usually anchor on the primary applicant's route: employment leads to business and permit logic, retirement leads to O or O-A for the qualifying retiree, and study leads to education visas for enrolled children. Dependants may follow or parallel-file depending on rules for that category. Choose the main earner's or retiree's route first, then read dependant rules on that visa page.",
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
        "Local work in Thailand generally requires the correct business visa and work permit, not DTV or retirement permission. Small or part-time roles still count as work if performed in Thailand for a Thai entity or local labour market. Treat any Thailand-based job as a business-route question and read the Thailand Business Visa page before you accept work.",
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
        "At 50, both may be on the table, but the better fit follows your income story. Active remote work for foreign clients usually favors DTV. Stopping work and relying on pension or investment proof usually favors retirement. Compare DTV vs Retirement Visa before you file.",
    },
    {
      value: "faq-education-language-school-only",
      question: "Is an education visa right if I only want language school?",
      answer:
        "It can fit well when you enroll full time at a compliant school that sponsors education-category visas and you maintain attendance. Language study is not a shortcut for living in Thailand without study compliance. Verify the school's visa support history before you pay fees. Full programme and renewal rules are on the Thailand Education Visa page.",
    },
    {
      value: "faq-elite-vs-retirement",
      question: "Thailand Elite Visa vs retirement visa: which is better?",
      answer:
        "Neither is universally better. Retirement is usually the lower-cost fit at 50+ when you meet financial proof and do not intend to work. Elite can suit applicants who want premium long-stay services despite qualifying elsewhere. Compare Thailand Elite Visa vs Retirement Visa and both visa pages side by side.",
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
      category: "DTV comparison",
      title: "DTV vs Tourist Visa Thailand",
      description: "When tourist entry fits short stays and DTV fits long-stay remote work.",
      href: "/blog/dtv-visa-vs-tourist-visa-thailand",
    },
    {
      category: "DTV troubleshooting",
      title: "DTV Visa Rejection Reasons",
      description: "Why DTV files fail and how to fix them before reapplication.",
      href: "/blog/dtv-visa-rejection-reasons",
    },
    {
      category: "Living in Thailand",
      title: "Can Foreigners Live in Thailand Permanently?",
      description: "Long-term living is possible through lawful visas; start here before route selection.",
      href: "/blog/can-foreigners-live-in-thailand-permanently",
    },
    {
      category: "Work authorization",
      title: "Can I Work in Thailand Without a Work Permit?",
      description: "When labour authorization is required and when remote-work routes apply.",
      href: "/blog/can-i-work-in-thailand-without-a-work-permit",
    },
    {
      category: "Article topic",
      title: "Living in Thailand Articles",
      description: "Cross-cutting articles on how visa routes fit together.",
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
    {
      category: "DTV comparison",
      title: "DTV vs Retirement Visa",
      description: "Remote work versus retirement intent for applicants 50+.",
      href: "/blog/dtv-vs-retirement-visa-thailand",
    },
    {
      category: "Retirement comparison",
      title: "Retirement Visa O vs O-A Thailand",
      description: "Choose O or O-A after you shortlist retirement.",
      href: "/blog/retirement-visa-o-vs-o-a-thailand",
    },
    {
      category: "Elite decision",
      title: "Thailand Elite Visa Worth It",
      description: "When membership beats purpose-built routes on value.",
      href: "/blog/thailand-elite-visa-worth-it",
    },
    {
      category: "Immigration procedures",
      title: "Change Visa Type in Thailand",
      description: "When you must switch category or reapply abroad.",
      href: "/blog/change-visa-type-in-thailand",
    },
    {
      category: "Immigration procedures",
      title: "Re-Entry Permit Thailand",
      description: "Protect your extension when you travel abroad.",
      href: "/blog/re-entry-permit-thailand",
    },
    {
      category: "DTV comparison",
      title: "DTV vs Tourist Visa Thailand",
      description: "Short tourist stays versus lawful DTV long-stay remote work.",
      href: "/blog/dtv-visa-vs-tourist-visa-thailand",
    },
    {
      category: "DTV troubleshooting",
      title: "DTV Visa Rejection Reasons",
      description: "Diagnose refused DTV files before you reapply.",
      href: "/blog/dtv-visa-rejection-reasons",
    },
    {
      category: "Elite comparison",
      title: "Thailand Elite Visa vs Retirement Visa",
      description: "Membership fee versus retirement proof for applicants 50+.",
      href: "/blog/thailand-elite-visa-vs-retirement-visa",
    },
  ],
  relatedSlugs: [
    "can-foreigners-live-in-thailand-permanently",
    "business-visa-vs-work-permit-thailand",
    "dtv-vs-retirement-visa-thailand",
    "can-i-work-in-thailand-without-a-work-permit",
  ],
  cta: {
    title: "Get expert guidance before you apply",
    description:
      "Share your age, work setup, income source, and how long you plan to stay. We confirm the right route and manage your application to reduce delays and mistakes.",
    footnote: defaultFinalCtaFootnote,
  },
})
