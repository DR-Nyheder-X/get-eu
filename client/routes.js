import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Kitchensink from './components/Kitchensink'
import NotFound from './components/NotFound'
import Learn from './components/Learn'
import Test from './components/Test'

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
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)

export default routes
