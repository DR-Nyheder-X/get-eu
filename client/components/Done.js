import React, { Component, PropTypes } from 'react'
import PageTitle from './PageTitle'
import { Tiles, Tile } from './Tiles'
import Repo from '../Repo'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import { resetProgress } from '../actions'
import { Link } from 'react-router'
import cc from '../utils/cleanClick'

import '../scss/Done.scss'

@connect(state => ({
  progress: state.progress
}), dispatch => ({
  dispatch, pushState
}))
export default class Done extends Component {
  static propTypes = {
    progress: PropTypes.object.isRequired,
    dispatch: PropTypes.func,
    pushState: PropTypes.func
  }

  reset () {
    const { dispatch, pushState } = this.props
    dispatch(resetProgress())
    dispatch(pushState(null, '/'))
  }

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
          <Link to='/lexicon'>
            <i></i>
            <em>Vil du ha mere?</em>
            <b>Dyk ned i leksikonet</b>
          </Link>
        </div>
        <div className='Done-reset'>
          <a href='' onClick={cc(this.reset.bind(this))}><i></i>Start forfra</a>
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
