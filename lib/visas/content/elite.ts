import type { VisaPageContent } from "@/lib/visas/types"
import { defaultVisaProcessSteps, defaultVisaPublishMeta } from "@/lib/visas/shared"

export const eliteVisaPage: VisaPageContent = {
  slug: "elite",
  path: "/visas/elite",
  ...defaultVisaPublishMeta,
  seo: {
    title: "Thailand Elite Visa",
    description:
      "Thailand Elite visa and membership guidance. Long-stay privileges, costs, and application support for foreigners.",
    keywords: ["Thailand Elite visa", "Thailand Elite membership"],
  },
  hero: {
    eyebrow: "Premium long-stay",
    title: "Thailand Elite Visa",
    overview:
      "Hands-on support for Thailand Elite membership — package options, documentation, and a clear view of costs and timelines.",
  },
  overview: {
    audience: {
      content: [
        "Foreigners seeking long-term stay through Thailand Elite membership.",
        "Families and applicants comparing Elite packages against other long-stay routes.",
      ],
    },
    eligibility: {
      content: [
        "Ability to meet Elite membership fees and program rules.",
        "Valid passport and standard background documentation.",
        "Understanding of privileges and obligations for your chosen package.",
      ],
    },
    practicalOverview: {
      content:
        "Elite involves membership selection, payment schedules, and detailed paperwork. We help you compare packages, prepare documents, and coordinate steps with program requirements.",
    },
  },
  requirements: {
    requirements: {
      intro: "Package tier determines fees, term length, and included privileges.",
      items: [
        "Valid passport and identity documents",
        "Selected Thailand Elite membership package and fees",
        "Completed program application forms",
        "Background documentation as required by the program",
      ],
    },
    eligibility: {
      items: [
        "No disqualifying criminal or immigration history for program review",
        "Funds available for membership and related costs",
        "Commitment to program terms for your selected tier",
      ],
    },
    documents: {
      items: [
        "Passport copies and photographs",
        "Application and membership agreement paperwork",
        "Financial proof for membership payment",
        "Police clearance or medical documents if requested",
      ],
    },
  },
  process: { steps: defaultVisaProcessSteps },
  faq: {
    items: [
      {
        value: "elite-cost",
        question: "How much does Thailand Elite cost?",
        answer:
          "Fees depend on the membership tier and term you choose. We outline current package options and what each includes before you commit.",
      },
      {
        value: "elite-vs-retirement",
        question: "Should I choose Elite or a retirement visa?",
        answer:
          "It depends on your age, budget, and how long you plan to stay. We compare practical trade-offs for your situation without pushing a single route.",
      },
      {
        value: "elite-family",
        question: "Can family members be included?",
        answer:
          "Some packages allow dependents with additional fees and documents. We confirm what your household needs before you apply.",
      },
      {
        value: "elite-timeline",
        question: "How long does Elite processing take?",
        answer:
          "Timelines vary with package type and application volume. We set expectations after reviewing your documents and chosen tier.",
      },
    ],
  },
  relatedResources: {
    items: [
      {
        category: "Timelines",
        title: "How Long Does a Thai Visa Take",
        description:
          "Typical processing windows and factors that affect timing.",
        href: "/resources/how-long-does-thai-visa-take",
      },
      {
        category: "Retirement",
        title: "How to Get a Thailand Retirement Visa",
        description:
          "Compare long-stay options if you are also considering retirement routes.",
        href: "/resources/how-to-get-thailand-retirement-visa",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get in touch",
    title: "Considering Thailand Elite membership?",
    description:
      "Tell us your stay goals and budget range. We help you compare packages and prepare a complete application.",
  },
}
