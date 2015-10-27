export const COMPLETE_STEP = 'COMPLETE_STEP'
export const RESET_PROGRESS = 'RESET_PROGRESS'

export function completeStep (step) {
  return { type: COMPLETE_STEP, step }
}
