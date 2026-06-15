import Link from "next/link"

import { ctaHref, ctaLabels } from "@/lib/cta"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"

type ArticleConsultationBandProps = {
  title?: string
  description?: string
  articleSlug?: string
}

function ArticleConsultationBand({
  title = "Need help with your application?",
  description = "Share your situation and we will outline clear next steps for your visa file.",
  articleSlug,
}: ArticleConsultationBandProps) {
  return (
    <aside
      className="mt-10 border-t border-border/40 pt-8 sm:mt-12 sm:pt-10"
      aria-label="Consultation"
    >
      <h2 className="text-[1.125rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.25rem]">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-[15px] leading-[1.7] text-muted-foreground">
        {description}
      </p>
      <Link
        href={ctaHref.requestConsultation}
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-button)] bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        {...analyticsDataAttributes({
          ctaId: analyticsCtaIds.bookConsultation,
          surface: "article",
          ctaLabel: ctaLabels.requestConsultation,
          articleSlug,
        })}
      >
        {ctaLabels.requestConsultation}
      </Link>
    </aside>
  )
}

export { ArticleConsultationBand }
