import { describe, it } from 'mocha'
import assert from 'assert'

import minMax from '../client/utils/minMax'

describe('minMax', () => {
  describe('when lower than', () => {
    it('is min', () => {
      assert.equal(1, minMax(1, 10, -5))
    })
  })
  describe('when higher than', () => {
    it('is max', () => {
      assert.equal(10, minMax(1, 10, 20))
    })
  })
  describe('when inside spectrum', () => {
    it('is value', () => {
      assert.equal(5, minMax(1, 10, 5))
    })
  })
})
