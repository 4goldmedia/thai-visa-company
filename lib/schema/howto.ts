import type { ContentVisaProcessStep } from "@/lib/content/types"
import type { JsonLdNode } from "@/lib/schema/types"
import { compactNode, toAbsoluteUrl } from "@/lib/schema/utils"
import { siteLocale } from "@/lib/site"

export type HowToStepInput = {
  name: string
  text: string
}

export type HowToInput = {
  name: string
  description: string
  path: string
  steps: ReadonlyArray<HowToStepInput>
}

export function buildHowToFromProcessSteps(input: {
  name: string
  description: string
  path: string
  steps: ReadonlyArray<ContentVisaProcessStep>
}): JsonLdNode {
  return buildHowTo({
    name: input.name,
    description: input.description,
    path: input.path,
    steps: input.steps.map((step) => ({
      name: step.title,
      text: step.description,
    })),
  })
}

export function buildHowTo(input: HowToInput): JsonLdNode {
  const pageUrl = toAbsoluteUrl(input.path)

  return compactNode({
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    url: pageUrl,
    inLanguage: siteLocale.html,
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  })
}
