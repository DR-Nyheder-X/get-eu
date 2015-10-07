import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Kitchensink from './components/Kitchensink'
import NotFound from './components/NotFound'

const routes = (
  <Route>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='kitchensink' component={Kitchensink} />
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)

export default routes
