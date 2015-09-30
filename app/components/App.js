var React = require('react')
var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Route = Router.Route
var RouteHandler = Router.RouteHandler
var NotFoundRoute = Router.NotFoundRoute
var MainNavigation = require('./MainNavigation')

// Styles
require('../scss/App.scss')

/* Create App (the mother component)
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var App = React.createClass({
  render: function() {
    return (
      <main className="App">
        <RouteHandler />
      </main>
    )
  }
})

/* Routes
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Notice that we're react-router-proxy-loader to load components on demand.
// This ensures that we're not forced to load everything all at once.
// https://github.com/odysseyscience/react-router-proxy-loader
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="kitchensink" path="kitchensink" handler={require('react-router-proxy!./Kitchensink.js')} />
    <DefaultRoute handler={require('react-router-proxy!./Home.js')} />
    <NotFoundRoute handler={require('react-router-proxy!./NotFound.js')} />
  </Route>
)

Router.run(routes, function(Root) {
  // Whenever the url changes, this callback is called again
  React.render(<Root />, document.body)
})
