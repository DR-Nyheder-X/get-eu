import { describe, it } from 'mocha'
import assert from 'assert'

import formatTypeClasses from '../client/utils/formatTypeClasses'

describe('formatTypeClasses', () => {
  it('compiles a string', () => {
    const result = 'Class Class--thing Class--other'
    assert.equal(result, formatTypeClasses('Class', 'thing', 'other'))
  })
})
