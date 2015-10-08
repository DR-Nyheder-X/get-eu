import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(state => ({ progress: state.progress }))
export default class Test extends Component {
  static propTypes = {
    progress: PropTypes.object.isRequired
  }

  render () {
    return (
      <div>
        test
        <pre>{JSON.stringify(this.props.progress)}</pre>
      </div>
    )
  }
}
