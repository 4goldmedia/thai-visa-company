import type { ReactNode } from "react"

import {
  visaEditorialHeadingClass,
  visaEditorialIntroOffsetClass,
} from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaEditorialHeadingProps = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

function VisaEditorialHeading({
  id,
  eyebrow,
  title,
  description,
  className,
}: VisaEditorialHeadingProps) {
  return (
    <header className={cn(visaEditorialHeadingClass, className)}>
      {eyebrow ? (
        <p className="visa-editorial-heading__label">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="visa-editorial-heading__title">
        {title}
      </h2>
      {description ? (
        <p className="visa-editorial-heading__description">{description}</p>
      ) : null}
    </header>
  )
}

/** Space between section intro block and main content (48px) */
function VisaEditorialContent({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn(visaEditorialIntroOffsetClass, className)}>{children}</div>
  )
}

export { VisaEditorialHeading, VisaEditorialContent }
export type { VisaEditorialHeadingProps }
