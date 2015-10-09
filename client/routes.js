import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Kitchensink from './components/Kitchensink'
import NotFound from './components/NotFound'
import Learn from './components/Learn'
import Test from './components/Test'
import Category from './components/Category'
import Step from './components/Step'

const routes = (
  <Route>
    <Route path='/' component={App}>
      <IndexRoute component={Test} />
      <Route path='kitchensink' component={Kitchensink} />
      <Route path='learn'>
        <IndexRoute component={Learn} />
      </Route>
      <Route path='test'>
        <IndexRoute component={Test} />
        <Route path='/test/:type' component={Category} />
        <Route path='/test/:type/:step' component={Step} />
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)

export default routes
