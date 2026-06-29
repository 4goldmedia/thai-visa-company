import type { VisaPageContent } from "@/lib/visas/types"
import type { VisaSectionId } from "@/lib/visas/layout"

const DTV_UPDATED_AT = "2026-06-03"

const DTV_PHASE2_LAYOUT: ReadonlyArray<VisaSectionId> = [
  "hero",
  "definition",
  "keyFacts",
  "process",
  "checklist",
  "requirements",
  "pitfalls",
  "comparison",
  "compliance",
  "faq",
  "relatedResources",
  "relatedVisas",
  "finalCta",
]

export const dtvVisaPage: VisaPageContent = {
  slug: "dtv",
  path: "/visas/dtv",
  published: true,
  publishedAt: "2026-01-15",
  updatedAt: DTV_UPDATED_AT,
  layout: DTV_PHASE2_LAYOUT,
  topicId: "dtv",
  relatedArticleSlugs: [
    "best-visa-for-living-in-thailand",
    "dtv-visa-rejection-reasons",
    "dtv-visa-vs-tourist-visa-thailand",
    "dtv-vs-retirement-visa-thailand",
  ],
  lastReviewed: {
    reviewerName: "Thai Visa Company Editorial Team",
    reviewerTitle: "Licensed Thailand visa specialists",
    reviewerCredentials:
      "Immigration filing support for retirement, DTV, business, and Elite routes since 2019",
    reviewDate: DTV_UPDATED_AT,
  },
  answer:
    "The Destination Thailand Visa (DTV) is a five-year multiple-entry long-stay visa for remote workers, freelancers, and participants in qualifying activities in Thailand. Each entry usually allows up to 180 days in Thailand, often extendable once per visit. Applicants must generally show at least 500,000 Thai baht in savings and evidence of a qualifying activity: remote work for income from outside Thailand, enrolment in approved programmes such as Muay Thai training, cooking courses, or medical treatment, or dependent status linked to an approved DTV holder. The DTV is not for employment with a Thai employer.",
  seo: {
    title: "Thailand DTV Visa (Destination Thailand Visa)  -  Requirements & How to Apply",
    description:
      "Clear Thailand DTV visa guide: who qualifies, 500,000 THB savings rule, remote work, extensions, documents, and expert help with your application.",
    keywords: [
      "Thailand DTV Visa",
      "Destination Thailand Visa",
      "DTV Visa Thailand",
      "Thailand Digital Nomad Visa",
      "Thailand Remote Work Visa",
      "DTV Visa Requirements",
      "How to Apply for DTV Visa",
    ],
  },
  hero: {
    eyebrow: "Destination Thailand Visa (DTV)",
    title: "Thailand DTV Visa",
    overview:
      "Five-year multiple-entry visa for remote workers and approved long-stay activities in Thailand.",
  },
  definition: {
    eyebrow: "Destination Thailand Visa",
    title: "What is the Thailand DTV Visa?",
    body: "The Destination Thailand Visa (DTV) is a long-stay visa for foreign nationals who want to spend extended time in Thailand while maintaining work, study, or approved activities outside the usual short-stay tourist route.\n\nThailand introduced it to welcome remote professionals, freelancers, and participants in qualifying programmes: people who add to the economy without taking local employment. It reflects a deliberate shift toward long-stay mobility rather than brief visits.\n\nUnlike a tourist visa, the DTV is designed for repeated entry and months-long stays, not two-week holidays or quick visa runs. It suits people treating Thailand as a base, with a different purpose and set of expectations than a standard holiday.",
  },
  keyFacts: {
    highlight: true,
    eyebrow: "At a glance",
    title: "DTV visa key facts",
    description: "The essentials in one place - what the visa is, how long you can stay, and what you need to qualify.",
    items: [
      {
        label: "Visa type",
        value: "Long-stay visa",
        detail: "Official name: Destination Thailand Visa (DTV).",
      },
      {
        label: "Valid for",
        value: "5 years",
        detail: "You can leave and return multiple times during this period.",
      },
      {
        label: "Each visit",
        value: "Up to 180 days",
        detail: "How long you can stay in Thailand per entry.",
      },
      {
        label: "Stay longer",
        value: "+180 days possible",
        detail:
          "One extension per visit is often available in Thailand (fee usually around 1,900 THB).",
      },
      {
        label: "Multiple entry",
        value: "Yes",
        detail: "Come back to Thailand on the same visa when you need a fresh 180-day stay.",
      },
      {
        label: "Work in Thailand?",
        value: "Remote work only",
        detail: "Income from outside Thailand is fine. Working for a Thai employer is not.",
      },
      {
        label: "Family",
        value: "Spouse & kids under 20",
        detail: "May qualify as dependents linked to your approved DTV.",
      },
      {
        label: "Savings shown",
        value: "500,000 THB minimum",
        detail: "Usually proven with bank statements; exact rules depend on your nationality.",
      },
      {
        label: "Typical timing",
        value: "About 2–4 weeks",
        detail: "Embassy processing time for a complete application file.",
      },
    ],
  },
  overview: {
    title: "",
    intro: [],
    audience: { title: "", content: "" },
    eligibility: { title: "", content: "" },
    practicalOverview: { content: "" },
  },
  officialSources: {
    eyebrow: "Sources",
    title: "Official sources for DTV visa information",
    description:
      "Thai government and embassy publications are the legal basis for DTV rules. We summarise them here; always confirm current requirements with the embassy that will process your application.",
    lastCheckedAt: DTV_UPDATED_AT,
    items: [
      {
        title: "Ministry of Foreign Affairs of Thailand: Visa information",
        href: "https://www.mfa.go.th/",
        accessedAt: DTV_UPDATED_AT,
        coverage:
          "National visa policy, visa categories, and links to Thai missions abroad.",
        rationale:
          "MFA sets the framework consulates apply. Use it to confirm the DTV category exists for your nationality and to find your local embassy website.",
      },
      {
        title: "Royal Thai Immigration Bureau",
        href: "https://www.immigration.go.th/",
        accessedAt: DTV_UPDATED_AT,
        coverage:
          "Immigration rules after entry: stay permissions, extensions, re-entry, and reporting obligations.",
        rationale:
          "Embassies issue the visa; immigration officers govern your stay once you are in Thailand. Check here before planning extensions or re-entry.",
      },
      {
        title: "Your local Royal Thai Embassy or Consulate",
        href: "https://www.mfa.go.th/en/publicservice",
        accessedAt: DTV_UPDATED_AT,
        coverage:
          "Application forms, document checklists, fees, appointment systems, and processing times for your jurisdiction.",
        rationale:
          "DTV requirements are applied by the embassy or consulate where you apply. Their published checklist overrides generic advice.",
      },
      {
        title: "Thailand e-Visa portal",
        href: "https://thaievisa.go.th/",
        accessedAt: DTV_UPDATED_AT,
        coverage: "Online visa application submission for many Thai embassies and consulates.",
        rationale:
          "Most DTV applications are filed through the official e-Visa system while you are outside Thailand.",
      },
      {
        title: "MFA Destination Thailand Visa (DTV) policy document",
        href: "https://image.mfa.go.th/mfa/0/P5NCnBapvr/Visa_17.05.2024/Visa_Destination_Thailand_%28DTV%29_Multiple_EN_FR_Dutch.pdf",
        accessedAt: DTV_UPDATED_AT,
        coverage:
          "Official DTV category definition, permitted purposes, and document framework published by the Ministry of Foreign Affairs.",
        rationale:
          "Use this PDF to verify the legal basis for DTV pathways before interpreting third-party summaries.",
      },
      {
        title: "Thailand Digital Arrival Card (TDAC)",
        href: "https://tdac.immigration.go.th/",
        accessedAt: DTV_UPDATED_AT,
        coverage: "Mandatory digital arrival card for foreign nationals entering Thailand.",
        rationale:
          "After visa approval, complete TDAC before travel. Immigration rules apply in addition to your visa vignette.",
      },
    ],
  },
  feesAndTimelines: {
    eyebrow: "Planning",
    title: "DTV visa fees and processing times",
    description:
      "Official government fees are set by the embassy and immigration authorities. Figures below are typical guides. Confirm with your application post before you budget.",
    fees: [
      {
        label: "DTV visa fee (government)",
        value: "Often around 10,000 THB",
        note: "Charged by the Thai embassy or consulate; amount can vary by post and nationality.",
      },
      {
        label: "In-country extension (government)",
        value: "Often 1,900 THB",
        note: "Payable at a Thai immigration office when a single 180-day extension is granted per visit.",
      },
      {
        label: "Document costs (applicant)",
        value: "Varies",
        note: "Passport photos, translations, notarisations, insurance, and courier fees are separate from government visa fees.",
      },
      {
        label: "Agency or legal assistance",
        value: "Separate from government fees",
        note: "Optional paid support for eligibility review, document preparation, and filing guidance, not required to apply.",
      },
    ],
    timelines: [
      {
        label: "Embassy processing (complete file)",
        value: "Often 2–4 weeks",
        note: "Incomplete documents are the most common cause of delay.",
      },
      {
        label: "Appointment availability",
        value: "Varies by embassy",
        note: "High-demand posts may have waiting periods before your file is accepted.",
      },
      {
        label: "Stay per entry",
        value: "Up to 180 days",
        note: "Granted on entry; one extension per visit is often possible for another 180 days.",
      },
      {
        label: "Re-entry",
        value: "Same day possible",
        note: "While the five-year visa remains valid, you may leave and re-enter to start a new stay period.",
      },
    ],
    footnote:
      "Fees and processing times change. Your embassy's published fee schedule and checklist are authoritative.",
  },
  pitfalls: {
    eyebrow: "Refusals",
    title: "Why DTV applications are refused",
    description:
      "Most refusals are document-driven, not mysterious. Understanding common patterns helps you prepare a complete file the first time.",
    summary: {
      title: "The five most common DTV refusal reasons",
      paragraphs: [
        "Most refusals are caused by missing, inconsistent, or unclear documentation rather than eligibility itself.",
        "Preparing for these issues before filing can significantly reduce delays and requests for additional evidence.",
      ],
    },
    rejections: [
      {
        title: "Insufficient or unclear financial evidence",
        icon: "financial",
        description:
          "Balances below the threshold, statements that do not show your name, or large unexplained deposits can weaken an application.",
        remedy:
          "Provide consecutive months of statements, currency conversion where needed, and a brief note explaining any unusual transactions.",
      },
      {
        title: "Weak proof of qualifying activity",
        icon: "activity",
        description:
          "Generic letters, outdated contracts, or income that appears tied to Thailand rather than abroad raise questions for remote-work routes.",
        remedy:
          "Use recent contracts, invoices, employment letters, or programme acceptance documents that clearly match the pathway you selected.",
      },
      {
        title: "Inconsistent story across documents",
        icon: "documents",
        description:
          "When your application form, employment proof, and bank activity describe different occupations or income patterns, officers may request more evidence or refuse.",
        remedy: "Align every document to one clear narrative before submission.",
      },
      {
        title: "Missing embassy-specific items",
        icon: "checklist",
        description:
          "Insurance, police certificates, translations, or particular statement periods are required at some posts but not others.",
        remedy:
          "Download and follow your embassy's current checklist, not a generic online list.",
      },
      {
        title: "Activity route without proper enrolment",
        icon: "enrolment",
        description:
          "Training or medical routes need credible acceptance or appointment letters from the Thai provider.",
        remedy:
          "Obtain official enrolment documentation before you file; informal arrangements rarely suffice.",
      },
    ],
  },
  comparison: {
    eyebrow: "Side by side",
    title: "DTV vs other Thailand visa routes",
    description: "A simple comparison to help you choose the right path.",
    columns: [
      { id: "dtv", label: "DTV Visa" },
      { id: "tourist", label: "Tourist Visa" },
      { id: "business", label: "Non-Immigrant B", href: "/visas/business" },
      { id: "ltr", label: "LTR Visa" },
    ],
    rows: [
      {
        label: "Typical stay",
        cells: [
          "Up to 180 days per visit (one extension often possible)",
          "Up to 60–90 days per visit (varies by route)",
          "Often 90 days per visit; extensions depend on purpose",
          "Long stays up to 10 years (category-dependent)",
        ],
      },
      {
        label: "Multiple entry",
        cells: [
          "Yes - 5-year multiple-entry visa",
          "Often single entry or limited",
          "Often yes",
          "Yes - 10-year visa (category-dependent)",
        ],
      },
      {
        label: "Work in Thailand",
        cells: [
          "Remote work for employers or clients abroad only",
          "Tourism only",
          "Thai employment (work permit route)",
          "Depends on LTR category",
        ],
      },
      {
        label: "Savings / income proof",
        cells: [
          "About 500,000 THB typical",
          "Proof of funds for the trip (varies)",
          "Employer sponsorship plus personal funds",
          "High wealth or income thresholds",
        ],
      },
      {
        label: "Family",
        cells: [
          "Spouse and children under 20 (dependent route)",
          "Separate applications",
          "Dependents possible on linked visas",
          "Per programme rules",
        ],
      },
      {
        label: "Complexity",
        cells: [
          "Moderate - activity proof plus financial evidence",
          "Simple for short trips",
          "Higher - employer and company documents",
          "High - specialist eligibility routes",
        ],
      },
      {
        label: "Best for",
        cells: [
          "Remote workers and approved long-stay activities",
          "Short holidays",
          "Employment with a Thai company",
          "Wealth, talent, or pension programmes",
        ],
      },
    ],
  },
  requirements: {
    eyebrow: "Eligibility",
    title: "Do you qualify for a DTV visa?",
    description:
      "The DTV visa is available through three main pathways. Choose the option that best matches your situation.",
    showRequirementsChangeCallout: false,
    pathways: [
      {
        id: "remote-work",
        title: "I work remotely",
        description:
          "For digital nomads, freelancers, business owners, and remote employees earning income from outside Thailand.",
        badge: "Most common DTV route",
      },
      {
        id: "approved-activity",
        title: "I'm joining an approved activity",
        description:
          "Examples include Muay Thai training, cooking courses, medical treatment, wellness programmes, and other approved activities.",
        badge: "Alternative DTV route",
      },
      {
        id: "family-member",
        title: "I'm applying as a family member",
        description:
          "For spouses and children under 20 of an approved DTV visa holder.",
        badge: "Dependent DTV route",
      },
    ],
    clarification: {
      title: "Not sure which DTV category fits you?",
      description:
        "We can review your situation and help identify the most suitable DTV pathway before you prepare documents or submit an application.",
      linkLabel: "Request a consultation",
    },
  },
  checklist: {
    eyebrow: "Documents",
    title: "DTV visa document checklist",
    description:
      "Typical documents by pathway. Your embassy's published checklist is authoritative. Requirements vary by post and nationality.",
    summary: {
      title: "Core Documents",
      items: [
        {
          text: "Passport valid at least 6 months beyond intended travel",
          icon: "passport",
        },
        {
          text: "Financial evidence showing at least 500,000 THB equivalent",
          icon: "financial",
        },
        {
          text: "Qualifying activity or remote-work evidence",
          icon: "employment",
        },
        {
          text: "Completed visa application form",
          icon: "application-form",
        },
        {
          text: "Passport photographs per embassy specification",
          icon: "photos",
        },
      ],
    },
    groups: [
      {
        title: "Remote Worker Pathway",
        pathwayId: "remote-work",
        intro: "For employees, freelancers, and business owners earning income from outside Thailand.",
        categories: [
          {
            title: "Passport & Identity",
            items: [
              {
                text: "Passport valid at least 6 months beyond intended travel",
                icon: "passport",
              },
            ],
          },
          {
            title: "Financial Evidence",
            items: [
              {
                text: "Financial evidence showing at least 500,000 THB equivalent",
                note: "Usually recent bank statements in your name.",
                icon: "financial",
              },
            ],
          },
          {
            title: "Activity / Work Evidence",
            items: [
              {
                text: "Employment contract, employer letter, or freelance portfolio",
                note: "Must show remote work or foreign-source income.",
                icon: "employment",
              },
            ],
          },
          {
            title: "Application Documents",
            items: [
              {
                text: "Passport photographs per embassy specification",
                icon: "photos",
              },
              {
                text: "Completed visa application form",
                icon: "application-form",
              },
            ],
          },
          {
            title: "Additional Requirements",
            items: [
              {
                text: "Proof of current location or residence in application country",
                note: "Utility bill, lease, or local ID where required.",
                icon: "residence",
              },
              {
                text: "Travel or medical insurance",
                note: "Required at some embassies. Confirm your post's checklist.",
                icon: "insurance",
              },
            ],
          },
        ],
      },
      {
        title: "Soft-Power / Activity Pathway",
        pathwayId: "approved-activity",
        intro: "For Muay Thai, cooking courses, medical treatment, and similar approved programmes.",
        categories: [
          {
            title: "Passport & Identity",
            items: [
              {
                text: "Passport valid at least 6 months beyond intended travel",
                icon: "passport",
              },
            ],
          },
          {
            title: "Financial Evidence",
            items: [
              {
                text: "Financial evidence showing at least 500,000 THB equivalent",
                icon: "financial",
              },
            ],
          },
          {
            title: "Activity / Work Evidence",
            items: [
              {
                text: "Activity enrolment or hospital appointment letter",
                note: "From the Thai school, gym, or medical provider.",
                icon: "activity",
              },
              {
                text: "Provider business registration or accreditation copy",
                note: "When the embassy requests institutional proof.",
                icon: "institution",
              },
            ],
          },
          {
            title: "Application Documents",
            items: [
              {
                text: "Passport photographs per embassy specification",
                icon: "photos",
              },
              {
                text: "Completed visa application form",
                icon: "application-form",
              },
            ],
          },
          {
            title: "Additional Requirements",
            items: [
              {
                text: "Travel or medical insurance",
                note: "Often requested for activity and medical routes.",
                icon: "insurance",
              },
            ],
          },
        ],
      },
      {
        title: "Dependent Pathway",
        pathwayId: "family-member",
        intro: "For spouses and children under 20 of an approved DTV holder.",
        categories: [
          {
            title: "Passport & Identity",
            items: [
              {
                text: "Passport valid at least 6 months beyond intended travel",
                icon: "passport",
              },
            ],
          },
          {
            title: "Financial Evidence",
            items: [
              {
                text: "Financial evidence per embassy rules for dependents",
                icon: "financial",
              },
            ],
          },
          {
            title: "Relationship & Dependent Proof",
            items: [
              {
                text: "Copy of primary holder's approved DTV visa",
                icon: "visa-copy",
              },
              {
                text: "Relationship proof",
                note: "Marriage certificate, birth certificate, or adoption papers.",
                icon: "relationship",
              },
            ],
          },
          {
            title: "Application Documents",
            items: [
              {
                text: "Passport photographs per embassy specification",
                icon: "photos",
              },
              {
                text: "Completed visa application form",
                icon: "application-form",
              },
            ],
          },
        ],
      },
    ],
  },
  compliance: {
    eyebrow: "After approval",
    title: "What happens after your DTV is approved?",
    description: "Your visa is approved. Here's what happens next.",
    cards: [
      {
        label: "Visa validity",
        value: "5 years",
        detail: "Multiple-entry visa validity period.",
      },
      {
        label: "Stay per entry",
        value: "Up to 180 days",
        detail: "Granted each time you enter Thailand.",
      },
      {
        label: "Extension",
        value: "One extension available",
        detail: "Often up to an additional 180 days.",
      },
      {
        label: "Re-entry",
        value: "Allowed",
        detail: "Leave and return while the visa remains valid.",
      },
    ],
    reminders: {
      title: "Things to remember",
      items: [
        "90-day reporting may apply during long stays",
        "Complete the Thailand Digital Arrival Card (TDAC) before entry when required",
        "Immigration rules can change; always verify current requirements",
      ],
    },
  },
  process: {
    eyebrow: "How we help",
    title: "How we help with your DTV application",
    description:
      "A clear path from first message to arriving in Thailand, with less guesswork at each step.",
    steps: [
      {
        step: 1,
        title: "Eligibility review",
        description:
          "You tell us about your work, income source, nationality, and plans for Thailand. We confirm whether the DTV is suitable and identify the correct application pathway.",
      },
      {
        step: 2,
        title: "Personalized document checklist",
        description:
          "Receive a tailored checklist based on your nationality, application route, and embassy requirements. No generic document lists.",
      },
      {
        step: 3,
        title: "Document review",
        description:
          "We review your supporting documents and identify missing items, inconsistencies, or common issues before submission.",
      },
      {
        step: 4,
        title: "Application guidance",
        description:
          "We explain the submission process, embassy requirements, expected timelines, and what to prepare for after filing.",
      },
      {
        step: 5,
        title: "Approval and travel planning",
        description:
          "Once approved, we help you understand entry requirements, stay periods, extensions, and practical next steps before arriving in Thailand.",
      },
      {
        step: 6,
        title: "Ongoing support",
        description:
          "Questions after approval? We remain available to explain extensions, re-entry, reporting obligations, and other DTV-related matters.",
      },
    ],
  },
  faq: {
    eyebrow: "Common questions",
    title: "DTV visa FAQ",
    description:
      "Edge cases not covered above. For eligibility, documents, and process, see the sections on this page.",
    items: [
      {
        value: "dtv-self-employment",
        question: "Can freelancers, YouTubers, or online business owners get a DTV?",
        answer:
          "Often yes when income is from outside Thailand and you document contracts, invoices, platform earnings, or company filings plus the savings threshold. Income mostly from Thai clients may not fit.",
      },
      {
        value: "dtv-bank-seasoning",
        question: "How long must funds stay in my bank account?",
        answer:
          "Many applicants provide recent statements; some officers want stable balances over a few months. Large sudden deposits without explanation can raise questions. Present funds clearly across the full statement window.",
      },
      {
        value: "dtv-stop-remote-work",
        question: "What happens if I stop working remotely while on a DTV?",
        answer:
          "You must still follow visa rules. If your situation changes, get advice before your stay runs out. Do not start working illegally for a Thai employer.",
      },
      {
        value: "dtv-spouse",
        question: "Can my spouse join me on a DTV?",
        answer:
          "Yes. A legal spouse of an approved DTV holder can apply with marriage proof and the usual passport and financial documents. See the dependent checklist above.",
      },
      {
        value: "dtv-children",
        question: "Can my children join me?",
        answer:
          "Dependent children under 20 often qualify with birth certificates and proof of link to the main DTV holder.",
      },
      {
        value: "dtv-apply-inside-thailand",
        question: "Can I apply for a DTV while already in Thailand?",
        answer:
          "Often you need to apply from outside Thailand. If you are already here on another visa, contact us. We will outline realistic options before your current stay ends.",
      },
      {
        value: "dtv-convert-visa",
        question: "Can I switch from a tourist visa to a DTV?",
        answer:
          "It is not always possible in-country. Many people apply from abroad. We review your current visa and timeline before you commit.",
      },
      {
        value: "dtv-vs-retirement",
        question: "Should I choose DTV or a retirement visa?",
        answer:
          "If you are 50 or older with pension income and no remote work, a retirement visa (Non-Immigrant O-A or related route) is usually the better fit. See our retirement visa page. DTV fits when you work remotely or join an approved activity and can show qualifying evidence plus the savings threshold.",
      },
      {
        value: "dtv-muay-thai",
        question: "Can I get a DTV for Muay Thai or cooking classes?",
        answer:
          "Yes, with an acceptance letter from the Thai provider plus passport, photo, savings proof, and other standard documents. See the activity pathway checklist.",
      },
      {
        value: "dtv-medical",
        question: "Can I use the DTV for medical treatment in Thailand?",
        answer:
          "Yes, when you have an appointment or admission letter from the Thai hospital or clinic, along with the usual financial and identity documents.",
      },
      {
        value: "dtv-age-minimum",
        question: "Is there a minimum age for the DTV?",
        answer:
          "Primary applicants are usually at least 20. Younger dependents may apply under a parent's DTV.",
      },
      {
        value: "dtv-taxes",
        question: "Do I pay Thai tax on remote income with a DTV?",
        answer:
          "Tax depends on how long you stay and your personal situation, not just the visa type. Immigration approval does not determine tax residency. Speak with a tax adviser for tax questions.",
      },
      {
        value: "dtv-overstay",
        question: "What if I overstay on a DTV?",
        answer:
          "Overstaying leads to fines, possible deportation, and future visa problems. Extend on time or leave before your permitted stay ends. See compliance above.",
      },
    ],
  },
  relatedVisaSlugs: ["retirement", "business", "elite"],
  relatedVisas: {
    eyebrow: "Compare routes",
    title: "Related Thailand visa options",
    description:
      "Other visas that may fit better depending on your age, work, and how long you want to stay.",
    items: [
      {
        category: "Retirement",
        title: "Thailand Retirement Visa",
        description:
          "For applicants 50+ who want a long-stay retirement route rather than remote work.",
        href: "/visas/retirement",
      },
      {
        category: "Business",
        title: "Thailand Business Visa",
        description:
          "For employment or business tied to a Thai company - not remote-only income.",
        href: "/visas/business",
      },
      {
        category: "Elite",
        title: "Thailand Elite Visa",
        description:
          "Premium long-stay membership when convenience matters more than remote-work proof.",
        href: "/visas/elite",
      },
    ],
  },
  relatedResources: {
    items: [
      {
        category: "Route selection",
        title: "Best Visa for Living in Thailand",
        description:
          "Compare DTV, business, retirement, elite, and education routes by profile before you choose a hub.",
        href: "/blog/best-visa-for-living-in-thailand",
      },
    ],
  },
  finalCta: {
    headline: "Ready to Start Your Thailand DTV Application?",
    title: "Ready to Start Your Thailand DTV Application?",
    description:
      "Get clear guidance on eligibility, documents, and next steps from specialists who handle Thailand visas every day.",
    buttonLabel: "Book a consultation",
  },
}
