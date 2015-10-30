import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import { categoryProgress } from '../reducers/progress'

import '../scss/Tiles.scss'
import '../scss/Tile.scss'

export class Tile extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    progress: PropTypes.object.isRequired,
    type: PropTypes.string
  }

  render () {
    const { category, progress, type } = this.props
    const typeClasses = formatTypeClasses('Tile', type)
    const { percent } =
      categoryProgress(category, progress)
    const cls = classname('Tile', typeClasses, {
      'Tile--completed': percent === 100
    }, `Tile--${category.type}`)

    return (
      <div className={cls}>
        <div className='Tile-inner'>
          <i></i>
          <h3>{category.title}</h3>
        </div>
      </div>
    )
  }
}

export class Tiles extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <section className='Tiles'>
        {this.props.children}
      </section>
    )
  }
}
