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

function doneInSteps (steps, progress) {
  return steps.reduce((total, s) => {
    const completed =
      progress.completedStepIds.indexOf(s.id) > -1
    return completed ? total + 1 : total
  }, 0)
}

export function categoryProgress (category, progress) {
  const total = category.steps.length
  const done = doneInSteps(category.steps, progress)
  const percent = done / total * 100.0

  return { done, total, percent }
}

export function totalProgress (categories, progress) {
  const allSteps = categories.reduce((steps, c) => (
    steps.concat(c.steps)
  ), [])
  const total = allSteps.length
  const done = doneInSteps(allSteps, progress)
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
