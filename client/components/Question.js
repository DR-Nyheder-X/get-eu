import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import classname from 'classname'
import '../scss/Question.scss'
import Button from './Button'

export default class Answer extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired,
    onDone: PropTypes.func
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

export default class Question extends Component {
  static propTypes = {
    question: PropTypes.object
  }

  constructor (props) {
    super(props)

    this.state = {}
  }

  onChange (event) {
    const checked = parseInt(event.target.value, 10)
    this.setState({ checked })
  }

  render () {
    const { question, onDone } = this.props
    const correctAnswerSelected = this.state.checked === question.correct_answer

    return (
      <div className='Question'>
        <h2 className='Question-text'>
          <span>{question.text}</span>
        </h2>
        <form className='Question-options'
        onChange={this.onChange.bind(this)}>
          <ul>
            {question.answers.map(answer => {
              const isCorrect = answer.id === question.correct_answer
              const isChecked = answer.id === this.state.checked
              return (
                <Answer key={answer.id} answer={answer}
                isCorrect={isCorrect} isChecked={isChecked} />
              )
            })}
          </ul>
        </form>
        <Button disabled={!correctAnswerSelected} onClick={onDone}>Videre &rarr;</Button>
      </div>
    )
  }
}
