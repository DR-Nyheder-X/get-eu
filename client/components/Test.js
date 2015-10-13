import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Repo from '../Repo'
import { Link } from 'react-router'
import { Tiles, Tile } from './Tiles'
import PageTitle, { PreHeading } from './PageTitle'
import { categoryProgress } from '../reducers/progress'

@connect(state => ({
  progress: state.progress
}))
export default class Test extends Component {
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

    const tileElm = category => {
      const done = categoryProgress(category, progress).percent == 100
      if (done) {
        return (
          <Tile key={category.id} category={category}
            progress={progress} />
        )
      } else {
        return (
          <Link to={`/test/${category.type}`} key={category.id}>
            <Tile category={category} progress={progress} />
          </Link>
        )
      }
    }

    return (
      <div className="Test">
        <PageTitle type="centered">
          <PreHeading>Test din viden om</PreHeading>
          <h1>retsforbeholdet</h1>
        </PageTitle>
        <Tiles>
          {incomplete.map(tileElm)}
          {complete.map(tileElm)}
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
