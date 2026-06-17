import { MessagingPlatformAction } from "@/components/cta/messaging-platform-action"
import { signatureCtaGroupClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type SignatureMessagingCtaGroupProps = {
  className?: string
  onNavigate?: () => void
}

/**
 * Canonical LINE (secondary) + WhatsApp (primary) pair  -  matches homepage hero contact box.
 */
function SignatureMessagingCtaGroup({
  className,
  onNavigate,
}: SignatureMessagingCtaGroupProps) {
  return (
    <div className={cn(signatureCtaGroupClass, className)}>
      <MessagingPlatformAction
        channel="line"
        density="hero"
        onNavigate={onNavigate}
      />
      <MessagingPlatformAction
        channel="whatsapp"
        density="hero"
        onNavigate={onNavigate}
      />
    </div>
  )
}

export { SignatureMessagingCtaGroup }
