// TODO: Clean up this mess

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { find } from '../Repo'
import Card from './Card'
import CardNavigation from './CardNavigation'
import Question from './Question'
import CategoryHeader from './CategoryHeader'
import { completeQuestion } from '../actions'
import minMax from '../utils/minMax'
import Progressbar from './Progressbar'
import Button from './Button'
import StepDone from './StepDone'
import Icon from './Icon'
import { categoryProgress } from '../reducers/progress'
import { whereToGo } from '../utils/whereToGo'

import '../scss/Step.scss'

class Slide extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render () {
    return <Card text={this.props.text} />
  }
}

@connect(state => ({
  progress: state.progress,
  type: state.router.params.type,
  step: state.router.params.step
}))
export default class Step extends Component {
  static propTypes = {
    type: PropTypes.string,
    step: PropTypes.string
  }

  constructor (props) {
    super(props)

    const category = find({ type: props.type })
    const stepId = parseInt(props.step, 10)
    const step = _.find(category.steps, { id: stepId })

    this.state = {
      currentSlide: 0,
      category, step
    }
  }

  move (amount) {
    let currentSlide = this.state.currentSlide + amount
    currentSlide = minMax(0,
                          this.state.step.slides.length,
                          currentSlide)
    this.setState({ ...this.state, currentSlide })
  }

  prev () {
    this.move(-1)
  }

  next () {
    this.move(1)
  }

  submit () {
    const { dispatch, progress } = this.props
    dispatch(completeQuestion(this.state.step.question))
    history.pushState(whereToGo(progress))

  done () {
    const { history } = this.props
    history.pushState('/test')
  }

  next () {
    const { history } = this.props
    history.pushState(`/test`)
  }

  render () {
    const { currentSlide, step, category } = this.state
    const { progress } = this.props
    const slide = step.slides[currentSlide]

    let slideOrQuestion

    if (progress.completedQuestionIds.indexOf(step.question.id) > -1) {
      slideOrQuestion = (
        <StepDone step={step} progress={progress}
          onDone={this.done.bind(this)}
          onNext={this.next.bind(this)} />
      )
    }
    else if (slide) {
      slideOrQuestion = <div>
        <Slide text={slide.text} />
        <CardNavigation page={this.state.currentSlide}
          total={this.state.step.slides.length + 1}
          onPrev={_ => this.move(-1)} canPrev={currentSlide !== 0}
          onNext={_ => this.move(1)} canNext={true} />
      </div>

    }
    else {
      slideOrQuestion =
        <Question question={step.question}
          onSubmit={this.submit.bind(this)} />
    }


    const abort = _ => {
      this.props.history.pushState(null, '/test')
    }

    const { percent } = categoryProgress(category, progress)

    return (
      <div>
        <CategoryHeader category={category} onAbort={abort} />
        {slideOrQuestion}

        <div className='Step-progressbar'>
          <Progressbar percent={percent} />
        </div>
      </div>
    )
  }
}
