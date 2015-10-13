import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { find } from '../Repo'
import Card from './Card'
import CardNavigation from './CardNavigation'
import Question from './Question'
import CategoryHeader from './CategoryHeader'
import { completeQuestion } from '../actions'
import minMax from '../utils/minMax'

class Slide extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render () {
    return <Card text={this.props.text} />
  }
}

@connect(state => ({
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
    const stepIndex = parseInt(props.step, 10)
    const step = category.steps[stepIndex]

    this.state = {
      currentSlide: 0,
      category, stepIndex, step
    }
  }

  move (amount) {
    let currentSlide = this.state.currentSlide + amount
    currentSlide = minMax(0, this.state.step.slides.length, currentSlide)
    this.setState({ ...this.state, currentSlide })
  }

  prev () {
    if (this.state.currentSlide === 0) {
      this.props.history.pushState(null, '/test')
    } else {
      this.move(-1)
    }
  }

  next () {
    if (this.state.currentSlide === this.state.step.slides.length) {
      const { dispatch, history } = this.props
      dispatch(completeQuestion(this.state.step.question))
      history.pushState('/test')
    } else {
      this.move(1)
    }
  }

  render () {
    const { currentSlide, step, category } = this.state
    const slide = step.slides[currentSlide]

    let slideOrQuestion
    if (slide) {
      slideOrQuestion = <div>
        <Slide text={slide.text} />
        <CardNavigation page={this.state.currentSlide}
        total={this.state.step.slides.length + 1}
        onPrev={this.prev.bind(this)}
        onNext={this.next.bind(this)} />
      </div>
    } else {
      slideOrQuestion = <Question question={step.question} />
    }

    const abort = _ => {
      this.props.history.pushState(null, '/test')
    }

    return (
      <div>
        <CategoryHeader category={category} onAbort={abort} />
        {slideOrQuestion}
      </div>
    )
  }
}

