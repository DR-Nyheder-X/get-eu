// TODO: Clean up this mess

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { where } from '../Repo'
import Card from './Card'
import CardNavigation from './CardNavigation'
import Question from './Question'
import CategoryHeader from './CategoryHeader'
import { completeStep } from '../actions'
import minMax from '../utils/minMax'
import Progressbar from './Progressbar'
import { categoryProgress } from '../reducers/progress'
import { whereToGoInCategory } from '../utils/whereToGo'
import { find } from 'lodash'
import { pushState } from 'redux-router'

import '../scss/Step.scss'

@connect(state => ({
  progress: state.progress,
  type: state.router.params.type,
  step: state.router.params.step
}), dispatch => ({
  pushState,
  dispatch
}))
export default class Step extends Component {
  static propTypes = {
    type: PropTypes.string,
    step: PropTypes.string,
    progress: PropTypes.object,
    dispatch: PropTypes.func,
    pushState: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = this.stateFromProps(props)
  }

  componentWillReceiveProps (props) {
    this.state = this.stateFromProps(props)
  }

  stateFromProps (props) {
    const category = where({ type: props.type })
    const stepId = parseInt(props.step, 10)
    const step = find(category.steps, { id: stepId })

    return {
      currentSlide: 0,
      category, step
    }
  }

  move (amount) {
    let currentSlide = this.state.currentSlide + amount
    currentSlide = minMax(0, this.state.step.slides.length,
                          currentSlide)
    this.setState({ ...this.state, currentSlide })
  }

  submit () {
    const { dispatch, pushState } = this.props
    const { category, step } = this.state

    dispatch(completeStep(step)).then(progress => {
      const goTo = whereToGoInCategory(progress, category)
      dispatch(pushState(null, goTo))
    }, e => { console.error(e) })
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
