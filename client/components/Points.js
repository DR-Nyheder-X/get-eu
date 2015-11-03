import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { totalProgress } from '../reducers/progress'
import Repo from '../Repo'
import ZeroPointsMessage from './ZeroPointsMessage'
import PointLogEntry from './PointLogEntry'
import { processProgress } from '../utils/logProcessor'

@connect(state => ({
  progress: state.progress
}))
export default class Points extends Component {
  static propTypes = {
    progress: PropTypes.object.isRequired
  }

  render () {
    const { progress } = this.props
    const { percent } = totalProgress(Repo.categories, progress)

    if (percent === 0) {
      return <ZeroPointsMessage />
    }

    const entries = processProgress(progress, Repo.categories)

    return <div>
      {entries.map(e => (
        <PointLogEntry
          key={e.stepId ? `step-${e.stepId}` : `category-${e.categoryId}`}
          points={e.points}
          text={e.text}
          terms={e.terms}
        />
      ))}
    </div>
  }
}
