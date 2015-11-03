import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { where } from '../Repo'
import CardNavigation from './CardNavigation'
import Progressbar from './Progressbar'
import { categoryProgress } from '../reducers/progress'
import { find } from 'lodash'
import { pushState } from 'redux-router'
import Deck from './Deck'
import Swipeable from 'react-swipeable'
import CategoryHeader from './CategoryHeader'

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

  move (dest) {
    const { step, category } = this.state
    const nextSlide = this.state.currentSlide + dest

    if (nextSlide < step.slides.length) {
      this.setState({ currentSlide: nextSlide })
    } else {
      const { dispatch, pushState } = this.props
      const path = `/quiz/${category.type}/${step.id}/question`
      dispatch(pushState(null, path))
    }
  }

  render () {
    const { category, step, currentSlide } = this.state
    const { progress } = this.props
    const { percent } = categoryProgress(category, progress)

    const canPrev = currentSlide !== 0

    return <div>
      <CategoryHeader category={category} />
      <Swipeable
        onSwipedLeft={_ => { this.move(1) }}
        onSwipedRight={_ => { if (canPrev) this.move(-1) }}>
        <Deck
          cards={step.slides.map(slide => slide.text)}
          currentCard={currentSlide}
        />
      </Swipeable>
      <CardNavigation page={currentSlide}
        total={step.slides.length}
        onPrev={_ => this.move(-1)} canPrev={canPrev}
        onNext={_ => this.move(1)} canNext />
      <div className='Step-progressbar'>
        <Progressbar percent={percent} />
      </div>
    </div>
  }
}
