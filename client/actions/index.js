export const COMPLETE_QUESTION = 'COMPLETE_QUESTION'

export function completeQuestion (question) {
  return { type: COMPLETE_QUESTION, question }
}
