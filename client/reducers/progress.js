/* @flow weak */

import { Progress } from '../types'
import { COMPLETE_STEP, RESET_PROGRESS } from '../actions'
import { processProgress } from '../utils/logProcessor'
import Repo from '../Repo'

function gaSend (event, value) {
  const ga = window.ga ||
    function (...args) { console.log(args) }

  try {
    ga('send', 'event', 'Quiz', event, value)
  } catch (e) {
    console.log(e)
  }
}

const initialState: Progress = {
  completedStepIds: [],
  points: calculatePoints([])
}

function calculatePoints (completedStepIds) {
  return processProgress({ completedStepIds }, Repo.categories)
  .map(log => log.points)
  .reduce((total, amount) => total + amount, 0)
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
        state.completedStepIds.slice()

      const beforeProg =
        processProgress({ completedStepIds }, Repo.categories)

      completedStepIds.push(action.step.id)

      const afterProg =
        processProgress({ completedStepIds }, Repo.categories)
      const diff = beforeProg.length - afterProg.length
      afterProg.slice(diff).forEach(logEntry => {
        gaSend(`Completed ${logEntry.stepId ? 'step' : 'category'}`, logEntry.stepId || logEntry.categoryId)
      })

      const points = calculatePoints(completedStepIds)

      if (points === 500) {
        gaSend('Completed everything!')
      }

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
