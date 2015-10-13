/* @flow weak */

import { Progress } from '../types'
import { COMPLETE_QUESTION } from '../actions'
import { union } from 'lodash'

const initialState: Progress = {
  completedQuestionIds: [],
  points: calculatePoints([])
}

function calculatePoints (completedQuestionIds) {
  return completedQuestionIds.length * 10
}

export function categoryProgress (category, progress) {
  const total = category.steps.length
  const done = category.steps.reduce((total, s) => {
    const completed =
      progress.completedQuestionIds.indexOf(s.question.id) > -1
    return completed ? total + 1 : total
  }, 0)
  const percent = done / total * 100.0

  return { done, total, percent }
}

export default function progressReducer (state = initialState, action) {
  switch (action.type) {
    case COMPLETE_QUESTION: {
      const completedQuestionIds =
        union(state.completedQuestionIds, [action.question.id])
      const points = calculatePoints(completedQuestionIds)
      return {
        ...state,
        completedQuestionIds,
        points
      }
    }
    default: {
      return state
    }
  }
}
