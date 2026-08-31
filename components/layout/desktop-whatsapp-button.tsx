"use client"

import * as React from "react"
import Image from "next/image"
import { X } from "lucide-react"

import { WhatsAppIcon } from "@/components/icons/platform-icons"

const WHATSAPP_HREF =
  "https://api.whatsapp.com/send/?phone=66811724918&text&type=phone_number&app_absent=0"

const NONGMAI_AVATAR_SRC = "/images/team/nongmai-whatsapp-avatar.jpg"
const POPUP_MESSAGE = "Hi, I'm Nongmai. How can I help you today?"
const DISMISS_STORAGE_KEY = "tvc.whatsappChatDismissed"
const POPUP_DELAY_MS = 10_000

const whatsappLinkProps = {
  href: WHATSAPP_HREF,
  target: "_blank",
  rel: "noopener noreferrer",
  "data-contact-channel": "whatsapp",
} as const

/**
 * Desktop/tablet WhatsApp widget  -  circular launcher + delayed chat balloon.
 * Hidden below `md` so the mobile contact bar remains the phone experience.
 */
function DesktopWhatsAppButton() {
  const [popupVisible, setPopupVisible] = React.useState(false)

  React.useEffect(() => {
    if (sessionStorage.getItem(DISMISS_STORAGE_KEY) === "1") return

    const timeoutId = window.setTimeout(() => {
      setPopupVisible(true)
    }, POPUP_DELAY_MS)

    return () => window.clearTimeout(timeoutId)
  }, [])

  function dismissPopup(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()
    setPopupVisible(false)
    sessionStorage.setItem(DISMISS_STORAGE_KEY, "1")
  }

  return (
    <div data-slot="desktop-whatsapp-widget" className="whatsapp-chat-widget">
      {popupVisible ? (
        <div
          className="whatsapp-chat-widget__popup"
          role="dialog"
          aria-label="Message from Nongmai"
        >
          <a
            {...whatsappLinkProps}
            className="whatsapp-chat-widget__card"
            aria-label={`${POPUP_MESSAGE} Chat on WhatsApp`}
          >
            <span className="whatsapp-chat-widget__avatar">
              <Image
                src={NONGMAI_AVATAR_SRC}
                alt=""
                width={88}
                height={88}
                sizes="44px"
                quality={85}
                className="whatsapp-chat-widget__avatar-image"
              />
            </span>
            <span className="whatsapp-chat-widget__copy">{POPUP_MESSAGE}</span>
          </a>
          <button
            type="button"
            className="whatsapp-chat-widget__dismiss"
            aria-label="Dismiss message"
            onClick={dismissPopup}
          >
            <X aria-hidden strokeWidth={1.75} className="size-3.5" />
          </button>
        </div>
      ) : null}

      <a
        {...whatsappLinkProps}
        data-slot="desktop-whatsapp-button"
        aria-label="Chat with us on WhatsApp"
        className="whatsapp-chat-widget__launcher"
      >
        <WhatsAppIcon size="lg" tone="concierge" className="size-7" />
      </a>
    </div>
  )
}

export { DesktopWhatsAppButton }
