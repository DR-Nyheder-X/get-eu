import React, { Component, PropTypes } from 'react'

export default class Question extends Component {
  static propTypes = {
    question: PropTypes.object
  }

  render () {
    const { question } = this.props

    return (
      <div className='Question'>
        <h2>{question.text}</h2>
        <form className="Question-options">
          <ul>
            {question.answers.map(answer => (
              <li key={answer.id}>
                <label>
                  <input type='radio' name='answer' />
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
