import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'

import '../scss/Tiles.scss'

export default class Tiles extends Component {
  static get propTypes () {
    return {
      className: PropTypes.string
    }
  }
  render () {
    const cls = classname('Tiles', this.props.className)
    return (
      <section className={cls} {...this.props}>
        Tiles
      </section>
    )
  }
}
