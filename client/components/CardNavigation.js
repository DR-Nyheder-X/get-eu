import React, { Component, PropTypes } from 'react'
import { times } from 'lodash'
import classname from 'classname'
import cc from '../utils/cleanClick'

import '../scss/CardNavigation.scss'

export default class CardNavigation extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onNext: PropTypes.func,
    onPrev: PropTypes.func
  }

  render () {
    const { page, total, onNext, onPrev } = this.props

    return (
      <nav className='CardNavigation'>
        <a href="" onClick={cc(onPrev)}
        className="CardNavigation-previous">Forrige</a>
        <a href="" onClick={cc(onNext)}
        className="CardNavigation-next">Næste</a>

        <ul>
          {times(total, i => {
            const cls = classname({ active: page === i})
            return <li className={cls} key={i}></li>
          })}
        </ul>
      </nav>
    )
  }
}
