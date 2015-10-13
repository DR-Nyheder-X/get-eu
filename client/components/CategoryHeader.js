import React, { Component, PropTypes } from 'react'
import Icon from './Icon'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import cc from '../utils/cleanClick'

import '../scss/CategoryHeader.scss'

export default class Button extends Component {
  static get propTypes () {
    return {
      category: PropTypes.object.isRequired,
      onAbort: PropTypes.func
    }
  }

  render () {
    const { category, onAbort } = this.props
    const cls = classname('CategoryHeader',
      formatTypeClasses('CategoryHeader', category.type))

    return (
      <header className={cls}>
        <h2>
          <i></i> {category.title}
        </h2>
        <a href='' onClick={cc(onAbort)}>
          <Icon type='cross' /> Afslut
        </a>
      </header>
    )
  }
}
