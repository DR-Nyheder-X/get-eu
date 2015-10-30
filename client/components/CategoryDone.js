import React, { Component, PropTypes } from 'react'
import PageTitle, { PreHeading } from './PageTitle'
import { Tiles, Tile } from './Tiles'
import Repo, { where } from '../Repo'
import { nextStep } from '../utils/whereToGo'
import { Link } from 'react-router'
import { whereToGoInCategory } from '../utils/whereToGo'
import { connect } from 'react-redux'
import Term from './Term'

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

    const nextCategory = nextStep(progress).category

    const rest = Repo.categories
    .filter(c => c.id !== nextCategory.id)
    .sort(c => c.id)

    const categoryTileWithProgress = (progress, cls) => category => {
      const to = whereToGoInCategory(progress, category)
      return <Link key={category.id} to={to}>
        <Tile category={category} progress={progress} type={cls} />
      </Link>
    }

    return (
      <div className='CategoryDone'>
        <PageTitle type='small centered shadow'>
          <h1>Godt gået!</h1>
          <PreHeading>Nu er du (næsten) ekspert indenfor</PreHeading>
        </PageTitle>
        <ul className='CategoryDone-terms'>
          <Term>Lovgivnings-halløj</Term>
          <Term>Sandalforordning</Term>
          <Term>Dublin III</Term>
          <Term>Rumænske roer</Term>
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
