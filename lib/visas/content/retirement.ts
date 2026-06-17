import type { VisaPageContent } from "@/lib/visas/types"
import { defaultVisaProcessSteps, defaultVisaPublishMeta } from "@/lib/visas/shared"

export const retirementVisaPage: VisaPageContent = {
  slug: "retirement",
  path: "/visas/retirement",
  ...defaultVisaPublishMeta,
  seo: {
    title: "Thailand Retirement Visa  -  Requirements & Support",
    description:
      "Plain-language retirement visa guidance for foreigners in Thailand. Typical eligibility, example documents, and support on LINE and WhatsApp.",
    keywords: [
      "Thailand retirement visa",
      "retirement visa Thailand requirements",
      "how to get Thailand retirement visa",
    ],
  },
  hero: {
    eyebrow: "Long-stay visa",
    title: "Thailand Retirement Visa",
    overview:
      "Planning to retire in Thailand? We explain typical age and financial requirements, the documents embassies usually ask for, and your next steps - with clear support throughout.",
  },
  overview: {
    eyebrow: "At a glance",
    title: "Retirement visa overview",
    description:
      "A practical starting point before you gather documents or book embassy appointments.",
    audience: {
      content: [
        "Foreign nationals aged 50 or older who want to live in Thailand long term.",
        "Spouses or qualifying dependents included on some routes, depending on current rules.",
        "Applicants entering from abroad or converting from another visa where permitted.",
      ],
    },
    eligibility: {
      content: [
        "Minimum age is generally 50 (some dependent cases differ).",
        "Financial proof in a form accepted by your embassy  -  savings, pension, or a combination.",
        "Valid passport, suitable travel history, and standard background checks when requested.",
      ],
    },
    practicalOverview: {
      content:
        "Embassies and immigration offices do not all ask for the same file. We review your nationality, where you will apply, and your timeline, then give you a realistic checklist  -  so you know what to prepare before you pay fees or book flights.",
    },
  },
  requirements: {
    eyebrow: "What you need",
    title: "Example requirements",
    description:
      "Typical items retirees are asked to provide. Your embassy may request additional documents  -  we confirm your list before you submit.",
    requirements: {
      intro: "Figures and forms change; treat these as common examples, not legal advice.",
      items: [
        "Passport valid at least six months beyond your planned entry",
        "Proof of age (50+) such as passport bio data",
        "Financial evidence  -  often bank statements, pension letters, or fixed deposits",
        "Health insurance or qualifying coverage when required by your post",
        "Completed visa application forms and passport photos",
      ],
    },
    eligibility: {
      intro: "Most files are assessed against criteria like these:",
      items: [
        "Applicant is 50 or older, or qualifies as an eligible dependent",
        "Funds shown meet the threshold for your nationality (embassy-specific)",
        "No serious immigration violations that would block approval",
        "Genuine intent to retire or reside long term in Thailand",
      ],
    },
    documents: {
      intro: "Documents we commonly help clients organize:",
      items: [
        "Passport copies and recent photographs",
        "Bank statements or pension documentation (usually recent months)",
        "Police clearance certificate from your home country, if requested",
        "Marriage or dependency certificates for family members on the application",
        "Embassy fee payment and any appointment confirmation",
      ],
    },
  },
  process: {
    eyebrow: "How it works",
    title: "How we support your retirement visa",
    description:
      "A straightforward flow  -  you stay informed at each step without managing everything alone.",
    steps: defaultVisaProcessSteps,
  },
  faq: {
    eyebrow: "Common questions",
    title: "Retirement visa FAQ",
    description:
      "Straight answers to what clients ask most before they apply.",
    items: [
      {
        value: "retirement-age",
        question: "Do I need to be 50 to apply?",
        answer:
          "Most retirement routes require the main applicant to be at least 50. Dependent rules for spouses can differ. Tell us your situation and we confirm what applies to your nationality.",
      },
      {
        value: "retirement-financial",
        question: "How much money do I need in the bank?",
        answer:
          "The amount depends on your passport country and which embassy processes your application. Some posts accept pension income instead of savings. We outline the figure and proof format that fits your case.",
      },
      {
        value: "retirement-insurance",
        question: "Is health insurance required?",
        answer:
          "Many embassies ask for coverage that meets their minimum terms. Requirements vary  -  we check what your post expects and whether your existing policy qualifies.",
      },
      {
        value: "retirement-renewal",
        question: "Can you help after I arrive in Thailand?",
        answer:
          "Yes. We support extensions, renewals, and reporting steps where they apply. Many clients stay with us year to year for ongoing guidance.",
      },
      {
        value: "retirement-timeline",
        question: "How long does processing take?",
        answer:
          "Embassy workload and how complete your file is make the biggest difference. After reviewing your documents, we give a realistic range  -  not a vague promise.",
      },
    ],
  },
  relatedResources: {
    eyebrow: "Further reading",
    title: "Related guides",
    description:
      "Deeper guides if you want more detail before messaging us.",
    items: [
      {
        category: "Retirement",
        title: "How to Get a Thailand Retirement Visa",
        description:
          "Step-by-step look at age, finances, documents, and how to prepare before you apply.",
        href: "/guides/how-to-get-thailand-retirement-visa",
      },
      {
        category: "Timelines",
        title: "How Long Does a Thai Visa Take",
        description:
          "What affects processing time and how to avoid common delays.",
        href: "/guides/how-long-does-thai-visa-take",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get in touch",
    title: "Ready to check your retirement visa options?",
    description:
      "Send your age, nationality, and whether you are applying from abroad or already in Thailand. We reply on LINE or WhatsApp with clear next steps.",
  },
}
