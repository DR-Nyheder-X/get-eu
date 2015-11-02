import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { totalProgress } from '../reducers/progress'
import Repo from '../Repo'
import ZeroPointsMessage from './ZeroPointsMessage'
import SectionTitle from './SectionTitle'
import PointLogEntry from './PointLogEntry'

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

    return <div>
      <SectionTitle>Point log entry</SectionTitle>
      <PointLogEntry type='1' points='10'>for at lære om...</PointLogEntry>
      <PointLogEntry type='2' points='20'>for at lære om...</PointLogEntry>
      <PointLogEntry type='3' points='30'>for at lære om...</PointLogEntry>
      <PointLogEntry type='4' points='40'>for at lære om...</PointLogEntry>
      <PointLogEntry type='5' points='50'>for at lære alt om Erhverv.</PointLogEntry>
    </div>
  }
}
