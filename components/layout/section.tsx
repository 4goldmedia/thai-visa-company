import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const sectionVariants = cva("", {
  variants: {
    spacing: {
      /** Standard homepage sections — tighter on small screens */
      default: "py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24",
      /** FAQs, closing CTA */
      compact: "py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20",
      /** Hero */
      spacious: "py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28",
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
