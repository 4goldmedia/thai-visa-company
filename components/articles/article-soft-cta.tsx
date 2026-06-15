import { ContactCtaGroup } from "@/components/cta"
import { cardSurfaceClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type ArticleSoftCtaProps = {
  title: string
  description: string
  articleSlug: string
  className?: string
}

function ArticleSoftCta({
  title,
  description,
  articleSlug,
  className,
}: ArticleSoftCtaProps) {
  return (
    <aside
      className={cn(cardSurfaceClass, "my-8 p-5 sm:my-10 sm:p-6", className)}
      aria-label="Consultation prompt"
    >
      <h2 className="text-[15px] font-medium leading-snug text-foreground sm:text-base">
        {title}
      </h2>
      <p className="mt-2 text-[14px] leading-[1.65] text-muted-foreground">
        {description}
      </p>
      <div className="mt-4">
        <ContactCtaGroup
          showExplore={false}
          analyticsSurface="article"
          analyticsCtaId="article_soft_cta_contact"
          articleSlug={articleSlug}
        />
      </div>
    </aside>
  )
}

export { ArticleSoftCta }
