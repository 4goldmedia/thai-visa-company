import { SectionHeading } from "@/components/layout/section-heading"
import { cn } from "@/lib/utils"

type MovingSectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  /** @deprecated Use `subtitle` */
  intro?: string
  headingId: string
  bridge?: string
  tone?: "light" | "dark"
  align?: "left" | "center"
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  eyebrowClassName?: string
}

function mergeEditorialIntro(parts: {
  intro?: string
  description?: string
  quickAnswer?: string
}): string {
  if (parts.intro) {
    return parts.intro
  }

  return [parts.description, parts.quickAnswer].filter(Boolean).join(" ")
}

function buildDescription(
  primary: string,
  bridge?: string,
): string | undefined {
  const parts = [primary, bridge].filter(Boolean)
  return parts.length > 0 ? parts.join(" ") : undefined
}

function MovingSectionHeader({
  eyebrow,
  title,
  subtitle,
  intro,
  headingId,
  bridge,
  tone = "light",
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
}: MovingSectionHeaderProps) {
  const isDark = tone === "dark"

  return (
    <SectionHeading
      id={headingId}
      eyebrow={eyebrow}
      title={title}
      description={buildDescription(subtitle ?? intro ?? "", bridge)}
      align={align}
      className={className}
      titleClassName={cn("max-w-3xl", isDark && "text-inherit", titleClassName)}
      descriptionClassName={cn(
        "max-w-2xl",
        isDark && "text-[color-mix(in_srgb,currentColor_72%,transparent)]",
        descriptionClassName,
      )}
      eyebrowClassName={cn(
        isDark && "text-[color-mix(in_srgb,currentColor_68%,transparent)]",
        eyebrowClassName,
      )}
    />
  )
}

export { MovingSectionHeader, mergeEditorialIntro }
export type { MovingSectionHeaderProps }
