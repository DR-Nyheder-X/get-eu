import Repo from '../Repo'
import { find } from 'lodash'

export function nextStepInCategory (progress, category) {
  const completed = progress.completedStepIds

  return find(category.steps, step => {
    return completed.indexOf(step.id) === -1
  })
}

export function nextStep (progress) {
  let step

  const category = find(Repo.categories, category => {
    step = nextStepInCategory(progress, category)
    return step
  })

  return { category, step }
}

export function whereToGo (progress) {
  const { category, step } = nextStep(progress)
  if (category && step) {
    return `/quiz/${category.type}/${step.id}`
  } else {
    return '/quiz'
  }
}

export function whereToGoInCategory (progress, category) {
  const step = nextStepInCategory(progress, category)
  if (step) {
    return `/quiz/${category.type}/${step.id}`
  } else {
    return `/quiz/${category.type}/done`
  }
}

export default {
  nextStepInCategory,
  nextStep,
  whereToGo,
  whereToGoInCategory
}
