import type { MovingRetirementBudgetProfile } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

type EditorialRetirementBudgetProps = {
  title: string
  profiles: ReadonlyArray<MovingRetirementBudgetProfile>
  className?: string
}

function EditorialRetirementBudget({ title, profiles, className }: EditorialRetirementBudgetProps) {
  return (
    <section className={cn("moving-retirement-budget", className)} aria-labelledby="moving-retirement-budget-title">
      <h3 id="moving-retirement-budget-title" className="moving-retirement-budget__title">
        {title}
      </h3>
      <div className="moving-retirement-budget__grid">
        {profiles.map((profile) => (
          <article key={profile.id} className="moving-retirement-budget__profile">
            <h4 className="moving-retirement-budget__profile-label">{profile.label}</h4>
            <dl className="moving-retirement-budget__lines">
              {profile.lines.map((line) => (
                <div key={line.label}>
                  <dt>{line.label}</dt>
                  <dd>{line.value}</dd>
                </div>
              ))}
            </dl>
            <p className="moving-retirement-budget__total">
              <span className="moving-retirement-budget__total-label">Estimated monthly spend</span>
              <span className="moving-retirement-budget__total-value">{profile.total}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export { EditorialRetirementBudget }
export type { EditorialRetirementBudgetProps }
