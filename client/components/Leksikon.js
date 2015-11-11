import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
  enabled: state.enabled
}))
export default class Leksikon extends Component {
  static propTypes = {
    enabled: PropTypes.arrayOf(PropTypes.number)
  }

  render () {
    return (
      <h1>leks</h1>
    )
  }
}
