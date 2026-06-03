import type { ReactNode } from "react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import {
  visaEditorialSectionClass,
  visaPageClass,
} from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaEditorialWidth = "reading" | "wide"

type VisaEditorialSectionProps = {
  id: string
  /** Stable id for `aria-labelledby` */
  labelledBy?: string
  width?: VisaEditorialWidth
  /** Muted band for visual rhythm */
  band?: boolean
  className?: string
  children: ReactNode
}

function VisaEditorialSection({
  id,
  labelledBy,
  width = "wide",
  band = false,
  className,
  children,
}: VisaEditorialSectionProps) {
  return (
    <Section
      id={id}
      spacing="compact"
      aria-labelledby={labelledBy}
      className={cn(
        visaPageClass,
        visaEditorialSectionClass,
        band && "visa-editorial-section--band",
        className,
      )}
    >
      <Container size={width === "reading" ? "content" : "wide"}>{children}</Container>
    </Section>
  )
}

export { VisaEditorialSection }
export type { VisaEditorialSectionProps, VisaEditorialWidth }
