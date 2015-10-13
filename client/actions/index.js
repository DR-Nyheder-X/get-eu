export const COMPLETE_QUESTION = 'COMPLETE_QUESTION'
export const RESET_PROGRESS = 'RESET_PROGRESS'

export function completeQuestion (question) {
  return { type: COMPLETE_QUESTION, question }
}
