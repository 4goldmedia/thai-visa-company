import { ComparisonTable } from "@/components/mdx/comparison-table"

type ArticleComparisonProps = React.ComponentProps<typeof ComparisonTable>

/** Editorial wrapper  -  same comparison engine, publication context */
function ArticleComparison(props: ArticleComparisonProps) {
  return <ComparisonTable {...props} />
}

export { ArticleComparison }
