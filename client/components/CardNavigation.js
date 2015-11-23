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
    onPrev: PropTypes.func,
    canNext: PropTypes.bool,
    canPrev: PropTypes.bool
  }

  render () {
    const {
      page, total,
      onNext, onPrev,
      canPrev, canNext
    } = this.props

    const prevCls = classname('CardNavigation-previous',
                              { disabled: !canPrev })
    const nextCls = classname('CardNavigation-next',
                              { disabled: !canNext })

    const preventDefault = e => e.preventDefault()

    return (
      <nav className='CardNavigation'>
        <a href='' onClick={canPrev ? cc(onPrev) : preventDefault}}
          className={prevCls}>Forrige</a>
        <a href='' onClick={canNext ? cc(onNext) : preventDefault}}
          className={nextCls}>Næste</a>

        <ul>
          {times(total, i => {
            const cls = classname({ active: page === i })
            return <li className={cls} key={i}></li>
          })}
        </ul>
      </nav>
    )
  }
}
