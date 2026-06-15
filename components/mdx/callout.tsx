import {
  EditorialCallout,
  type EditorialCalloutVariant,
} from "@/components/visa-editorial/editorial-callout"

type CalloutProps = {
  variant?: EditorialCalloutVariant
  title?: string
  children: React.ReactNode
  className?: string
}

/** MDX callout — wraps the shared editorial callout variants */
function Callout({
  variant = "good-to-know",
  title,
  children,
  className,
}: CalloutProps) {
  return (
    <EditorialCallout variant={variant} title={title} className={className}>
      {children}
    </EditorialCallout>
  )
}

export { Callout }
