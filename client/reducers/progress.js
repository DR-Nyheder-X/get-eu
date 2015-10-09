/* @flow weak */

import { Progress } from '../types'
import { COMPLETE_QUESTION } from '../actions'
import { union } from 'lodash'
import { Repo } from '../Repo'

const initialState: Progress = {
  completedQuestionIds: [],
  points: calculatePoints(Repo, [])
}

function calculatePoints (repo, completedQuestionIds) {
  return completedQuestionIds.reduce((total, id) => {
    return total
  }, 0)
}

function progressReducer (state = initialState, action) {
  switch (action.type) {
    case COMPLETE_QUESTION: {
      const completedQuestionIds =
        union(state.completedQuestionIds, [action.question.id])
      const points = calculatePoints(Repo, completedQuestionIds)
      return {
        ...state,
        completedQuestionIds
      }
    }
    default: {
      return state
    }
  }
}

export default progressReducer
