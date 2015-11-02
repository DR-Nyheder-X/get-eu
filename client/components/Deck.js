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
        <Card type="one" text='This' />
        <Card type="two" text='hotness' />
        <Card type="three" text='never' />
        <Card type="four" text='stops.' />
        <Card type="five" text='stops.' />
        <Card type="six" text='stops.' />
        <Card type="seven" text='stops.' />
        <Card type="eight" text='stops.' />
        <Card type="nine" text='stops.' />
        <Card type="ten" text='stops.' />
      </div>
    )
  }
}
