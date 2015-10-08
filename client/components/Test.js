/* @flow */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Repo from '../Repo'

class Test extends Component {
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

export default connect(state => ({
  progress: state.progress
}))(Test)
