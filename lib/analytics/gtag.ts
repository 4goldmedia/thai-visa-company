export type GtagCommand = "config" | "event" | "js" | "set"

export type GtagEventParams = Record<
  string,
  string | number | boolean | undefined
>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (
      command: GtagCommand,
      targetId: string | Date,
      params?: GtagEventParams,
    ) => void
  }
}

export {}
