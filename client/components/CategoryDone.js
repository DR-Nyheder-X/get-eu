import React, { Component, PropTypes } from 'react'
import PageTitle, { PreHeading } from './PageTitle'
import { Tiles, Tile } from './Tiles'
import Repo, { find } from '../Repo'
import { nextStep } from '../utils/whereToGo'
import { Link } from 'react-router'
import { whereToGoInCategory } from '../utils/whereToGo'
import { connect } from 'react-redux'

@connect(state => ({
  type: state.router.params.type,
  progress: state.progress
}))
export default class StepDone extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    progress: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      category: find({ type: props.type })
    }
  }

  render () {
    const { progress } = this.props

    const nextCategory = nextStep(progress).category

    const rest = Repo.categories
    .filter(c => c.id !== nextCategory.id)
    .sort(c => c.id)

    const categoryTileWithProgress = progress => category => {
      const to = whereToGoInCategory(progress, category)
      return <Link key={category.id} to={to}>
        <Tile category={category} progress={progress} />
      </Link>
    }

    return (
      <div>
        <PageTitle type='small centered'>
          <h1>Godt gået!</h1>
          <PreHeading>NU ER DU (NÆSTEN) EKSPERT INDENFOR</PreHeading>
        </PageTitle>
        <ul>
          <li>Blah</li>
        </ul>
        <PageTitle>Næste</PageTitle>
        {categoryTileWithProgress(progress)(nextCategory)}
        <Tiles>
          {rest.map(categoryTileWithProgress(progress))}
        </Tiles>
      </div>
    )
  }
}
