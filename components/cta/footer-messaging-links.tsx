import { getMessagingChannels } from "@/lib/contact"
import { cn } from "@/lib/utils"

const footerLinkClass = cn(
  "inline-flex min-h-8 max-w-full items-center rounded-md text-[13px] leading-snug text-muted-foreground",
  "transition-colors hover:text-foreground",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  "sm:text-sm",
)

/**
 * Footer list of LINE and WhatsApp links — env-based URLs.
 */
function FooterMessagingLinks() {
  const channels = getMessagingChannels()

  return (
    <>
      {channels.map((channel) => (
        <li key={channel.id}>
          <a
            href={channel.url}
            className={footerLinkClass}
            target="_blank"
            rel="noopener noreferrer"
            data-contact-channel={channel.id}
          >
            {channel.label}
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </li>
      ))}
    </>
  )
}

export { FooterMessagingLinks }
