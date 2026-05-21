import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  contactLinks,
  ctaHref,
  ctaLabels,
} from "@/lib/cta"
import {
  ctaButtonPrimaryClass,
  ctaButtonSecondaryClass,
  ctaStackClass,
  ctaTertiaryLinkClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type ContactCtaGroupProps = {
  /** Show tertiary link to visa services */
  showExplore?: boolean
  className?: string
}

function ContactCtaGroup({
  showExplore = true,
  className,
}: ContactCtaGroupProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className={ctaStackClass}>
        <Button asChild className={ctaButtonPrimaryClass}>
          <a
            href={contactLinks.line}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabels.line}
          </a>
        </Button>
        <Button asChild variant="outline" className={ctaButtonSecondaryClass}>
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabels.whatsapp}
          </a>
        </Button>
      </div>

      {showExplore ? (
        <Link href={ctaHref.exploreVisas} className={ctaTertiaryLinkClass}>
          {ctaLabels.exploreVisas}
          <ArrowRight
            className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden
          />
        </Link>
      ) : null}
    </div>
  )
}

export { ContactCtaGroup }
export type { ContactCtaGroupProps }
