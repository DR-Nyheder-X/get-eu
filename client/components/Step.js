// TODO: Clean up this mess

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { where } from '../Repo'
import Card from './Card'
import CardNavigation from './CardNavigation'
import Question from './Question'
import CategoryHeader from './CategoryHeader'
import { completeQuestion } from '../actions'
import minMax from '../utils/minMax'
import Progressbar from './Progressbar'
import { categoryProgress } from '../reducers/progress'
import { whereToGoInCategory } from '../utils/whereToGo'
import { find } from 'lodash'

import '../scss/Step.scss'

@connect(state => ({
  progress: state.progress,
  type: state.router.params.type,
  step: state.router.params.step
}))
export default class Step extends Component {
  static propTypes = {
    type: PropTypes.string,
    step: PropTypes.string,
    progress: PropTypes.object,
    dispatch: PropTypes.func,
    history: PropTypes.object
  }

  constructor (props) {
    super(props)

    const category = where({ type: props.type })
    const stepId = parseInt(props.step, 10)
    const step = find(category.steps, { id: stepId })

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
    const { dispatch, progress, history } = this.props
    dispatch(completeQuestion(this.state.step.question))
    const goTo = whereToGoInCategory(progress, this.state.category)
    console.log(goTo)
    history.pushState(goTo)
  }

  render () {
    const { currentSlide, step, category } = this.state
    const { progress } = this.props
    const slide = step.slides[currentSlide]

    let slideOrQuestion

    if (slide) {
      slideOrQuestion = <div>
        <Card text={slide.text} />
        <CardNavigation page={this.state.currentSlide}
          total={this.state.step.slides.length + 1}
          onPrev={_ => this.move(-1)} canPrev={currentSlide !== 0}
          onNext={_ => this.move(1)} canNext />
      </div>
    } else {
      slideOrQuestion = <Question
        question={step.question}
        onSubmit={this.submit.bind(this)}
      />
    }

    const { percent } = categoryProgress(category, progress)

    return (
      <div>
        <CategoryHeader category={category} />
        {slideOrQuestion}

        <div className='Step-progressbar'>
          <Progressbar percent={percent} />
        </div>
      </div>
    )
  }
}
