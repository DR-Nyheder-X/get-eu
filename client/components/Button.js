import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import { Link } from 'react-router'

import '../scss/Button.scss'

const typesWithIconAtRight = [ 'rightArrowAtRight', 'leftArrowAtRight' ]
const typesWithIconAtLeft = [ 'rightArrowAtLeft', 'leftArrowAtLeft' ]

export default class Button extends Component {
  static get propTypes () {
    return {
      type: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      to: PropTypes.string
    }
  }
  render () {
    const type = formatTypeClasses('Button', this.props.type)
    const cls = classname('Button', this.props.className, type)

    const hasIconAtRight =
      typesWithIconAtRight.indexOf(this.props.type) > -1
    const hasIconAtLeft =
      typesWithIconAtLeft.indexOf(this.props.type) > -1

    const { to } = this.props

    const contents = [
      hasIconAtLeft && (<i key='iconLeft'></i>),
      this.props.children,
      hasIconAtRight && (<i key='iconRight'></i>)
    ]

    if (to) {
      return <Link to={to} className={cls} {...this.props}>
        {contents}
      </Link>
    } else {
      return <a className={cls} {...this.props}>
        {contents}
      </a>
    }
  }
}
