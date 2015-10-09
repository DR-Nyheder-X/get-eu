import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import Progressbar from './Progressbar'

import '../scss/Tiles.scss'
import '../scss/Tile.scss'

function categoryProgress (category, progress) {
  const total = category.steps.length
  const done = category.steps.reduce((total, s) => {
    const completed =
      progress.completedQuestionIds.indexOf(s.question.id) > -1
    return completed ? total + 1 : total
  }, 0)
  const percent = done / total * 100.0

  return { done, total, percent }
}

export class Tile extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    progress: PropTypes.object.isRequired
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
    categories: PropTypes.array,
    progress: PropTypes.object
  }

  render () {
    const { categories, progress } = this.props
    return (
      <section className='Tiles'>
        {categories.map(category => (
          <Tile key={category.type}
          category={category}
          progress={progress} />
        ))}
      </section>
    )
  }
}
