import { Check } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { contactPageContent } from "@/lib/contact/page-content"
import { contactSectionIds } from "@/lib/contact/section-ids"
import { cardSurfaceClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const { trust } = contactPageContent

function ContactTrustStrip() {
  return (
    <Section
      id={contactSectionIds.trust}
      spacing="compact"
      aria-labelledby={contactSectionIds.trustHeading}
      className="border-t border-border/50 bg-muted/10"
    >
      <Container size="content">
        <div className={cn(cardSurfaceClass, "rounded-xl")}>
          <h2
            id={contactSectionIds.trustHeading}
            className="text-[13px] font-medium text-foreground sm:text-sm"
          >
            {trust.title}
          </h2>

          <ul className="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-3.5">
            {trust.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[14px] leading-[1.55] text-muted-foreground sm:text-[15px] sm:leading-relaxed"
              >
                <Check
                  className="mt-0.5 size-4 shrink-0 text-foreground/50"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

export { ContactTrustStrip }
