import React, { Component, PropTypes } from 'react'
import classname from 'classname'

require('../scss/Button.scss')

export default class Button extends Component {
  static get propTypes () {
    return {
      type: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string
    }
  }
  render () {
    const type = formatTypeClasses(this.props.type)
    const cls = classname('Button', this.props.className, type)
    return (
      <a className={cls} {...this.props}>{this.props.children}</a>
    )
  }
}

function formatTypeClasses (type) {
  if (!type) return ''

  return type
    .split(' ')
    .map(cls => `Button--${cls}`)
    .join(' ')
}
