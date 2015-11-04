import React, { Component, PropTypes } from 'react'

export default class Answer extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired
  }

  render () {
    const { text, isCorrect, isChecked, value } = this.props
    const cls = isChecked && (isCorrect ? 'right' : 'wrong')
    const id = `answer-${value}`

    return (
      <li className={cls}>
        <input type='radio' name='answer'
          value={value} id={id} />
        <label htmlFor={id}>{text}</label>
      </li>
    )
  }
}
