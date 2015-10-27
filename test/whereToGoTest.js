import { describe, it } from 'mocha'
import assert from 'assert'
import Repo from '../client/Repo'
import { flatten } from 'lodash'

import {
  whereToGo,
  whereToGoInCategory
} from '../client/utils/whereToGo'

function progressWithIds (ids) {
  return { completedStepIds: ids }
}

describe('whereToGo', () => {
  describe('when nothing is done', () => {
    it('should be first category, first step', () => {
      const progress = progressWithIds([])
      assert.equal(whereToGo(progress), '/quiz/eu/1')
    })
  })
  describe('when more steps in category', () => {
    it('should be next step', () => {
      const progress = progressWithIds(
        [Repo.categories[0].steps[0].id])
      assert.equal(whereToGo(progress), '/quiz/eu/2')
    })
  })
  describe('when category is done', () => {
    it('should move to next category', () => {
      const progress = progressWithIds(
        Repo.categories[0].steps.map(s => s.id))
      const nextCategory = Repo.categories[1]
      assert.equal(whereToGo(progress), `/quiz/${nextCategory.type}/${nextCategory.steps[0].id}`)
    })
  })
  describe('when there are no more questions', () => {
    it('should move to quiz page', () => {
      const progress = progressWithIds(
        flatten(Repo.categories.map(c => (
          c.steps.map(s => s.id)
        ))))
      assert.equal(whereToGo(progress), '/quiz')
    })
  })
})

describe('whereToGoInCategory', () => {
  const category = Repo.categories[0]
  describe('when nothing is done', () => {
    it('goes to first step', () => {
      const progress = progressWithIds([])
      assert.equal(whereToGoInCategory(progress, category), `/quiz/eu/1`)
    })
  })
  describe('when some questions are done', () => {
    it('goes to next step', () => {
      const progress = progressWithIds(
        [Repo.categories[0].steps[0].id])
      assert.equal(whereToGoInCategory(progress, category), '/quiz/eu/2')
    })
  })
  describe('when category is done', () => {
    it('should move to next category', () => {
      const progress = progressWithIds(
        Repo.categories[0].steps.map(s => s.id))
      assert.equal(whereToGoInCategory(progress, category), `/quiz/eu/done`)
    })
  })
})
