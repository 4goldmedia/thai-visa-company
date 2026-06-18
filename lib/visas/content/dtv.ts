import type { VisaPageContent } from "@/lib/visas/types"
import type { VisaSectionId } from "@/lib/visas/layout"

const DTV_UPDATED_AT = "2026-06-03"

const DTV_PHASE2_LAYOUT: ReadonlyArray<VisaSectionId> = [
  "hero",
  "lastUpdated",
  "definition",
  "keyFacts",
  "bestFor",
  "officialSources",
  "requirements",
  "checklist",
  "feesAndTimelines",
  "governmentProcess",
  "pitfalls",
  "embassyVarianceTable",
  "comparison",
  "decisionGuides",
  "compliance",
  "legalBoundaries",
  "faq",
  "eeat",
  "relatedResources",
  "relatedVisas",
  "process",
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
  relatedArticleSlugs: ["thailand-dtv-visa-requirements"],
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
    subtitle: "Destination Thailand Visa",
    overview:
      "Five-year multiple-entry visa for remote workers and approved long-stay activities in Thailand.",
  },
  definition: {
    eyebrow: "Definition",
    title: "What is the Thailand DTV Visa?",
    description:
      "A direct answer to what the Destination Thailand Visa is, who it is for, and how it works.",
    body: "The Destination Thailand Visa (DTV) is a long-stay multiple-entry visa issued by Thailand for foreign nationals who want to remain in the country while working remotely, freelancing, running an online business serving clients abroad, or joining approved activities. The visa is typically valid for five years and allows repeated entry. Each entry generally grants up to 180 days' stay in Thailand, with one in-country extension often available per visit before you must leave and re-enter. Applicants must usually demonstrate at least 500,000 Thai baht in savings (or equivalent) and provide proof of a qualifying activity. Approved activity categories include remote employment or self-employment with income from outside Thailand, structured programmes such as Muay Thai training, cooking courses, wellness or medical treatment with proper enrolment or appointment letters, and dependent applications for spouses or children under 20 linked to an approved primary holder. The DTV does not authorise working for a Thai employer or performing work primarily directed at the Thai labour market; that typically requires a business visa and work permit route instead.",
  },
  keyFacts: {
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
  bestFor: {
    eyebrow: "Fit check",
    title: "Is the DTV visa right for you?",
    description: "A quick check before you spend time and money on an application.",
    goodFit: {
      title: "Good fit",
      items: [
        "You work remotely for a company outside Thailand",
        "You freelance or consult for clients abroad",
        "You run an online business serving non-Thai customers",
        "You want months in Thailand - not a quick holiday",
        "You can show qualifying work and roughly 500,000 THB in savings",
        "You plan Muay Thai, cooking classes, or similar programmes with proper enrolment",
        "Your spouse or children under 20 may join as dependents",
      ],
    },
    notIdeal: {
      title: "Not ideal",
      items: [
        "You need a job with a Thai company (a business visa route is usually better)",
        "Most of your clients or income are based in Thailand",
        "You only need a short tourist trip",
        "You cannot show savings or proof of remote work",
        "You are under 20 and not applying as someone's dependent",
      ],
    },
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
        title: "Ministry of Foreign Affairs of Thailand — Visa information",
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
          "Immigration rules after entry — stay permissions, extensions, re-entry, and reporting obligations.",
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
          "After visa approval, complete TDAC before travel — immigration rules apply in addition to your visa vignette.",
      },
    ],
  },
  feesAndTimelines: {
    eyebrow: "Planning",
    title: "DTV visa fees and processing times",
    description:
      "Official government fees are set by the embassy and immigration authorities. Figures below are typical guides — confirm with your application post before you budget.",
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
        note: "Optional paid support for eligibility review, document preparation, and filing guidance — not required to apply.",
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
  governmentProcess: {
    eyebrow: "Government process",
    title: "How to apply for a DTV visa (official steps)",
    description:
      "Neutral overview of the government application path through a Thai embassy or consulate. This is separate from optional agency support.",
    steps: [
      {
        step: 1,
        title: "Confirm eligibility and pathway",
        description:
          "Identify whether you apply as a remote worker, approved-activity participant, or dependent. Verify nationality-specific rules on your embassy website.",
      },
      {
        step: 2,
        title: "Gather documents",
        description:
          "Prepare passport, application form, photographs, financial evidence (typically 500,000 THB or equivalent), proof of qualifying activity, and any embassy-specific items such as insurance or police clearance.",
      },
      {
        step: 3,
        title: "Book and submit",
        description:
          "Many posts require an online appointment. Submit your application in person or by post according to local instructions.",
      },
      {
        step: 4,
        title: "Embassy review",
        description:
          "The consular section checks completeness, financial evidence, and activity proof. They may request additional documents before deciding.",
      },
      {
        step: 5,
        title: "Collect visa or receive passport",
        description:
          "If approved, the DTV is affixed to your passport. Processing time is usually about two to four weeks for a complete file, but varies by post.",
      },
      {
        step: 6,
        title: "Enter Thailand",
        description:
          "Travel to Thailand and present your visa at immigration. You are typically granted a stay permission of up to 180 days per entry.",
      },
      {
        step: 7,
        title: "Extend or re-enter if needed",
        description:
          "You may apply for one extension per visit at immigration (fee often 1,900 THB). After the maximum stay for that visit, leave and re-enter on the same visa while it remains valid.",
      },
    ],
  },
  pitfalls: {
    eyebrow: "Refusals",
    title: "Why DTV applications are refused",
    description:
      "Most refusals are document-driven, not mysterious. Understanding common patterns helps you prepare a complete file the first time.",
    rejections: [
      {
        title: "Insufficient or unclear financial evidence",
        description:
          "Balances below the threshold, statements that do not show your name, or large unexplained deposits can weaken an application.",
        remedy:
          "Provide consecutive months of statements, currency conversion where needed, and a brief note explaining any unusual transactions.",
      },
      {
        title: "Weak proof of qualifying activity",
        description:
          "Generic letters, outdated contracts, or income that appears tied to Thailand rather than abroad raise questions for remote-work routes.",
        remedy:
          "Use recent contracts, invoices, employment letters, or programme acceptance documents that clearly match the pathway you selected.",
      },
      {
        title: "Inconsistent story across documents",
        description:
          "When your application form, employment proof, and bank activity describe different occupations or income patterns, officers may request more evidence or refuse.",
        remedy: "Align every document to one clear narrative before submission.",
      },
      {
        title: "Missing embassy-specific items",
        description:
          "Insurance, police certificates, translations, or particular statement periods are required at some posts but not others.",
        remedy:
          "Download and follow your embassy's current checklist — not a generic online list.",
      },
      {
        title: "Activity route without proper enrolment",
        description:
          "Training or medical routes need credible acceptance or appointment letters from the Thai provider.",
        remedy:
          "Obtain official enrolment documentation before you file; informal arrangements rarely suffice.",
      },
    ],
  },
  embassyVarianceTable: {
    eyebrow: "Embassy differences",
    title: "Why DTV advice differs between embassies",
    description:
      "Thailand sets national DTV policy, but each royal Thai embassy and consulate publishes its own checklist and applies local practice. Requirements that appear online for one country may not apply at your post.",
    rows: [
      {
        embassyId: "london",
        embassyName: "Royal Thai Embassy, London",
        visaFee: "Confirm on embassy site",
        bankStatementMonths: "Often 3–6 months",
        insuranceRequired: "Sometimes requested",
        notes:
          "Publishes a dedicated DTV checklist; remote-work and activity routes may need different supporting letters.",
      },
      {
        embassyId: "washington",
        embassyName: "Royal Thai Embassy, Washington, D.C.",
        visaFee: "Confirm on embassy site",
        bankStatementMonths: "Often 6 months",
        insuranceRequired: "Often requested",
        notes:
          "High application volume; appointment slots and document formatting requirements matter.",
      },
      {
        embassyId: "berlin",
        embassyName: "Royal Thai Embassy, Berlin",
        visaFee: "Confirm on embassy site",
        bankStatementMonths: "Varies",
        insuranceRequired: "Check current list",
        notes:
          "EU applicants should verify whether statements must be in English or include certified translation.",
      },
      {
        embassyId: "sydney",
        embassyName: "Royal Thai Consulate-General, Sydney",
        visaFee: "Confirm on consulate site",
        bankStatementMonths: "Often 3–6 months",
        insuranceRequired: "Sometimes requested",
        notes:
          "Processing routes and dependent rules should be confirmed directly with the consulate.",
      },
    ],
    footnote:
      "This table is a planning guide, not a substitute for your embassy's published requirements. Embassy rules change — verify before you apply.",
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
          "180 days per visit (+ one extension often possible)",
          "60–90 days per visit (varies)",
          "90 days per visit; extensions depend on purpose",
          "Long stays (category-dependent)",
        ],
      },
      {
        label: "Multiple entry",
        cells: ["Yes  -  5 years", "Often limited", "Often yes", "Often yes"],
      },
      {
        label: "Work in Thailand",
        cells: [
          "Remote work for abroad only",
          "Tourism only",
          "Thai job or business (work permit path)",
          "Depends on category",
        ],
      },
      {
        label: "Savings / income proof",
        cells: [
          "About 500,000 THB typical",
          "Lower amount",
          "Employer + your funds",
          "Higher thresholds",
        ],
      },
      {
        label: "Family",
        cells: [
          "Spouse & children under 20",
          "Separate applications",
          "Dependents possible",
          "Per programme rules",
        ],
      },
      {
        label: "Complexity",
        cells: [
          "Moderate  -  proof of work + funds",
          "Simple for short trips",
          "Higher  -  company documents",
          "High  -  specialist routes",
        ],
      },
      {
        label: "Best for",
        cells: [
          "Remote workers & long-stay visitors",
          "Holidays",
          "Thai employment",
          "Wealth / talent programmes",
        ],
      },
    ],
    footnote:
      "Unsure which route fits? See the decision guides below for DTV vs retirement, business, and tourist visas.",
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
      "Typical documents by pathway. Your embassy's published checklist is authoritative — requirements vary by post and nationality.",
    groups: [
      {
        title: "Remote worker pathway",
        pathwayId: "remote-work",
        intro: "For employees, freelancers, and business owners earning income from outside Thailand.",
        items: [
          { text: "Passport valid at least 6 months beyond intended travel" },
          {
            text: "Financial evidence showing at least 500,000 THB equivalent",
            note: "Usually recent bank statements in your name.",
          },
          {
            text: "Employment contract, employer letter, or freelance portfolio",
            note: "Must show remote work or foreign-source income.",
          },
          { text: "Passport photographs per embassy specification" },
          { text: "Completed visa application form" },
          {
            text: "Proof of current location or residence in application country",
            note: "Utility bill, lease, or local ID where required.",
          },
          {
            text: "Travel or medical insurance",
            note: "Required at some embassies — confirm your post's checklist.",
          },
        ],
      },
      {
        title: "Soft-power / activity pathway",
        pathwayId: "approved-activity",
        intro: "For Muay Thai, cooking courses, medical treatment, and similar approved programmes.",
        items: [
          { text: "Passport valid at least 6 months beyond intended travel" },
          {
            text: "Financial evidence showing at least 500,000 THB equivalent",
          },
          {
            text: "Activity enrolment or hospital appointment letter",
            note: "From the Thai school, gym, or medical provider.",
          },
          {
            text: "Provider business registration or accreditation copy",
            note: "When the embassy requests institutional proof.",
          },
          { text: "Passport photographs per embassy specification" },
          { text: "Completed visa application form" },
          {
            text: "Travel or medical insurance",
            note: "Often requested for activity and medical routes.",
          },
        ],
      },
      {
        title: "Dependent pathway",
        pathwayId: "family-member",
        intro: "For spouses and children under 20 of an approved DTV holder.",
        items: [
          { text: "Passport valid at least 6 months beyond intended travel" },
          { text: "Financial evidence per embassy rules for dependents" },
          {
            text: "Copy of primary holder's approved DTV visa",
          },
          {
            text: "Relationship proof",
            note: "Marriage certificate, birth certificate, or adoption papers.",
          },
          { text: "Passport photographs per embassy specification" },
          { text: "Completed visa application form" },
        ],
      },
    ],
  },
  decisionGuides: {
    eyebrow: "Which visa?",
    title: "DTV visa decision guides",
    description:
      "Practical routing when you are unsure whether DTV is the right Thailand visa category.",
    guides: [
      {
        id: "dtv-vs-retirement",
        question: "Should I choose DTV or a Retirement visa?",
        intro: "Age and income source determine the better long-stay route.",
        branches: [
          {
            label: "You are 50+ with pension income and no remote work",
            outcome:
              "A retirement visa (Non-Immigrant O-A or related route) is usually the better fit. See our retirement visa page.",
          },
          {
            label: "You are under 50 or work remotely for foreign income",
            outcome:
              "DTV is usually the better fit when you can show qualifying activity and the savings threshold.",
          },
        ],
      },
      {
        id: "dtv-vs-business",
        question: "Should I choose DTV or a Business visa?",
        branches: [
          {
            label: "You have a Thai employer or run operations in Thailand",
            outcome:
              "A Non-Immigrant B visa and work permit route is required — DTV does not cover local employment.",
          },
          {
            label: "You earn remotely from clients or employers outside Thailand",
            outcome: "DTV is the appropriate category when activity and financial evidence are documented.",
          },
        ],
      },
      {
        id: "dtv-vs-tourist",
        question: "Should I choose DTV or a Tourist visa?",
        branches: [
          {
            label: "You need a short holiday under about 60–90 days",
            outcome: "A tourist visa or visa exemption is simpler and cheaper for brief visits.",
          },
          {
            label: "You plan months-long stays with remote work or approved activity",
            outcome:
              "DTV is designed for multi-year long-stay planning with documented qualifying activity.",
          },
        ],
      },
    ],
  },
  compliance: {
    eyebrow: "After approval",
    title: "What happens after your DTV is approved",
    description:
      "Visa approval is only the start. Immigration rules govern each stay period after you enter Thailand.",
    items: [
      {
        title: "Visa validity vs stay permission",
        description:
          "The DTV vignette is typically valid for five years with multiple entry. Each entry grants a separate stay permission — usually up to 180 days — shown as a stamp in your passport.",
      },
      {
        title: "Extensions",
        description:
          "You may apply for one extension per visit at a Thai immigration office, often for up to 180 additional days (fee commonly around 1,900 THB). Rules and forms are set by immigration authorities.",
      },
      {
        title: "Re-entry",
        description:
          "While the five-year visa remains valid, you may leave Thailand and re-enter to start a new stay period. Each entry can grant a fresh 180-day permission.",
      },
      {
        title: "90-day reporting",
        description:
          "Long continuous stays may trigger address reporting obligations (TM30/TM47 rules). Confirm current immigration requirements for your situation.",
      },
      {
        title: "Digital arrival card (TDAC)",
        description:
          "Complete the Thailand Digital Arrival Card before entry when required. See official sources for the current portal and deadlines.",
      },
    ],
  },
  legalBoundaries: {
    eyebrow: "Work and tax",
    title: "DTV legal boundaries",
    description: "What the DTV permits and what it does not.",
    content: [
      "The DTV is intended for remote work, freelance income, or approved activities with economic ties outside Thailand. It does not replace a work permit for employment with a Thai company.",
      "Working for a Thai employer, performing services primarily for Thai clients, or operating a business that requires local labour market access usually requires a business visa and work permit route instead.",
      "Immigration approval does not determine tax residency. Thai tax rules depend on stay length, income source, and remittance patterns. This page is not tax advice — consult a qualified adviser for your situation.",
      "Overstaying your permitted stay leads to fines, possible deportation, and future visa difficulties. Extend on time or leave before your stamp expires.",
    ],
    disclaimer:
      "General immigration information only, not legal or tax advice. Confirm rules with Thai immigration and your embassy.",
  },
  process: {
    eyebrow: "How it works",
    title: "How we help with your DTV application",
    description:
      "A clear path from first message to arriving in Thailand - with less guesswork at each step.",
    steps: [
      {
        step: 1,
        title: "Eligibility review",
        description:
          "You tell us how you earn a living and how long you want to stay. We confirm whether DTV fits and which category applies to you.",
      },
      {
        step: 2,
        title: "Document checklist",
        description:
          "You receive a tailored list - savings proof, work evidence, photos, and anything else your nationality requires.",
      },
      {
        step: 3,
        title: "File review",
        description:
          "We check your documents for gaps and common mistakes before anything is submitted.",
      },
      {
        step: 4,
        title: "Application support",
        description:
          "We guide you through submission and what to expect while your application is processed - usually about two to four weeks for a complete file.",
      },
      {
        step: 5,
        title: "Approval & travel",
        description:
          "Once approved, you plan your entry to Thailand. Immigration stamps your stay - up to 180 days per visit.",
      },
      {
        step: 6,
        title: "After arrival",
        description:
          "We explain extensions, re-entry, and address reporting so you stay compliant for the full five-year visa period.",
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
          "Often yes when income is from outside Thailand and you document contracts, invoices, platform earnings, or company filings plus the savings threshold. Income mostly from Thai clients may not fit — see legal boundaries above.",
      },
      {
        value: "dtv-bank-seasoning",
        question: "How long must funds stay in my bank account?",
        answer:
          "Many applicants provide recent statements; some officers want stable balances over a few months. Large sudden deposits without explanation can raise questions — present funds clearly across the full statement window.",
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
          "Often you need to apply from outside Thailand. If you are already here on another visa, contact us — we will outline realistic options before your current stay ends.",
      },
      {
        value: "dtv-convert-visa",
        question: "Can I switch from a tourist visa to a DTV?",
        answer:
          "It is not always possible in-country. Many people apply from abroad. We review your current visa and timeline before you commit.",
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
          "Tax depends on how long you stay and your personal situation — not just the visa type. See legal boundaries above; speak with a tax adviser for tax questions.",
      },
      {
        value: "dtv-overstay",
        question: "What if I overstay on a DTV?",
        answer:
          "Overstaying leads to fines, possible deportation, and future visa problems. Extend on time or leave before your permitted stay ends — see compliance above.",
      },
    ],
  },
  eeat: {
    eyebrow: "Editorial standards",
    title: "How we verify DTV visa information",
    description:
      "This page is maintained for accuracy against official sources and practical filing experience.",
    methodology: [
      {
        title: "Official source review",
        description:
          "We cross-check visa rules against MFA, immigration, and embassy publications each time material policy or fee guidance changes.",
      },
      {
        title: "Embassy checklist alignment",
        description:
          "Document and fee guidance is validated against published embassy checklists for major application posts, not generic third-party summaries.",
      },
      {
        title: "Operational filing review",
        description:
          "Rejection patterns and embassy variance notes reflect anonymised patterns from files we prepare — not speculation.",
      },
      {
        title: "Update cadence",
        description:
          "The page shows a last-updated date and named review attribution. Sections are revised when Thai authorities or embassies publish changes.",
      },
    ],
    contentStandards:
      "We write in plain English, separate government steps from optional agency services, and cite official sources where rules originate. We do not guarantee approval outcomes — embassies make final decisions.",
    disclaimer:
      "This page is general information, not legal advice. Immigration rules change. Confirm requirements with the embassy that will process your application.",
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
    eyebrow: "Guides",
    title: "DTV resources & timelines",
    items: [
      {
        category: "Filing notes",
        title: "DTV Visa Filing Notes: Embassy Practice and Edge Cases",
        description:
          "Long-tail observations on bank statement seasoning, document formatting, third-country filing, and embassy practice — not a duplicate overview.",
        href: "/blog/thailand-dtv-visa-requirements",
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
