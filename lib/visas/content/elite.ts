import type { VisaSectionId } from "@/lib/visas/layout"
import type { VisaPageContent } from "@/lib/visas/types"

const ELITE_UPDATED_AT = "2026-06-24"

const GOLDEN_VISA_PAGE_LAYOUT: ReadonlyArray<VisaSectionId> = [
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
  "relatedVisas",
  "finalCta",
]

export const eliteVisaPage: VisaPageContent = {
  slug: "elite",
  path: "/visas/elite",
  published: true,
  publishedAt: "2026-01-15",
  updatedAt: ELITE_UPDATED_AT,
  layout: GOLDEN_VISA_PAGE_LAYOUT,
  topicId: "elite",
  lastReviewed: {
    reviewerName: "Thai Visa Company Editorial Team",
    reviewerTitle: "Licensed Thailand visa specialists",
    reviewerCredentials:
      "Immigration filing support for retirement, DTV, business, and Elite routes since 2019",
    reviewDate: ELITE_UPDATED_AT,
  },
  answer:
    "The Thailand Elite Visa, now commonly called the Thailand Privilege Visa, is a government-backed long-stay membership program for foreigners who want multi-year residence in Thailand through a membership fee rather than retirement age, income proof, or activity evidence. It suits convenience-first long-stay applicants who can meet membership costs and program rules. It is not a work permit route and does not provide a citizenship path.",
  seo: {
    title:
      "Thailand Elite Visa (Privilege Visa)  -  Membership, Requirements & How to Apply",
    description:
      "Clear Thailand Elite / Privilege Visa guide: who it suits, membership model, fee range, family options, vs retirement and DTV, and specialist application support.",
    keywords: [
      "Thailand Elite visa",
      "Thailand Privilege Visa",
      "Thailand Elite membership",
      "Thailand Elite visa cost",
      "Thailand Elite visa requirements",
      "Elite visa vs retirement",
      "Elite visa vs DTV",
    ],
  },
  hero: {
    eyebrow: "Thailand Privilege membership",
    title: "Thailand Elite Visa",
    overview:
      "Convenience-first long-stay membership for applicants who prefer a fee-based route over retirement age, income thresholds, or activity evidence.",
  },
  definition: {
    eyebrow: "Thailand Privilege Visa",
    title: "What is the Thailand Elite Visa?",
    body: "The Thailand Elite Visa, now widely known as the Thailand Privilege Visa, is a government-backed long-stay membership program operated through Thailand Privilege Card Co., Ltd. It grants multi-year residence rights through membership tiers rather than standard embassy qualification routes.\n\nElite is designed for applicants who want long-term stay in Thailand with lower documentation friction. You do not need retirement age, embassy income proof, or DTV-style activity evidence. You qualify primarily by meeting membership fees, passport requirements, and program background checks.\n\nIt is not the cheapest long-stay route, and it is not for Thai employment or citizenship planning. For budget-led qualification routes, retirement or DTV may fit better. For work intent, a business route is usually more appropriate.",
  },
  keyFacts: {
    highlight: true,
    eyebrow: "At a glance",
    title: "Elite visa key facts",
    description:
      "The core membership signals in one place before you choose a profile or prepare documents.",
    items: [
      {
        label: "Program type",
        value: "Membership long-stay",
        detail:
          "Thailand Privilege Visa (formerly Thailand Elite). Fee-based, not embassy qualification-based.",
      },
      {
        label: "Qualification model",
        value: "Membership fee",
        detail:
          "No retirement age gate, no income proof, and no activity evidence like DTV.",
      },
      {
        label: "Membership duration",
        value: "5 to 20 years",
        detail:
          "Duration depends on tier. Confirm current package terms before you commit.",
      },
      {
        label: "Membership fee",
        value: "Entry to premium range",
        detail:
          "Fees vary by tier and family add-ons. Current published tiers change; confirm live pricing before payment.",
      },
      {
        label: "Family inclusion",
        value: "Tier-dependent",
        detail:
          "Some tiers support spouse and dependents with additional fees and documents.",
      },
      {
        label: "Work in Thailand?",
        value: "Not permitted",
        detail:
          "Elite supports long-stay lifestyle residence, not Thai labor market employment.",
      },
      {
        label: "Multiple entry",
        value: "Typically included",
        detail:
          "Membership usually supports re-entry during validity, subject to program rules.",
      },
      {
        label: "Typical timing",
        value: "Often 4–12 weeks",
        detail:
          "Processing depends on file completeness, tier, and current application volume.",
      },
      {
        label: "Best for",
        value: "Convenience-first stay",
        detail:
          "Applicants prioritizing low-friction long-stay over embassy documentation cycles.",
      },
    ],
  },
  process: {
    eyebrow: "How we help",
    title: "How we help with your Elite membership application",
    description:
      "A practical route from profile selection to long-stay compliance, without reseller confusion or package guesswork.",
    steps: [
      {
        step: 1,
        title: "Profile and tier-fit review",
        description:
          "We assess your stay goals, household setup, and budget range so you can choose the right membership profile before preparing documents.",
      },
      {
        step: 2,
        title: "Package alignment check",
        description:
          "You receive guidance on individual, family, or premium long-term pathways based on current program options, not generic online tier tables.",
      },
      {
        step: 3,
        title: "Document preparation",
        description:
          "We help organize passport, background, and membership paperwork in the order your application profile requires.",
      },
      {
        step: 4,
        title: "Application coordination",
        description:
          "We guide submission steps through the authorized application channel and set realistic timing expectations for your file.",
      },
      {
        step: 5,
        title: "Approval and arrival planning",
        description:
          "After approval, we explain visa affixing, entry steps, and the compliance actions that matter in your first months in Thailand.",
      },
      {
        step: 6,
        title: "Ongoing membership support",
        description:
          "Need help after arrival? We remain available for reporting reminders, renewal planning, and program rule updates.",
      },
    ],
  },
  checklist: {
    eyebrow: "Documents",
    title: "Elite visa document checklist",
    description:
      "Use this as a preparation framework. Your chosen membership profile and current program checklist remain authoritative.",
    summary: {
      title: "Core Documents",
      items: [
        {
          text: "Valid passport with sufficient validity for your membership timeline",
          icon: "passport",
        },
        {
          text: "Completed membership application forms",
          icon: "application-form",
        },
        {
          text: "Passport photographs per program specification",
          icon: "photos",
        },
        {
          text: "Identity and background documents as requested",
          icon: "visa-copy",
        },
        {
          text: "Membership payment readiness documentation",
          icon: "financial",
        },
        {
          text: "Dependent relationship evidence when family inclusion applies",
          icon: "relationship",
        },
      ],
    },
    groups: [
      {
        title: "Individual Long-Stay Applicant",
        pathwayId: "individual-long-stay",
        intro:
          "Typical documents for solo applicants targeting entry-level or standard individual membership profiles.",
        categories: [
          {
            title: "Passport and Identity",
            items: [
              {
                text: "Passport bio-page copy and required signature pages",
                icon: "passport",
              },
              {
                text: "Recent passport photographs",
                icon: "photos",
              },
            ],
          },
          {
            title: "Application Pack",
            items: [
              {
                text: "Completed membership application and declaration forms",
                icon: "application-form",
              },
              {
                text: "Program-specific supporting declarations when requested",
                icon: "visa-copy",
              },
            ],
          },
          {
            title: "Background and Payment",
            items: [
              {
                text: "Police clearance or medical documents if requested",
                icon: "application-form",
              },
              {
                text: "Proof of funds readiness for membership payment",
                icon: "financial",
              },
            ],
          },
        ],
      },
      {
        title: "Family Inclusion Applicant",
        pathwayId: "family-inclusion",
        intro:
          "Additional documents when spouse or dependents are included on a family-eligible membership profile.",
        categories: [
          {
            title: "Relationship and Identity",
            items: [
              {
                text: "Marriage or dependency certificates for included family members",
                icon: "relationship",
              },
              {
                text: "Passport copies and photos for each dependent",
                icon: "passport",
              },
            ],
          },
          {
            title: "Supporting Evidence",
            items: [
              {
                text: "Dependent application forms linked to main applicant profile",
                icon: "application-form",
              },
              {
                text: "Additional family fees and payment evidence where required",
                icon: "financial",
              },
            ],
          },
        ],
      },
      {
        title: "Premium Long-Term Applicant",
        pathwayId: "premium-long-term",
        intro:
          "Documents for applicants targeting longer-duration premium membership profiles, including invitation-only tiers when applicable.",
        categories: [
          {
            title: "Core Applicant File",
            items: [
              {
                text: "Complete passport and identity set for primary applicant",
                icon: "passport",
              },
              {
                text: "Enhanced background documentation if requested for premium review",
                icon: "visa-copy",
              },
            ],
          },
          {
            title: "Membership Confirmation",
            items: [
              {
                text: "Premium tier selection confirmation and payment readiness proof",
                icon: "financial",
              },
              {
                text: "Invitation or eligibility confirmation for invitation-only tiers",
                note: "Required only where the selected premium tier demands it.",
                icon: "application-form",
              },
            ],
          },
        ],
      },
    ],
  },
  requirements: {
    eyebrow: "Eligibility",
    title: "Which Elite membership profile fits you?",
    description:
      "Choose the profile that matches your household and stay horizon. We then align your documents to current program requirements.",
    pathways: [
      {
        id: "individual-long-stay",
        title: "I want individual long-stay membership",
        description:
          "Best fit for solo applicants who want a convenience-first long-stay route without retirement or activity qualification complexity.",
        badge: "Most common profile",
      },
      {
        id: "family-inclusion",
        title: "I need family inclusion on my membership",
        description:
          "Best fit when spouse or dependents should be included under a family-eligible membership profile with additional fees and documents.",
        badge: "Household profile",
      },
      {
        id: "premium-long-term",
        title: "I want premium long-term membership",
        description:
          "Best fit for applicants targeting longer-duration premium tiers, including invitation-only options where applicable.",
        badge: "Premium profile",
      },
    ],
    clarification: {
      title: "Not sure which Elite profile fits you?",
      description:
        "We can review your stay goals, household setup, and budget range before you choose a membership pathway or prepare documents.",
      linkLabel: "Request a consultation",
    },
  },
  pitfalls: {
    eyebrow: "Refusals",
    title: "Why Elite membership applications go wrong",
    description:
      "Most issues are avoidable with correct profile selection and authorized application support, not hidden program rules.",
    summary: {
      title: "Five frequent Elite application pitfalls",
      paragraphs: [
        "Problems usually start with the wrong membership profile, not missing passport pages.",
        "Choosing tier fit early and using authorized channels significantly reduces delays and rework.",
      ],
    },
    rejections: [
      {
        title: "Wrong membership profile selected",
        icon: "documents",
        description:
          "Applicants choose a tier that does not match household needs, stay horizon, or family inclusion requirements.",
        remedy:
          "Confirm profile fit (individual, family, premium long-term) before payment and document preparation.",
      },
      {
        title: "Unauthorized or misleading agents",
        icon: "checklist",
        description:
          "Third-party sellers promise benefits or pricing that do not match current official program terms.",
        remedy:
          "Use authorized application channels and verify package terms before transferring funds.",
      },
      {
        title: "Background documentation gaps",
        icon: "documents",
        description:
          "Police clearance, medical, or identity records are missing, outdated, or inconsistent with application forms.",
        remedy:
          "Prepare background documents early and keep every field aligned across forms and supporting files.",
      },
      {
        title: "Benefit expectations mismatch",
        icon: "activity",
        description:
          "Applicants expect work rights, tax benefits, or citizenship pathways that Elite membership does not provide.",
        remedy:
          "Treat Elite as a long-stay lifestyle membership route, not employment or permanent residency planning.",
      },
      {
        title: "Payment timing and package confusion",
        icon: "financial",
        description:
          "Membership fees or add-on costs are planned without confirming current tier pricing and payment sequence.",
        remedy:
          "Confirm live package pricing and payment steps before committing, especially for family add-ons.",
      },
    ],
  },
  comparison: {
    eyebrow: "Side by side",
    title: "Elite vs other Thailand visa routes",
    description:
      "Use this comparison to confirm whether Elite is genuinely your best fit before you commit to membership fees.",
    columns: [
      { id: "elite", label: "Elite / Privilege" },
      { id: "retirement", label: "Retirement Visa", href: "/visas/retirement" },
      { id: "dtv", label: "DTV Visa", href: "/visas/dtv" },
      { id: "business", label: "Business Visa", href: "/visas/business" },
    ],
    rows: [
      {
        label: "Best for",
        cells: [
          "Convenience-first long-stay via membership fee",
          "Genuine retirees aged 50+ with qualifying funds or income",
          "Remote workers or approved activity participants",
          "Thai employment or company-linked stay intent",
        ],
      },
      {
        label: "Age requirement",
        cells: ["None", "Usually 50+", "None", "None"],
      },
      {
        label: "Qualification model",
        cells: [
          "Membership fee and program checks",
          "Embassy financial and insurance proof",
          "Savings plus qualifying activity evidence",
          "Employer or business sponsorship",
        ],
      },
      {
        label: "Cost model",
        cells: [
          "Upfront membership fee by tier",
          "Embassy fees plus ongoing financial proof",
          "Savings threshold plus pathway evidence",
          "Company and work-permit related costs",
        ],
      },
      {
        label: "Typical duration",
        cells: [
          "Multi-year membership (tier-dependent)",
          "Often 1 year per cycle, renewable",
          "Multi-year visa with per-entry stay rules",
          "Linked to employment or business validity",
        ],
      },
      {
        label: "Work in Thailand",
        cells: [
          "Not permitted",
          "Not permitted",
          "Remote foreign income only",
          "Thai employment route",
        ],
      },
      {
        label: "Family inclusion",
        cells: [
          "Available on selected tiers",
          "Dependent rules vary by route",
          "Dependent pathways may apply",
          "Dependents possible on linked visas",
        ],
      },
      {
        label: "Complexity",
        cells: [
          "Lower qualification friction, higher membership cost",
          "Moderate embassy documentation and renewals",
          "Moderate activity and financial matching",
          "Higher employer and permit complexity",
        ],
      },
    ],
  },
  compliance: {
    eyebrow: "After approval",
    title: "What happens after your Elite membership is approved?",
    description:
      "Approval starts your long-stay lifecycle. Staying in good standing depends on membership validity and ongoing reporting discipline.",
    cards: [
      {
        label: "Membership validity",
        value: "Tier-dependent",
        detail:
          "Your stay rights follow the approved membership term and current program conditions.",
      },
      {
        label: "Stay per entry",
        value: "Usually up to 1 year",
        detail:
          "Each entry permission is granted under program rules and may require renewal steps in Thailand.",
      },
      {
        label: "Re-entry",
        value: "Typically flexible",
        detail:
          "Membership routes commonly support multiple entry during validity, subject to current rules.",
      },
      {
        label: "Ongoing obligations",
        value: "Reporting and compliance",
        detail:
          "Maintain valid membership status, reporting obligations, and program-compliant conduct.",
      },
    ],
    reminders: {
      title: "Things to remember",
      items: [
        "90-day reporting obligations may apply during long stays in Thailand",
        "Complete arrival and visa-affixing steps exactly as instructed in your approval pack",
        "Plan renewal or tier changes before membership expiry to avoid status gaps",
      ],
    },
  },
  faq: {
    eyebrow: "Common questions",
    title: "Thailand Elite Visa FAQ",
    description:
      "Decision questions that matter after you understand the membership model, key facts, and profile pathways.",
    items: [
      {
        value: "elite-privilege-same",
        question: "Is Thailand Elite the same as the Thailand Privilege Visa?",
        answer:
          "Yes in practical terms for most applicants. Thailand Elite was rebranded under the Thailand Privilege Visa framework. Program names and package labels can change, so confirm current official terminology before you apply.",
      },
      {
        value: "elite-who-for",
        question: "Who is Elite actually for?",
        answer:
          "Elite is for convenience-first long-stay applicants who prefer a membership-fee route over embassy qualification complexity. It is usually not the best fit for budget-led routes, Thai employment intent, or citizenship planning.",
      },
      {
        value: "elite-cost-range",
        question: "How much does Thailand Elite cost?",
        answer:
          "Membership fees vary by tier and family add-ons. The hub shows only the high-level range; confirm current live pricing for your profile before payment. Detailed tier fees belong in a dedicated cost guide, not on this decision page.",
      },
      {
        value: "elite-income-proof",
        question: "Do I need income proof or retirement-age qualification?",
        answer:
          "No. Elite is not based on retirement age thresholds, embassy income proof, or DTV-style activity evidence. Qualification is primarily membership-fee capacity plus program background checks.",
      },
      {
        value: "elite-tier-fit",
        question: "Which membership tier fits my situation?",
        answer:
          "Start with profile fit: individual long-stay, family inclusion, or premium long-term. Exact tier names and fees should be confirmed against current program options after profile selection.",
      },
      {
        value: "elite-family",
        question: "Can family members be included?",
        answer:
          "Family inclusion is available on selected membership profiles, usually with additional fees and dependent documents. Requirements vary by tier and household structure.",
      },
      {
        value: "elite-work",
        question: "Can I work in Thailand on Elite?",
        answer:
          "No. Elite supports long-stay residence, not Thai labor market employment. If your primary goal is working in Thailand, a business route is usually more appropriate.",
      },
      {
        value: "elite-worth-it",
        question: "Is Elite worth it compared with retirement or DTV?",
        answer:
          "It depends on your profile. Elite is often stronger for convenience-first long-stay without qualification complexity. Retirement can be better for eligible 50+ applicants with qualifying funds. DTV can be better when remote-work or activity evidence is already clear.",
      },
      {
        value: "elite-reporting",
        question: "What are my reporting obligations after approval?",
        answer:
          "You must maintain valid membership status and comply with stay reporting rules, including 90-day reporting where applicable. Exact steps depend on your entry conditions and current immigration practice.",
      },
    ],
  },
  relatedVisaSlugs: ["retirement", "dtv", "business"],
  relatedVisas: {
    eyebrow: "Related routes",
    title: "Related Thailand visa options",
    description:
      "If Elite is not your best fit, compare these published alternatives before choosing a route.",
    items: [
      {
        category: "Alternative",
        title: "Thailand Retirement Visa",
        description:
          "A better fit for eligible applicants aged 50+ who qualify through retirement financial routes rather than membership fees.",
        href: "/visas/retirement",
      },
      {
        category: "Alternative",
        title: "Thailand DTV Visa",
        description:
          "A better fit for remote workers or approved activity participants who can meet DTV pathway evidence requirements.",
        href: "/visas/dtv",
      },
      {
        category: "Alternative",
        title: "Thailand Business Visa",
        description:
          "The appropriate route when your primary goal is Thai employment or company-linked stay rather than lifestyle membership.",
        href: "/visas/business",
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
  relatedResources: { items: [] },
  finalCta: {
    eyebrow: "Get in touch",
    headline: "Ready to choose the right Elite membership profile?",
    title: "Ready to choose the right Elite membership profile?",
    description:
      "Share your stay goals, household setup, and budget range. We help you choose the right profile and prepare a complete membership application without package guesswork.",
    buttonLabel: "Book a consultation",
  },
}
