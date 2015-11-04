/* global __DEVELOPMENT */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Category from './components/Category'
import CategoryDone from './components/CategoryDone'
import Done from './components/Done'
import Intro from './components/Intro'
import Kitchensink from './components/Kitchensink'
import NotFound from './components/NotFound'
import Question from './components/Question'
import Quiz from './components/Quiz'
import Start from './components/Start'
import Step from './components/Step'
import Points from './components/Points'

const routes = (
  <Route path='/'>
    <IndexRoute component={Start} />
    <Route path='intro' component={Intro} />
    {__DEVELOPMENT && (
      <Route path='kitchensink' component={Kitchensink} />)}
    <Route component={App}>
      <Route path='/quiz' component={Quiz} />
      <Route path='/quiz/:type' component={Category} />
      <Route path='/quiz/:type/done' component={CategoryDone} />
      <Route path='/quiz/:type/:step/question' component={Question} />
      <Route path='/quiz/:type/:step' component={Step} />
      <Route path='points' component={Points} />
      <Route path='the_end' component={Done} />
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)

export default routes
