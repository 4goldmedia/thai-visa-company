import type { VisaPageContent } from "@/lib/visas/types"
import { defaultFinalCtaFootnote, defaultVisaProcessSteps } from "@/lib/visas/shared"

export const dtvVisaPage: VisaPageContent = {
  slug: "dtv",
  path: "/visas/dtv",
  seo: {
    title: "Thailand DTV Visa",
    description:
      "Destination Thailand Visa (DTV) guidance for remote workers and qualifying activities. Requirements and application support on LINE and WhatsApp.",
    keywords: ["Thailand DTV visa", "destination Thailand visa"],
  },
  hero: {
    eyebrow: "Remote & qualifying stays",
    title: "Thailand DTV Visa",
    overview:
      "Guidance for the Destination Thailand Visa — who qualifies, how it differs from tourist stays, and what to prepare before you apply.",
  },
  overview: {
    audience: {
      content: [
        "Remote workers, freelancers, and digital travelers with qualifying activities in Thailand.",
        "Applicants who meet DTV financial and activity requirements for their nationality.",
      ],
    },
    eligibility: {
      content: [
        "Qualifying remote work, freelance, or approved activity evidence.",
        "Financial proof meeting the current DTV threshold.",
        "Valid passport and application through an eligible channel.",
      ],
    },
    practicalOverview: {
      content:
        "DTV rules are newer and can change. We help you confirm whether DTV fits your plans, what documents matter, and how timing works with your entry plans.",
    },
  },
  requirements: {
    requirements: {
      intro: "Requirements are updated periodically — we confirm the latest criteria for your case.",
      items: [
        "Valid passport with sufficient validity",
        "Proof of qualifying activity (remote work, freelance, or approved category)",
        "Financial evidence meeting the DTV minimum",
        "Travel or health coverage where required",
      ],
    },
    eligibility: {
      items: [
        "Activity type accepted under current DTV guidelines",
        "Funds documented in an acceptable format",
        "No conflicting immigration status for your goals",
      ],
    },
    documents: {
      items: [
        "Passport and application forms",
        "Employment, freelance, or activity supporting documents",
        "Bank statements or financial proof",
        "Additional embassy-specific items if requested",
      ],
    },
  },
  process: { steps: defaultVisaProcessSteps },
  faq: {
    items: [
      {
        value: "dtv-vs-tourist",
        question: "How is the DTV different from a tourist visa?",
        answer:
          "DTV is designed for longer qualifying stays tied to approved activities, not short tourism alone. We help you compare options if your plans are mixed.",
      },
      {
        value: "dtv-work",
        question: "Can I work remotely on a DTV?",
        answer:
          "Remote work for foreign employers is a common qualifying use, with proper documentation. We outline what proof typically satisfies embassy review.",
      },
      {
        value: "dtv-duration",
        question: "How long can I stay on a DTV?",
        answer:
          "Approved validity and entry rules depend on your grant and nationality. We explain what to expect for your file and any reporting steps.",
      },
      {
        value: "dtv-apply-where",
        question: "Where do I apply for a DTV?",
        answer:
          "Application channels vary by nationality and current policy. We advise the practical route after reviewing your passport and travel plans.",
      },
    ],
  },
  relatedResources: {
    items: [
      {
        category: "DTV",
        title: "What Is the Thailand DTV Visa",
        description:
          "Who qualifies, how it differs from tourist visas, and what to confirm first.",
        href: "/resources/what-is-thailand-dtv-visa",
      },
      {
        category: "Timelines",
        title: "How Long Does a Thai Visa Take",
        description:
          "Processing windows by visa type and what affects timing.",
        href: "/resources/how-long-does-thai-visa-take",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get in touch",
    title: "Unsure if the DTV fits your plans?",
    description:
      "Tell us how you will spend time in Thailand. We help you confirm eligibility and documents before you apply.",
    footnote: defaultFinalCtaFootnote,
  },
}
