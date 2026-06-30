"use client"

import { useEffect, useRef, useState } from "react"
import {
  Baby,
  BadgeDollarSign,
  Building2,
  Gem,
  Info,
  Palmtree,
  Trees,
  User,
  Users,
  Wallet,
  Waves,
  type LucideIcon,
} from "lucide-react"

import {
  calculateBudgetEstimate,
  formatBaht,
  formatUsdMonthly,
} from "@/lib/moving/budget-estimator/calculate"
import { budgetCityIds } from "@/lib/moving/budget-estimator/types"
import type {
  BudgetCityId,
  BudgetHouseholdId,
  BudgetLifestyleId,
} from "@/lib/moving/budget-estimator/types"
import { cn } from "@/lib/utils"

type SegmentedOption<T extends string> = {
  id: T
  label: string
  icon: LucideIcon
}

const cityOptions: ReadonlyArray<SegmentedOption<BudgetCityId>> = [
  { id: "bangkok", label: "Bangkok", icon: Building2 },
  { id: "chiangMai", label: "Chiang Mai", icon: Trees },
  { id: "phuket", label: "Phuket", icon: Palmtree },
  { id: "huaHin", label: "Hua Hin", icon: Waves },
]

const lifestyleOptions: ReadonlyArray<SegmentedOption<BudgetLifestyleId>> = [
  { id: "budget", label: "Budget", icon: Wallet },
  { id: "comfortable", label: "Comfortable", icon: BadgeDollarSign },
  { id: "premium", label: "Premium", icon: Gem },
]

const householdOptions: ReadonlyArray<SegmentedOption<BudgetHouseholdId>> = [
  { id: "single", label: "Single", icon: User },
  { id: "couple", label: "Couple", icon: Users },
  { id: "family", label: "Family", icon: Baby },
]

type MonthlyBudgetEstimatorProps = {
  controls: {
    city: string
    lifestyle: string
    household: string
  }
  results: {
    totalLabel: string
    usdLabel: string
    breakdownTitle: string
    cityInsightTitle: string
    lifestyleSummaryTitle: string
  }
  disclaimer: string
  className?: string
}

function useAnimatedNumber(target: number, duration = 450): number {
  const [value, setValue] = useState(target)
  const previous = useRef(target)

  useEffect(() => {
    const from = previous.current
    const to = target
    if (from === to) return

    previous.current = to
    const start = performance.now()
    let frame = 0

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(from + (to - from) * eased))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [target, duration])

  return value
}

type SegmentedControlProps<T extends string> = {
  label: string
  options: ReadonlyArray<SegmentedOption<T>>
  value: T
  onChange: (value: T) => void
  columns?: 2 | 3 | 4
}

function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
  columns = 2,
}: SegmentedControlProps<T>) {
  return (
    <fieldset className="moving-budget-estimator__control">
      <legend className="moving-budget-estimator__control-label">{label}</legend>
      <div
        className={cn(
          "moving-budget-estimator__segments",
          columns === 3 && "moving-budget-estimator__segments--triple",
          columns === 4 && "moving-budget-estimator__segments--quad",
        )}
        role="radiogroup"
        aria-label={label}
      >
        {options.map((option) => {
          const Icon = option.icon
          const isActive = option.id === value

          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              className={cn(
                "moving-budget-estimator__segment",
                isActive && "moving-budget-estimator__segment--active",
              )}
              onClick={() => onChange(option.id)}
            >
              <Icon className="moving-budget-estimator__segment-icon" aria-hidden size={18} strokeWidth={1.75} />
              <span>{option.label}</span>
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

function MonthlyBudgetEstimator({
  controls,
  results,
  disclaimer,
  className,
}: MonthlyBudgetEstimatorProps) {
  const [cityId, setCityId] = useState<BudgetCityId>("chiangMai")
  const [lifestyle, setLifestyle] = useState<BudgetLifestyleId>("comfortable")
  const [household, setHousehold] = useState<BudgetHouseholdId>("single")

  const estimate = calculateBudgetEstimate({ cityId, lifestyle, household })
  const animatedTotal = useAnimatedNumber(estimate.total)
  const [contentKey, setContentKey] = useState(0)

  useEffect(() => {
    setContentKey((current) => current + 1)
  }, [cityId, lifestyle, household])

  return (
    <div className={cn("moving-budget-estimator", className)}>
      <div className="moving-budget-estimator__layout">
        <div className="moving-budget-estimator__controls">
          <SegmentedControl
            label={controls.city}
            options={cityOptions}
            value={cityId}
            onChange={setCityId}
            columns={2}
          />
          <SegmentedControl
            label={controls.lifestyle}
            options={lifestyleOptions}
            value={lifestyle}
            onChange={setLifestyle}
            columns={3}
          />
          <SegmentedControl
            label={controls.household}
            options={householdOptions}
            value={household}
            onChange={setHousehold}
            columns={3}
          />
        </div>

        <div className="moving-budget-estimator__results" key={contentKey}>
          <article className="moving-budget-estimator__total-card" aria-live="polite">
            <p className="moving-budget-estimator__total-label">{results.totalLabel}</p>
            <p className="moving-budget-estimator__total-value">{formatBaht(animatedTotal)}</p>
            <p className="moving-budget-estimator__usd-label">{results.usdLabel}</p>
            <p className="moving-budget-estimator__usd-value">{formatUsdMonthly(estimate.total)}</p>
          </article>

          <div className="moving-budget-estimator__breakdown">
            <h3 className="moving-budget-estimator__breakdown-title">{results.breakdownTitle}</h3>
            <div className="moving-budget-estimator__breakdown-grid">
              {estimate.breakdown.map((item) => (
                <article key={item.id} className="moving-budget-estimator__breakdown-item">
                  <div className="moving-budget-estimator__breakdown-head">
                    <span className="moving-budget-estimator__breakdown-emoji" aria-hidden>
                      {item.emoji}
                    </span>
                    <span className="moving-budget-estimator__breakdown-name">{item.label}</span>
                    <span className="moving-budget-estimator__breakdown-amount">
                      {formatBaht(item.amount)}
                    </span>
                  </div>
                  <div className="moving-budget-estimator__breakdown-meta">
                    <span className="moving-budget-estimator__breakdown-percent">
                      {item.percentage}%
                    </span>
                    <div
                      className="moving-budget-estimator__breakdown-bar"
                      role="presentation"
                      aria-hidden
                    >
                      <span
                        className="moving-budget-estimator__breakdown-bar-fill"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="moving-budget-estimator__insights">
            <div className="moving-budget-estimator__insight">
              <h3 className="moving-budget-estimator__insight-title">{results.cityInsightTitle}</h3>
              <p className="moving-budget-estimator__insight-body">{estimate.cityInsight}</p>
            </div>
            <div className="moving-budget-estimator__insight">
              <h3 className="moving-budget-estimator__insight-title">
                {results.lifestyleSummaryTitle}
              </h3>
              <p className="moving-budget-estimator__insight-body">{estimate.lifestyleSummary}</p>
            </div>
          </div>
        </div>
      </div>

      <aside className="moving-budget-estimator__disclaimer" aria-label="Estimator disclaimer">
        <Info className="moving-budget-estimator__disclaimer-icon" aria-hidden size={20} strokeWidth={1.75} />
        <p>{disclaimer}</p>
      </aside>
    </div>
  )
}

export { MonthlyBudgetEstimator }
export type { MonthlyBudgetEstimatorProps }
