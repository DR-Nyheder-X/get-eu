import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import Term from './Term'

import '../scss/PointLogEntry.scss'

export default class PointLogEntry extends Component {
  static get propTypes () {
    return {
      points: PropTypes.number,
      text: PropTypes.string,
      terms: PropTypes.arrayOf(PropTypes.string)
    }
  }
  render () {
    const { points, text, terms } = this.props
    const cls = classname('PointLogEntry', [
      `PointLogEntry--${Math.round(points / 10)}`
    ])

    return (
      <div className={cls}>
        <div className='PointLogEntry-inner'>
          <header>
            <h3><i></i> {points} point</h3>
            <p>{text}</p>
          </header>
          <ul className='PointLogEntry-terms'>
            {terms.map(term => (
              <Term key={term}>{term}</Term>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
