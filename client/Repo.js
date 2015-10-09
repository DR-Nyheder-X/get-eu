/* @flow */

import { Repo } from './types'

const ids = {}
function nextId (key) {
  ids[key] = ids[key] || 1
  return ids[key]++
}

function dummySteps () {
  return [{
    slides: [{
      text: 'a'
    }, {
      text: 'b'
    }],
    question: {
      id: nextId('question'),
      text: 'Wut?',
      answers: [{
        id: nextId('answer'),
        text: 'a'
      }, {
        id: nextId('answer'),
        text: 'b'
      }, {
        id: nextId('answer'),
        text: 'c'
      }],
      correct_answer: 1
    }
  }]
}

const repo: Repo = {
  categories: [{
    id: nextId('category'),
    title: 'Indvandrere',
    type: 'migrants',
    steps: dummySteps()
  }, {
    id: nextId('category'),
    title: 'Politi',
    type: 'police',
    steps: dummySteps()
  }, {
    id: nextId('category'),
    title: 'Lov',
    type: 'justice',
    steps: dummySteps()
  }, {
    id: nextId('category'),
    title: 'Erhverv',
    type: 'business',
    steps: dummySteps()
  }, {
    id: nextId('category'),
    title: 'EU',
    type: 'eu',
    steps: dummySteps()
  }, {
    id: nextId('category'),
    title: 'Familie',
    type: 'family',
    steps: dummySteps()
  }]
}

export default repo
