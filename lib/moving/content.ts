import {
  movingCanForeignersMove,
  movingCitiesExpanded,
  movingCostCategories,
  movingEverydayLife,
  movingFamilies,
  movingFaqExpanded,
  movingIsThailandGood,
  movingRetirement,
  movingWhyMove,
  movingWorking,
} from "@/lib/moving/content/intents"
import { getSyncPublishedBlogIndexArticles } from "@/lib/blog/index"
import type { BlogPostCard } from "@/lib/blog/types"
import { MOVING_PAGE_LAYOUT } from "@/lib/moving/layout"
import type { MovingPageContent, MovingPersonaPath, MovingPersonaPathResolved } from "@/lib/moving/types"
import { visaGalleryPhotography } from "@/lib/media/photography"

export const movingPagePath = "/moving-to-thailand" as const

export function resolveMovingArticlesBySlugs(
  slugs: ReadonlyArray<string>,
): BlogPostCard[] {
  const published = getSyncPublishedBlogIndexArticles()
  const bySlug = new Map(published.map((article) => [article.slug, article]))

  return slugs
    .map((slug) => bySlug.get(slug))
    .filter((article): article is BlogPostCard => article !== undefined)
}

/** @deprecated Choose-path section removed — kept for legacy component compatibility */
export function resolveMovingPersonaPaths(
  personas: ReadonlyArray<MovingPersonaPath>,
): ReadonlyArray<MovingPersonaPathResolved> {
  return personas.map((persona) => ({
    ...persona,
    articles: resolveMovingArticlesBySlugs(persona.articleSlugs),
  }))
}

export const movingPageContent: MovingPageContent = {
  path: movingPagePath,
  seo: {
    title: "Moving to Thailand: The Complete Guide to Relocating",
    description:
      "Should you move to Thailand? An honest guide to daily life, costs, cities, working, families, retirement, and visa pathways. Everything you need before relocating.",
    keywords: [
      "moving to thailand",
      "move to thailand",
      "living in thailand",
      "relocate to thailand",
      "expat thailand",
      "should i move to thailand",
      "how to move to thailand",
      "cost of living thailand",
      "best places to live in thailand",
      "retire in thailand",
      "working in thailand",
    ],
  },
  layout: MOVING_PAGE_LAYOUT,
  hero: {
    eyebrow: "Relocation guide",
    title: "Moving to Thailand",
    titleLines: ["Moving to", "Thailand"],
    lead: "Honest answers to the questions people search before they relocate, including lifestyle, costs, cities, work, family life, and what to expect.",
    primaryCta: { label: "Jump to everyday life", href: "#everyday-life" },
    secondaryCta: { label: "Read visa guides", href: "/blog" },
    imageKey: "hero",
  },
  quickAnswer: {
    question: "Can foreigners move to Thailand?",
    paragraphs: [
      "Yes. Foreigners can live in Thailand long term through retirement, remote work, employment, education, and premium residency routes.",
      "There is no single move-to-Thailand visa. The right route depends on how you will live and earn. This guide covers life first; visas come at the end.",
    ],
  },
  whyMove: movingWhyMove,
  isThailandGood: movingIsThailandGood,
  canForeignersMove: movingCanForeignersMove,
  everydayLife: movingEverydayLife,
  costOfLiving: {
    eyebrow: "How affordable is Thailand?",
    title: "How much does it cost to live in Thailand?",
    intro:
      "Most expats spend between ฿35,000 and ฿85,000 per month depending on lifestyle, city, and housing choices.",
    disclaimer:
      "Illustrative costs only, not visa proof-of-funds. Bangkok and Phuket run higher than Chiang Mai or smaller towns.",
    tiers: [
      {
        id: "modest",
        label: "Modest",
        monthlyRange: "฿35,000–50,000",
        housing: "Typical studio apartment outside the city centre.",
        lifestyle: "Local food, public transport, modest social life",
      },
      {
        id: "comfortable",
        label: "Comfortable",
        monthlyRange: "฿55,000–85,000",
        housing: "One-bedroom condo in a good area.",
        lifestyle: "Mix of local and international dining, occasional travel",
      },
      {
        id: "premium",
        label: "Premium",
        monthlyRange: "฿100,000+",
        housing: "Large condo or house in a prime location.",
        lifestyle: "International schools, dining, healthcare, frequent travel",
      },
    ],
    featuredCategoryIds: [
      "housing-rent",
      "utilities",
      "groceries",
      "transportation",
      "healthcare",
      "entertainment",
    ],
    categories: movingCostCategories,
    summary: {
      title: "Typical monthly budget",
      items: [
        { label: "Budget lifestyle", value: "฿35–50k" },
        { label: "Comfortable lifestyle", value: "฿55–85k" },
        { label: "Premium lifestyle", value: "฿100k+" },
      ],
      note:
        "International schools, imported products, and luxury housing increase costs significantly.",
    },
    links: [
      { label: "More living-in-Thailand guides", href: "/blog/cluster/living-in-thailand" },
    ],
  },
  budgetEstimator: {
    eyebrow: "Planning tool",
    title: "Estimate your monthly cost of living in Thailand",
    intro:
      "Every lifestyle is different. Select your city, lifestyle, and household size to see a realistic monthly budget based on current living costs.",
    controls: {
      city: "City",
      lifestyle: "Lifestyle",
      household: "Household",
    },
    results: {
      totalLabel: "Estimated monthly budget",
      usdLabel: "Approximate USD equivalent",
      breakdownTitle: "Monthly breakdown",
      cityInsightTitle: "City insight",
      lifestyleSummaryTitle: "Lifestyle summary",
    },
    disclaimer:
      "These estimates represent realistic monthly living costs based on common expat lifestyles. Actual expenses vary depending on housing choices, imported goods, schooling, healthcare preferences, and travel frequency.",
    faq: {
      title: "Common budget questions",
      items: [
        {
          value: "budget-usd-2000",
          question: "Is US$2,000 per month enough in Thailand?",
          answer:
            "For one person in Chiang Mai or Hua Hin on a budget lifestyle, US$2,000 (roughly ฿70,000) can cover modest housing, local food, and essentials. In Bangkok or on a comfortable lifestyle, it is tighter, so plan closer to ฿55,000–85,000 for more room.",
        },
        {
          value: "budget-50000-baht",
          question: "Can I live comfortably on ฿50,000?",
          answer:
            "Yes, in Chiang Mai, Hua Hin, or smaller towns, ฿50,000 supports a comfortable single lifestyle with a decent apartment and regular dining out. Bangkok and Phuket typically need ฿60,000–75,000+ for the same standard.",
        },
        {
          value: "budget-cheapest-city",
          question: "Which Thai city is the cheapest?",
          answer:
            "Chiang Mai usually offers the best value for renters and remote workers. Hua Hin is competitive for retirees. Bangkok and Phuket cost more, mainly because of housing, though salaries and services are easier to access in Bangkok.",
        },
        {
          value: "budget-bangkok-vs-chiang-mai",
          question: "Is Bangkok much more expensive than Chiang Mai?",
          answer:
            "Housing in Bangkok often runs 40–60% higher than Chiang Mai for comparable condos. Food and transport gaps are smaller. Many residents accept the premium for career access, international schools, and healthcare depth.",
        },
      ],
    },
  },
  cities: {
    eyebrow: "Popular destinations",
    title: "Where is the best place to live in Thailand?",
    intro:
      "There is no single \"best\" place to live in Thailand. The right city depends on your lifestyle, budget, work, family needs, and preferred pace of life. These are the destinations most international residents consider.",
    bridge:
      "Bangkok offers convenience. Chiang Mai prioritizes affordability. Phuket focuses on lifestyle. The best city is the one that matches how you want to live.",
    items: movingCitiesExpanded,
  },
  working: movingWorking,
  families: movingFamilies,
  retirement: movingRetirement,
  visaRoutes: {
    eyebrow: "Visa routes",
    title: "Which visa is right for you?",
    intro:
      "By now you should have a good understanding of what life in Thailand looks like. The final step is choosing the visa that best matches your lifestyle, work plans, age, and long-term goals. Below are the most common long-stay pathways for international residents.",
    decisionGuide: {
      label: "Not sure where to start? Read the visa decision guide",
      href: "/blog/best-visa-for-living-in-thailand",
    },
    items: [
      {
        slug: "dtv",
        title: "Destination Thailand Visa",
        description:
          "A long-stay visa for qualifying remote workers, freelancers, and cultural participants who meet financial and activity requirements.",
        bestFor: "Remote workers",
        typicalApplicant: "Professionals earning income outside Thailand",
        href: "/visas/dtv",
        image: visaGalleryPhotography.dtv,
      },
      {
        slug: "retirement",
        title: "Retirement Visa",
        description:
          "Long-stay residence for retirees who meet age and financial requirements, with annual renewal and reporting obligations.",
        bestFor: "Retirees",
        typicalApplicant: "Adults 50+ with stable retirement income or savings",
        href: "/visas/retirement",
        image: visaGalleryPhotography.retirement,
      },
      {
        slug: "business",
        title: "Business Visa",
        description:
          "Employment-based residence sponsored by a Thai employer, usually paired with a work permit for the role you will perform.",
        bestFor: "Local employment",
        typicalApplicant: "Professionals hired by a Thai company",
        href: "/visas/business",
        image: visaGalleryPhotography.business,
      },
      {
        slug: "education",
        title: "Education Visa",
        description:
          "Study-based residence for enrolled students at language schools, universities, or approved training programmes.",
        bestFor: "Students",
        typicalApplicant: "Learners enrolled at an approved Thai institution",
        href: "/visas/education",
        image: visaGalleryPhotography.education,
      },
      {
        slug: "elite",
        title: "Thailand Elite",
        description:
          "A premium membership programme offering multi-year stays, airport services, and concierge support for qualifying members.",
        bestFor: "Premium long-stay",
        typicalApplicant: "High-net-worth individuals seeking flexibility and services",
        href: "/visas/elite",
        image: visaGalleryPhotography.elite,
      },
    ],
  },
  faq: {
    title: "Frequently asked questions about moving to Thailand",
    description:
      "Short answers to the most common questions about visas, relocation, costs, work, retirement, family life, and everyday living in Thailand.",
    items: [
      {
        value: "moving-should-i-move",
        question: "Should I move to Thailand?",
        answer:
          "It depends on your tolerance for heat, visa fit, and adapting to different systems. Thailand works well for many retirees, remote workers, and families who plan realistically. Read the pros and cons section and test a target city before committing.",
        readMoreHref: "#is-thailand-good",
      },
      {
        value: "moving-how-to-move",
        question: "How do I move to Thailand?",
        answer:
          "Start by deciding whether Thailand fits your lifestyle, choose a city, identify the visa route that matches how you will live and earn, then arrange housing, healthcare, and banking. Do not sign long leases before your visa path is clear.",
        readMoreHref: "#can-foreigners-move",
      },
      {
        value: "moving-permanent",
        question: "Can foreigners move to Thailand permanently?",
        answer:
          "No, not in the usual sense. Foreigners can live long term through retirement, business, education, DTV, and Elite routes, but permanent residency is a separate, competitive process. Most residents renew visas every one to five years.",
        readMoreHref: "#can-foreigners-move",
      },
      {
        value: "moving-best-visa",
        question: "What is the best visa for moving to Thailand?",
        answer:
          "It depends on your lifestyle. Retirees use retirement visas, remote workers may qualify for the DTV, employees need business visas with work permits, and students use education visas.",
        readMoreHref: "#visa-routes",
      },
      {
        value: "moving-money-needed",
        question: "How much money do I need to move to Thailand?",
        answer:
          "Roughly ฿40,000–85,000 per month for comfortable day-to-day living, depending on city and lifestyle, but visa routes have their own financial requirements. Budget separately for deposits, insurance, flights, and visa fees.",
        readMoreHref: "#budget-estimator",
      },
      {
        value: "moving-digital-nomads",
        question: "Is Thailand a good place for digital nomads?",
        answer:
          "Yes, for qualifying remote workers. Chiang Mai and Bangkok are established nomad hubs. The DTV is designed for this purpose; tourist visas are not intended for long-term remote work.",
        readMoreHref: "#working",
      },
      {
        value: "moving-remote-tourist",
        question: "Can I work remotely in Thailand on a tourist visa?",
        answer:
          "No. Working in Thailand, including remote work for a foreign employer, requires an appropriate visa. Tourist entries are for tourism, not sustained employment.",
        readMoreHref: "#working",
      },
      {
        value: "moving-best-cities",
        question: "What are the best cities to live in Thailand?",
        answer:
          "Bangkok suits careers and urban life. Chiang Mai fits remote workers and retirees. Phuket and Hua Hin attract beach-oriented residents. Pattaya, Krabi, and Koh Samui each offer distinct coastal lifestyles at different price points.",
        readMoreHref: "#cities",
      },
      {
        value: "moving-healthcare",
        question: "Is healthcare in Thailand good for expats?",
        answer:
          "Yes. Private hospitals in Bangkok, Chiang Mai, and Phuket meet international standards. Most long-stay residents use private care with international health insurance.",
        readMoreHref: "#everyday-life",
      },
      {
        value: "moving-safety",
        question: "Is Thailand safe for foreigners?",
        answer:
          "Yes. Thailand is generally safe for residents and visitors. Use normal urban awareness and respect local laws. Visa compliance is legally important.",
        readMoreHref: "#everyday-life",
      },
      {
        value: "moving-thai-language",
        question: "Do I need to speak Thai to live in Thailand?",
        answer:
          "English is widely spoken in expat areas, international schools, and hospitals. Learning basic Thai improves daily life, landlord relations, and integration, though many long-stay residents begin with English alone.",
        readMoreHref: "#everyday-life",
      },
      {
        value: "moving-property",
        question: "Can I buy property in Thailand as a foreigner?",
        answer:
          "Foreigners cannot own land outright. Condominium ownership is possible within foreign quota limits. Many residents lease land or use long-term rental structures. Property rules are complex, so verify with qualified legal advice before committing.",
      },
      {
        value: "moving-climate",
        question: "How hot is Thailand year-round?",
        answer:
          "Thailand is tropical and warm year-round. The cool season (November–February) is most comfortable in the north. The hot season (March–May) and rainy season (May–October) vary by region. Coastal areas often feel more humid.",
        readMoreHref: "#cities",
      },
      {
        value: "moving-families",
        question: "Can families move to Thailand?",
        answer:
          "Yes. Families often base in Bangkok for schools and infrastructure, or choose Phuket or Chiang Mai. Visa routes depend on the working or studying parent's status, and dependents can be included on some routes with proper documentation.",
        readMoreHref: "#families",
      },
      {
        value: "moving-cost-vs-europe",
        question: "Is the cost of living in Thailand lower than Europe?",
        answer:
          "Yes, for most Western residents. Housing, dining, and transport cost significantly less than Western Europe or North America. International schools and premium healthcare narrow the gap.",
        readMoreHref: "#cost-of-living",
      },
      ...movingFaqExpanded,
    ],
  },
  finalCta: {
    title: "Understand the life first. Choose the visa second.",
    description:
      "When you know how you want to live in Thailand, compare visa routes or speak with our team for personal guidance.",
    primaryCta: { label: "Which visa fits me?", href: "#visa-routes" },
    secondaryCta: { label: "Speak with our visa experts", href: "/consultation" },
  },
}
