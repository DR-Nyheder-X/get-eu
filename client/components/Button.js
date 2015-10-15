import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'

import '../scss/Button.scss'

const typesWithIconAtRight = [ 'rightArrowAtRight', 'leftArrowAtRight' ]
const typesWithIconAtLeft = [ 'rightArrowAtLeft', 'leftArrowAtLeft' ]

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
    const hasIconAtRight = typesWithIconAtRight.indexOf(this.props.type) > -1
    const hasIconAtLeft = typesWithIconAtLeft.indexOf(this.props.type) > -1

    return (
      <a className={cls} {...this.props}>
        {hasIconAtLeft && (<i></i>)}
        {this.props.children}
        {hasIconAtRight && (<i></i>)}
      </a>
    )
  }
}
