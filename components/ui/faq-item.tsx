"use client"

import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cardShellClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type FAQItemProps = {
  /** Unique value for accordion state (required when used inside Accordion) */
  value: string
  /** FAQ question */
  question: string
  /** FAQ answer — concise, readable copy */
  answer: string
  className?: string
  triggerClassName?: string
  contentClassName?: string
}

function FAQItem({
  value,
  question,
  answer,
  className,
  triggerClassName,
  contentClassName,
}: FAQItemProps) {
  return (
    <AccordionItem
      value={value}
      className={cn("border-border/50 not-last:border-b", className)}
    >
      <AccordionTrigger
        className={cn(
          "min-h-11 items-center gap-3 rounded-none border-0 py-3 text-left",
          "text-[15px] font-medium leading-[1.4] text-foreground",
          "hover:bg-transparent hover:text-foreground/90 hover:no-underline",
          "focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-0",
          "sm:min-h-12 sm:py-4",
          triggerClassName
        )}
      >
        {question}
      </AccordionTrigger>
      <AccordionContent
        className={cn("text-muted-foreground", contentClassName)}
      >
        <p className="pb-3 text-[14px] leading-[1.75] sm:pb-3.5 sm:text-[15px] sm:leading-[1.65]">
          {answer}
        </p>
      </AccordionContent>
    </AccordionItem>
  )
}

type FAQAccordionProps = {
  children: React.ReactNode
  className?: string
  /** Initially open item value — omit for a fully collapsed list */
  defaultValue?: string
  /** Associates the accordion with the section heading */
  "aria-labelledby"?: string
}

function FAQAccordion({
  className,
  children,
  defaultValue,
  "aria-labelledby": ariaLabelledBy,
}: FAQAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultValue}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        cardShellClass,
        "w-full",
        className
      )}
    >
      {children}
    </Accordion>
  )
}

export { FAQItem, FAQAccordion }
export type { FAQItemProps, FAQAccordionProps }
