import Link from "next/link"
import { MovingSectionHeader } from "@/components/moving/moving-section-header"
import {
  BadgeDollarSign,
  Gem,
  HeartPulse,
  House,
  Martini,
  ShoppingBasket,
  Train,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react"

import type {
  MovingCostCategory,
  MovingCostSummary,
  MovingCostTier,
  MovingEditorialLink,
} from "@/lib/moving/types"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const tierIcons: Record<string, LucideIcon> = {
  modest: Wallet,
  comfortable: BadgeDollarSign,
  premium: Gem,
}

const categoryIcons: Record<string, LucideIcon> = {
  "housing-rent": House,
  utilities: Zap,
  groceries: ShoppingBasket,
  transportation: Train,
  healthcare: HeartPulse,
  entertainment: Martini,
}

type EditorialMovingCostProps = {
  eyebrow: string
  title: string
  intro: string
  headingId: string
  tiers: ReadonlyArray<MovingCostTier>
  categories: ReadonlyArray<MovingCostCategory>
  featuredCategoryIds: ReadonlyArray<string>
  summary: MovingCostSummary
  disclaimer: string
  links?: ReadonlyArray<MovingEditorialLink>
  className?: string
}

function BudgetTierCard({ tier }: { tier: MovingCostTier }) {
  const Icon = tierIcons[tier.id] ?? Wallet

  return (
    <article
      className={cn(
        "moving-cost-dark__tier",
        tier.id === "comfortable" && "moving-cost-dark__tier--highlight",
      )}
    >
      <Icon className="moving-cost-dark__icon" aria-hidden size={28} strokeWidth={1.75} />
      <p className="moving-cost-dark__tier-value">{tier.monthlyRange}</p>
      <p className="moving-cost-dark__tier-label">{tier.label}</p>
      <p className="moving-cost-dark__tier-detail">{tier.housing}</p>
    </article>
  )
}

function CategoryCard({ category }: { category: MovingCostCategory }) {
  const Icon = categoryIcons[category.id] ?? House
  const displayLabel = category.label.replace(" / rent", "").replace("Housing / rent", "Housing")

  return (
    <article className="moving-cost-dark__category">
      <Icon className="moving-cost-dark__icon" aria-hidden size={22} strokeWidth={1.75} />
      <h3 className="moving-cost-dark__category-title">{displayLabel}</h3>
      <p className="moving-cost-dark__category-value">{category.comfortable}</p>
      <p className="moving-cost-dark__category-tier">Comfortable tier · monthly</p>
      {category.note ? (
        <p className="moving-cost-dark__category-note">{category.note}</p>
      ) : null}
    </article>
  )
}

function EditorialMovingCost({
  eyebrow,
  title,
  intro,
  headingId,
  tiers,
  categories,
  featuredCategoryIds,
  summary,
  disclaimer,
  links,
  className,
}: EditorialMovingCostProps) {
  const featuredCategories = featuredCategoryIds
    .map((id) => categories.find((category) => category.id === id))
    .filter((category): category is MovingCostCategory => category !== undefined)

  return (
    <div className={cn("moving-cost-dark", className)}>
      <MovingSectionHeader
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        headingId={headingId}
        tone="dark"
      />

      <div
        className={cn("moving-cost-dark__tiers", sectionContentOffsetClass)}
        aria-label="Monthly budget tiers"
      >
        {tiers.map((tier) => (
          <BudgetTierCard key={tier.id} tier={tier} />
        ))}
      </div>

      <div className="moving-cost-dark__breakdown">
        <h3 className="moving-cost-dark__breakdown-title">Monthly cost breakdown</h3>
        <div className="moving-cost-dark__categories" aria-label="Monthly cost by category">
          {featuredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      <aside className="moving-cost-dark__summary" aria-labelledby="moving-cost-summary-title">
        <h3 id="moving-cost-summary-title" className="moving-cost-dark__summary-title">
          {summary.title}
        </h3>
        <ul className="moving-cost-dark__summary-list">
          {summary.items.map((item) => (
            <li key={item.label}>
              <span className="moving-cost-dark__summary-label">{item.label}</span>
              <span className="moving-cost-dark__summary-value">{item.value}</span>
            </li>
          ))}
        </ul>
        <p className="moving-cost-dark__summary-note">{summary.note}</p>
      </aside>

      <footer className="moving-cost-dark__footer">
        <p className="moving-cost-dark__disclaimer">{disclaimer}</p>
        {links && links.length > 0 ? (
          <Link href={links[0].href} className="moving-cost-dark__link">
            {links[0].label}
          </Link>
        ) : null}
      </footer>
    </div>
  )
}

export { EditorialMovingCost, tierIcons, categoryIcons }
export type { EditorialMovingCostProps }
