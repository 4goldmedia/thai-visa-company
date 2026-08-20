/**
 * Ahrefs Web Analytics  -  native script for the initial HTML <head>.
 * Do not use next/script here: App Router strategies only preload or inject after JS.
 */
function AhrefsAnalytics() {
  return (
    <script
      src="https://analytics.ahrefs.com/analytics.js"
      data-key="Tcbc2gdKb85wCLLozdJldw"
      async
    />
  )
}

export { AhrefsAnalytics }
