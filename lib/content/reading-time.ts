const WORDS_PER_MINUTE = 220

export function countWords(text: string): number {
  const matches = text.match(/[\p{L}\p{N}'-]+/gu)
  return matches?.length ?? 0
}

export function computeReadingTimeLabel(wordCount: number): string {
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))
  return `${minutes} min read`
}

export function computeReadingTimeFromText(text: string): string {
  return computeReadingTimeLabel(countWords(text))
}
