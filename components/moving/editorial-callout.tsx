import { cn } from "@/lib/utils"

type EditorialCalloutProps = {
  children: React.ReactNode
  className?: string
}

function EditorialCallout({ children, className }: EditorialCalloutProps) {
  return (
    <p className={cn("moving-callout", className)}>{children}</p>
  )
}

export { EditorialCallout }
export type { EditorialCalloutProps }
