import React, { Component, PropTypes } from 'react'
import PageTitle from './PageTitle'
import { Tiles, Tile } from './Tiles'
import Repo from '../Repo'
import { connect } from 'react-redux'

@connect(state => ({
  type: state.router.params.type,
  progress: state.progress
}))
export default class Done extends Component {

  render () {

    const { progress } = this.props
    const categories = Repo.categories

    return (
      <div className='Done'>
        <PageTitle type='small centered'>
          Det var det!
        </PageTitle>
        <p className='Done-message'>
          Du klarede dig gennem alle spørgsmål. Nu kan du sætte dit kryds d. 3. december med god, velinformeret samvittighed. Ole Ryborg er stolt af dig.
        </p>
        <Tiles>
          {categories.map(c => (
            <Tile key={c.id} category={c} progress={progress} />
          ))}
        </Tiles>
      </div>
    )

  }
}
