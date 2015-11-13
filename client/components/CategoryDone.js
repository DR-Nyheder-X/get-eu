import React, { Component, PropTypes } from 'react'
import PageTitle, { PreHeading } from './PageTitle'
import { Tiles, Tile } from './Tiles'
import Repo, { where } from '../Repo'
import { nextStep } from '../utils/whereToGo'
import { Link } from 'react-router'
import { whereToGoInCategory } from '../utils/whereToGo'
import { connect } from 'react-redux'
import Term from './Term'
import { categoryProgress } from '../reducers/progress'
import ShareButton from './ShareButton'

import '../scss/CategoryDone.scss'

@connect(state => ({
  type: state.router.params.type,
  progress: state.progress
}))
export default class CategoryDone extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    progress: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      category: where({ type: props.type })
    }
  }

  render () {
    const { progress } = this.props
    const { category } = this.state

    const nextCategory = nextStep(progress).category

    const rest = Repo.categories
    .filter(c => c.id !== nextCategory.id)
    .sort((a, b) => {
      return categoryProgress(a, progress).percent -
        categoryProgress(b, progress).percent
    })

    const categoryTileWithProgress = (progress, cls) => category => {
      const to = whereToGoInCategory(progress, category)
      return <Link key={category.id} to={to}>
        <Tile category={category} progress={progress} type={cls} />
      </Link>
    }

    return (
      <div className='CategoryDone'>
        <ShareButton type='facebook'>Fortæl dine venner</ShareButton>
        <PageTitle type='small centered shadow'>
          <h1>Godt gået!</h1>
          <PreHeading>Nu er du (næsten) ekspert indenfor &hellip;</PreHeading>
        </PageTitle>
        <ul className='CategoryDone-terms'>
          {category.terms.map(term => <Term key={term}>{term}</Term>)}
        </ul>
        <div className='CategoryDone-next'>Næste<br />udfordring</div>
        <div className='CategoryDone-nextCategory'>
          {categoryTileWithProgress(progress)(nextCategory)}
        </div>
        <Tiles>
          {rest.map(categoryTileWithProgress(progress, 'small'))}
        </Tiles>
      </div>
    )
  }
}
