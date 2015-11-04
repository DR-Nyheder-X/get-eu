import React, { Component, PropTypes } from 'react'
import Button from './Button'
import { connect } from 'react-redux'
import { whereToGo } from '../utils/whereToGo'
import { replaceState } from 'redux-router'

import '../scss/Start.scss'

@connect(state => ({
  progress: state.progress
}), { replaceState })
export default class Start extends Component {
  static propTypes = {
    className: PropTypes.string,
    progress: PropTypes.object,
    replaceState: PropTypes.func,
    disableRedirect: PropTypes.bool
  }

  componentDidMount () {
    const { progress, replaceState, disableRedirect } = this.props

    // Redirect to next relevant step
    if (progress.completedStepIds.length > 0 && !disableRedirect) {
      replaceState(null, whereToGo(progress))
    }
  }

  render () {
    return (
      <div className='Start'>
        <h1>
          Bliv klar til<br />afstemningen om<br /><em>retsforbeholdet</em>
        </h1>
        <div className='Start-baseballs'></div>
        <div className='Start-cta'>
          <Button to='/intro' type='yellow darkShadow fullWidth'>
            Kom i gang
          </Button>
        </div>
      </div>
    )
  }
}
