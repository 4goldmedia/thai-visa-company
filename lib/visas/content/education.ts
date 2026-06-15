import type { VisaPageContent } from "@/lib/visas/types"
import { defaultVisaProcessSteps, defaultVisaPublishMeta } from "@/lib/visas/shared"

export const educationVisaPage: VisaPageContent = {
  slug: "education",
  path: "/visas/education",
  ...defaultVisaPublishMeta,
  seo: {
    title: "Thailand Education Visa",
    description:
      "Education visa support for study at Thai schools and language centers. Enrollment, documents, and application guidance.",
    keywords: ["Thailand education visa", "Thai student visa"],
  },
  hero: {
    eyebrow: "Study in Thailand",
    title: "Thailand Education Visa",
    overview:
      "Support for study-based stays — school enrollment, required documents, and clear steps from application to arrival.",
  },
  overview: {
    audience: {
      content: [
        "Students enrolling at approved Thai schools, language centers, or universities.",
        "Learners planning structured study stays beyond short tourist visits.",
      ],
    },
    eligibility: {
      content: [
        "Acceptance or enrollment letter from a qualifying institution.",
        "Valid passport and financial proof for your embassy.",
        "Commitment to attendance and reporting rules for your program.",
      ],
    },
    practicalOverview: {
      content:
        "Education visas require coordination with your school and consistent attendance reporting. We align your documents with institutional requirements and embassy expectations.",
    },
  },
  requirements: {
    requirements: {
      intro: "Your school provides core enrollment documents — we help organize the full file.",
      items: [
        "Valid passport and visa application forms",
        "Enrollment or acceptance letter from an approved institution",
        "Financial proof for study and living costs",
        "Academic or program details requested by the embassy",
      ],
    },
    eligibility: {
      items: [
        "Enrollment in a program recognized for education visas",
        "Age and study plan suitable for visa review",
        "Ability to meet attendance and reporting obligations",
      ],
    },
    documents: {
      items: [
        "Passport, photos, and embassy application set",
        "School registration letter and course schedule",
        "Bank statements or sponsor proof",
        "Prior transcripts or certificates if requested",
      ],
    },
  },
  process: { steps: defaultVisaProcessSteps },
  faq: {
    items: [
      {
        value: "education-school",
        question: "Does my school need to be approved?",
        answer:
          "Yes. Institutions must meet immigration criteria for education visas. We confirm your enrollment letter matches what embassies expect.",
      },
      {
        value: "education-language",
        question: "Can I study Thai on an education visa?",
        answer:
          "Language programs at qualifying centers are a common route. Program length and attendance rules apply — we outline them for your case.",
      },
      {
        value: "education-attendance",
        question: "What are the attendance requirements?",
        answer:
          "Schools report attendance to immigration on a schedule. Missing requirements can affect extensions. We explain obligations before you commit.",
      },
      {
        value: "education-extension",
        question: "Can you help extend my education visa?",
        answer:
          "Yes. Extensions usually require continued enrollment and clean attendance. We guide document prep for each extension cycle.",
      },
    ],
  },
  relatedResources: {
    items: [
      {
        category: "Timelines",
        title: "How Long Does a Thai Visa Take",
        description:
          "How long study visa applications usually take to process.",
        href: "/guides/how-long-does-thai-visa-take",
      },
      {
        category: "Guides",
        title: "How to Get a Thailand Retirement Visa",
        description:
          "Exploring other long-stay options? Compare pathways that may fit later.",
        href: "/guides/how-to-get-thailand-retirement-visa",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get in touch",
    title: "Planning to study in Thailand?",
    description:
      "Share your school and start date. We help you prepare enrollment documents and your visa application.",
  },
}
