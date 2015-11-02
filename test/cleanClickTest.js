import { describe, it } from 'mocha'
import assert from 'assert'

import cc from '../client/utils/cleanClick'

describe('cleanClick', () => {
  describe('click', () => {
    it('prevents default and calls with args', (done) => {
      let amount = 0

      const event = { preventDefault: done }
      const incrementAmountBy = (a) => { amount += a }
      const click = cc(incrementAmountBy, 3)
      click(event)

      assert.equal(amount, 3)
    })
  })
})
