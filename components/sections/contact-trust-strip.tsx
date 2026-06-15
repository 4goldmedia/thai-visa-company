import { Check } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { contactPageContent } from "@/lib/contact/page-content"
import { contactSectionIds } from "@/lib/contact/section-ids"
import { cardSurfaceClass, trustIconClass, trustListItemClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const { trust } = contactPageContent

function ContactTrustStrip() {
  return (
    <Section
      id={contactSectionIds.trust}
      spacing="compact"
      aria-labelledby={contactSectionIds.trustHeading}
      className="border-t border-border/40 bg-muted/[0.03]"
    >
      <Container>
        <div className={cardSurfaceClass}>
          <h2
            id={contactSectionIds.trustHeading}
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            {trust.title}
          </h2>

          <ul className="mt-4 flex flex-col gap-3 sm:mt-5">
            {trust.items.map((item) => (
              <li key={item} className={trustListItemClass}>
                <Check className={trustIconClass} aria-hidden />
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
