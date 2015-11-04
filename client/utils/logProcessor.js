export function logEntryForStep (category, step) {
  return {
    stepId: step.id,
    points: 10,
    text: `${category.title}: ${step.id}`,
    terms: step.terms
  }
}

export function logEntryForCategory (category) {
  return {
    categoryId: category.id,
    points: 50,
    text: category.title,
    terms: category.terms
  }
}

export function processProgress (progress, categories) {
  const ids = Array.prototype.slice.call(progress.completedStepIds)

  return categories.reduce((entries, category) => {
    const completedSteps = category.steps
    .filter(step => ids.indexOf(step.id) > -1)

    const entryLogs = completedSteps
    .map(step => logEntryForStep(category, step))

    let categoryLogs = []
    if (completedSteps.length === category.steps.length) {
      categoryLogs = [logEntryForCategory(category)]
    }

    return entries.concat(entryLogs).concat(categoryLogs)
  }, [])
}
