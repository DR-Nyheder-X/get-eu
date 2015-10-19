import React, { Component, PropTypes } from 'react'
import Button from './Button'

export default class StepDone extends Component {
  static propTypes = {
    step: PropTypes.object.isRequired,
    progress: PropTypes.object.isRequired,
    onDone: PropTypes.func,
    onNext: PropTypes.func
  }

  render () {
    const { onDone, onNext } = this.props

    return (
      <div>
        Done!
        <Button onClick={onDone}>Done</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    )
  }
}
