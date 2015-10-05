import React, { Component, PropTypes } from 'react'

require('../scss/Copy.scss')

export default class Copy extends Component {
  static get propTypes () {
    return {
      children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node
      ])
    }
  }
  render () {
    return (
      <div className='Copy' {...this.props}>{this.props.children}</div>
    )
  }
}
