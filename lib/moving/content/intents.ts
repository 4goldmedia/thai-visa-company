import type { ContentFaqItem } from "@/lib/content/types"
import type {
  MovingCanForeignersMove,
  MovingCity,
  MovingCostCategory,
  MovingEditorialSection,
  MovingFamiliesContent,
  MovingIsThailandGood,
  MovingRetirementContent,
  MovingTopicBand,
  MovingWorkingContent,
} from "@/lib/moving/types"

export const movingWhyMove: MovingEditorialSection = {
  title: "Why do people move to Thailand?",
  quickAnswer:
    "People move to Thailand for a mix of lifestyle quality, lower day-to-day costs, warm weather, and access to modern services, but outcomes depend on matching city, budget, and visa route to real life priorities.",
  paragraphs: [
    "Most relocations are not driven by one reason. They come from a practical combination: better daily rhythm, affordable housing options, strong private healthcare in key cities, and easier regional travel.",
    "The same factors can feel very different depending on income source, health needs, family setup, and tolerance for administrative complexity. A move works best when expectations are calibrated before arrival.",
  ],
  subsections: [
    {
      id: "lifestyle",
      title: "Lifestyle",
      quickAnswer:
        "Everyday life often feels more social, flexible, and enjoyable than in many Western cities.",
      paragraphs: [
        "Street-level life is active, with late opening hours, neighborhood food options, and strong wellness culture in many areas.",
        "For remote workers and retirees, the ability to combine work, leisure, and community in one day is often a major quality-of-life improvement.",
      ],
      bullets: [
        "Active street life with late hours, neighborhood food, and wellness culture",
        "Work, leisure, and community can fit into a single day for many residents",
      ],
    },
    {
      id: "affordability",
      title: "Affordability",
      quickAnswer:
        "Baseline living costs are often lower than Western urban centers — if you avoid premium imports.",
      paragraphs: [
        "Housing, transport, and local food can keep baseline monthly spending manageable for many profiles.",
        "Imported goods, private schooling, premium healthcare plans, and frequent travel can narrow the cost advantage.",
      ],
      bullets: [
        "Housing, transport, and local food keep monthly spending manageable",
        "Premium imports, schools, and healthcare can narrow the cost advantage",
      ],
    },
    {
      id: "weather",
      title: "Weather",
      quickAnswer:
        "Warm weather year-round suits people who prefer outdoor living without winter interruptions.",
      paragraphs: [
        "Many residents value not having winter interruptions and enjoy year-round access to beaches, parks, and open-air dining.",
        "Humidity, seasonal rain, and regional air quality patterns can still be challenging and should be tested in target cities.",
      ],
      bullets: [
        "No winter season — beaches, parks, and open-air dining stay accessible",
        "Humidity, rain, and air quality vary by region and season",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare",
      quickAnswer:
        "Private hospitals in major cities meet international standards for routine and specialist care.",
      paragraphs: [
        "Bangkok, Chiang Mai, and Phuket offer private hospitals with international patient services and specialist access.",
        "Routine care is often efficient, but major treatment planning and insurance coverage still need careful preparation.",
      ],
      bullets: [
        "International-standard private hospitals in Bangkok, Chiang Mai, and Phuket",
        "Routine care is often efficient with strong specialist access",
        "Major treatment still requires insurance and advance planning",
      ],
    },
    {
      id: "safety",
      title: "Safety",
      quickAnswer:
        "Thailand is generally safe for daily life when you use normal urban awareness.",
      paragraphs: [
        "Most concerns are practical, such as road safety and document compliance, rather than high rates of serious personal crime in residential zones.",
        "Choosing the right neighborhood and transport habits has more impact than broad country-level assumptions.",
      ],
      bullets: [
        "Residential areas are generally safe with normal urban precautions",
        "Road safety and visa compliance are the most common practical concerns",
        "Neighborhood choice matters more than broad country assumptions",
      ],
    },
    {
      id: "travel",
      title: "Travel",
      quickAnswer:
        "Domestic and regional connectivity makes short trips easy and affordable.",
      paragraphs: [
        "Residents can reach islands, mountains, and neighboring countries quickly, often at lower cost than equivalent routes in Europe or North America.",
        "This mobility supports lifestyles built around periodic breaks, family visits, and remote work flexibility.",
      ],
      bullets: [
        "Islands, mountains, and neighboring countries are within easy reach",
        "Domestic travel often costs less than comparable Western routes",
        "Supports lifestyles built around breaks, family visits, and flexible work",
      ],
    },
    {
      id: "community",
      title: "Community",
      quickAnswer:
        "Established expat networks in major hubs reduce friction during the first months.",
      paragraphs: [
        "New arrivals often find practical support through coworking spaces, neighborhood groups, sports clubs, and parent networks.",
        "Long-term satisfaction is usually strongest when residents build both expat and local social ties over time.",
      ],
      bullets: [
        "Coworking spaces, sports clubs, and parent networks ease early relocation",
        "Bangkok, Chiang Mai, Phuket, and coastal hubs have active resident communities",
        "Long-term satisfaction improves with both expat and local social ties",
      ],
    },
  ],
}

export const movingIsThailandGood: MovingIsThailandGood = {
  eyebrow: "Life in Thailand",
  title: "Is Thailand a good place to live?",
  quickAnswer:
    "Thailand can be an excellent place to live when your visa route, income, and expectations align. Major cities offer strong healthcare, affordable daily life, and genuine lifestyle quality — but climate, bureaucracy, and compliance require real adaptation. The better question is not whether Thailand is good, but whether it fits your life.",
  advantagesTitle: "Why people love living in Thailand",
  advantages: [
    {
      id: "cost",
      title: "Lower cost of living",
      detail: "Housing, food, and transport often cost significantly less than Western urban centers.",
    },
    {
      id: "healthcare",
      title: "Excellent private healthcare",
      detail: "International-standard hospitals in Bangkok, Chiang Mai, and Phuket.",
    },
    {
      id: "climate",
      title: "Warm climate year-round",
      detail: "Outdoor living, beaches, and open-air dining without winter interruptions.",
    },
    {
      id: "food",
      title: "Outstanding food culture",
      detail: "Quality local meals at every price point, from street food to fine dining.",
    },
    {
      id: "remote",
      title: "Remote-work friendly",
      detail: "Reliable internet and established coworking hubs in major cities.",
    },
    {
      id: "community",
      title: "Established expat communities",
      detail: "Practical support networks in Bangkok, Chiang Mai, and coastal hubs.",
    },
  ],
  considerationsTitle: "Things to consider before moving",
  considerations: [
    {
      id: "visa",
      title: "Visa compliance is ongoing",
      detail: "Long stays require the right visa route and active renewal planning.",
    },
    {
      id: "heat",
      title: "Heat and humidity",
      detail: "Year-round warmth suits many people, but not everyone adapts easily.",
    },
    {
      id: "bureaucracy",
      title: "Bureaucracy can be slow",
      detail: "Administrative processes vary by office and often require patience.",
    },
    {
      id: "language",
      title: "Language barriers remain",
      detail: "English works in expat areas; Thai helps for local services and administration.",
    },
    {
      id: "traffic",
      title: "Traffic and commute friction",
      detail: "Where you live often matters more than which city you choose.",
    },
    {
      id: "costs",
      title: "Premium habits raise costs",
      detail: "Imported goods, international schools, and luxury living narrow the gap.",
    },
  ],
  fitHeading: "Who thrives in Thailand?",
  fitProsTitle: "Thailand may be a great fit if…",
  fitPros: [
    "You work remotely or have location-independent income",
    "You are retiring with stable financial planning",
    "You value lifestyle quality over career density",
    "You enjoy warm climates and outdoor living",
    "You are comfortable adapting to different systems",
  ],
  fitConsTitle: "It may be less suitable if…",
  fitCons: [
    "You need fast, predictable bureaucracy in every process",
    "You dislike hot weather or high humidity",
    "You rely on local employment without a clear visa path",
    "You expect daily life to work exactly like home",
  ],
}

export const movingCanForeignersMove: MovingCanForeignersMove = {
  title: "Can foreigners move to Thailand?",
  intro:
    "Yes — foreigners can legally relocate to Thailand long term. There is no single move-to-Thailand visa; each pathway is built for a different lifestyle, income source, and length of stay.",
  shortAnswer: {
    lead: "Yes.",
    body:
      "Foreigners can legally move to Thailand through several long-term visa pathways. The right visa depends on how you plan to live, work, study, or retire.",
    support:
      "Choosing the right route matters more than choosing quickly. Compare eligibility, legal boundaries, and renewal requirements before committing to housing, schools, or business setup.",
  },
  visaNav: {
    bridge:
      "There isn't a single visa for moving to Thailand. The right choice depends on how you plan to spend your time here, how you'll support yourself, and how long you intend to stay. Understanding these differences early can save significant time and frustration.",
    heading: "Which visa fits your plans?",
    description:
      "Every long-term visa is designed for a different lifestyle. Explore the options below to find the route that best matches your goals.",
    links: [
      { id: "dtv", label: "DTV visa", href: "/visas/dtv" },
      { id: "retirement", label: "Retirement visa", href: "/visas/retirement" },
      { id: "business", label: "Business visa", href: "/visas/business" },
      { id: "education", label: "Education visa", href: "/visas/education" },
      { id: "elite", label: "Thailand Elite", href: "/visas/elite" },
      {
        id: "best-visa-guide",
        label: "Best visa guide",
        href: "/blog/best-visa-for-living-in-thailand",
      },
      {
        id: "permanent-residence",
        label: "Permanent residence",
        href: "/blog/can-foreigners-live-in-thailand-permanently",
      },
    ],
  },
}

export const movingEverydayLife: MovingEditorialSection = {
  title: "What is everyday life like in Thailand?",
  quickAnswer:
    "Everyday life is often comfortable and service-rich once routines are in place, but the lived experience varies widely by city, neighborhood, and budget.",
  paragraphs: [
    "Thailand can feel easy for daily basics once transport patterns, shopping habits, and healthcare options are mapped. The first 60 to 90 days are usually about setting these systems rather than chasing perfect lifestyle aesthetics.",
    "People who adapt best build routines around climate, commute windows, and local communication norms. Daily quality is less about one big decision and more about many small operational choices.",
  ],
  subsections: [
    {
      id: "daily-routine",
      title: "Daily routine",
      quickAnswer:
        "Many residents front-load key tasks early, avoid midday heat when possible, and use evenings for social or community activity.",
      paragraphs: [
        "Morning windows are often the most productive for errands, exercise, and commuting in dense districts.",
        "Evenings are usually active and practical for dining, markets, and low-friction social plans.",
      ],
    },
    {
      id: "shopping",
      title: "Shopping",
      quickAnswer:
        "Most people combine local markets for value and modern malls or supermarkets for consistency and imports.",
      paragraphs: [
        "Day-to-day convenience is high in major cities, with delivery services and chain stores covering most needs.",
        "Budget control improves when residents intentionally separate local staples from imported discretionary spending.",
      ],
    },
    {
      id: "transportation",
      title: "Transportation",
      quickAnswer:
        "Transport quality is highly neighborhood-dependent, so where you live often matters more than which city you choose.",
      paragraphs: [
        "Bangkok has the strongest transit network, while many other hubs depend on ride-hailing, shared local transport, and private vehicles.",
        "A low-rent unit in a poor traffic corridor can reduce quality of life more than expected.",
      ],
    },
    {
      id: "food",
      title: "Food",
      quickAnswer:
        "Food quality and variety are a major daily advantage, with options from very affordable local meals to premium international dining.",
      paragraphs: [
        "Many residents maintain a balanced food system by combining trusted local options with selective premium choices.",
        "Costs remain manageable when eating patterns are deliberate rather than fully import-oriented.",
      ],
    },
    {
      id: "internet",
      title: "Internet",
      quickAnswer:
        "Connectivity is usually strong in core districts, but building infrastructure still determines real-world reliability.",
      paragraphs: [
        "Remote workers should verify evening speed and outage patterns before finalizing a lease.",
        "A mobile data backup setup is a practical safeguard for critical workdays.",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare",
      quickAnswer:
        "Private healthcare access is generally strong in major cities, but hospital choice and insurance strategy should be set early.",
      paragraphs: [
        "Routine care is often straightforward, while major treatment planning requires stronger financial and coverage preparation.",
        "Retirees and families benefit from living near preferred hospital systems.",
      ],
    },
    {
      id: "exercise",
      title: "Exercise",
      quickAnswer:
        "Fitness is easy to maintain in most relocation hubs through gyms, parks, classes, and outdoor activities.",
      paragraphs: [
        "Climate timing matters, with many people training early morning or after sunset.",
        "Neighborhood access to parks and walkable routes often determines consistency more than gym quality.",
      ],
    },
    {
      id: "community",
      title: "Community",
      quickAnswer:
        "Social integration is usually easier than expected if you actively join interest-based groups and local routines.",
      paragraphs: [
        "Coworking spaces, sports clubs, and parent circles often provide practical support as much as social connection.",
        "Long-term stability tends to improve when social life includes both expat and local relationships.",
      ],
    },
    {
      id: "weekends",
      title: "Weekends",
      quickAnswer:
        "Weekends often center on markets, cafés, beaches, and short domestic travel, which supports a high perceived lifestyle return.",
      paragraphs: [
        "Domestic flight and transport options make regular short breaks feasible for many residents.",
        "Weekend quality is typically strongest when commute stress is minimized during the week.",
      ],
    },
    {
      id: "language",
      title: "Language",
      quickAnswer:
        "You can function with English in many areas, but basic Thai significantly improves independence and reduces friction.",
      paragraphs: [
        "Administrative tasks, local services, and neighborhood relationships become easier with practical Thai vocabulary.",
        "Even modest language progress compounds quickly in day-to-day confidence.",
      ],
    },
  ],
}

export const movingCostCategories: ReadonlyArray<MovingCostCategory> = [
  {
    id: "housing-rent",
    label: "Housing / rent",
    modest: "฿10,000-18,000",
    comfortable: "฿20,000-40,000",
    premium: "฿45,000-95,000+",
    note: "City, neighborhood, and building quality drive most variance.",
  },
  {
    id: "utilities",
    label: "Utilities",
    modest: "฿1,800-3,500",
    comfortable: "฿3,500-6,000",
    premium: "฿6,000-12,000+",
    note: "Air-conditioning usage is the biggest monthly variable.",
  },
  {
    id: "groceries",
    label: "Groceries",
    modest: "฿4,000-7,000",
    comfortable: "฿8,000-14,000",
    premium: "฿15,000-30,000+",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    modest: "฿4,000-8,000",
    comfortable: "฿9,000-18,000",
    premium: "฿20,000-45,000+",
  },
  {
    id: "transportation",
    label: "Transportation",
    modest: "฿1,500-3,500",
    comfortable: "฿3,500-8,000",
    premium: "฿8,000-22,000+",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    modest: "฿1,500-4,000",
    comfortable: "฿4,000-10,000",
    premium: "฿10,000-30,000+",
    note: "Insurance profile and age can materially change this range.",
  },
  {
    id: "education",
    label: "Education",
    modest: "฿0-20,000",
    comfortable: "฿20,000-80,000",
    premium: "฿80,000-200,000+",
    note: "Range is monthly equivalent and varies sharply by school type.",
  },
  {
    id: "entertainment",
    label: "Entertainment",
    modest: "฿2,000-5,000",
    comfortable: "฿6,000-14,000",
    premium: "฿15,000-40,000+",
  },
  {
    id: "coworking",
    label: "Coworking",
    modest: "฿0-2,500",
    comfortable: "฿3,000-6,500",
    premium: "฿7,000-15,000+",
    note: "Some residents skip coworking and work from home full-time.",
  },
]

export const movingCitiesExpanded: ReadonlyArray<MovingCity> = [
  {
    id: "bangkok",
    name: "Bangkok",
    lifestyle: "Fast, international, service-rich urban living",
    intro:
      "Bangkok is the most infrastructure-complete option for foreigners prioritizing healthcare, schooling, and career access.",
    atmosphere:
      "Dense and energetic, with significant differences between transit-connected and car-dependent districts.",
    whoItSuits:
      "Professionals, families, and founders who value access and convenience over quiet pace.",
    strengths: [
      "Largest concentration of private hospitals and international schools",
      "Best transit coverage by Thai standards",
      "Deep housing and service ecosystem across budget bands",
    ],
    considerations: [
      "Traffic and commute friction can be substantial",
      "Prime district pricing can approach global-city levels",
      "Urban pace is not ideal for everyone long term",
    ],
    bestFor: "Career-focused or family-focused city living",
    monthlyBudget: "฿55,000-130,000",
    averageRent: "฿18,000-55,000",
    tags: ["business", "families", "luxury"],
    imageKey: "cities.bangkok",
    metadata: {
      lifestyleScore: "Fast urban",
      walkability: "Moderate",
      healthcare: "Excellent",
      internet: "Strong",
      intlCommunity: "Large",
    },
  },
  {
    id: "chiang-mai",
    name: "Chiang Mai",
    lifestyle: "Community-oriented, creative, and comparatively affordable",
    intro:
      "Chiang Mai remains a leading base for remote workers and early retirees who want lower baseline costs.",
    atmosphere:
      "Friendly and slower-paced, with strong café and coworking culture in key neighborhoods.",
    whoItSuits:
      "Remote professionals, independent workers, and residents prioritizing rhythm over speed.",
    strengths: [
      "Strong expat and nomad support networks",
      "Lower living costs than Bangkok for similar comfort",
      "Accessible nature and domestic travel options",
    ],
    considerations: [
      "Seasonal air quality can affect lifestyle and health planning",
      "Smaller top-tier school and specialist service set than Bangkok",
      "Fewer local high-income employment paths",
    ],
    bestFor: "Remote-work lifestyle and value-focused long stays",
    monthlyBudget: "฿40,000-80,000",
    averageRent: "฿12,000-30,000",
    tags: ["digital-nomads", "retirement", "nature"],
    imageKey: "cities.chiang-mai",
    metadata: {
      lifestyleScore: "Creative & calm",
      walkability: "High in core",
      healthcare: "Good",
      internet: "Strong",
      intlCommunity: "Established",
    },
  },
  {
    id: "phuket",
    name: "Phuket",
    lifestyle: "Island living with mature expat infrastructure",
    intro:
      "Phuket offers a coastal lifestyle while still supporting family and healthcare needs in many districts.",
    atmosphere:
      "International and tourism-driven, with both premium enclaves and practical residential zones.",
    whoItSuits:
      "Families, retirees, and entrepreneurs who prioritize coastal quality of life.",
    strengths: [
      "Strong private healthcare availability",
      "Established international resident ecosystems",
      "Broad housing stock from practical to premium",
    ],
    considerations: [
      "Prime area costs can be high",
      "Car dependence is common outside limited zones",
      "Tourism seasonality affects traffic and pricing patterns",
    ],
    bestFor: "Service-supported island living",
    monthlyBudget: "฿55,000-120,000",
    averageRent: "฿16,000-45,000",
    tags: ["families", "retirement", "luxury"],
    imageKey: "cities.phuket",
    metadata: {
      lifestyleScore: "Coastal premium",
      walkability: "Low–moderate",
      healthcare: "Excellent",
      internet: "Good",
      intlCommunity: "Large",
    },
  },
  {
    id: "hua-hin",
    name: "Hua Hin",
    lifestyle: "Calm coastal routine with practical amenities",
    intro:
      "Hua Hin is a long-standing relocation choice for residents who want stability and lower day-to-day stress.",
    atmosphere:
      "Quiet and residential, blending local Thai life with established long-stay foreign communities.",
    whoItSuits:
      "Retirees, couples, and remote workers looking for manageable pace.",
    strengths: [
      "Predictable daily rhythm and moderate density",
      "Practical healthcare access",
      "Often better housing value than premium islands",
    ],
    considerations: [
      "Smaller professional ecosystem than Bangkok",
      "Public transport depth is limited",
      "Some residents later seek more variety",
    ],
    bestFor: "Retirement and slower coastal living",
    monthlyBudget: "฿45,000-85,000",
    averageRent: "฿12,000-32,000",
    tags: ["retirement", "families", "nature"],
    imageKey: "cities.hua-hin",
    metadata: {
      lifestyleScore: "Quiet coastal",
      walkability: "Moderate",
      healthcare: "Good",
      internet: "Good",
      intlCommunity: "Established",
    },
  },
  {
    id: "pattaya",
    name: "Pattaya",
    lifestyle: "Convenience-focused coastal city with broad price bands",
    intro:
      "Pattaya provides practical coastal access and a large foreign resident base within reach of Bangkok.",
    atmosphere:
      "Mixed and dynamic, with strong variation between nightlife corridors and quieter residential zones.",
    whoItSuits:
      "Budget-aware retirees and residents prioritizing convenience.",
    strengths: [
      "Wide rental inventory across budgets",
      "Strong day-to-day expat service network",
      "Relative proximity to Bangkok",
    ],
    considerations: [
      "Neighborhood fit matters significantly",
      "Some zones are not family-oriented",
      "Road behavior requires extra caution",
    ],
    bestFor: "Affordable coastal setup with city access",
    monthlyBudget: "฿40,000-75,000",
    averageRent: "฿10,000-27,000",
    tags: ["retirement", "business"],
    imageKey: "cities.pattaya",
    metadata: {
      lifestyleScore: "Coastal practical",
      walkability: "Varies by zone",
      healthcare: "Good",
      internet: "Good",
      intlCommunity: "Large",
    },
  },
  {
    id: "krabi",
    name: "Krabi",
    lifestyle: "Nature-led, slower, and less dense",
    intro:
      "Krabi attracts residents who prefer scenery and pace over full metropolitan convenience.",
    atmosphere:
      "Relaxed and outdoors-focused, with a smaller but growing long-stay ecosystem.",
    whoItSuits:
      "Nature-oriented remote workers, couples, and lifestyle relocators.",
    strengths: [
      "High-quality natural environment and outdoor access",
      "Lower density than major hubs",
      "Potential housing value outside tourist hotspots",
    ],
    considerations: [
      "Fewer specialist services and schooling options",
      "Transport logistics are less seamless",
      "Smaller professional and business network",
    ],
    bestFor: "Scenic, low-intensity routines",
    monthlyBudget: "฿38,000-68,000",
    averageRent: "฿10,000-24,000",
    tags: ["nature", "digital-nomads"],
    imageKey: "cities.krabi",
    metadata: {
      lifestyleScore: "Nature-led",
      walkability: "Low",
      healthcare: "Basic",
      internet: "Moderate",
      intlCommunity: "Growing",
    },
  },
  {
    id: "koh-samui",
    name: "Koh Samui",
    lifestyle: "Tropical island living with premium pockets",
    intro:
      "Koh Samui offers a high-lifestyle island environment with growing infrastructure for long-stay residents.",
    atmosphere:
      "Relaxed but area-dependent, from quiet bays to more active lifestyle strips.",
    whoItSuits:
      "Families, entrepreneurs, and residents comfortable with island trade-offs.",
    strengths: [
      "Strong wellness and family lifestyle appeal",
      "Mix of mid-range and premium housing",
      "Established long-stay international communities",
    ],
    considerations: [
      "Costs can escalate in high-demand zones",
      "Weather and island logistics can disrupt planning",
      "Specialist services are narrower than Bangkok",
    ],
    bestFor: "Lifestyle-first island residence",
    monthlyBudget: "฿55,000-110,000",
    averageRent: "฿16,000-40,000",
    tags: ["families", "luxury", "nature"],
    imageKey: "cities.koh-samui",
    metadata: {
      lifestyleScore: "Island lifestyle",
      walkability: "Low",
      healthcare: "Good",
      internet: "Moderate",
      intlCommunity: "Established",
    },
  },
]

export const movingWorking: MovingWorkingContent = {
  eyebrow: "Working in Thailand",
  title: "Working in Thailand",
  intro:
    "Whether you're joining a Thai company, working remotely for clients overseas, freelancing, or starting a business, the legal requirements are different. Understanding how each pathway works before relocating helps you choose the right visa and avoid costly mistakes.",
  subsections: [
    {
      id: "employment",
      title: "Employment",
      quickAnswer:
        "Local employment generally requires employer sponsorship and proper work authorization.",
      paragraphs: [
        "If you plan to work for a Thai company, sponsorship and role scope should be confirmed before major relocation commitments.",
      ],
    },
    {
      id: "remote-work",
      title: "Remote work",
      quickAnswer:
        "Remote work is common among foreigners in Thailand, but it should be aligned with a suitable legal pathway.",
      paragraphs: [
        "Many residents earn from overseas employers or clients while living in Thailand. Long-term stability depends on choosing a route that fits actual work activity.",
      ],
    },
    {
      id: "freelancing",
      title: "Freelancing",
      quickAnswer:
        "Freelancing can be flexible, but legal and tax considerations should be mapped before relying on it as a base model.",
      paragraphs: [
        "Client location, service type, and income structure all influence risk profile and compliance requirements.",
      ],
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship",
      quickAnswer:
        "Thailand can be viable for founders, especially service-led businesses, when setup is done with legal and operational clarity.",
      paragraphs: [
        "Company structure, permits, accounting, and staffing rules should be designed as part of the launch plan, not patched later.",
      ],
    },
    {
      id: "business-culture",
      title: "Business culture",
      quickAnswer:
        "Business progress often depends on relationship trust, clear documentation, and steady follow-through.",
      paragraphs: [
        "Communication style can be less direct than some Western markets, so respectful persistence is usually more effective than aggressive escalation.",
      ],
    },
    {
      id: "coworking",
      title: "Coworking",
      quickAnswer:
        "Coworking ecosystems in major hubs support both productivity and network-building for remote and independent workers.",
      paragraphs: [
        "Shared spaces can reduce isolation and provide practical peer support, especially during early relocation months.",
      ],
    },
    {
      id: "work-permits",
      title: "Work permits",
      quickAnswer:
        "Work permits are a core legal control point and should be treated as an early planning requirement.",
      paragraphs: [
        "Assumptions about what counts as work can create avoidable risk. Verify legal boundaries before changing work activity in Thailand.",
      ],
    },
  ],
  links: [
    { label: "Business visa", href: "/visas/business" },
    { label: "DTV visa", href: "/visas/dtv" },
    {
      label: "Can I work in Thailand without a work permit?",
      href: "/blog/can-i-work-in-thailand-without-a-work-permit",
    },
    {
      label: "Business visa vs work permit",
      href: "/blog/business-visa-vs-work-permit-thailand",
    },
  ],
}

export const movingFamilies: MovingFamiliesContent = {
  eyebrow: "Why families choose Thailand",
  title: "Is Thailand a good place to raise a family?",
  intro:
    "Thailand attracts thousands of families every year thanks to its affordable lifestyle, international schools, modern healthcare, and outdoor way of life. The right city and visa strategy make a significant difference.",
  cards: [
    {
      id: "schools",
      title: "Schools",
      summary:
        "International schools are available across Thailand, but quality and tuition vary widely.",
      body:
        "Bangkok offers the largest selection, while Chiang Mai and Phuket provide strong alternatives for families seeking a different lifestyle.",
      goodToKnow: "Expect annual tuition between ฿250,000 and ฿900,000.",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      summary:
        "Family healthcare access is a major strength in larger hubs with established private hospital systems.",
      body:
        "Proximity to preferred hospitals and pediatric services should be factored into neighborhood selection, not treated as a secondary detail.",
      goodToKnow:
        "Private hospitals in Bangkok and Phuket offer English-speaking specialists; comprehensive insurance is strongly recommended.",
    },
    {
      id: "safety",
      title: "Safety",
      summary:
        "Family safety is generally strong in suitable residential areas, with road behavior as the key practical risk.",
      body:
        "Transport planning, neighborhood fit, and routine document compliance matter more than broad country-level narratives.",
      goodToKnow:
        "Gated communities and school zones are popular with expat families in major cities.",
    },
    {
      id: "activities",
      title: "Activities",
      summary:
        "Thailand offers broad family activity options from sports and parks to beaches and domestic weekend travel.",
      body:
        "The range of accessible activities often contributes to lifestyle satisfaction, especially for families prioritizing outdoor time.",
      goodToKnow:
        "International school communities often organize sports, cultural trips, and holiday programs.",
    },
    {
      id: "housing",
      title: "Housing",
      summary:
        "Housing decisions should prioritize school and hospital proximity, not just unit size or headline rent.",
      body:
        "A well-located practical home often delivers better family outcomes than a larger unit with poor commute logistics.",
      goodToKnow:
        "Three-bedroom condos in family-friendly areas typically run ฿25,000–60,000 per month depending on city.",
    },
    {
      id: "community",
      title: "Community",
      summary:
        "Parent networks and mixed local-expat communities can accelerate adaptation for both adults and children.",
      body:
        "Families who actively build community early usually navigate school transitions and administrative tasks with less friction.",
      goodToKnow:
        "Parent groups, school PTAs, and sports clubs are the fastest way to build a support network.",
    },
  ],
  links: [
    { label: "Education visa", href: "/visas/education" },
    { label: "Business visa", href: "/visas/business" },
    {
      label: "Can foreigners live in Thailand permanently?",
      href: "/blog/can-foreigners-live-in-thailand-permanently",
    },
    { label: "Best visa for living in Thailand", href: "/blog/best-visa-for-living-in-thailand" },
  ],
}

export const movingRetirement: MovingRetirementContent = {
  eyebrow: "Retiring in Thailand",
  title: "Is Thailand a good place to retire?",
  intro:
    "Thailand remains one of the world's most popular retirement destinations thanks to its warm climate, affordable lifestyle, excellent private healthcare, and diverse places to live. Choosing the right city and planning your finances carefully are the keys to enjoying retirement long term.",
  imageKey: "bands.retirement",
  cards: [
    {
      id: "costs",
      title: "Costs",
      summary:
        "Retirement can be cost-efficient in Thailand, but conservative budgeting is essential as healthcare and comfort expectations evolve.",
      body:
        "First-year spending can understate long-term needs. Durable plans include contingency buffers and inflation assumptions.",
      goodToKnow: "Lower cost of living",
    },
    {
      id: "community",
      title: "Community",
      summary:
        "Community fit is a major predictor of retirement satisfaction and resilience over time.",
      body:
        "Established retiree networks can reduce adaptation friction and support practical onboarding in healthcare and daily administration.",
      goodToKnow: "Strong expat community",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      summary:
        "Thailand offers world-class private healthcare at significantly lower costs than many Western countries.",
      body:
        "Bangkok has the widest choice of international hospitals, while Chiang Mai and Hua Hin are also popular with retirees.",
      goodToKnow: "Many retirees purchase private insurance before relocating",
    },
    {
      id: "pace-of-life",
      title: "Pace of life",
      summary:
        "Thailand offers both urban and slow-coastal retirement rhythms, so city fit matters as much as country fit.",
      body:
        "Trial stays in target locations help validate whether day-to-day pace is energizing or isolating over time.",
      goodToKnow: "Walkable neighbourhoods",
    },
    {
      id: "climate",
      title: "Climate",
      summary:
        "Climate preference is personal and should be tested across different months before committing long term.",
      body:
        "Heat, humidity, and seasonal variation can influence activity levels and comfort more than expected.",
      goodToKnow: "Popular with retirees",
    },
    {
      id: "housing",
      title: "Housing",
      summary:
        "Retirement housing should prioritize practicality and service access, not only visual appeal.",
      body:
        "Layouts, building maintenance, and proximity to clinics and groceries are central to sustainable comfort.",
      goodToKnow: "Private hospitals nearby",
    },
    {
      id: "daily-life",
      title: "Daily life",
      summary:
        "Retirement quality is usually highest when routines remain manageable, social, and low-friction across ordinary weeks.",
      body:
        "A realistic rhythm for health, mobility, and social connection is more durable than destination-driven novelty.",
      goodToKnow: "Popular with retirees",
    },
  ],
  budget: {
    title: "Typical monthly retirement budget",
    profiles: [
      {
        id: "comfortable",
        label: "Comfortable",
        lines: [
          { label: "Housing", value: "฿18,000–28,000" },
          { label: "Healthcare", value: "฿4,000–8,000" },
          { label: "Food", value: "฿10,000–14,000" },
          { label: "Lifestyle", value: "฿6,000–10,000" },
        ],
        total: "฿40,000–55,000",
      },
      {
        id: "premium",
        label: "Premium",
        lines: [
          { label: "Housing", value: "฿30,000–45,000" },
          { label: "Healthcare", value: "฿8,000–15,000" },
          { label: "Food", value: "฿14,000–20,000" },
          { label: "Lifestyle", value: "฿12,000–18,000" },
        ],
        total: "฿65,000–90,000",
      },
      {
        id: "luxury",
        label: "Luxury",
        lines: [
          { label: "Housing", value: "฿50,000–80,000" },
          { label: "Healthcare", value: "฿15,000–30,000" },
          { label: "Food", value: "฿20,000–35,000" },
          { label: "Lifestyle", value: "฿25,000–45,000" },
        ],
        total: "฿110,000+",
      },
    ],
  },
  guides: [
    { label: "Retirement visa", href: "/visas/retirement" },
    { label: "Thailand Elite", href: "/visas/elite" },
    { label: "Best visa for living in Thailand", href: "/blog/best-visa-for-living-in-thailand" },
    { label: "Living in Thailand", href: "/blog/cluster/living-in-thailand" },
    { label: "Healthcare in Thailand", href: "#moment-healthcare" },
    { label: "Cost of living", href: "#budget-estimator" },
  ],
}

export const movingFaqExpanded: ReadonlyArray<ContentFaqItem> = [
  {
    value: "moving-best-city-for-first-year",
    question: "What is the best city for my first year in Thailand?",
    answer:
      "There is no universal best city. Bangkok is strongest for infrastructure, Chiang Mai for lower-cost remote lifestyles, and coastal hubs for pace and climate. Most people do best by matching city choice to daily routines, not social media narratives.",
  },
  {
    value: "moving-live-comfortably-budget",
    question: "How much do I need monthly to live comfortably in Thailand?",
    answer:
      "Many single residents target around ฿55,000 to ฿85,000 for a comfortable setup, with major variation by city and housing. Families and premium preferences can push budgets significantly higher.",
  },
  {
    value: "moving-rent-before-arrival",
    question: "Should I sign a long lease before arriving?",
    answer:
      "Usually no. A staged approach with short initial accommodation reduces risk while you validate commute, building quality, and neighborhood fit in real conditions.",
  },
  {
    value: "moving-language-necessary",
    question: "Do I need to speak Thai to live in Thailand?",
    answer:
      "You can function with English in many expat-oriented areas, but basic Thai improves daily independence and reduces friction with local services and administration.",
  },
  {
    value: "moving-healthcare-quality-expats",
    question: "Is healthcare in Thailand reliable for long-term foreigners?",
    answer:
      "In major hubs, private healthcare is generally strong and widely used by expats. The key planning step is choosing hospital access and insurance structure before problems occur.",
  },
  {
    value: "moving-family-transition",
    question: "How difficult is it to move to Thailand with children?",
    answer:
      "It can be smooth when schooling, housing, and healthcare are planned as one system. The biggest stress points are usually logistics and budgeting, not the move itself.",
  },
  {
    value: "moving-work-legality",
    question: "Can I start working immediately after moving?",
    answer:
      "Only if your legal route supports your work model. Employment, remote work, freelancing, and business operations carry different requirements and should be clarified in advance.",
  },
  {
    value: "moving-biggest-mistakes",
    question: "What are the most common relocation mistakes?",
    answer:
      "Frequent mistakes include choosing housing before legal clarity, underestimating climate adaptation, and ignoring long-term compliance tasks. Most are preventable with structured first-year planning.",
  },
  {
    value: "moving-retiree-setup",
    question: "What matters most for retirees choosing a location?",
    answer:
      "Hospital access, support community, climate comfort, and predictable daily logistics usually matter more than scenery alone once the first year passes.",
  },
  {
    value: "moving-permanent-expectation",
    question: "Can I treat a move to Thailand as permanent from day one?",
    answer:
      "Most foreigners live in Thailand through renewable long-stay routes rather than immediate permanent status. A durable strategy focuses on legal continuity and adaptable life systems over multiple years.",
  },
]
