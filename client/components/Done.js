import React, { Component, PropTypes } from 'react'
import PageTitle from './PageTitle'
import { Tiles, Tile } from './Tiles'
import Repo from '../Repo'
import { connect } from 'react-redux'

import '../scss/Done.scss'

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
        <PageTitle type='small centered shadow'>
          Det var det!
        </PageTitle>
        <p className='Done-message'>
          Du klarede dig gennem alle spørgsmål. Nu kan du sætte dit kryds d. 3. december med god, velinformeret samvittighed. Ole Ryborg er stolt af dig.
        </p>
        <div className='Done-cta'>
          <a href="#">
            <i></i>
            <em>Vil du ha mere?</em>
            <b>Dyk ned i leksikonet</b>
          </a>
        </div>
        <div className='Done-reset'>
          <a href="#"><i></i>Start forfra</a>
        </div>
        <Tiles>
          {categories.map(c => (
            <Tile key={c.id} category={c} progress={progress} />
          ))}
        </Tiles>
      </div>
    )

  }
}
