import {
  BUDGET_ESTIMATOR_THB_PER_USD,
  budgetCategoryMeta,
  budgetCities,
  budgetHouseholdLabels,
  budgetHouseholdMultipliers,
  budgetLifestyleFeatures,
  budgetLifestyleLabels,
} from "@/lib/moving/budget-estimator/data"
import type {
  BudgetCategoryCosts,
  BudgetCityId,
  BudgetEstimateResult,
  BudgetHouseholdId,
  BudgetLifestyleId,
} from "@/lib/moving/budget-estimator/types"

function roundToNearestThousand(value: number): number {
  return Math.round(value / 1_000) * 1_000
}

function applyHouseholdMultipliers(
  profile: BudgetCategoryCosts,
  household: BudgetHouseholdId,
): BudgetCategoryCosts {
  const multipliers = budgetHouseholdMultipliers[household]

  return {
    housing: Math.round(profile.housing * multipliers.housing),
    food: Math.round(profile.food * multipliers.food),
    utilities: Math.round(profile.utilities * multipliers.utilities),
    transport: Math.round(profile.transport * multipliers.transport),
    healthcare: Math.round(profile.healthcare * multipliers.healthcare),
    entertainment: Math.round(profile.entertainment * multipliers.entertainment),
    travel: Math.round(profile.travel * multipliers.travel),
  }
}

export function formatBaht(amount: number): string {
  return `฿${amount.toLocaleString("en-US")}`
}

export function formatUsdMonthly(thbAmount: number): string {
  const usd = Math.round(thbAmount / BUDGET_ESTIMATOR_THB_PER_USD)
  return `≈ US$${usd.toLocaleString("en-US")} / month`
}

export function buildLifestyleSummary(
  cityId: BudgetCityId,
  lifestyle: BudgetLifestyleId,
  household: BudgetHouseholdId,
): string {
  const city = budgetCities[cityId]
  const lifestyleLabel = budgetLifestyleLabels[lifestyle]
  const householdLabel = budgetHouseholdLabels[household]
  const features = budgetLifestyleFeatures[lifestyle]

  return `A ${lifestyleLabel} lifestyle in ${city.name} allows ${householdLabel} to ${features}.`
}

export function calculateBudgetEstimate(input: {
  cityId: BudgetCityId
  lifestyle: BudgetLifestyleId
  household: BudgetHouseholdId
}): BudgetEstimateResult {
  const city = budgetCities[input.cityId]
  const baseProfile = city.profiles[input.lifestyle]
  const adjusted = applyHouseholdMultipliers(baseProfile, input.household)

  const breakdown = budgetCategoryMeta.map((category) => ({
    id: category.id,
    label: category.label,
    emoji: category.emoji,
    amount: adjusted[category.id],
    percentage: 0,
  }))

  const rawTotal = breakdown.reduce((sum, item) => sum + item.amount, 0)
  const total = roundToNearestThousand(rawTotal)

  const breakdownWithPercentages = breakdown.map((item) => ({
    ...item,
    percentage: rawTotal > 0 ? Math.round((item.amount / rawTotal) * 100) : 0,
  }))

  return {
    total,
    usdMonthly: Math.round(total / BUDGET_ESTIMATOR_THB_PER_USD),
    breakdown: breakdownWithPercentages,
    cityInsight: city.insight,
    lifestyleSummary: buildLifestyleSummary(input.cityId, input.lifestyle, input.household),
  }
}
