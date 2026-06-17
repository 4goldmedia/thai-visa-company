import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const sectionVariants = cva("", {
  variants: {
    spacing: {
      /** Standard sections  -  premium vertical rhythm */
      default:
        "py-[var(--space-section-y)] sm:py-[calc(var(--space-section-y)+0.5rem)] md:py-[var(--space-section-y-lg)]",
      compact:
        "py-[var(--space-section-y-sm)] sm:py-[var(--space-section-y)]",
      spacious:
        "py-[var(--space-section-y-hero)] sm:py-[calc(var(--space-section-y)+0.25rem)] md:py-[var(--space-section-y-lg)] lg:py-[calc(var(--space-section-y-lg)+0.75rem)]",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
})

type SectionProps = React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    /** Render as the single child element while keeping section semantics */
    asChild?: boolean
  }

function Section({
  className,
  spacing = "default",
  asChild = false,
  ...props
}: SectionProps) {
  const Comp = asChild ? Slot.Root : "section"

  return (
    <Comp
      data-slot="section"
      data-spacing={spacing}
      className={cn(sectionVariants({ spacing }), className)}
      {...props}
    />
  )
}

export { Section, sectionVariants }
