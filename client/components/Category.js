import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
  type: state.router.params.type
}))
export default class Category extends Component {
  static propTypes = {
    type: PropTypes.string
  }

  render () {
    const { type } = this.props
    return (
      <div>{type}</div>
    )
  }
}
