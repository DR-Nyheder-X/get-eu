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

    const { flicked, rest } = cards.reduce((coll, card, i) => {
      coll[currentCard > i ? 'flicked' : 'rest'].push(card)
      return coll
    }, { flicked: [], rest: [] })

    return <div className='Deck' {...this.props}>
      {flicked.map((card, i) => {
        const cls = classname('Card', {
          ['Card--rejected']: i < currentCard
        })
        return <Card className={cls} text={card} key={`flicked-${i}`} />
      })}
      {rest.map((card, i) => {
        const cls = classname('Card', `Card--${i + 1}`)
        return <Card className={cls} text={card} key={`rest-${i}`} />
      })}
    </div>
  }
}
