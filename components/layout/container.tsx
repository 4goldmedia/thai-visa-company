import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const containerVariants = cva(
  "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10",
  {
    variants: {
      size: {
        /** Primary page width — sections, nav inner, grids */
        default: "max-w-[1280px]",
        /** Narrow prose / forms / focused copy */
        content: "max-w-[720px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

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
