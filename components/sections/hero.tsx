import { BadgeCheck, Clock, MessageCircle, Star } from "lucide-react"

import { ContactCtaGroup } from "@/components/cta"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { motionClass } from "@/lib/motion-classes"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { mobileReadableWidthClass, sectionEyebrowClass } from "@/lib/section-styles"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

const trustIndicators = [
  { icon: Clock, label: "Fast replies on LINE and WhatsApp" },
  { icon: BadgeCheck, label: "Tourist, business, and long-stay visas" },
  { icon: MessageCircle, label: "Guidance through the full process" },
] as const

function HeroVisual() {
  const cards = [
    {
      className: "left-0 top-4 z-10 w-[86%] sm:top-8 sm:w-[90%]",
      delayClass: motionClass.delay60,
      content: (
        <>
          <p className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-[11px]">
            Application status
          </p>
          <p className="mt-2 text-[13px] font-medium text-foreground sm:text-sm">
            Tourist visa · In review
          </p>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted sm:mt-4 sm:h-1.5">
            <div className="h-full w-2/3 rounded-full bg-foreground/80" />
          </div>
        </>
      ),
    },
    {
      className: "right-0 top-0 z-20 w-[80%] sm:w-[78%]",
      delayClass: motionClass.delay140,
      content: (
        <>
          <p className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-[11px]">
            Support
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-foreground sm:mt-3 sm:text-[13px]">
            Documents look good. I&apos;ll submit today and update you on LINE.
          </p>
        </>
      ),
    },
  ] as const

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[16rem] sm:max-w-md lg:mx-0 lg:max-w-none",
        motionClass.fadeUpMount,
        motionClass.delay60
      )}
      aria-hidden
    >
      <div className="relative h-[9.5rem] w-full sm:aspect-[4/3] sm:h-auto sm:min-h-[260px] lg:min-h-[300px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={cn(
              "absolute rounded-xl border border-border/50 bg-card p-3 sm:p-4",
              motionClass.fadeUpMount,
              card.delayClass,
              card.className
            )}
          >
            {card.content}
          </div>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div
        className={cn(
          "flex w-full flex-col",
          mobileReadableWidthClass,
          "lg:max-w-[36rem]",
          motionClass.fadeUpMount
        )}
      >
        <p className={sectionEyebrowClass}>Thailand visa specialists</p>

        <h1
          id={sectionHeadingIds.hero}
          className="mt-2 text-[1.375rem] font-semibold leading-[1.22] tracking-tight text-balance text-foreground sm:mt-2.5 sm:text-[1.75rem] md:text-[1.875rem] lg:text-[2rem] lg:leading-[1.15]"
        >
          <span className="block">{siteConfig.name}</span>
          <span className="mt-1 block text-[0.92em] font-medium text-foreground/90 sm:mt-1.5">
            {siteConfig.tagline}
          </span>
        </h1>

        <p className="mt-3 text-[15px] leading-[1.7] text-muted-foreground sm:mt-3.5 sm:leading-relaxed">
          {siteConfig.defaultDescription}
        </p>

        <ContactCtaGroup className="mt-5 sm:mt-6" />

        <div className="mt-6 border-t border-border/50 pt-5 sm:mt-7 sm:pt-6">
          <div
            className="flex flex-wrap items-center gap-x-3 gap-y-1"
            role="group"
            aria-label={`${siteConfig.name} is rated 4.9 out of 5 on Google from more than 120 reviews`}
          >
            <div className="flex items-center gap-1.5" aria-hidden>
              <div className="flex gap-px">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-3 fill-amber-500/75 text-amber-500/75"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold tabular-nums tracking-tight text-foreground">
                4.9
              </span>
            </div>
            <p className="text-[13px] leading-snug text-muted-foreground">
              on Google · 120+ reviews
            </p>
          </div>

          <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5">
            {trustIndicators.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-2.5 text-[13px] leading-snug text-muted-foreground"
              >
                <item.icon
                  className="mt-0.5 size-3.5 shrink-0 text-foreground/35"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <HeroVisual />
    </div>
  )
}

function HeroSection() {
  return (
    <Section
      id={sectionIds.hero}
      spacing="spacious"
      aria-labelledby={sectionHeadingIds.hero}
    >
      <Container>
        <Hero />
      </Container>
    </Section>
  )
}

export { Hero, HeroSection }
