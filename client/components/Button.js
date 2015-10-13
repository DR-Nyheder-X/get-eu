import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'

import '../scss/Button.scss'

export default class Button extends Component {
  static get propTypes () {
    return {
      type: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string
    }
  }
  render () {
    const type = formatTypeClasses('Button', this.props.type)
    const cls = classname('Button', this.props.className, type)
    return (
      <a className={cls} {...this.props}>{this.props.children} <i></i></a>
    )
  }
}
