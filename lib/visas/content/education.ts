import type { VisaSectionId } from "@/lib/visas/layout"
import type { VisaPageContent } from "@/lib/visas/types"

const EDUCATION_UPDATED_AT = "2026-06-24"

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
  "relatedResources",
  "relatedVisas",
  "finalCta",
]

export const educationVisaPage: VisaPageContent = {
  slug: "education",
  path: "/visas/education",
  published: true,
  publishedAt: "2026-01-15",
  updatedAt: EDUCATION_UPDATED_AT,
  layout: GOLDEN_VISA_PAGE_LAYOUT,
  topicId: "education",
  relatedArticleSlugs: [
    "best-visa-for-living-in-thailand",
    "dtv-vs-education-visa-thailand",
    "can-you-work-on-an-education-visa-in-thailand",
  ],
  lastReviewed: {
    reviewerName: "Thai Visa Company Editorial Team",
    reviewerTitle: "Licensed Thailand visa specialists",
    reviewerCredentials:
      "Immigration filing support for retirement, DTV, business, Elite, and education routes since 2019",
    reviewDate: EDUCATION_UPDATED_AT,
  },
  answer:
    "The Thailand Education Visa, commonly issued as a Non-Immigrant ED visa, is a long-stay route for foreign nationals with genuine study intent who are enrolled at a qualifying Thai institution. It is enrollment-linked, not a work visa and not a remote-work route. Applicants who want to work in Thailand should consider a business visa; remote workers or short structured activity stays may fit the DTV instead.",
  seo: {
    title:
      "Thailand Education Visa (Non-Immigrant ED)  -  Requirements, Enrollment & How to Apply",
    description:
      "Clear Thailand education visa guide: Non-Immigrant ED enrollment, language and university pathways, vs DTV and Business, attendance rules, and specialist support.",
    keywords: [
      "Thailand education visa",
      "Thailand student visa",
      "ED visa Thailand",
      "Non-Immigrant ED visa Thailand",
      "Thailand language school visa",
      "Thailand university visa",
      "education visa vs DTV",
    ],
  },
  hero: {
    eyebrow: "Non-Immigrant ED visa",
    title: "Thailand Education Visa",
    overview:
      "Enrollment-linked study route for foreign nationals at qualifying Thai institutions, distinct from remote-work, employment, or lifestyle membership routes.",
  },
  definition: {
    eyebrow: "Study in Thailand",
    title: "What is the Thailand Education Visa?",
    body: "The Thailand Education Visa, commonly issued as a Non-Immigrant ED visa, is an embassy-issued long-stay permission for foreign nationals with genuine study intent who are enrolled at a qualifying Thai institution. Your school or university provides core enrollment documents, and your application is assessed against embassy requirements for your program type and nationality.\n\nThis route is enrollment-linked. It supports long-term study in Thailand when you have a legitimate institution sponsor and can meet attendance and reporting obligations. It is not a work visa, not a remote-work visa, and not a long-stay loophole for lifestyle intent without study.\n\nEducation visa suits language students, university enrollees, and some cultural program participants with formal institutional enrollment. Remote workers without study intent should usually consider DTV. Thai employment requires a business visa. Fee-based lifestyle long-stay without enrollment may fit Elite. Muay Thai or short activity-focused stays may fit DTV activity pathways when savings and activity evidence qualify.",
  },
  keyFacts: {
    highlight: true,
    eyebrow: "At a glance",
    title: "Education visa key facts",
    description:
      "The core enrollment and study-intent signals before you choose a pathway or prepare documents.",
    items: [
      {
        label: "Visa type",
        value: "Non-Immigrant ED",
        detail:
          "Commonly called a Thailand education visa or student visa. Official category framing varies by embassy.",
      },
      {
        label: "Enrollment required",
        value: "Yes",
        detail:
          "A qualifying Thai institution normally provides core enrollment or acceptance documents.",
      },
      {
        label: "Work in Thailand?",
        value: "Not permitted",
        detail:
          "Education routes are for study, not Thai employment. Employment intent points to a business visa.",
      },
      {
        label: "Remote work fit",
        value: "Not intended",
        detail:
          "Remote foreign-income stays without genuine enrollment usually point to DTV, not education visa.",
      },
      {
        label: "Initial validity",
        value: "Often 3 months to 1 year",
        detail:
          "Permission length depends on embassy approval and your enrollment terms.",
      },
      {
        label: "Typical timing",
        value: "Often 2–6 weeks",
        detail:
          "Processing depends on embassy workload and how complete your enrollment file is on first submission.",
      },
      {
        label: "Extension model",
        value: "Enrollment-linked",
        detail:
          "Extensions usually require continued enrollment, compliant attendance, and updated supporting evidence.",
      },
      {
        label: "Attendance",
        value: "Ongoing obligation",
        detail:
          "Institutions report attendance to immigration on a schedule. Non-compliance can affect extensions.",
      },
      {
        label: "Best for",
        value: "Genuine study in Thailand",
        detail:
          "Applicants enrolled at qualifying language schools, universities, or approved cultural programs.",
      },
    ],
  },
  process: {
    eyebrow: "How we help",
    title: "How we help with your Thailand education visa",
    description:
      "A practical route from program review to post-arrival compliance, without turning the hub into a school directory or institution manual.",
    steps: [
      {
        step: 1,
        title: "Program and pathway review",
        description:
          "We assess your study intent and program type so you can confirm the right pathway between language school, university, or cultural program before preparing documents.",
      },
      {
        step: 2,
        title: "Personalized checklist",
        description:
          "You receive a tailored document framework based on your pathway and embassy path, including enrollment evidence expectations from your institution.",
      },
      {
        step: 3,
        title: "Enrollment document review",
        description:
          "We review acceptance letters, registration materials, and application packs to reduce common refusal risks such as incomplete enrollment files.",
      },
      {
        step: 4,
        title: "Visa application guidance",
        description:
          "We guide embassy submission order, required forms, and realistic timing based on your enrollment readiness and processing post.",
      },
      {
        step: 5,
        title: "Approval and arrival planning",
        description:
          "After visa approval, we explain entry steps and the compliance concepts that matter in your first months of study in Thailand.",
      },
      {
        step: 6,
        title: "Ongoing extension support",
        description:
          "Need help before your next extension cycle? We remain available for enrollment continuity, attendance readiness, and route-specific policy updates.",
      },
    ],
  },
  checklist: {
    eyebrow: "Documents",
    title: "Education visa document checklist",
    description:
      "Use this as a preparation framework. Your embassy checklist and institution remain the authoritative sources.",
    summary: {
      title: "Core Documents",
      items: [
        {
          text: "Valid passport with sufficient validity for your study timeline",
          icon: "passport",
        },
        {
          text: "Completed visa application forms and compliant photographs",
          icon: "application-form",
        },
        {
          text: "Enrollment or acceptance letter from your institution",
          icon: "visa-copy",
        },
        {
          text: "Course or program details as requested by your embassy",
          icon: "application-form",
        },
        {
          text: "Financial proof for study and living costs",
          icon: "financial",
        },
        {
          text: "Prior academic records or credentials if requested",
          icon: "application-form",
        },
      ],
    },
    groups: [
      {
        title: "Language School Student",
        pathwayId: "language-school",
        intro:
          "Typical documents when enrolling at a qualifying Thai language school for a Non-Immigrant ED visa.",
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
            title: "Enrollment Evidence",
            items: [
              {
                text: "Language school acceptance or enrollment letter",
                icon: "visa-copy",
              },
              {
                text: "Course schedule or program confirmation from the institution",
                icon: "application-form",
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
                text: "Financial proof in an embassy-accepted format",
                icon: "financial",
              },
            ],
          },
        ],
      },
      {
        title: "University Student",
        pathwayId: "university-student",
        intro:
          "Typical documents when enrolled at a qualifying Thai university or formal academic program.",
        categories: [
          {
            title: "Passport and Identity",
            items: [
              {
                text: "Passport copies and compliant photographs",
                icon: "passport",
              },
              {
                text: "Completed visa application forms",
                icon: "application-form",
              },
            ],
          },
          {
            title: "Academic Enrollment",
            items: [
              {
                text: "University acceptance or enrollment letter",
                icon: "visa-copy",
              },
              {
                text: "Transcripts or prior academic credentials if requested",
                icon: "application-form",
              },
            ],
          },
          {
            title: "Supporting Evidence",
            items: [
              {
                text: "Financial proof for tuition and living costs",
                icon: "financial",
              },
              {
                text: "Additional embassy-specific documents for your nationality",
                icon: "visa-copy",
              },
            ],
          },
        ],
      },
      {
        title: "Cultural or Muay Thai Program",
        pathwayId: "cultural-program",
        intro:
          "Typical documents for structured cultural or martial arts programs at qualifying institutions. If your primary goal is activity-based long-stay without formal enrollment, DTV may be the better route.",
        categories: [
          {
            title: "Passport and Identity",
            items: [
              {
                text: "Passport and photographs per embassy specification",
                icon: "passport",
              },
              {
                text: "Completed visa application forms",
                icon: "application-form",
              },
            ],
          },
          {
            title: "Program Enrollment",
            items: [
              {
                text: "Institution acceptance or enrollment letter for your program",
                icon: "visa-copy",
              },
              {
                text: "Program schedule or training confirmation from the institution",
                icon: "application-form",
              },
            ],
          },
          {
            title: "Application Pack",
            items: [
              {
                text: "Financial proof as required by your embassy",
                icon: "financial",
              },
              {
                text: "Supporting declarations aligned to your program type",
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
    title: "Which education visa pathway fits you?",
    description:
      "Choose the profile that matches your study program. We then align your documents to embassy and institution requirements.",
    pathways: [
      {
        id: "language-school",
        title: "I'm studying at a language school",
        description:
          "Best fit when you are genuinely enrolled at a qualifying Thai language school with a structured study plan and attendance obligations.",
        badge: "Common study route",
      },
      {
        id: "university-student",
        title: "I'm enrolled at a university",
        description:
          "Best fit for degree, foundation, or formal academic programs at a qualifying Thai university with complete enrollment evidence.",
        badge: "Academic route",
      },
      {
        id: "cultural-program",
        title: "I'm joining a cultural or Muay Thai program",
        description:
          "Best fit for formal enrollment at a qualifying institution. If activity-based long-stay without enrollment is your primary goal, compare DTV before you apply.",
        badge: "Program route",
      },
    ],
    clarification: {
      title: "Not sure which education visa pathway fits you?",
      description:
        "We can review your program, enrollment status, and stay goals before you prepare documents or choose between education visa and DTV.",
      linkLabel: "Request a consultation",
    },
  },
  pitfalls: {
    eyebrow: "Refusals",
    title: "Why education visa applications go wrong",
    description:
      "Most problems come from enrollment readiness and route confusion, not hidden embassy rules.",
    summary: {
      title: "Five frequent education visa pitfalls",
      paragraphs: [
        "Education visa delays and refusals usually trace back to enrollment documentation or choosing the wrong long-stay route.",
        "Confirming genuine study intent and institution readiness early significantly reduces rework after submission.",
      ],
    },
    rejections: [
      {
        title: "Enrollment documents incomplete or inconsistent",
        icon: "documents",
        description:
          "Acceptance letters, registration materials, or program details are missing, outdated, or do not match the applicant file.",
        remedy:
          "Align every enrollment document to one program narrative and confirm institution standing before embassy submission.",
      },
      {
        title: "Institution does not meet visa criteria",
        icon: "enrolment",
        description:
          "The school or program presented does not meet the immigration or embassy criteria expected for education visa processing.",
        remedy:
          "Confirm your institution qualifies for education visa sponsorship before you pay fees or commit to relocation timing.",
      },
      {
        title: "Education visa chosen instead of DTV",
        icon: "activity",
        description:
          "Applicants use education visa for Muay Thai or activity-focused long-stay when DTV activity pathways may fit better.",
        remedy:
          "Compare DTV and education visa by primary intent: formal enrollment study versus activity-based long-stay with savings evidence.",
      },
      {
        title: "Attendance obligations underestimated",
        icon: "checklist",
        description:
          "Applicants commit to programs without understanding reporting and attendance rules that affect extensions.",
        remedy:
          "Treat attendance as an ongoing obligation from day one, not a one-time enrollment formality.",
      },
      {
        title: "Wrong route for employment or lifestyle intent",
        icon: "activity",
        description:
          "Applicants choose education visa when their real goal is Thai employment, remote work, or fee-based lifestyle long-stay.",
        remedy:
          "Redirect early: employment to business visa, remote work to DTV, lifestyle membership to Elite.",
      },
    ],
  },
  comparison: {
    eyebrow: "Side by side",
    title: "Education visa vs other Thailand visa routes",
    description:
      "Use this comparison to confirm whether an education visa is genuinely your best fit before you commit to enrollment.",
    columns: [
      { id: "education", label: "Education Visa" },
      { id: "dtv", label: "DTV Visa", href: "/visas/dtv" },
      { id: "business", label: "Business Visa", href: "/visas/business" },
      { id: "elite", label: "Elite Visa", href: "/visas/elite" },
    ],
    rows: [
      {
        label: "Best for",
        cells: [
          "Genuine study at a qualifying Thai institution",
          "Remote work or approved long-stay activity",
          "Thai employment or company-linked stay",
          "Convenience-first lifestyle long-stay",
        ],
      },
      {
        label: "Enrollment required",
        cells: [
          "Yes, qualifying institution",
          "Activity evidence, not school enrollment",
          "Employer or company sponsorship",
          "Membership fee, not enrollment",
        ],
      },
      {
        label: "Qualification model",
        cells: [
          "Institutional enrollment plus embassy evidence",
          "Savings plus qualifying activity proof",
          "Sponsorship and company-linked documents",
          "Membership fee and program checks",
        ],
      },
      {
        label: "Work in Thailand",
        cells: [
          "Not permitted",
          "Remote foreign income only",
          "Work permit usually required after visa",
          "Not permitted",
        ],
      },
      {
        label: "Remote work suitability",
        cells: [
          "Not for remote-work-only intent",
          "Primary fit for qualifying remote workers",
          "Not for foreign-remote-only intent",
          "Not intended for employment",
        ],
      },
      {
        label: "Typical applicant",
        cells: [
          "Language, university, or cultural program student",
          "Digital nomad or activity participant",
          "Employee, director, or company staff",
          "Fee-based long-stay lifestyle applicant",
        ],
      },
      {
        label: "Family inclusion",
        cells: [
          "Dependent filings may apply",
          "Dependent pathways may apply",
          "Dependent filings may apply",
          "Available on selected tiers",
        ],
      },
      {
        label: "Complexity",
        cells: [
          "Moderate, enrollment and attendance linked",
          "Moderate activity and financial matching",
          "Moderate to high, sponsor-dependent",
          "Lower qualification friction, higher membership cost",
        ],
      },
    ],
  },
  compliance: {
    eyebrow: "After approval",
    title: "What happens after your education visa is approved?",
    description:
      "Approval starts your study stay lifecycle. Staying in status depends on enrollment continuity, attendance discipline, and reporting obligations.",
    cards: [
      {
        label: "Initial permission",
        value: "Embassy-dependent",
        detail:
          "Your approved education visa grants entry and stay terms linked to your enrollment file.",
      },
      {
        label: "Extension cycle",
        value: "Enrollment-linked",
        detail:
          "Extensions usually require continued enrollment, compliant attendance, and updated supporting evidence.",
      },
      {
        label: "Re-entry planning",
        value: "Often required",
        detail:
          "Travel without the correct re-entry setup can affect your existing stay permission.",
      },
      {
        label: "Ongoing obligations",
        value: "Attendance and reporting",
        detail:
          "Maintain valid visa status, meet attendance expectations, and comply with applicable reporting rules during your stay.",
      },
    ],
    reminders: {
      title: "Things to remember",
      items: [
        "90-day reporting may apply during long stays in Thailand",
        "Attendance obligations are ongoing and can affect extension eligibility",
        "Plan enrollment and visa continuity before changing schools or programs",
      ],
    },
  },
  faq: {
    eyebrow: "Common questions",
    title: "Thailand Education Visa FAQ",
    description:
      "Decision questions that matter after you understand enrollment, key facts, and pathway fit.",
    items: [
      {
        value: "education-vs-student-visa",
        question:
          "Is a Thailand education visa the same as a student visa or ED visa?",
        answer:
          "Yes in practical terms for most applicants. Thailand education visa, student visa, and ED visa usually refer to the Non-Immigrant ED category for genuine study at qualifying institutions. Embassy labels can vary, so confirm current terminology for your post.",
      },
      {
        value: "education-school-approval",
        question: "Does my school need to be approved for an education visa?",
        answer:
          "Your institution must meet the criteria your embassy and immigration authorities expect for education visa sponsorship. The hub explains the enrollment model; institution-specific approval detail belongs in a dedicated requirements guide.",
      },
      {
        value: "education-school-documents",
        question: "What documents does my school usually provide?",
        answer:
          "Commonly an acceptance or enrollment letter, program confirmation, and institution registration materials as requested. Exact items vary by pathway and embassy.",
      },
      {
        value: "education-attendance",
        question: "What are the attendance requirements on an education visa?",
        answer:
          "Institutions report attendance to immigration on a schedule. Missing obligations can affect extensions. This page explains the concept; detailed reporting mechanics belong in a renewal or compliance cluster article.",
      },
      {
        value: "education-work",
        question: "Can I work in Thailand on an education visa?",
        answer:
          "No. Education routes are for study, not Thai employment. If your primary goal is working in Thailand, a business visa is usually more appropriate.",
      },
      {
        value: "education-extensions",
        question: "How do education visa extensions work?",
        answer:
          "Extensions usually require continued enrollment, compliant attendance, and updated supporting evidence. Exact steps depend on your enrollment terms and current immigration practice.",
      },
      {
        value: "education-dependents",
        question: "Can my family join me while I study in Thailand?",
        answer:
          "Spouse and qualifying dependents may be able to apply with additional filings linked to the primary visa holder. Rules vary by nationality, relationship proof, and current immigration practice.",
      },
      {
        value: "education-change-school",
        question: "What happens if I change schools?",
        answer:
          "A new institution usually means updated enrollment evidence and visa planning. Do not assume your existing permission automatically transfers. Confirm continuity before you switch programs.",
      },
      {
        value: "education-vs-dtv",
        question:
          "Should I choose an education visa or DTV for Muay Thai or language study?",
        answer:
          "If you have genuine formal enrollment at a qualifying institution, education visa may fit. If your primary goal is activity-based long-stay with qualifying savings and activity evidence, DTV may be the better route. Compare both before you commit.",
      },
    ],
  },
  relatedVisaSlugs: ["dtv", "business", "elite"],
  relatedVisas: {
    eyebrow: "Related routes",
    title: "Related Thailand visa options",
    description:
      "If an education visa is not your best fit, compare these published alternatives before choosing a route.",
    items: [
      {
        category: "Alternative",
        title: "Thailand DTV Visa",
        description:
          "A better fit for remote workers or approved activity participants without genuine institutional enrollment.",
        href: "/visas/dtv",
      },
      {
        category: "Alternative",
        title: "Thailand Business Visa",
        description:
          "The appropriate route when your primary goal is Thai employment or company-linked stay rather than study.",
        href: "/visas/business",
      },
      {
        category: "Alternative",
        title: "Thailand Elite Visa",
        description:
          "A better fit for convenience-first lifestyle long-stay without genuine study enrollment.",
        href: "/visas/elite",
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
    eyebrow: "Get in touch",
    headline: "Ready to confirm your Thailand education visa pathway?",
    title: "Ready to confirm your Thailand education visa pathway?",
    description:
      "Share your program, enrollment status, and timeline. We help you choose the right pathway and prepare an institution-aligned document plan before you file.",
    buttonLabel: "Book a consultation",
  },
}
