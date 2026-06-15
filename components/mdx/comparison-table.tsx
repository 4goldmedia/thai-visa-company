import Link from "next/link"

import { visaComparisonShellClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type ComparisonColumn = {
  id: string
  label: string
  href?: string
}

type ComparisonRow = {
  label: string
  cells: ReadonlyArray<string>
}

type ComparisonTableProps = {
  columns: ReadonlyArray<ComparisonColumn>
  rows: ReadonlyArray<ComparisonRow>
  highlightColumnId?: string
  caption?: string
  className?: string
}

function ComparisonTable({
  columns,
  rows,
  highlightColumnId,
  caption,
  className,
}: ComparisonTableProps) {
  return (
    <figure className={cn("my-8 sm:my-10", className)}>
      <div className={visaComparisonShellClass}>
        <div className="visa-comparison-shell__scroll">
          <table className="visa-comparison-table">
            {caption ? <caption className="sr-only">{caption}</caption> : null}
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
                      <Link href={column.href} className="visa-comparison-table__link">
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
      </div>
    </figure>
  )
}

export { ComparisonTable }
