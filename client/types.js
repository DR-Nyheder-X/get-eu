/* @flow */

export type Question = {
  id: number,
  text: string,
  answers: Array<Answer>,
  correct_answer: number
}

export type Answer = {
  id: number,
  text: string
}

export type Card = {
  text: string
}

export type Step = {
  slides: Array<Card>,
  question: Question
}

export type Category = {
  id: number,
  title: string,
  type: string,
  steps: Array<Step>
}

export type Repo = {
  categories: Array<Category>
}

export type Progress = {
  completedStepIds: Array<number>,
  points: number
}
