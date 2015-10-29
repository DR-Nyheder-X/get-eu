import React, { Component, PropTypes } from 'react'

import '../scss/Term.scss'

export default class Term extends Component {
  static get propTypes () {
    return {
      type: PropTypes.string,
      className: PropTypes.string
    }
  }
  render () {
    const cls = 'Term'
    return (
      <li className={cls} {...this.props}></li>
    )
  }
}
