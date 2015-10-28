/* @flow weak */

import { Progress } from '../types'
import { COMPLETE_STEP, RESET_PROGRESS } from '../actions'
import { union } from 'lodash'

const initialState: Progress = {
  completedStepIds: [],
  points: calculatePoints([])
}

function calculatePoints (completedStepIds) {
  return completedStepIds.length * 10
}

export function categoryProgress (category, progress) {
  const total = category.steps.length
  const done = category.steps.reduce((total, s) => {
    const completed =
      progress.completedStepIds.indexOf(s.id) > -1
    return completed ? total + 1 : total
  }, 0)
  const percent = done / total * 100.0

  return { done, total, percent }
}

export default function progressReducer (state = initialState, action) {
  switch (action.type) {
    case COMPLETE_STEP: {
      const completedStepIds =
        union(state.completedStepIds, [action.step.id])
      const points = calculatePoints(completedStepIds)
      return {
        ...state,
        completedStepIds,
        points
      }
    }
    case RESET_PROGRESS: {
      return {
        ...state,
        ...initialState
      }
    }
    default: {
      return state
    }
  }
}
