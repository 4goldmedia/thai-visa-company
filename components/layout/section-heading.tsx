import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { sectionTitleClass, sectionTitleLgClass } from "@/lib/design/typography"
import {
  sectionDescriptionClass,
  sectionEyebrowClass,
  sectionHeadingGapClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const sectionHeadingVariants = cva(
  "flex w-full flex-col",
  {
    variants: {
      align: {
        left: "items-start text-left",
        center: "items-center text-center",
      },
    },
    defaultVariants: {
      align: "left",
    },
  }
)

const titleVariants = cva("", {
    variants: {
      align: {
        left: "max-w-2xl",
        center: "mx-auto max-w-2xl",
      },
      size: {
        default: sectionTitleClass,
        lg: sectionTitleLgClass,
      },
    },
    defaultVariants: {
      align: "left",
      size: "default",
    },
  }
)

const descriptionVariants = cva("text-pretty", {
  variants: {
    align: {
      left: "",
      center: "mx-auto",
    },
  },
  defaultVariants: {
    align: "left",
  },
})

type SectionHeadingElement = "h1" | "h2" | "h3"

type SectionHeadingProps = {
  /** Optional eyebrow / label above the headline */
  eyebrow?: string
  /** Primary section headline */
  title: string
  /** Supporting description below the headline */
  description?: string
  /** Heading element — default `h2` for in-page sections */
  as?: SectionHeadingElement
  /** Stable id for `aria-labelledby` on parent `<section>` */
  id?: string
  /**
   * Wrapper element — use `div` when composing with sibling controls
   * (e.g. rating summary) to avoid nested `<header>` elements.
   */
  wrapper?: "header" | "div"
  className?: string
  eyebrowClassName?: string
  titleClassName?: string
  descriptionClassName?: string
} & VariantProps<typeof sectionHeadingVariants> &
  VariantProps<typeof titleVariants>

function SectionHeading({
  eyebrow,
  title,
  description,
  as: HeadingTag = "h2",
  id,
  wrapper: WrapperTag = "header",
  align = "left",
  size = "default",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const generatedId = React.useId()
  const headingId = id ?? generatedId

  return (
    <WrapperTag
      data-slot="section-heading"
      data-align={align}
      className={cn(
        sectionHeadingVariants({ align }),
        sectionHeadingGapClass,
        className
      )}
    >
      {eyebrow ? (
        <p className={cn(sectionEyebrowClass, eyebrowClassName)}>{eyebrow}</p>
      ) : null}

      <HeadingTag
        id={headingId}
        className={cn(titleVariants({ align, size }), titleClassName)}
      >
        {title}
      </HeadingTag>

      {description ? (
        <p
          className={cn(
            descriptionVariants({ align }),
            sectionDescriptionClass,
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </WrapperTag>
  )
}

export {
  SectionHeading,
  sectionHeadingVariants,
  titleVariants,
  descriptionVariants,
}
export type { SectionHeadingProps, SectionHeadingElement }
