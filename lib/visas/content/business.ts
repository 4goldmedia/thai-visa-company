import type { VisaSectionId } from "@/lib/visas/layout"
import type { VisaPageContent } from "@/lib/visas/types"

const BUSINESS_UPDATED_AT = "2026-06-24"

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

export const businessVisaPage: VisaPageContent = {
  slug: "business",
  path: "/visas/business",
  published: true,
  publishedAt: "2026-01-15",
  updatedAt: BUSINESS_UPDATED_AT,
  layout: GOLDEN_VISA_PAGE_LAYOUT,
  topicId: "business",
  lastReviewed: {
    reviewerName: "Thai Visa Company Editorial Team",
    reviewerTitle: "Licensed Thailand visa specialists",
    reviewerCredentials:
      "Immigration filing support for retirement, DTV, business, and Elite routes since 2019",
    reviewDate: BUSINESS_UPDATED_AT,
  },
  answer:
    "The Thailand Business Visa is generally a Non-Immigrant B visa for foreign nationals who need to live in Thailand for employment or company-linked activity with a sponsoring Thai employer or qualifying company. It is not the same as a work permit. A business visa alone does not authorize employment in Thailand; a work permit is usually required separately after arrival.",
  seo: {
    title:
      "Thailand Business Visa (Non-Immigrant B)  -  Requirements, Sponsorship & How to Apply",
    description:
      "Clear Thailand business visa guide: Non-Immigrant B sponsorship, visa vs work permit, employee and director pathways, documents, vs DTV and Elite, and specialist support.",
    keywords: [
      "Thailand business visa",
      "Thailand work visa",
      "Non-Immigrant B visa Thailand",
      "Thailand business visa requirements",
      "Thailand business visa documents",
      "business visa vs work permit Thailand",
      "business visa vs DTV",
    ],
  },
  hero: {
    eyebrow: "Non-Immigrant B visa",
    title: "Thailand Business Visa",
    overview:
      "Sponsorship-based long-stay route for foreign nationals with legitimate Thai employment or company-linked activity, distinct from remote-work, retirement, or membership routes.",
  },
  definition: {
    eyebrow: "Employment and company routes",
    title: "What is the Thailand Business Visa?",
    body: "The Thailand Business Visa, commonly issued as a Non-Immigrant B visa, is an embassy-issued long-stay permission for foreign nationals who need to live in Thailand for employment or company-linked business activity. It is tied to a sponsoring Thai employer or qualifying Thai company and is the standard route when your stay intent involves working in or through a Thai entity.\n\nA business visa and a work permit are related but not the same. The visa supports entry and stay eligibility linked to your sponsor. A work permit is a separate authorization to perform work in Thailand. Most employment workflows follow a typical sequence: obtain the business visa abroad, enter Thailand, then complete work permit steps with your sponsor. Holding a business visa alone does not authorize employment.\n\nThis route suits employees, company directors, and staff joining BOI-promoted companies with a legitimate sponsor. It is usually not the right route for remote workers earning foreign income without a Thai sponsor (DTV), retirees aged 50+ (Retirement), or fee-based lifestyle long-stay without employment intent (Elite).",
  },
  keyFacts: {
    highlight: true,
    eyebrow: "At a glance",
    title: "Business visa key facts",
    description:
      "The core sponsorship and work-authorization signals before you choose a pathway or prepare documents.",
    items: [
      {
        label: "Visa type",
        value: "Non-Immigrant B",
        detail:
          "Commonly called a Thailand business visa or work visa in plain English. Official category framing varies by embassy.",
      },
      {
        label: "Sponsor required",
        value: "Yes",
        detail:
          "A Thai employer or qualifying Thai company normally sponsors the application.",
      },
      {
        label: "Work in Thailand?",
        value: "Visa alone: no",
        detail:
          "A business visa does not authorize employment. A work permit is usually required separately.",
      },
      {
        label: "Initial validity",
        value: "Often 90 days to 1 year",
        detail:
          "Permission length depends on embassy approval and your sponsor file.",
      },
      {
        label: "Typical timing",
        value: "Often 2–6 weeks",
        detail:
          "Processing depends on embassy workload and how complete your sponsor documents are on first submission.",
      },
      {
        label: "Extension model",
        value: "Sponsor-linked",
        detail:
          "Renewals and extensions usually depend on continued sponsorship and compliant employment status.",
      },
      {
        label: "Dependents",
        value: "Possible",
        detail:
          "Spouse and qualifying dependents may apply with additional filings, subject to current rules.",
      },
      {
        label: "BOI companies",
        value: "Streamlined options",
        detail:
          "BOI-promoted sponsors may follow streamlined processing, but the visa and work permit remain separate instruments.",
      },
      {
        label: "Best for",
        value: "Thai employment or company-linked stay",
        detail:
          "Applicants with a legitimate Thai sponsor for employment or company operations.",
      },
    ],
  },
  process: {
    eyebrow: "How we help",
    title: "How we help with your Thailand business visa",
    description:
      "A practical route from sponsor review to post-arrival compliance, without confusing visa steps with work permit procedure.",
    steps: [
      {
        step: 1,
        title: "Sponsor and pathway review",
        description:
          "We assess your relationship to the Thai entity so you can confirm the right pathway between employee, director, or BOI-promoted sponsorship before preparing documents.",
      },
      {
        step: 2,
        title: "Personalized checklist",
        description:
          "You receive a tailored document framework based on your sponsor type and embassy path, including employer or company evidence expectations.",
      },
      {
        step: 3,
        title: "Sponsor document review",
        description:
          "We review employment contracts, company registration, and invitation materials to reduce common refusal risks such as incomplete sponsor files or role mismatch.",
      },
      {
        step: 4,
        title: "Visa application guidance",
        description:
          "We guide embassy submission order, required forms, and realistic timing based on your sponsor readiness and processing post.",
      },
      {
        step: 5,
        title: "Approval and arrival planning",
        description:
          "After visa approval, we explain entry steps and what typically follows next with your sponsor, without turning the hub into a work permit manual.",
      },
      {
        step: 6,
        title: "Ongoing visa support",
        description:
          "Need help after arrival? We remain available for extension readiness, sponsor changes, and route-specific policy updates.",
      },
    ],
  },
  checklist: {
    eyebrow: "Documents",
    title: "Business visa document checklist",
    description:
      "Use this as a preparation framework. Your embassy checklist and sponsor remain the authoritative sources.",
    summary: {
      title: "Core Documents",
      items: [
        {
          text: "Valid passport with sufficient validity for your application timeline",
          icon: "passport",
        },
        {
          text: "Completed visa application forms and compliant photographs",
          icon: "application-form",
        },
        {
          text: "Sponsor letter or company invitation aligned to your pathway",
          icon: "visa-copy",
        },
        {
          text: "Employment contract or director appointment evidence where applicable",
          icon: "relationship",
        },
        {
          text: "Company registration documents from your Thai sponsor",
          icon: "financial",
        },
        {
          text: "Educational or professional credentials if requested by your post",
          icon: "application-form",
        },
      ],
    },
    groups: [
      {
        title: "Employer-Sponsored Employee",
        pathwayId: "employer-sponsored",
        intro:
          "Typical documents when a Thai employer sponsors a foreign employee for a Non-Immigrant B visa.",
        categories: [
          {
            title: "Passport and Identity",
            items: [
              {
                text: "Passport with sufficient validity and blank pages",
                icon: "passport",
              },
              {
                text: "Recent passport photographs per embassy specification",
                icon: "photos",
              },
            ],
          },
          {
            title: "Employment Evidence",
            items: [
              {
                text: "Employment contract or offer letter from the Thai sponsor",
                icon: "relationship",
              },
              {
                text: "Employer invitation or sponsorship letter",
                icon: "visa-copy",
              },
            ],
          },
          {
            title: "Company and Application Pack",
            items: [
              {
                text: "Thai company registration documents as requested",
                icon: "financial",
              },
              {
                text: "Completed embassy visa forms and supporting declarations",
                icon: "application-form",
              },
            ],
          },
        ],
      },
      {
        title: "Company Director or Founder",
        pathwayId: "company-director",
        intro:
          "Typical documents when a Thai company sponsors a director, founder, or shareholder with company-linked stay intent.",
        categories: [
          {
            title: "Identity and Role",
            items: [
              {
                text: "Passport copies and compliant photographs",
                icon: "passport",
              },
              {
                text: "Director appointment or shareholder evidence linking you to the company",
                icon: "relationship",
              },
            ],
          },
          {
            title: "Company Sponsorship",
            items: [
              {
                text: "Company invitation or sponsorship letter from the Thai entity",
                icon: "visa-copy",
              },
              {
                text: "Company registration and supporting corporate documents",
                icon: "financial",
              },
            ],
          },
          {
            title: "Application Pack",
            items: [
              {
                text: "Completed visa forms and embassy-specific declarations",
                icon: "application-form",
              },
              {
                text: "Professional or business background documents if requested",
                icon: "application-form",
              },
            ],
          },
        ],
      },
      {
        title: "BOI-Promoted Applicant",
        pathwayId: "boi-promoted",
        intro:
          "Typical documents when joining a BOI-promoted Thai company. Processing may be streamlined, but embassy and sponsor checklists remain authoritative.",
        categories: [
          {
            title: "Applicant Identity",
            items: [
              {
                text: "Passport and photographs per embassy specification",
                icon: "passport",
              },
              {
                text: "Role evidence linking you to the BOI-promoted sponsor",
                icon: "relationship",
              },
            ],
          },
          {
            title: "Sponsor Evidence",
            items: [
              {
                text: "BOI-promoted company sponsorship or invitation materials",
                icon: "visa-copy",
              },
              {
                text: "Company registration and BOI-related documents as requested",
                icon: "financial",
              },
            ],
          },
          {
            title: "Application Pack",
            items: [
              {
                text: "Completed embassy visa forms and supporting declarations",
                icon: "application-form",
              },
              {
                text: "Employment or appointment documents aligned to your role",
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
    title: "Which business visa pathway fits you?",
    description:
      "Choose the profile that matches your relationship to the Thai sponsor. We then align your evidence to embassy and sponsor requirements.",
    pathways: [
      {
        id: "employer-sponsored",
        title: "I'm employed by a Thai company",
        description:
          "Best fit when a Thai employer sponsors your stay for a legitimate employment contract and role with the company.",
        badge: "Most common pathway",
      },
      {
        id: "company-director",
        title: "I'm a director or founder of a Thai company",
        description:
          "Best fit when your stay is linked to director, founder, or shareholder responsibilities within a registered Thai company.",
        badge: "Company-linked pathway",
      },
      {
        id: "boi-promoted",
        title: "I'm joining a BOI-promoted company",
        description:
          "Best fit when your sponsor is a BOI-promoted Thai company and your role qualifies under current promotion rules.",
        badge: "BOI pathway",
      },
    ],
    clarification: {
      title: "Not sure which business visa pathway fits you?",
      description:
        "We can review your sponsor, role, and company setup before you prepare documents or submit a visa application.",
      linkLabel: "Request a consultation",
    },
  },
  pitfalls: {
    eyebrow: "Refusals",
    title: "Why business visa applications go wrong",
    description:
      "Most problems come from sponsor readiness and route confusion, not hidden embassy rules.",
    summary: {
      title: "Five frequent business visa pitfalls",
      paragraphs: [
        "Business visa refusals and delays usually trace back to sponsor documentation or misunderstanding what the visa itself authorizes.",
        "Confirming pathway fit and sponsor file quality early significantly reduces rework after submission.",
      ],
    },
    rejections: [
      {
        title: "Treating the business visa as work authorization",
        icon: "activity",
        description:
          "Applicants assume visa approval alone allows them to start working in Thailand without planning the separate work permit step.",
        remedy:
          "Treat the business visa as the entry and stay stage. Plan sponsor-supported work authorization as a separate requirement after arrival.",
      },
      {
        title: "Incomplete employer or company documentation",
        icon: "documents",
        description:
          "Sponsor letters, contracts, or company registration packs are missing, outdated, or inconsistent with the role described.",
        remedy:
          "Align every sponsor document to one role narrative and verify company registration status before embassy submission.",
      },
      {
        title: "Wrong visa route for the activity",
        icon: "checklist",
        description:
          "Applicants choose a business visa when their real activity is remote foreign-income work, retirement, or lifestyle long-stay without a Thai sponsor.",
        remedy:
          "Confirm intent first. Remote work without a Thai sponsor usually points to DTV, not a business visa.",
      },
      {
        title: "Sponsorship or role mismatch",
        icon: "documents",
        description:
          "The applicant's job title, contract, or company role does not match the sponsor letter or company structure presented to the embassy.",
        remedy:
          "Keep role, contract, invitation, and company records consistent across the full file.",
      },
      {
        title: "Company registration not ready",
        icon: "financial",
        description:
          "Founder or director routes are filed before the Thai company has the registration evidence embassies expect for sponsorship.",
        remedy:
          "Confirm company registration readiness with your sponsor before committing to filing dates or relocation timing.",
      },
    ],
  },
  comparison: {
    eyebrow: "Side by side",
    title: "Business visa vs other Thailand visa routes",
    description:
      "Use this comparison to confirm whether a business visa is genuinely your best fit before you commit to a sponsor file.",
    columns: [
      { id: "business", label: "Business Visa" },
      { id: "dtv", label: "DTV Visa", href: "/visas/dtv" },
      { id: "elite", label: "Elite Visa", href: "/visas/elite" },
      {
        id: "retirement",
        label: "Retirement Visa",
        href: "/visas/retirement",
      },
    ],
    rows: [
      {
        label: "Best for",
        cells: [
          "Thai employment or company-linked stay",
          "Remote work or approved long-stay activity",
          "Convenience-first lifestyle long-stay",
          "Genuine retirement aged 50+",
        ],
      },
      {
        label: "Sponsor required",
        cells: [
          "Yes, Thai employer or company",
          "No Thai employer sponsor",
          "No employer sponsor",
          "No employer sponsor",
        ],
      },
      {
        label: "Qualification model",
        cells: [
          "Sponsorship and company-linked evidence",
          "Savings plus qualifying activity proof",
          "Membership fee and program checks",
          "Age plus retirement financial proof",
        ],
      },
      {
        label: "Work in Thailand",
        cells: [
          "Work permit usually required after visa",
          "Remote foreign income only",
          "Not permitted",
          "Not permitted",
        ],
      },
      {
        label: "Remote work suitability",
        cells: [
          "Not for foreign-remote-only intent",
          "Primary fit for qualifying remote workers",
          "Not intended for employment",
          "Not intended for employment",
        ],
      },
      {
        label: "Typical applicant",
        cells: [
          "Employee, director, or BOI company staff",
          "Digital nomad or activity participant",
          "Fee-based long-stay lifestyle applicant",
          "Retiree with qualifying funds or income",
        ],
      },
      {
        label: "Family inclusion",
        cells: [
          "Dependent filings may apply",
          "Dependent pathways may apply",
          "Available on selected tiers",
          "Dependent spouse pathways may apply",
        ],
      },
      {
        label: "Complexity",
        cells: [
          "Moderate to high, sponsor-dependent",
          "Moderate activity and financial matching",
          "Lower qualification friction, higher membership cost",
          "Moderate embassy documentation and renewals",
        ],
      },
    ],
  },
  compliance: {
    eyebrow: "After approval",
    title: "What happens after your business visa is approved?",
    description:
      "Approval starts your sponsored stay lifecycle. Staying in status depends on visa validity, sponsor continuity, and reporting discipline.",
    cards: [
      {
        label: "Initial permission",
        value: "Embassy-dependent",
        detail:
          "Your approved business visa grants entry and stay terms linked to your sponsor file.",
      },
      {
        label: "Extension cycle",
        value: "Sponsor-linked",
        detail:
          "Extensions and renewals usually require continued sponsorship and updated supporting evidence.",
      },
      {
        label: "Re-entry planning",
        value: "Often required",
        detail:
          "Travel without the correct re-entry setup can affect your existing stay permission.",
      },
      {
        label: "Ongoing obligations",
        value: "Reporting and compliance",
        detail:
          "Maintain valid visa status, sponsor alignment, and applicable reporting obligations during your stay.",
      },
    ],
    reminders: {
      title: "Things to remember",
      items: [
        "90-day reporting may apply during long stays in Thailand",
        "A business visa alone does not replace work authorization for employment in Thailand",
        "Plan sponsor and visa continuity before changing employers or company roles",
      ],
    },
  },
  faq: {
    eyebrow: "Common questions",
    title: "Thailand Business Visa FAQ",
    description:
      "Decision questions that matter after you understand sponsorship, key facts, and pathway fit.",
    items: [
      {
        value: "business-visa-vs-work-permit",
        question: "Is a Thailand business visa the same as a work permit?",
        answer:
          "No. They are related but separate. A business visa supports entry and stay eligibility linked to your sponsor. A work permit authorizes you to work in Thailand. Most employment cases require both, in sequence. This page explains the relationship; detailed work permit procedure belongs in a dedicated guide.",
      },
      {
        value: "business-who-sponsors",
        question: "Who can sponsor my Thailand business visa?",
        answer:
          "Usually a Thai employer or qualifying Thai company with legitimate registration and sponsorship standing. The exact sponsor format and documents depend on your pathway and embassy.",
      },
      {
        value: "business-work-with-visa-only",
        question: "Can I work in Thailand with only a business visa?",
        answer:
          "No. A business visa alone does not authorize employment. You normally need separate work authorization through your sponsor after arrival, subject to current rules.",
      },
      {
        value: "business-director-vs-employee",
        question: "Do company directors need a different route than employees?",
        answer:
          "Both use the business visa framework, but sponsor evidence differs. Employees rely on employment contracts and employer sponsorship. Directors and founders rely on company-linked appointment and registration evidence. Choose the pathway that matches your relationship to the Thai entity.",
      },
      {
        value: "business-employer-documents",
        question: "What documents does my Thai employer or company usually provide?",
        answer:
          "Commonly a sponsor or invitation letter, company registration materials, and role-specific evidence such as an employment contract or director appointment documents. Exact items vary by pathway and embassy.",
      },
      {
        value: "business-dependents",
        question: "Can my family join me on a business visa?",
        answer:
          "Spouse and qualifying dependents may be able to apply with additional filings linked to the primary visa holder. Rules vary by nationality, relationship proof, and current immigration practice.",
      },
      {
        value: "business-change-employer",
        question: "What happens if I change employers in Thailand?",
        answer:
          "A new employer usually means a new sponsor relationship and updated visa and work authorization planning. Do not assume your existing permission automatically transfers. Confirm visa continuity and sponsor timing before you switch roles.",
      },
      {
        value: "business-vs-dtv",
        question: "Should I choose a business visa or DTV for remote work?",
        answer:
          "If you work remotely for a foreign employer without a Thai sponsor, DTV is usually the better fit. Business visa is for Thai employment or company-linked stay with a sponsoring Thai entity.",
      },
      {
        value: "business-processing-time",
        question: "How long does business visa processing usually take?",
        answer:
          "Many files complete in roughly 2 to 6 weeks, but timing depends on embassy workload, nationality, and how complete your sponsor documents are on first submission. Incomplete employer files are a common delay cause.",
      },
    ],
  },
  relatedVisaSlugs: ["dtv", "elite", "retirement"],
  relatedVisas: {
    eyebrow: "Related routes",
    title: "Related Thailand visa options",
    description:
      "If a business visa is not your best fit, compare these published alternatives before choosing a route.",
    items: [
      {
        category: "Alternative",
        title: "Thailand DTV Visa",
        description:
          "A better fit for remote workers or approved activity participants without a Thai employer sponsor.",
        href: "/visas/dtv",
      },
      {
        category: "Alternative",
        title: "Thailand Elite Visa",
        description:
          "A better fit for convenience-first lifestyle long-stay without Thai employment or company sponsorship.",
        href: "/visas/elite",
      },
      {
        category: "Alternative",
        title: "Thailand Retirement Visa",
        description:
          "A better fit for eligible applicants aged 50+ with retirement intent rather than company-linked employment.",
        href: "/visas/retirement",
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
    headline: "Ready to confirm your Thailand business visa pathway?",
    title: "Ready to confirm your Thailand business visa pathway?",
    description:
      "Share your sponsor, role, and timeline. We help you choose the right pathway and prepare a sponsor-aligned document plan before you file.",
    buttonLabel: "Book a consultation",
  },
}
