import React, { Component, PropTypes } from 'react'
import '../scss/Question.scss'

export default class Question extends Component {
  static propTypes = {
    question: PropTypes.object
  }

  render () {
    const { question } = this.props

    return (
      <div className='Question'>
        <h2 className="Question-text">
          <span>{question.text}</span>
        </h2>
        <form className="Question-options">
          <ul>
            {question.answers.map(answer => (
              <li key={answer.id}>
                <input type='radio' name='answer' id={answer.id} />
                <label htmlFor={answer.id}>
                  {answer.text}
                </label>
              </li>
            ))}
          </ul>
        </form>
      </div>
    )
  }
}
