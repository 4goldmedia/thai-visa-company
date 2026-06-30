import type {
  BudgetCategoryId,
  BudgetCityData,
  BudgetHouseholdId,
  BudgetHouseholdMultipliers,
  BudgetLifestyleId,
} from "@/lib/moving/budget-estimator/types"

/** Editorial THB/USD rate for approximate display — not live FX */
export const BUDGET_ESTIMATOR_THB_PER_USD = 36

export const budgetCategoryMeta: ReadonlyArray<{
  id: BudgetCategoryId
  label: string
  emoji: string
}> = [
  { id: "housing", label: "Housing", emoji: "🏠" },
  { id: "food", label: "Food", emoji: "🍜" },
  { id: "transport", label: "Transportation", emoji: "🚕" },
  { id: "utilities", label: "Utilities", emoji: "💡" },
  { id: "healthcare", label: "Healthcare", emoji: "🏥" },
  { id: "entertainment", label: "Entertainment", emoji: "🎉" },
  { id: "travel", label: "Regional travel", emoji: "✈️" },
]

export const budgetCities: Record<string, BudgetCityData> = {
  bangkok: {
    id: "bangkok",
    name: "Bangkok",
    insight:
      "Best for professionals, families, and people who value convenience and international services. Highest housing costs but strongest infrastructure.",
    profiles: {
      budget: {
        housing: 15_000,
        food: 8_000,
        utilities: 2_500,
        transport: 3_000,
        healthcare: 2_500,
        entertainment: 3_500,
        travel: 2_000,
      },
      comfortable: {
        housing: 28_000,
        food: 12_000,
        utilities: 4_500,
        transport: 5_500,
        healthcare: 6_000,
        entertainment: 8_000,
        travel: 5_000,
      },
      premium: {
        housing: 55_000,
        food: 22_000,
        utilities: 8_000,
        transport: 12_000,
        healthcare: 15_000,
        entertainment: 18_000,
        travel: 12_000,
      },
    },
  },
  chiangMai: {
    id: "chiangMai",
    name: "Chiang Mai",
    insight:
      "Excellent value for remote workers and slower lifestyles. Lower housing costs with strong café and coworking culture.",
    profiles: {
      budget: {
        housing: 10_000,
        food: 7_000,
        utilities: 2_000,
        transport: 2_000,
        healthcare: 2_000,
        entertainment: 3_000,
        travel: 2_500,
      },
      comfortable: {
        housing: 18_000,
        food: 10_000,
        utilities: 3_500,
        transport: 3_500,
        healthcare: 4_500,
        entertainment: 6_000,
        travel: 4_500,
      },
      premium: {
        housing: 35_000,
        food: 16_000,
        utilities: 5_500,
        transport: 7_000,
        healthcare: 10_000,
        entertainment: 12_000,
        travel: 8_000,
      },
    },
  },
  phuket: {
    id: "phuket",
    name: "Phuket",
    insight:
      "Higher housing costs offset by beach lifestyle and outdoor living. Popular with residents who prioritise climate and leisure over urban convenience.",
    profiles: {
      budget: {
        housing: 14_000,
        food: 8_000,
        utilities: 2_500,
        transport: 3_500,
        healthcare: 3_000,
        entertainment: 4_000,
        travel: 2_500,
      },
      comfortable: {
        housing: 26_000,
        food: 11_000,
        utilities: 4_000,
        transport: 5_000,
        healthcare: 5_500,
        entertainment: 7_500,
        travel: 5_500,
      },
      premium: {
        housing: 48_000,
        food: 18_000,
        utilities: 7_000,
        transport: 10_000,
        healthcare: 12_000,
        entertainment: 15_000,
        travel: 10_000,
      },
    },
  },
  huaHin: {
    id: "huaHin",
    name: "Hua Hin",
    insight:
      "Popular with retirees seeking a quieter pace while remaining close to Bangkok. Balanced costs with a relaxed coastal rhythm.",
    profiles: {
      budget: {
        housing: 12_000,
        food: 7_500,
        utilities: 2_200,
        transport: 2_500,
        healthcare: 2_500,
        entertainment: 3_500,
        travel: 2_200,
      },
      comfortable: {
        housing: 22_000,
        food: 10_000,
        utilities: 3_800,
        transport: 4_000,
        healthcare: 5_000,
        entertainment: 6_500,
        travel: 5_000,
      },
      premium: {
        housing: 40_000,
        food: 15_000,
        utilities: 6_000,
        transport: 8_000,
        healthcare: 9_000,
        entertainment: 11_000,
        travel: 8_500,
      },
    },
  },
}

export const budgetHouseholdMultipliers: Record<
  BudgetHouseholdId,
  BudgetHouseholdMultipliers
> = {
  single: {
    housing: 1,
    food: 1,
    utilities: 1,
    transport: 1,
    healthcare: 1,
    entertainment: 1,
    travel: 1,
  },
  couple: {
    housing: 1.12,
    food: 1.75,
    utilities: 1.35,
    transport: 1.45,
    healthcare: 1.55,
    entertainment: 1.5,
    travel: 1.35,
  },
  family: {
    housing: 1.45,
    food: 2.15,
    utilities: 1.55,
    transport: 1.75,
    healthcare: 2.1,
    entertainment: 1.35,
    travel: 1.5,
  },
}

export const budgetLifestyleLabels: Record<BudgetLifestyleId, string> = {
  budget: "budget",
  comfortable: "comfortable",
  premium: "premium",
}

export const budgetHouseholdLabels: Record<BudgetHouseholdId, string> = {
  single: "one person",
  couple: "a couple",
  family: "a family",
}

export const budgetLifestyleFeatures: Record<BudgetLifestyleId, string> = {
  budget:
    "rent a modest apartment, cook mostly at home, use public transport, and keep social spending restrained",
  comfortable:
    "rent a modern apartment, eat out regularly, enjoy coworking memberships, and travel around Thailand without feeling constrained",
  premium:
    "live in a prime neighbourhood, dine internationally, access premium healthcare, and travel frequently across the region",
}
