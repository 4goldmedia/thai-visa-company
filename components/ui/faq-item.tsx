"use client"

import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

type FAQItemProps = {
  /** Unique value for accordion state (required when used inside Accordion) */
  value: string
  /** FAQ question */
  question: string
  /** FAQ answer  -  concise, readable copy */
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
    <AccordionItem value={value} className={cn(className)}>
      <AccordionTrigger
        indicator="plus-minus"
        className={cn("faq-accordion__trigger", triggerClassName)}
      >
        <span className="faq-accordion__question">{question}</span>
      </AccordionTrigger>
      <AccordionContent
        className={cn("faq-accordion__content", contentClassName)}
      >
        <p className="faq-accordion__answer">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  )
}

type FAQAccordionProps = {
  children: React.ReactNode
  className?: string
  /** Initially open item value  -  omit for a fully collapsed list */
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
      className={cn("faq-accordion", className)}
    >
      {children}
    </Accordion>
  )
}

export { FAQItem, FAQAccordion }
export type { FAQItemProps, FAQAccordionProps }
