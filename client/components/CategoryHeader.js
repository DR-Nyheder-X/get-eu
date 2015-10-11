import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import Icon from './Icon'

import '../scss/CategoryHeader.scss'

export default class Button extends Component {
  static get propTypes () {
    return {
      type: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string
    }
  }
  render () {
    const type = formatTypeClasses('CategoryHeader', this.props.type)
    const cls = classname('CategoryHeader', this.props.className, type)
    return (
      <header className={cls} {...this.props}>
        <h2><i></i> {this.props.children}</h2>
        <a href='#'><Icon type='cross' /> Afslut</a>
      </header>
    )
  }
}
