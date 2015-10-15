import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import Button from './Button'

import '../scss/CategoryDone.scss'

export default class CategoryDone extends Component {
  static get propTypes () {
    return {
      points: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    }
  }
  render () {
    const points = this.props.points
    const category = this.props.category

    return (
      <div className='CategoryDone' {...this.props}>
        <h1>Godt gået!</h1>
        <p>Du fik <span className='CategoryDone-inlinePoints'><i></i> {points} point</span> for at svare rigtigt på alle spørgsmål omkring {category}.</p>
        <Button type="leftArrowAtLeft">Til oversigten</Button>
      </div>
    )
  }
}
