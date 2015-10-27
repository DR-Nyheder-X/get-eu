import Promise from 'bluebird'

export const COMPLETE_STEP = 'COMPLETE_STEP'
export const RESET_PROGRESS = 'RESET_PROGRESS'

export function completeStep (step) {
  return (dispatch, getState) => {
    dispatch({ type: COMPLETE_STEP, step })
    return Promise.resolve(getState().progress)
  }
}
