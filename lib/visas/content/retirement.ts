import type { VisaSectionId } from "@/lib/visas/layout"
import type { VisaPageContent } from "@/lib/visas/types"

const RETIREMENT_UPDATED_AT = "2026-06-24"

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

export const retirementVisaPage: VisaPageContent = {
  slug: "retirement",
  path: "/visas/retirement",
  published: true,
  publishedAt: "2026-01-15",
  updatedAt: RETIREMENT_UPDATED_AT,
  layout: GOLDEN_VISA_PAGE_LAYOUT,
  topicId: "retirement",
  relatedArticleSlugs: ["best-visa-for-living-in-thailand"],
  lastReviewed: {
    reviewerName: "Thai Visa Company Editorial Team",
    reviewerTitle: "Licensed Thailand visa specialists",
    reviewerCredentials:
      "Immigration filing support for retirement, DTV, business, and Elite routes since 2019",
    reviewDate: RETIREMENT_UPDATED_AT,
  },
  answer:
    "The Thailand Retirement Visa is a long-stay route for foreign nationals aged 50 and over who want to live in Thailand without local employment. Most applicants use either the Non-Immigrant O-A route from abroad or a Non-Immigrant O route that continues with in-country extensions, with financial and insurance rules varying by embassy and nationality.",
  seo: {
    title:
      "Thailand Retirement Visa (Non-Immigrant O-A and Non-O)  -  Requirements & How to Apply",
    description:
      "Clear Thailand retirement visa guide: O-A vs Non-O routes, age and financial requirements, insurance, extensions, documents, and specialist support.",
    keywords: [
      "Thailand retirement visa",
      "Thailand retirement visa requirements",
      "Non-Immigrant O-A visa Thailand",
      "Non-Immigrant O retirement visa Thailand",
      "Thailand retirement visa financial requirements",
      "Thailand retirement visa extension",
      "Thailand retirement visa insurance",
    ],
  },
  hero: {
    eyebrow: "Retirement visa",
    title: "Thailand Retirement Visa",
    overview:
      "Long-stay retirement options for eligible applicants aged 50+, most commonly through Non-Immigrant O-A or Non-Immigrant O routes, with clear support from first eligibility checks to post-approval compliance.",
  },
  definition: {
    eyebrow: "Retirement route overview",
    title: "What is the Thailand Retirement Visa?",
    body: "The Thailand Retirement Visa is a long-stay option for foreign nationals aged 50 and over who want to live in Thailand without taking local employment. It is designed for genuine retirement intent, with financial self-support and compliance obligations built into the route.\n\nMost applicants use one of two structures. The Non-Immigrant O-A route is commonly applied for from abroad and usually requires stronger upfront documentation, including health insurance that matches post requirements. The Non-Immigrant O retirement route is often used when applicants continue with in-country extension workflows, subject to current immigration policy.\n\nThe right route depends on where you apply, your nationality, your financial evidence format, and insurance readiness. Embassy and immigration checklists are not fully uniform, so the processing post for your passport is always authoritative.",
  },
  keyFacts: {
    highlight: true,
    eyebrow: "At a glance",
    title: "Retirement visa key facts",
    description:
      "The core retirement visa numbers and route signals in one place before you prepare documents.",
    items: [
      {
        label: "Visa type",
        value: "Long-stay retirement",
        detail:
          "Mainly for foreign nationals aged 50+ with no intention to work in Thailand.",
      },
      {
        label: "Common routes",
        value: "Non-O-A or Non-O",
        detail:
          "O-A is usually applied for abroad. Non-O commonly continues with in-country extension workflows.",
      },
      {
        label: "Minimum age",
        value: "50 years",
        detail: "Main applicant age threshold on most retirement pathways.",
      },
      {
        label: "Financial routes",
        value: "Savings, income, or combination",
        detail:
          "A common benchmark is 800,000 THB in funds, 65,000 THB monthly income, or an accepted combination.",
      },
      {
        label: "Initial stay period",
        value: "Usually up to 1 year",
        detail:
          "Exact permission length depends on route and approval terms at your processing post.",
      },
      {
        label: "Extension cycle",
        value: "Annual",
        detail:
          "Most retirees continue by renewing their stay in Thailand with updated evidence.",
      },
      {
        label: "Insurance",
        value: "Route-dependent",
        detail:
          "Health insurance is typically central to O-A and may vary by policy updates and post interpretation.",
      },
      {
        label: "Work in Thailand?",
        value: "Not permitted",
        detail:
          "Retirement routes are for long-term residence, not Thai labor market employment.",
      },
      {
        label: "Typical timing",
        value: "Often 2–4 weeks",
        detail:
          "Processing time depends on embassy workload and how complete your file is on first submission.",
      },
    ],
  },
  process: {
    eyebrow: "How we help",
    title: "How we help with your retirement visa",
    description:
      "A practical route from first message to long-stay compliance, without guesswork at each step.",
    steps: [
      {
        step: 1,
        title: "Route and eligibility review",
        description:
          "We assess age, nationality, and where you will apply so you can choose the right retirement route between O-A and Non-O before preparing documents.",
      },
      {
        step: 2,
        title: "Personalized checklist",
        description:
          "You receive a tailored checklist based on your embassy or immigration path, including route-specific insurance and financial evidence expectations.",
      },
      {
        step: 3,
        title: "Financial evidence review",
        description:
          "We review savings, pension, or combination proof format to reduce common refusal risks such as unclear source of funds or incorrect statement periods.",
      },
      {
        step: 4,
        title: "Application guidance",
        description:
          "We guide submission order, required forms, and practical timeline planning, whether your route starts abroad or continues in Thailand.",
      },
      {
        step: 5,
        title: "Approval and arrival planning",
        description:
          "After approval, we explain the next compliance steps, including extension planning, re-entry strategy, and reporting obligations.",
      },
      {
        step: 6,
        title: "Ongoing support",
        description:
          "Need help after arrival? We remain available for extension readiness, document updates, and route-specific policy changes.",
      },
    ],
  },
  checklist: {
    eyebrow: "Documents",
    title: "Retirement visa document checklist",
    description:
      "Use this as a preparation framework. Your processing embassy or immigration office remains the authoritative checklist source.",
    summary: {
      title: "Core Documents",
      items: [
        {
          text: "Passport valid for your full application and entry timeline",
          icon: "passport",
        },
        {
          text: "Proof of age for retirement eligibility assessment",
          icon: "visa-copy",
        },
        {
          text: "Financial evidence in an accepted format",
          icon: "financial",
        },
        {
          text: "Health insurance evidence where required by route or post",
          icon: "insurance",
        },
        {
          text: "Completed application forms and compliant photos",
          icon: "application-form",
        },
        {
          text: "Recent passport-size photos per post specification",
          icon: "photos",
        },
      ],
    },
    groups: [
      {
        title: "Main Applicant",
        intro:
          "Typical documents for the primary retirement visa applicant. Required items vary by route and post.",
        categories: [
          {
            title: "Passport and Identity",
            items: [
              {
                text: "Passport with sufficient validity and blank pages",
                icon: "passport",
              },
              {
                text: "Signed bio-page copy and previous visa pages when requested",
                icon: "visa-copy",
              },
            ],
          },
          {
            title: "Financial Evidence",
            items: [
              {
                text: "Savings route evidence, income route evidence, or accepted combination proof",
                note: "Format, source, and statement period depend on post requirements.",
                icon: "financial",
              },
              {
                text: "Supporting bank letter or pension letter where required",
                icon: "financial",
              },
            ],
          },
          {
            title: "Insurance and Background",
            items: [
              {
                text: "Health insurance certificate aligned with route requirements",
                note: "Usually central to O-A applications and renewals where applicable.",
                icon: "insurance",
              },
              {
                text: "Police clearance and medical certificate where required",
                icon: "application-form",
              },
            ],
          },
          {
            title: "Application Pack",
            items: [
              {
                text: "Completed visa form and declaration pages",
                icon: "application-form",
              },
              {
                text: "Compliant recent photographs",
                icon: "photos",
              },
            ],
          },
        ],
      },
      {
        title: "Dependent Spouse (if included)",
        intro:
          "Dependent documentation usually follows the main applicant route and may require extra relationship proof.",
        categories: [
          {
            title: "Relationship and Identity",
            items: [
              {
                text: "Marriage certificate and supporting identity documents",
                icon: "relationship",
              },
              {
                text: "Dependent passport copies and photos",
                icon: "passport",
              },
            ],
          },
          {
            title: "Supporting Evidence",
            items: [
              {
                text: "Evidence linking dependent status to the approved retirement route",
                icon: "relationship",
              },
              {
                text: "Additional financial or insurance documents when requested",
                icon: "insurance",
              },
            ],
          },
        ],
      },
    ],
  },
  requirements: {
    eyebrow: "Eligibility",
    title: "Do you qualify for a Thailand Retirement Visa?",
    description:
      "Choose the route that best matches your financial profile and household setup, then align your evidence to your processing post.",
    pathways: [
      {
        id: "savings-route",
        title: "I qualify through savings",
        description:
          "Best fit when you can show route-appropriate bank evidence under retirement thresholds, usually with clear account ownership and statement history.",
        badge: "Common retirement route",
      },
      {
        id: "pension-route",
        title: "I qualify through pension income",
        description:
          "Best fit when you can prove stable monthly income in a format your embassy or immigration office accepts for retirement processing.",
        badge: "Income-based route",
      },
      {
        id: "dependent-route",
        title: "I'm applying with a spouse or dependent",
        description:
          "Best fit when dependent eligibility can be linked to the main retirement applicant with complete relationship and supporting evidence.",
        badge: "Dependent route",
      },
    ],
    clarification: {
      title: "Not sure which retirement route fits you?",
      description:
        "We can review your age, financial evidence, nationality, and retirement plans before you prepare documents or submit an application.",
      linkLabel: "Request a consultation",
    },
  },
  pitfalls: {
    eyebrow: "Refusals",
    title: "Why retirement visa applications are refused",
    description:
      "Most refusals are caused by avoidable evidence issues rather than hidden rules. Catching them early saves time and cost.",
    summary: {
      title: "Five frequent refusal patterns",
      paragraphs: [
        "Retirement applications are usually refused when route choice and supporting documents do not match.",
        "Clear financial evidence, route-correct insurance, and post-specific checklist discipline significantly reduce risk.",
      ],
    },
    rejections: [
      {
        title: "Financial evidence does not match route rules",
        icon: "financial",
        description:
          "Applicants submit balances or income evidence that do not fit the exact evidence type accepted by their processing post.",
        remedy:
          "Prepare route-aligned savings, pension, or combination proof with consistent account ownership and acceptable statement windows.",
      },
      {
        title: "Unclear source of funds or weak transaction history",
        icon: "financial",
        description:
          "Large unexplained deposits or incomplete statement history can trigger additional checks or refusal.",
        remedy:
          "Provide clean account history, explain unusual transactions, and use supporting letters where needed.",
      },
      {
        title: "Insurance policy fails post requirements",
        icon: "documents",
        description:
          "Coverage limits, dates, or wording may not satisfy route requirements, especially on O-A applications.",
        remedy:
          "Match policy terms to current post guidance before filing and confirm effective dates cover the required stay period.",
      },
      {
        title: "Missing background or identity documents",
        icon: "checklist",
        description:
          "Police clearance, medical certificates, or identity copies are missing, outdated, or improperly certified.",
        remedy:
          "Use the latest checklist from your processing post and verify validity windows before submission.",
      },
      {
        title: "Route mismatch between form narrative and evidence",
        icon: "documents",
        description:
          "Application forms suggest one route while financial, insurance, or supporting documents align with another.",
        remedy:
          "Keep one consistent route narrative from eligibility review through final document pack.",
      },
    ],
  },
  comparison: {
    eyebrow: "Side by side",
    title: "Retirement vs other Thailand visa routes",
    description:
      "Use this comparison to confirm whether retirement is your best fit before filing.",
    columns: [
      { id: "retirement", label: "Retirement Visa" },
      { id: "elite", label: "Elite Visa", href: "/visas/elite" },
      { id: "tourist", label: "Tourist Visa" },
      { id: "dtv", label: "DTV Visa", href: "/visas/dtv" },
    ],
    rows: [
      {
        label: "Best for",
        cells: [
          "Applicants aged 50+ planning long-term retirement in Thailand",
          "Applicants prioritizing convenience and premium long-stay benefits",
          "Short visits, holidays, and temporary travel",
          "Remote workers and approved long-stay activity participants",
        ],
      },
      {
        label: "Age requirement",
        cells: ["Usually 50+", "No minimum retirement age", "No retirement age rule", "No retirement age rule"],
      },
      {
        label: "Financial expectation",
        cells: [
          "Savings, income, or combination proof under retirement criteria",
          "Membership fee structure",
          "Trip-level financial sufficiency",
          "Savings threshold plus qualifying pathway evidence",
        ],
      },
      {
        label: "Initial stay structure",
        cells: [
          "Long-stay retirement route, often up to 1 year per cycle",
          "Long-stay privilege period by package",
          "Short-stay permission",
          "Long-stay entries tied to DTV terms",
        ],
      },
      {
        label: "Extension model",
        cells: [
          "Annual extension workflow is common",
          "Depends on membership conditions",
          "Short-stay extension rules only",
          "Per-entry stay management with extension options",
        ],
      },
      {
        label: "Work in Thailand",
        cells: [
          "Not permitted under retirement route",
          "Not a standard work permit route",
          "Not permitted",
          "Remote work for foreign income only",
        ],
      },
      {
        label: "Dependents",
        cells: [
          "Dependent spouse pathways may apply",
          "Depends on package and current policy",
          "Separate applications",
          "Spouse and child dependent pathways may apply",
        ],
      },
      {
        label: "Complexity",
        cells: [
          "Moderate, with ongoing compliance after approval",
          "Lower procedural complexity after approval",
          "Low for short stays",
          "Moderate, with pathway and evidence matching",
        ],
      },
    ],
  },
  compliance: {
    eyebrow: "After approval",
    title: "What happens after your retirement visa is approved?",
    description:
      "Approval is the start of long-stay compliance. Staying in status depends on yearly preparation and on-time reporting.",
    cards: [
      {
        label: "Initial permission",
        value: "Route-dependent",
        detail:
          "Retirement routes commonly grant long-stay permission with terms tied to your approved route.",
      },
      {
        label: "Extension cycle",
        value: "Usually annual",
        detail:
          "Most retirees maintain status through yearly extension filings with updated evidence.",
      },
      {
        label: "Re-entry planning",
        value: "Often required",
        detail:
          "Leaving Thailand without the right re-entry setup can affect your existing stay permission.",
      },
      {
        label: "Ongoing obligations",
        value: "Reporting and recordkeeping",
        detail:
          "Maintain financial and documentary readiness throughout each stay cycle.",
      },
    ],
    reminders: {
      title: "Things to remember",
      items: [
        "90-day reporting may apply during long stays in Thailand",
        "Complete Thailand Digital Arrival Card (TDAC) requirements before re-entry when applicable",
        "Prepare extension evidence early so policy updates do not catch you near expiry",
      ],
    },
  },
  faq: {
    eyebrow: "Common questions",
    title: "Thailand Retirement Visa FAQ",
    description:
      "Edge cases that matter after you understand route choice, key facts, and baseline requirements.",
    items: [
      {
        value: "retirement-age-threshold",
        question: "Do I need to be 50 to apply?",
        answer:
          "For most retirement pathways, the main applicant must be at least 50 at application date. Dependent spouse rules can differ by route and post, so confirm the exact age handling for your case.",
      },
      {
        value: "retirement-oa-vs-non-o",
        question: "Should I apply for Non-Immigrant O-A or Non-Immigrant O?",
        answer:
          "Use O-A when your route is being processed abroad with full upfront retirement documentation, often including insurance compliance. Non-O retirement pathways are commonly used when the process continues through in-country extension workflows. The right choice depends on where you apply and what evidence format your post accepts.",
      },
      {
        value: "retirement-financial-thresholds",
        question: "How much money do I need to show?",
        answer:
          "A common benchmark is 800,000 THB in funds, 65,000 THB monthly income, or an accepted combination. Your embassy or immigration office is authoritative on exact thresholds and evidence format for your nationality.",
      },
      {
        value: "retirement-insurance-requirement",
        question: "Is health insurance always required?",
        answer:
          "Insurance handling depends on route and policy updates. It is typically central on O-A applications, while Non-O retirement workflows can be interpreted differently by post and timing. Verify your live checklist before filing.",
      },
      {
        value: "retirement-inside-thailand",
        question: "Can I apply from inside Thailand?",
        answer:
          "In-country progression is possible in some situations, but it depends on your current status, route eligibility, and current immigration policy. Your passport history and timing are critical to determining whether this is viable.",
      },
      {
        value: "retirement-dependent-spouse",
        question: "Can my spouse apply with me?",
        answer:
          "A spouse may qualify as a dependent on retirement pathways when relationship and supporting evidence are complete. Required documents and conditions vary by route and processing post.",
      },
      {
        value: "retirement-reentry-permit",
        question: "What is a re-entry permit, and when do I need one?",
        answer:
          "A re-entry permit protects eligible stay permission when you leave Thailand. Travel without the correct re-entry setup can disrupt your status, so confirm your travel plan before departure.",
      },
      {
        value: "retirement-work-volunteer",
        question: "Can I work or volunteer on a retirement visa?",
        answer:
          "Retirement routes are for long-term residence, not Thai employment. Work and some volunteer activities may require separate permission. Treat activity boundaries cautiously and confirm before starting any role.",
      },
      {
        value: "retirement-extension-refusal",
        question: "What happens if my extension is refused?",
        answer:
          "A refusal usually follows documentary or eligibility gaps such as financial evidence mismatch or compliance issues. The immediate priority is to review refusal reasons, correct evidence, and choose a lawful next step before current permission expires.",
      },
    ],
  },
  relatedVisaSlugs: ["dtv", "elite", "business"],
  relatedVisas: {
    eyebrow: "Related routes",
    title: "Related Thailand visa options",
    description:
      "If retirement is not your best fit, compare these alternatives before committing to one route.",
    items: [
      {
        category: "Alternative",
        title: "Thailand DTV Visa",
        description:
          "A better fit for remote work or approved activity pathways, not retirement-focused long-stay intent.",
        href: "/visas/dtv",
      },
      {
        category: "Alternative",
        title: "Thailand Elite Visa",
        description:
          "A premium long-stay route for applicants prioritizing convenience over retirement qualification criteria.",
        href: "/visas/elite",
      },
      {
        category: "Alternative",
        title: "Thailand Business Visa",
        description:
          "A better fit for applicants who still need a route linked to Thai employment or company activity.",
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
    headline: "Ready to choose the right retirement visa route for Thailand?",
    title: "Ready to choose the right retirement visa route for Thailand?",
    description:
      "Share your age, nationality, location, and financial profile. We help you choose between O-A and Non-O pathways and prepare a route-correct document plan before you file.",
    buttonLabel: "Book a consultation",
  },
}
