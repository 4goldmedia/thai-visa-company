import { defineBlogArticle } from "@/lib/content/collections/blog"
import { blogArticlePhotography } from "@/lib/media/photography"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

/**
 * Editorial brief:
 * - Primary Search Query: dtv vs education visa thailand
 * - Canonical Question: Which visa is better for me: the DTV Visa or the Education Visa?
 * - primaryIntent: comparison
 */
export const meta = defineBlogArticle({
  contentType: "comparison",
  slug: "dtv-vs-education-visa-thailand",
  title: "DTV Visa vs Education Visa Thailand",
  description:
    "DTV vs Education Visa in Thailand: compare lifestyle fit, remote work intent, study goals, flexibility, and which long-stay route matches your real plans.",
  publishedAt: "2026-06-24",
  updatedAt: "2026-06-24",
  category: "Visa comparison",
  tags: [
    "dtv vs education visa",
    "education visa vs dtv thailand",
    "dtv or education visa",
    "best visa for learning thai",
    "remote work vs study visa thailand",
    "thailand long stay comparison",
  ],
  published: true,
  featured: true,
  topicId: "education",
  pillarSlug: "education",
  seo: {
    title: "DTV Visa vs Education Visa Thailand: Which Route Fits You?",
    description:
      "DTV suits qualifying remote workers who need long-stay permission without enrollment. Education Visa suits genuine study at a qualifying institution. Compare fit before you choose.",
    keywords: [
      "dtv vs education visa thailand",
      "dtv or education visa thailand",
      "education visa vs dtv",
      "best visa for learning thai",
      "can i work on education visa",
      "remote work vs education visa thailand",
    ],
    ogTitle: "DTV Visa vs Education Visa Thailand",
    ogDescription:
      "DTV and Education Visa both support long-term living, but they fit very different lifestyles. Compare remote work, study intent, and flexibility before you file.",
  },
  index: {
    clusterId: "education",
    clusterLabel: "Education Visa",
  },
  headingId: "dtv-vs-education-visa-thailand-heading",
  eyebrow: "Visa comparison",
  lead:
    "Many foreigners compare the Destination Thailand Visa (DTV) and the Thailand Education Visa because both can support long stays in Thailand. They are not interchangeable. DTV is built for qualifying remote work or freelance activity with foreign income. The Education Visa is built for genuine study at a qualifying Thai institution. This article compares DTV vs Education Visa on lifestyle, work intent, flexibility, and long-term planning so you choose the route that matches how you actually live, not only how long you want to stay.",
  answer:
    "Choose DTV when you need lawful long-stay permission for qualifying remote work or freelance income from abroad and you do not have genuine full-time study intent. Choose an Education Visa when you are genuinely enrolled at a qualifying Thai institution and study is your primary purpose of stay. DTV is not a study visa. Education Visa is not a remote-work visa. If you want to learn Thai while working remotely full time, compare whether your real primary activity is study or work before you file.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage: blogArticlePhotography["dtv-vs-education-visa-thailand"].hero.src,
  readingTime: "11 min read",
  tableOfContents: [
    { id: "who-this-article-is-for", label: "Who this article is for" },
    {
      id: "where-to-find-full-visa-requirements",
      label: "Where to find full visa requirements",
    },
    {
      id: "dtv-visa-vs-education-visa",
      label: "DTV Visa vs Education Visa",
    },
    {
      id: "lifestyle-comparison",
      label: "Lifestyle comparison",
    },
    {
      id: "work-and-remote-work-differences",
      label: "Work and remote work differences",
    },
    {
      id: "cost-considerations",
      label: "Cost considerations",
    },
    {
      id: "flexibility-and-long-term-planning",
      label: "Flexibility and long-term planning",
    },
    {
      id: "which-visa-fits-you",
      label: "Which visa fits you?",
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
      title: "Ministry of Foreign Affairs: Thailand Visa Information",
      href: "https://www.mfa.go.th/en/publicservice",
      accessedAt: "2026-06-29",
    },
    {
      title: "Thailand Immigration Bureau",
      href: "https://www.immigration.go.th/",
      accessedAt: "2026-06-29",
    },
  ],
  faq: [
    {
      value: "faq-which-better",
      question: "Which is better: DTV or Education Visa?",
      answer:
        "Neither is universally better. DTV fits qualifying remote workers without genuine full-time enrollment. Education Visa fits applicants with real study intent at a qualifying institution. The better route depends on your primary activity, not only your desired stay length.",
    },
    {
      value: "faq-learn-thai",
      question: "Is Education Visa the best visa for learning Thai?",
      answer:
        "It can be when you are genuinely enrolled in a qualifying language program and study is your primary purpose. If you plan to work remotely full time while casually attending classes, DTV may be the better fit. Compare your real weekly schedule before you choose.",
    },
    {
      value: "faq-work-education",
      question: "Can I work on an Education Visa?",
      answer:
        "Education Visa is for study, not Thai employment or general remote-work intent. If work authorization is your main question, read Can You Work on an Education Visa in Thailand and compare DTV or business routes.",
    },
    {
      value: "faq-dtv-study",
      question: "Can I study on DTV?",
      answer:
        "DTV is not designed as a study visa. Short classes or personal learning do not replace enrollment-based study intent for an Education Visa. If formal study is primary, compare Education Visa requirements on the visa page.",
    },
    {
      value: "faq-switch-later",
      question: "Can I start on one visa and switch later?",
      answer:
        "Category changes are possible in some cases but never guaranteed in-country. Plan your primary intent before arrival. See Change Visa Type in Thailand if you are already in Thailand on the wrong stamp.",
    },
  ],
  related: [
    {
      category: "Route selection",
      title: "Best Visa for Living in Thailand",
      description: "Compare all long-stay routes before you choose DTV or education.",
      href: "/blog/best-visa-for-living-in-thailand",
    },
    {
      category: "Visa services",
      title: "Thailand DTV Visa",
      description: "DTV eligibility, financial proof, and remote-work intent rules.",
      href: "/visas/dtv",
    },
    {
      category: "Visa services",
      title: "Thailand Education Visa",
      description: "Enrollment-linked study routes and pathway fit.",
      href: "/visas/education",
    },
    {
      category: "Sibling article",
      title: "Can You Work on an Education Visa in Thailand?",
      description: "Work authorization rules when education is on your shortlist.",
      href: "/blog/can-you-work-on-an-education-visa-in-thailand",
    },
  ],
  relatedSlugs: [
    "best-visa-for-living-in-thailand",
    "dtv-visa-vs-tourist-visa-thailand",
    "dtv-vs-retirement-visa-thailand",
    "can-you-work-on-an-education-visa-in-thailand",
  ],
  cta: {
    title: "Let Thai Visa Company compare DTV and Education Visa for your plans",
    description:
      "Share your work setup, study goals, and stay timeline. We confirm which route matches your real lifestyle before you enroll or file.",
    footnote: defaultFinalCtaFootnote,
  },
})
