import type { VisaPageContent } from "@/lib/visas/types"
import { defaultFinalCtaFootnote, defaultVisaProcessSteps } from "@/lib/visas/shared"

export const businessVisaPage: VisaPageContent = {
  slug: "business",
  path: "/visas/business",
  seo: {
    title: "Thailand Business Visa",
    description:
      "Thailand business visa support for work, investment, and company-related stays. Document and application guidance with responsive LINE support.",
    keywords: ["Thailand business visa", "Thailand work visa"],
  },
  hero: {
    eyebrow: "Work & business stays",
    title: "Thailand Business Visa",
    overview:
      "Practical guidance for business, work, and company-related visas — aligned to your role, employer, or investment setup in Thailand.",
  },
  overview: {
    audience: {
      content: [
        "Employees assigned to a Thai entity, investors, and founders setting up operations.",
        "Professionals needing a structured visa route tied to legitimate business activity.",
      ],
    },
    eligibility: {
      content: [
        "Qualifying employer, invitation, or business documentation for your route.",
        "Passport validity and standard background requirements.",
        "Supporting company or investment paperwork where applicable.",
      ],
    },
    practicalOverview: {
      content:
        "Business visas depend heavily on your contract, company status, and embassy. We clarify which route fits, what HR or company documents are needed, and how timing aligns with your start date.",
    },
  },
  requirements: {
    requirements: {
      intro: "Your employer or business structure determines much of the file.",
      items: [
        "Valid passport and visa application forms",
        "Company invitation, employment contract, or business proof",
        "Work permit–related prerequisites where applicable to your stage",
        "Financial or corporate documents requested by the embassy",
      ],
    },
    eligibility: {
      items: [
        "Legitimate business purpose accepted for your nationality",
        "Supporting organization or sponsor in good standing",
        "Applicant background suitable for visa review",
      ],
    },
    documents: {
      items: [
        "Passport, photos, and completed embassy forms",
        "Company registration, invitation letter, or MOU documents",
        "Educational or professional credentials if required",
        "Additional items specific to your embassy post",
      ],
    },
  },
  process: { steps: defaultVisaProcessSteps },
  faq: {
    items: [
      {
        value: "business-work-permit",
        question: "Is a work permit the same as a business visa?",
        answer:
          "They are related but distinct. Many workflows involve a visa first and work permit steps after arrival. We map the sequence for your role.",
      },
      {
        value: "business-company",
        question: "Can you help if my company is still setting up?",
        answer:
          "Yes. Early-stage setups have specific document needs. We review your structure and outline what is realistic before submission.",
      },
      {
        value: "business-invitation",
        question: "What if my employer is overseas but I work in Thailand?",
        answer:
          "Routes differ by arrangement and embassy policy. Share your contract details and we advise the appropriate pathway.",
      },
      {
        value: "business-renewal",
        question: "Do you support renewals and dependent visas?",
        answer:
          "We help with renewals and many dependent cases tied to the primary holder, subject to current rules for your nationality.",
      },
    ],
  },
  relatedResources: {
    items: [
      {
        category: "Timelines",
        title: "How Long Does a Thai Visa Take",
        description:
          "Processing times and what can delay business visa files.",
        href: "/resources/how-long-does-thai-visa-take",
      },
      {
        category: "DTV",
        title: "What Is the Thailand DTV Visa",
        description:
          "Compare remote-work routes if your activity is not employer-based in Thailand.",
        href: "/resources/what-is-thailand-dtv-visa",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get in touch",
    title: "Need help with a Thailand business visa?",
    description:
      "Share your role, company details, and timeline. We outline documents and steps before you apply.",
    footnote: defaultFinalCtaFootnote,
  },
}
