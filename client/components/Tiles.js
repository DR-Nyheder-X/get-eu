import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import Progressbar from './Progressbar'

import '../scss/Tiles.scss'
import '../scss/Tile.scss'

function categoryProgress (category, progress) {
  return {
    done: 1,
    total: 30,
    percent: 55
  }
}

export class Tile extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    progress: PropTypes.object
  }

  render () {
    const { category, progress } = this.props
    const typeClasses = formatTypeClasses('Tile', category.type)
    const cls = classname('Tile', typeClasses, {
      'Tile--completed': false
    })
    const { done, total, percent } =
      categoryProgress(category, progress)

    return (
      <div className={cls}>
        <div className="Tile-inner">
          <i></i>
          <h3>{category.title}</h3>
          <h4>{done}/{total}</h4>
          <Progressbar percent={percent} type='small dimmed' />
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
