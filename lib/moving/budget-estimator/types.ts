export const budgetCityIds = ["bangkok", "chiangMai", "phuket", "huaHin"] as const
export type BudgetCityId = (typeof budgetCityIds)[number]

export const budgetLifestyleIds = ["budget", "comfortable", "premium"] as const
export type BudgetLifestyleId = (typeof budgetLifestyleIds)[number]

export const budgetHouseholdIds = ["single", "couple", "family"] as const
export type BudgetHouseholdId = (typeof budgetHouseholdIds)[number]

export const budgetCategoryIds = [
  "housing",
  "food",
  "utilities",
  "transport",
  "healthcare",
  "entertainment",
  "travel",
] as const
export type BudgetCategoryId = (typeof budgetCategoryIds)[number]

export type BudgetCategoryCosts = Record<BudgetCategoryId, number>

export type BudgetLifestyleProfile = BudgetCategoryCosts

export type BudgetCityData = {
  id: BudgetCityId
  name: string
  insight: string
  profiles: Record<BudgetLifestyleId, BudgetLifestyleProfile>
}

export type BudgetHouseholdMultipliers = Record<BudgetCategoryId, number>

export type BudgetBreakdownItem = {
  id: BudgetCategoryId
  label: string
  emoji: string
  amount: number
  percentage: number
}

export type BudgetEstimateResult = {
  total: number
  usdMonthly: number
  breakdown: ReadonlyArray<BudgetBreakdownItem>
  cityInsight: string
  lifestyleSummary: string
}
