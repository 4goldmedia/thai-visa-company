import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { MessagingCtaPair } from "@/components/cta/messaging-cta-pair"
import { ctaHref, ctaLabels } from "@/lib/cta"
import { ctaTertiaryLinkClass } from "@/lib/section-styles"
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
      <MessagingCtaPair layout="stack" />

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
