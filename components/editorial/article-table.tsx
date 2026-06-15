import { cn } from "@/lib/utils"

type ArticleTableRow = {
  label?: string
  cells: ReadonlyArray<string>
}

type ArticleTableProps = {
  caption?: string
  columns: ReadonlyArray<string>
  rows: ReadonlyArray<ArticleTableRow>
  className?: string
}

function ArticleTable({ caption, columns, rows, className }: ArticleTableProps) {
  return (
    <figure className={cn("editorial-table-wrap", className)}>
      <table className="editorial-table">
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label ?? row.cells.join("-")}>
              {row.label ? (
                <th scope="row">{row.label}</th>
              ) : null}
              {row.cells.map((cell, index) => (
                <td key={`${row.label ?? "row"}-${index}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

/** Two-column key / value table (document lists, cost breakdowns) */
type ArticleKeyValueTableProps = {
  caption?: string
  titleColumn?: string
  valueColumn?: string
  rows: ReadonlyArray<{ key: string; value: string }>
  className?: string
}

function ArticleKeyValueTable({
  caption,
  titleColumn = "Item",
  valueColumn = "Details",
  rows,
  className,
}: ArticleKeyValueTableProps) {
  return (
    <ArticleTable
      caption={caption}
      columns={[titleColumn, valueColumn]}
      rows={rows.map((row) => ({ cells: [row.key, row.value] }))}
      className={className}
    />
  )
}

export { ArticleTable, ArticleKeyValueTable }
