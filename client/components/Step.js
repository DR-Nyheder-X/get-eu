import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { find } from '../Repo'
import Card from './Card'
import CardNavigation from './CardNavigation'
import Question from './Question'
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

    this.state = { currentSlide: 0 }
    this.category = find({ type: props.type })
    this.stepIndex = parseInt(this.props.step, 10)
    this.step = this.category.steps[this.stepIndex]
  }

  move (amount) {
    let currentSlide = this.state.currentSlide + amount
    currentSlide = minMax(0, this.step.slides.length, currentSlide)
    this.setState({ currentSlide })
  }

  prev () {
    if (this.state.currentSlide === 0) {
      this.props.history.pushState(null, '/test')
    } else {
      this.move(-1)
    }
  }

  next () {
    if (this.state.currentSlide === this.step.slides.length) {
      const { dispatch, history } = this.props
      dispatch(completeQuestion(this.step.question))
      history.pushState('/test')
    } else {
      this.move(1)
    }
  }

  render () {
    const { currentSlide } = this.state
    const slide = this.step.slides[currentSlide]

    let slideOrQuestion
    if (slide) {
      slideOrQuestion = <Slide text={slide.text} />
    } else {
      slideOrQuestion = <Question question={this.step.question} />
    }

    return (
      <div>
        {slideOrQuestion}

        <CardNavigation page={this.state.currentSlide}
        total={this.step.slides.length + 1}
        onPrev={this.prev.bind(this)}
        onNext={this.next.bind(this)} />
      </div>
    )
  }
}

