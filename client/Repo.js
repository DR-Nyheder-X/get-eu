/* @flow */

export type Question = {
  text: string,
  answers: Array<Answer>,
  correct_answer: number
}

export type Answer = {
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
  title: string,
  steps: Array<Step>
}

export type Repo = {
  categories: Array<Category>
}

const repo: Repo = {
  categories: [{
    // title: 'Thing',
    steps: [{
      slides: [{
        text: 'a'
      }, {
        text: 'b'
      }],
      question: {
        text: 'Wut?',
        answers: [{
          text: 'a'
        }],
        correct_answer: 0
      }
    }]
  }]
}

export default repo
