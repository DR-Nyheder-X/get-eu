import React, { Component, PropTypes } from 'react'
import Button from './Button'
import cc from '../utils/cleanClick'
import PageTitle, { PreHeading } from './PageTitle'
import { Tiles, Tile } from './Tiles'
import Repo from '../Repo'
import { nextStep } from '../utils/whereToGo'
import { Link } from 'react-router'
import { whereToGoInCategory } from '../utils/whereToGo'

export default class StepDone extends Component {
  static propTypes = {
    step: PropTypes.object.isRequired,
    progress: PropTypes.object.isRequired
  }

  render () {
    const { progress, tesp, history } = this.props

    const nextCategory = nextStep(progress).category
    const rest = Repo.categories
    .filter(c => c.id !== nextCategory.id)
    .sort(c => c.id)

    const categoryTileWithProgress = progress => category => {
      return <Link to={whereToGoInCategory(progress, category)}>
        <Tile key={category.id} category={category} progress={progress} />
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
