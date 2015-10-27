import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { where } from '../Repo'
import minMax from '../utils/minMax'
import { categoryProgress } from '../reducers/progress'

function nextStepIndexInCategory (progress, category) {
  const { done, total } = categoryProgress(category, progress)
  return minMax(0, total - 1, done)
}

@connect(state => ({
  pathname: state.router.location.pathname,
  type: state.router.params.type,
  progress: state.progress
}))
export default class Category extends Component {
  static propTypes = {
    type: PropTypes.string,
    progress: PropTypes.object,
    pathname: PropTypes.string,
    history: PropTypes.object
  }

  componentDidMount () {
    const { progress, type, pathname, history } = this.props
    const category = where(c => c.type === type)
    const nextStep = nextStepIndexInCategory(progress, category)
    history.replaceState(null, `${pathname}/${nextStep}`)
  }

  render () {
    return (
      <div>Redirecting...</div>
    )
  }
}
