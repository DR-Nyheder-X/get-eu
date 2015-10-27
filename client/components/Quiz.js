import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Repo from '../Repo'
import { Link } from 'react-router'
import { Tiles, Tile } from './Tiles'
import PageTitle, { PreHeading } from './PageTitle'
import { categoryProgress } from '../reducers/progress'
import { whereToGoInCategory } from '../utils/whereToGo'

@connect(state => ({
  progress: state.progress
}))
export default class Quiz extends Component {
  static propTypes = {
    progress: PropTypes.object.isRequired
  }

  render () {
    const categories = Repo.categories
    const { progress } = this.props

    const { complete, incomplete } = categories.reduce((result, c) => {
      const done = categoryProgress(c, progress).percent == 100
      result[done ? 'complete' : 'incomplete'].push(c)
      return result
    }, { complete: [], incomplete: [] })

    const tileElm = (progress, category) => {
      const goTo = whereToGoInCategory(progress, category)

      return (
        <Link to={goTo} key={category.id}>
          <Tile category={category} progress={progress} />
        </Link>
      )
    }

    return (
      <div className="Quiz">
        <PageTitle type="centered">
          <PreHeading>Test din viden om</PreHeading>
          <h1>retsforbeholdet</h1>
        </PageTitle>
        <Tiles>
          {incomplete.map(c => tileElm(progress, c))}
          {complete.map(c => tileElm(progress, c))}
        </Tiles>
      </div>
    )
  }
}

function categoryElm (category) {
  return (
    <div key={category.title}>{category.title}</div>
  )
}
