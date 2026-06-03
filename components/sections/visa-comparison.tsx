import Link from "next/link"

import { SectionReveal } from "@/components/motion"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type { ContentVisaComparisonSection } from "@/lib/content/types"
import { visaComparisonShellClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaComparisonSectionProps = ContentVisaComparisonSection & {
  sectionId: string
  headingId: string
  highlightColumnId: string
  className?: string
}

function VisaComparisonSection({
  sectionId,
  headingId,
  highlightColumnId,
  title = "Compare visa options",
  description,
  eyebrow,
  columns,
  rows,
  footnote,
  className,
}: VisaComparisonSectionProps) {
  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
      className={className}
    >
      <SectionReveal>
        <VisaEditorialHeading
          id={headingId}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <VisaEditorialContent>
          <div className={visaComparisonShellClass}>
            <div className="visa-comparison-shell__scroll">
              <table className="visa-comparison-table">
                <thead>
                  <tr>
                    <th scope="col" className="visa-comparison-table__corner">
                      <span className="sr-only">Criteria</span>
                    </th>
                    {columns.map((column) => (
                      <th
                        key={column.id}
                        scope="col"
                        className={cn(
                          "visa-comparison-table__cell",
                          column.id === highlightColumnId &&
                            "visa-comparison-table__cell--active",
                        )}
                      >
                        {column.href ? (
                          <Link
                            href={column.href}
                            className="visa-comparison-table__link"
                          >
                            {column.label}
                          </Link>
                        ) : (
                          column.label
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="visa-comparison-table__row-label">
                        {row.label}
                      </th>
                      {row.cells.map((cell, index) => {
                        const column = columns[index]
                        return (
                          <td
                            key={`${row.label}-${column?.id ?? index}`}
                            className={cn(
                              "visa-comparison-table__cell",
                              column?.id === highlightColumnId &&
                                "visa-comparison-table__cell--active",
                            )}
                          >
                            {cell}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="visa-comparison-mobile">
              {rows.map((row) => (
                <article key={row.label} className="visa-comparison-mobile-card">
                  <h3 className="visa-comparison-mobile-card__criteria">
                    {row.label}
                  </h3>
                  <dl className="visa-comparison-mobile-card__row">
                    {columns.map((column, index) => (
                      <div
                        key={column.id}
                        className={cn(
                          "visa-comparison-mobile-card__option",
                          column.id === highlightColumnId &&
                            "visa-comparison-mobile-card__option--active",
                        )}
                      >
                        <dt>{column.label}</dt>
                        <dd>{row.cells[index]}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </div>

          {footnote ? (
            <p className="visa-comparison-footnote">{footnote}</p>
          ) : null}
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaComparisonSection }
export type { VisaComparisonSectionProps }
