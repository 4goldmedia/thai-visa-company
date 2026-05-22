import { defineResourceArticle } from "@/lib/content/collections/resources"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"

export const meta = defineResourceArticle({
  slug: "how-to-get-thailand-retirement-visa",
  title: "How to Get a Thailand Retirement Visa",
  description:
    "Age and financial requirements, documents, and how to prepare before you apply.",
  publishedAt: "2026-05-15",
  updatedAt: "2026-05-21",
  category: "Visa guide",
  tags: ["retirement", "retirement visa", "long-stay", "thailand visa"],
  published: true,
  seo: {
    title: "How to Get a Thailand Retirement Visa",
    description:
      "Who qualifies for a Thailand retirement visa, what documents you usually need, and how the application process works — explained in plain language.",
    keywords: [
      "how to get Thailand retirement visa",
      "Thailand retirement visa requirements",
      "retire in Thailand visa",
    ],
  },
  index: {
    categoryId: "visa-guides",
    categoryLabel: "Retirement",
  },
  headingId: "retirement-visa-guide-heading",
  eyebrow: "Retirement",
  lead:
    "A Thailand retirement visa is a long-stay route for eligible foreigners aged 50 and over. This guide explains who usually qualifies, what embassies commonly ask for, and how to prepare without wading through legal jargon.",
  readingTime: "8 min read",
  tableOfContents: [
    { id: "overview", label: "Overview" },
    { id: "who-qualifies", label: "Who qualifies" },
    { id: "requirements", label: "Requirements" },
    { id: "application-process", label: "Application process" },
    { id: "common-questions", label: "Common questions" },
  ],
  faq: [
    {
      value: "guide-age",
      question: "Can I apply before I turn 50?",
      answer:
        "Most retirement routes require the main applicant to be at least 50 at the time of application. If you are younger, another visa category may fit better — we can help you compare options.",
    },
    {
      value: "guide-money",
      question: "Do I need a minimum balance in a Thai bank?",
      answer:
        "Some pathways require funds deposited in a Thai bank for a set period. Others accept overseas proof. The rule depends on your nationality and embassy — we outline what your file needs.",
    },
    {
      value: "guide-spouse",
      question: "Can my spouse apply with me?",
      answer:
        "A qualifying spouse may be included on some routes, with extra documents such as a marriage certificate. Dependent rules vary — confirm your embassy’s list before you apply.",
    },
    {
      value: "guide-inside-thailand",
      question: "Can I convert from a tourist visa in Thailand?",
      answer:
        "Conversion is sometimes possible but not guaranteed. It depends on your current status and immigration policy at the time. We review your passport stamps and advise the safest route.",
    },
    {
      value: "guide-help",
      question: "Can you handle the application for me?",
      answer:
        "We guide you through eligibility, documents, and submission steps on LINE and WhatsApp. You remain the applicant, but you are not left to figure out the process alone.",
    },
  ],
  related: [
    {
      category: "Timelines",
      title: "How Long Does a Thai Visa Take",
      description:
        "Processing times by visa type and what affects your file.",
      href: "/resources/how-long-does-thai-visa-take",
    },
    {
      category: "Visa services",
      title: "Thailand Retirement Visa Support",
      description:
        "Personalized help with eligibility, documents, and renewals.",
      href: "/visas/retirement",
    },
  ],
  cta: {
    title: "Want help with your retirement visa file?",
    description:
      "Share your age, nationality, and whether you are applying from abroad or already in Thailand. We reply on LINE or WhatsApp with clear next steps.",
    footnote: defaultFinalCtaFootnote,
  },
})
