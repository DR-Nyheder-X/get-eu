import Repo from '../Repo'
import { find } from 'lodash'

export function nextStepInCategory (progress, category) {
  const completed = progress.completedQuestionIds

  return find(category.steps, step => {
    return completed.indexOf(step.question.id) === -1
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
  return `/quiz/${category.type}/${step.id}`
}

export function whereToGoInCategory (progress, category) {
  const { step } = nextStepInCategory(progress, category)
  return `/quiz/${category.type}/${step.id}`
}

export default {
  nextStepInCategory,
  nextStep,
  whereToGo,
  whereToGoInCategory
}
