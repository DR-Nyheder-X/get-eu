import React, { Component, PropTypes } from 'react'
import Button from './Button'
import Answer from './Answer'
import cc from '../utils/cleanClick'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import { where } from '../Repo'
import { find } from 'lodash'
import { completeStep } from '../actions'
import { whereToGoInCategory } from '../utils/whereToGo'
import { categoryProgress } from '../reducers/progress'
import Progressbar from './Progressbar'

import '../scss/Question.scss'

@connect(state => ({
  progress: state.progress,
  type: state.router.params.type,
  step: state.router.params.step
}), dispatch => ({
  pushState,
  dispatch
}))
export default class Question extends Component {
  static propTypes = {
    type: PropTypes.string,
    step: PropTypes.string,
    progress: PropTypes.object,
    dispatch: PropTypes.func,
    pushState: PropTypes.func
  }

  constructor (props) {
    super(props)

    const category = where({ type: this.props.type })

    this.state = {
      category,
      step: find(category.steps, { id: parseInt(this.props.step, 10) })
    }
  }

  handleChange (event) {
    const checked = parseInt(event.target.value, 10)
    this.setState({ checked })
  }

  handleSubmit () {
    const { dispatch, pushState } = this.props
    const { category, step } = this.state

    dispatch(completeStep(step)).then(progress => {
      const goTo = whereToGoInCategory(progress, category)
      dispatch(pushState(null, goTo))
    }, e => { console.error(e) })
  }

  render () {
    const { progress } = this.props
    const { category, step } = this.state
    const { question } = step
    const correctAnswerSelected = this.state.checked === question.correct_answer
    const { percent } = categoryProgress(category, progress)

    return (
      <div className='Question'>
        <h2 className='Question-text'>
          <span>{question.text}</span>
        </h2>
        <form className='Question-options'
          onChange={this.handleChange.bind(this)}>
          <ul>
            {question.answers.map(answer => {
              const isCorrect = answer.id === question.correct_answer
              const isChecked = answer.id === this.state.checked
              return <Answer key={answer.id} answer={answer}
                isCorrect={isCorrect} isChecked={isChecked} />
            })}
          </ul>
        </form>
        <div className='Question-next'>
          <Button type='rightArrowAtRight' disabled={!correctAnswerSelected} onClick={cc(this.handleSubmit.bind(this))}>Videre</Button>
        </div>
        <Progressbar percent={percent} />
      </div>
    )
  }
}
