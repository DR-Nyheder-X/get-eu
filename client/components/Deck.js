import React, { Component, PropTypes } from 'react'
import Card from './Card'
import classname from 'classname'

import '../scss/Deck.scss'

export default class Deck extends Component {
  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.string),
    currentCard: PropTypes.number
  }

  render () {
    const { cards } = this.props
    const currentCard = this.props.currentCard || 0

    return <div className='Deck' {...this.props}>
      {cards.map((card, i) => {
        const cls = classname('Card', {
          ['Card--rejected']: i < currentCard
        })
        return <Card className={cls} text={card} key={i} />
      })}
    </div>
  }
}
