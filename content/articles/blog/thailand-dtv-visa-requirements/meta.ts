import { defineBlogArticle } from "@/lib/content/collections/blog"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

export const meta = defineBlogArticle({
  slug: "thailand-dtv-visa-requirements",
  title:
    "DTV Visa Filing Notes: Embassy Practice, Financial Evidence, and Edge Cases (2026)",
  description:
    "Practical DTV filing observations: bank statement seasoning, document formatting pitfalls, third-country embassy notes, and edge cases from real applications, with links to the official DTV hub.",
  publishedAt: "2026-06-03",
  updatedAt: "2026-06-17",
  category: "DTV Visa",
  tags: [
    "dtv",
    "destination thailand visa",
    "dtv bank statement seasoning",
    "dtv embassy document format",
    "dtv application delayed",
    "dtv third country filing",
    "thailand visa 2026",
  ],
  published: true,
  featured: true,
  topicId: "dtv",
  pillarSlug: "dtv",
  contentType: "guide",
  seo: {
    title:
      "DTV Visa Filing Notes: Bank Seasoning, Embassy Format & Edge Cases (2026)",
    description:
      "Long-tail DTV filing notes: financial evidence seasoning, translation pitfalls, third-country posts, and practice observations, not a duplicate eligibility guide.",
    keywords: [
      "DTV bank statement seasoning",
      "DTV embassy document format",
      "DTV application delayed",
      "DTV third country filing",
      "DTV overseas savings account",
      "DTV freelancer evidence",
      "DTV refused reapply",
      "Thailand DTV filing notes",
    ],
    ogTitle:
      "DTV Visa Filing Notes: Embassy Practice & Edge Cases (2026)",
    ogDescription:
      "What we see in DTV filings: financial seasoning, document formatting, embassy variance, and third-country application notes. Start with the official DTV hub for requirements.",
  },
  index: {
    clusterId: "dtv",
    clusterLabel: "DTV Visa",
  },
  headingId: "thailand-dtv-visa-requirements-heading",
  eyebrow: "DTV filing notes",
  lead:
    "This article covers long-tail DTV filing practice: bank statement seasoning, document formatting, embassy edge cases, and third-country filing notes. For eligibility, the document checklist, key facts, government process, and comparison tables, use the canonical DTV hub.",
  answer:
    "DTV filing edge cases (seasoning of 500,000 THB savings, embassy-specific document formats, third-country posts, and reapplication after refusal) depend on consulate practice. This article documents what we see in files; official rules live on the DTV hub.",
  author: {
    name: "Thai Visa Company Editorial Team",
    role: "Licensed Thailand visa specialists",
    type: "Organization",
  },
  reviewedBy: {
    name: "Senior Visa Case Review",
  },
  heroImage: "/images/visas/dtv.jpg",
  schema: {
    primaryType: "NewsArticle",
    featuredImage: "/images/visas/dtv.jpg",
  },
  readingTime: "12 min read",
  tableOfContents: [
    { id: "official-dtv-hub", label: "Official DTV hub" },
    { id: "financial-edge-cases", label: "Financial edge cases" },
    { id: "document-formatting", label: "Document formatting" },
    { id: "third-country-filing", label: "Third-country filing" },
    { id: "what-we-see-in-practice", label: "What we see in practice" },
    { id: "conclusion", label: "Conclusion" },
  ],
  sources: [
    {
      title: "Royal Thai Immigration Bureau",
      href: "https://www.immigration.go.th/",
      accessedAt: "2026-06-01",
    },
    {
      title: "Ministry of Foreign Affairs of Thailand: Visa Information",
      href: "https://www.mfa.go.th/",
      accessedAt: "2026-06-01",
    },
    {
      title: "Thailand e-Visa portal",
      href: "https://thaievisa.go.th/",
      accessedAt: "2026-06-17",
    },
  ],
  faq: [
    {
      value: "faq-overseas-savings",
      question: "Can I use savings from an overseas bank account?",
      answer:
        "Many embassies accept foreign bank statements if they clearly show your name, account number, balance history, and currency equivalent to at least 500,000 THB. Some posts prefer Thai bank evidence. Confirm your consulate's published checklist before transferring funds.",
    },
    {
      value: "faq-thai-bank",
      question: "Do I need a Thai bank account for the DTV?",
      answer:
        "A Thai bank account is not always mandatory at application stage, but some embassies request Thai statements for extensions or dependent filings. Holding funds in a reputable foreign account with clear English statements is acceptable at many posts when balances meet the threshold.",
    },
    {
      value: "faq-freelancer",
      question: "What freelance evidence do embassies actually accept?",
      answer:
        "Freelancers should document ongoing client relationships with contracts, invoices, platform earnings exports, or tax filings, not dashboard screenshots alone. The file should show economic activity remains abroad.",
    },
    {
      value: "faq-refused",
      question: "What happens if my DTV application is refused?",
      answer:
        "You receive a refusal notice or explanation from the embassy. You may reapply after correcting deficiencies (commonly financial evidence or activity documentation), but repeated weak filings can make later reviews more skeptical.",
    },
    {
      value: "faq-third-country",
      question: "Can I apply for a DTV at a third-country embassy?",
      answer:
        "Some posts accept third-country nationals; many do not. Jurisdiction and nationality matrices change. Verify with the embassy before purchasing flights. Forum advice about 'easy' posts is often outdated.",
    },
  ],
  related: [
    {
      category: "Visa services",
      title: "Thailand DTV Visa: Official Hub",
      description:
        "Eligibility pathways, document checklist, key facts, government process, compliance, and decision guides.",
      href: "/visas/dtv",
    },
    {
      category: "Guides",
      title: "Retirement Visa Requirements",
      description:
        "Long-stay options for applicants aged 50+ when DTV is not the right fit.",
      href: "/guides/how-to-get-thailand-retirement-visa",
    },
  ],
  cta: {
    title: "Unsure whether you qualify for the DTV visa?",
    description:
      "We help applicants understand eligibility, prepare documentation, and avoid common mistakes before submitting their application.",
    footnote: defaultFinalCtaFootnote,
  },
})
