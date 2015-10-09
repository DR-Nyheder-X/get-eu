import React, { Component, PropTypes } from 'react'

export default class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render () {
    return (
      <div>{this.props.text}</div>
    )
  }
}
