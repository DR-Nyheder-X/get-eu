import React, { Component, PropTypes } from 'react'

export default class Answer extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired
  }

  render () {
    const { answer, isCorrect, isChecked } = this.props
    const cls = isChecked && (isCorrect ? 'right' : 'wrong')

    return (
      <li key={answer.id} className={cls}>
        <input type='radio' name='answer'
          ref='radio' value={answer.id} id={answer.id} />
        <label htmlFor={answer.id}>
          {answer.text}
        </label>
      </li>
    )
  }
}
