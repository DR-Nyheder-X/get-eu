import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import Card from './Card'

import '../scss/Deck.scss'

export default class Deck extends Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string
  }

  render () {
    const type = formatTypeClasses('Deck', this.props.type)
    const cls = classname('Deck', this.props.className, type)
    return (
      <div className={cls} {...this.props}>
        <Card text='This' />
        <Card text='hotness' />
        <Card text='never' />
        <Card text='stops.' />
        <Card text='stops.' />
      </div>
    )
  }
}
