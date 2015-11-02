import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Category from './components/Category'
import CategoryDone from './components/CategoryDone'
import Done from './components/Done'
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
    <Route path='kitchensink' component={Kitchensink} />
    <Route path='quiz' component={App}>
      <IndexRoute component={Quiz} />
      <Route path='/quiz/:type' component={Category} />
      <Route path='/quiz/:type/done' component={CategoryDone} />
      <Route path='/quiz/:type/:step/question' component={Question} />
      <Route path='/quiz/:type/:step' component={Step} />
    </Route>
    <Route path='points' component={Points} />
    <Route path='the_end' component={Done} />
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes
