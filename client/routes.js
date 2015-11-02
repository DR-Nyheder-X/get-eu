import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Kitchensink from './components/Kitchensink'
import NotFound from './components/NotFound'
import Quiz from './components/Quiz'
import Category from './components/Category'
import Step from './components/Step'
import CategoryDone from './components/CategoryDone'
import Start from './components/Start'
import Done from './components/Done'

const routes = (
  <Route path='/'>
    <IndexRoute component={Start} />
    <Route path='kitchensink' component={Kitchensink} />
    <Route path='quiz' component={App}>
      <IndexRoute component={Quiz} />
      <Route path='/quiz/:type' component={Category} />
      <Route path='/quiz/:type/done' component={CategoryDone} />
      <Route path='/quiz/:type/:step' component={Step} />
    </Route>
    <Route path='the_end' component={Done} />
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes
