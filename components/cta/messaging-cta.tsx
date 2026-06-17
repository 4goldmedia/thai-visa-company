import * as React from "react"

import { Button } from "@/components/ui/button"
import { getMessagingChannel, type MessagingChannelId } from "@/lib/contact"
import { cn } from "@/lib/utils"

export type MessagingCtaLabelMode = "full" | "short"

export type MessagingCtaProps = {
  channel: MessagingChannelId
  /** Button style  -  primary for LINE, outline for WhatsApp by convention */
  variant?: "primary" | "outline"
  /** Skip shadcn Button  -  for concierge surfaces with custom CSS */
  unstyled?: boolean
  /** Visible label: full (“Chat on LINE”) or short (“LINE”) */
  labelMode?: MessagingCtaLabelMode
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  children?: React.ReactNode
}

const opensNewTabHint = (
  <span className="sr-only"> (opens in new tab)</span>
)

/**
 * Accessible external CTA for LINE or WhatsApp  -  uses centralized `getMessagingChannel`.
 */
function MessagingCta({
  channel,
  variant = channel === "whatsapp" ? "primary" : "outline",
  unstyled = false,
  labelMode = "full",
  className,
  onClick,
  children,
}: MessagingCtaProps) {
  const config = getMessagingChannel(channel)
  const visibleLabel =
    labelMode === "short" ? config.shortLabel : config.label
  const ariaLabel = labelMode === "short" ? config.ariaLabel : undefined

  const anchor = (
    <a
      href={config.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      data-contact-channel={channel}
      onClick={onClick}
      className={unstyled ? className : undefined}
    >
      {children ?? (
        <>
          {visibleLabel}
          {opensNewTabHint}
        </>
      )}
    </a>
  )

  if (unstyled) {
    return anchor
  }

  return (
    <Button
      asChild
      variant={variant === "outline" ? "outline" : "default"}
      className={className}
    >
      {anchor}
    </Button>
  )
}

export { MessagingCta }
