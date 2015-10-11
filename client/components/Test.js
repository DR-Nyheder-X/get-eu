import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Repo from '../Repo'
import { Link } from 'react-router'
import { Tiles, Tile } from './Tiles'
import {PageTitle, PreHeading} from './PageTitle'

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
    return (
      <div>
        <Tiles>
          {categories.map(category => (
            <Link to={`/test/${category.type}`} key={category.id}>
              <Tile
              category={category}
              progress={progress} />
            </Link>
          ))}
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
