import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Site container sizes  -  align with `docs/design/layout-system.md`.
 *
 * - `site` / `default`  -  1280px shell (homepage, visa, blog hub, article frame)
 * - `prose`  -  760px narrow column (legal, privacy, focused forms)
 * - `wide`  -  alias of site (visa editorial sections)
 * - `content`  -  @deprecated alias of `site`; use `prose` for narrow pages
 */
const containerVariants = cva("mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10", {
  variants: {
    size: {
      site: "max-w-[var(--width-site,80rem)]",
      default: "max-w-[var(--width-site,80rem)]",
      wide: "max-w-[var(--width-site,80rem)]",
      /** @deprecated Use `site`  -  kept for gradual migration */
      content: "max-w-[var(--width-site,80rem)]",
      prose: "max-w-[var(--width-narrow,47.5rem)]",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

type ContainerProps = React.ComponentProps<"div"> &
  VariantProps<typeof containerVariants> & {
    /** Render as the single child element (e.g. `main`, `section`) */
    asChild?: boolean
  }

function Container({
  className,
  size = "default",
  asChild = false,
  ...props
}: ContainerProps) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="container"
      data-size={size}
      className={cn(containerVariants({ size }), className)}
      {...props}
    />
  )
}

export { Container, containerVariants }
