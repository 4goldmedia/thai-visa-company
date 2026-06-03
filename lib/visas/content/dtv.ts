import type { VisaPageContent } from "@/lib/visas/types"

const DTV_UPDATED_AT = "2026-06-03"

export const dtvVisaPage: VisaPageContent = {
  slug: "dtv",
  path: "/visas/dtv",
  published: true,
  publishedAt: "2026-01-15",
  updatedAt: DTV_UPDATED_AT,
  seo: {
    title: "Thailand DTV Visa (Destination Thailand Visa) — Requirements & How to Apply",
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
      "Live in Thailand for extended periods while working remotely, freelancing, or running an online business abroad. Also suits approved activities such as Muay Thai training, cooking courses, or medical treatment.",
  },
  keyFacts: {
    eyebrow: "At a glance",
    title: "DTV visa key facts",
    description: "The essentials in one place—what the visa is, how long you can stay, and what you need to qualify.",
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
        detail: "After a complete application—we help you avoid delays from missing items.",
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
        "You want months in Thailand—not a quick holiday",
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
    eyebrow: "Understanding the DTV",
    title: "What is the Thailand DTV Visa?",
    intro: [
      "The DTV Visa allows foreigners to live in Thailand for extended periods while working remotely, freelancing, or running an online business.",
      "It also covers approved activities such as Muay Thai training, cooking courses, or medical treatment.",
    ],
    audience: {
      title: "How long you can stay",
      content: [
        "The visa is valid for five years and allows multiple entries.",
        "Each time you enter Thailand, you can usually stay up to 180 days.",
        "You can often extend that stay once for another 180 days while you are in Thailand.",
        "After that, you leave and re-enter on the same visa to start a new stay period—while the five-year visa is still valid.",
        "This is not a work permit—you cannot work for a Thai employer on a DTV.",
      ],
    },
    eligibility: {
      title: "Who this visa is for",
      content: [
        "Remote workers and employees paid from outside Thailand",
        "Freelancers, consultants, and creators with foreign income",
        "Online business owners with customers mainly outside Thailand",
        "People joining approved programmes—Muay Thai, cooking schools, medical treatment, and similar",
        "Spouses and dependent children (under 20) of an approved DTV holder",
      ],
    },
    practicalOverview: {
      content: "",
    },
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
        cells: ["Yes — 5 years", "Often limited", "Often yes", "Often yes"],
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
          "Moderate — proof of work + funds",
          "Simple for short trips",
          "Higher — company documents",
          "High — specialist routes",
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
      "Every case is different. If you are 50+ and not working remotely, a retirement visa may suit you better—we can advise.",
  },
  requirements: {
    eyebrow: "Eligibility",
    title: "DTV visa requirements",
    description:
      "What you typically need to qualify. We help you match your situation to the right category and documents.",
    requirements: {
      title: "Remote work & freelancing",
      intro: "For digital nomads, remote employees, and freelancers earning from outside Thailand.",
      items: [
        "Mandatory: Valid passport (usually valid at least six months beyond your travel date).",
        "Mandatory: Proof of savings—commonly at least 500,000 THB (or equivalent) in your name.",
        "Mandatory: Proof of remote work—employment letter, contract, or portfolio showing how you earn from abroad.",
        "Supporting: Recent payslips or payment records from foreign clients.",
        "Supporting: Business registration if you own a company overseas.",
        "Supporting: Professional profiles or client contracts that back up your story.",
        "Not allowed: Working for a Thai company or taking paid work that needs a Thai work permit.",
      ],
    },
    eligibility: {
      title: "Activities & programmes",
      intro: "For Muay Thai, cooking classes, sports training, medical treatment, and similar approved programmes.",
      items: [
        "Mandatory: Passport, photo, and the same savings proof (500,000 THB is the usual benchmark).",
        "Mandatory: Confirmation you are joining the programme—letter from the school, camp, hospital, or organiser.",
        "Supporting: Course schedule, booking, or payment receipts.",
        "Supporting: Proof of where you will stay for your first days in Thailand, if requested.",
        "Note: This route is for joining the programme—not for taking a job in Thailand.",
      ],
    },
    documents: {
      title: "Spouse & children (under 20)",
      intro: "For family members linked to an approved primary DTV applicant.",
      items: [
        "Mandatory: Marriage or birth certificates showing your relationship.",
        "Mandatory: Copy of the main applicant's passport and approved DTV.",
        "Mandatory: Dependent's passport, photo, and financial proof (often the same 500,000 THB rule or a family account with proof of link).",
        "Supporting: Consent letters for minors, if needed.",
        "Supporting: School letter if a child will study in Thailand.",
        "The main applicant must qualify first—dependents cannot replace that.",
      ],
    },
  },
  checklist: {
    eyebrow: "Preparation",
    title: "DTV document checklist",
    description:
      "Use this as a preparation list. We review your file before submission so nothing important is missing.",
    groups: [
      {
        title: "Identity & forms",
        intro: "Required for almost every applicant.",
        items: [
          {
            text: "Passport biodata page",
            note: "Valid at least six months from when you plan to travel.",
          },
          {
            text: "Recent passport photo",
            note: "Usually taken within the last six months.",
          },
          {
            text: "Visa application forms",
            note: "Completed accurately—we help you get this right.",
          },
          {
            text: "Proof of where you live (if required)",
            note: "Such as a utility bill or residence permit for your country.",
          },
        ],
      },
      {
        title: "Financial documents",
        items: [
          {
            text: "Bank statements showing at least 500,000 THB (or equivalent)",
            note: "In your name; some cases ask for several months of history.",
          },
          {
            text: "Payslips or income proof",
            note: "Helpful for remote workers and freelancers.",
          },
          {
            text: "Sponsor documents",
            note: "Only if a sponsor is part of your application.",
          },
        ],
      },
      {
        title: "Remote work proof",
        items: [
          {
            text: "Employment contract or employer letter",
            note: "Shows you are paid from outside Thailand while you are away.",
          },
          {
            text: "Freelance contracts, invoices, or portfolio",
            note: "When you do not have a traditional employer.",
          },
          {
            text: "Company documents",
            note: "If you own a business registered overseas.",
          },
        ],
      },
      {
        title: "Programme proof (activities)",
        items: [
          {
            text: "Enrolment or acceptance letter",
            note: "From the Thai school, camp, hospital, or event organiser.",
          },
          {
            text: "Medical appointment letter",
            note: "If your visit is for treatment in Thailand.",
          },
          {
            text: "Accommodation booking",
            note: "Sometimes required for your first days in the country.",
          },
        ],
      },
      {
        title: "Family documents",
        items: [
          {
            text: "Marriage or birth certificates",
            note: "Translated or legalised if issued outside Thailand.",
          },
          {
            text: "Main applicant's DTV approval and passport",
            note: "Dependents apply in connection with the primary holder.",
          },
        ],
      },
      {
        title: "After you arrive",
        items: [
          {
            text: "Travel or health insurance",
            note: "Often requested—we tell you what fits your case.",
          },
          {
            text: "Address reporting (TM.30)",
            note: "Your accommodation must report your stay; needed for extensions.",
          },
        ],
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "How we help with your DTV application",
    description:
      "A clear path from first message to arriving in Thailand—with less guesswork at each step.",
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
          "You receive a tailored list—savings proof, work evidence, photos, and anything else your nationality requires.",
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
          "We guide you through submission and what to expect while your application is processed—usually about two to four weeks for a complete file.",
      },
      {
        step: 5,
        title: "Approval & travel",
        description:
          "Once approved, you plan your entry to Thailand. Immigration stamps your stay—up to 180 days per visit.",
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
      "Straight answers to what people ask most. For advice on your situation, request a consultation.",
    items: [
      {
        value: "dtv-what-is",
        question: "What is the Thailand DTV visa?",
        answer:
          "The DTV (Destination Thailand Visa) is a five-year visa that lets you enter Thailand multiple times. Each visit can last up to 180 days, often with one extension for another 180 days. It suits remote workers, freelancers, and people joining approved activities—not employment with a Thai company.",
      },
      {
        value: "dtv-who-qualifies",
        question: "Who qualifies for the DTV visa?",
        answer:
          "People who work remotely for income from outside Thailand, join approved programmes (such as training or medical treatment), or are spouses or dependent children under 20 of someone who already holds an approved DTV.",
      },
      {
        value: "dtv-remote-work",
        question: "Can I work remotely on a DTV visa?",
        answer:
          "Yes, if your income comes from employers or clients outside Thailand and you can prove it. You cannot use a DTV to work for a Thai company.",
      },
      {
        value: "dtv-thai-employer",
        question: "Can I work for a Thai company on a DTV?",
        answer:
          "No. A Thai employer usually means a business visa and work permit route, not a DTV.",
      },
      {
        value: "dtv-freelancer",
        question: "Can freelancers apply for the DTV?",
        answer:
          "Yes, if you can show real freelance work—invoices, contracts, a portfolio, or platform earnings—plus the savings proof (typically 500,000 THB).",
      },
      {
        value: "dtv-youtuber",
        question: "Can YouTubers or content creators get a DTV?",
        answer:
          "Often yes, when income is from outside Thailand and you can document your work clearly. Income mostly from Thai clients may not fit.",
      },
      {
        value: "dtv-agency-owner",
        question: "Can online agency or SaaS owners apply?",
        answer:
          "Yes, when the business serves customers abroad and you can show company documents, contracts, and the usual savings requirement.",
      },
      {
        value: "dtv-money-needed",
        question: "How much money do I need for the DTV?",
        answer:
          "You usually need to show at least 500,000 Thai baht (or equivalent) in savings. Some cases also look at income proof. We confirm what applies to your nationality.",
      },
      {
        value: "dtv-bank-seasoning",
        question: "How long must funds stay in my bank account?",
        answer:
          "Many applicants provide recent statements; some officers want to see stable balances over a few months. Large sudden deposits without explanation can raise questions—we help you present funds clearly.",
      },
      {
        value: "dtv-vs-tourist",
        question: "How is the DTV different from a tourist visa?",
        answer:
          "Tourist visas are for shorter holidays. The DTV is built for longer stays with proof of remote work or a qualifying programme, and it lasts five years with multiple entries.",
      },
      {
        value: "dtv-vs-business",
        question: "How is the DTV different from a business visa?",
        answer:
          "A business visa is for working with or for Thai companies. The DTV is for earning from outside Thailand or joining approved activities—not a Thai payroll job.",
      },
      {
        value: "dtv-vs-ltr",
        question: "How is the DTV different from the LTR visa?",
        answer:
          "The LTR programme targets specific high-income or investment profiles. The DTV is more accessible for remote workers who meet the savings and activity rules.",
      },
      {
        value: "dtv-duration-entry",
        question: "How long can I stay in Thailand on each DTV entry?",
        answer:
          "Up to 180 days per entry is standard. You can often extend once for another 180 days in Thailand. After that maximum for one visit, you leave and re-enter to start a new stay period.",
      },
      {
        value: "dtv-extension-how",
        question: "Can I extend my DTV stay in Thailand?",
        answer:
          "Yes—usually once per visit for up to 180 more days at immigration (fee often around 1,900 THB). You need your passport, forms, address reporting, and updated proof where required.",
      },
      {
        value: "dtv-reentry",
        question: "Can I leave and re-enter Thailand on a DTV?",
        answer:
          "Yes. While your five-year visa is valid, you can travel in and out. Each re-entry can give you a new 180-day stay.",
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
          "Yes. A legal spouse of an approved DTV holder can apply with marriage proof and the usual passport and financial documents.",
      },
      {
        value: "dtv-children",
        question: "Can my children join me?",
        answer:
          "Dependent children under 20 often qualify with birth certificates and proof of link to the main DTV holder.",
      },
      {
        value: "dtv-apply-where",
        question: "Where do I apply for the DTV?",
        answer:
          "Application rules depend on your nationality and where you live. We handle the guidance—eligibility review, document prep, and submission support—so you are not navigating it alone. Request a consultation to start.",
      },
      {
        value: "dtv-apply-inside-thailand",
        question: "Can I apply for a DTV while already in Thailand?",
        answer:
          "Often you need to apply from outside Thailand. If you are already here on another visa, contact us—we will outline realistic options before your current stay ends.",
      },
      {
        value: "dtv-convert-visa",
        question: "Can I switch from a tourist visa to a DTV?",
        answer:
          "It is not always possible in-country. Many people apply from abroad. We review your current visa and timeline before you commit.",
      },
      {
        value: "dtv-processing-time",
        question: "How long does DTV processing take?",
        answer:
          "A complete application often takes about two to four weeks. Missing documents cause most delays—we reduce that risk with a proper file review first.",
      },
      {
        value: "dtv-fee",
        question: "How much does the DTV cost?",
        answer:
          "Government fees are often around 10,000 THB for the visa, plus extension fees in Thailand (commonly 1,900 THB). Our consultation explains total costs for your case.",
      },
      {
        value: "dtv-insurance",
        question: "Do I need health insurance for the DTV?",
        answer:
          "Many applicants are asked for travel or medical insurance. We tell you what to prepare based on your profile.",
      },
      {
        value: "dtv-muay-thai",
        question: "Can I get a DTV for Muay Thai or cooking classes?",
        answer:
          "Yes, with an acceptance letter from the Thai provider plus passport, photo, savings proof, and other standard documents.",
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
          "Tax depends on how long you stay and your personal situation—not just the visa type. We focus on immigration; speak with a tax adviser for tax questions.",
      },
      {
        value: "dtv-refusal",
        question: "Why are DTV applications refused?",
        answer:
          "Weak savings proof, unclear work evidence, incomplete forms, or documents that do not match your story. We spot these issues before submission.",
      },
      {
        value: "dtv-overstay",
        question: "What if I overstay on a DTV?",
        answer:
          "Overstaying leads to fines, possible deportation, and future visa problems. Extend on time or leave before your permitted stay ends.",
      },
      {
        value: "dtv-help",
        question: "How can Thai Visa Company help with my DTV?",
        answer:
          "We confirm you qualify, build your document list, review your file, and support you through submission and after you arrive. Message us on LINE or WhatsApp with your nationality, timeline, and how you work.",
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
          "For employment or business tied to a Thai company—not remote-only income.",
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
        category: "DTV",
        title: "What Is the Thailand DTV Visa",
        description:
          "A shorter introduction to the DTV and who it is designed for.",
        href: "/resources/what-is-thailand-dtv-visa",
      },
      {
        category: "Timelines",
        title: "How Long Does a Thai Visa Take",
        description:
          "How long different visa types usually take and what causes delays.",
        href: "/resources/how-long-does-thai-visa-take",
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
