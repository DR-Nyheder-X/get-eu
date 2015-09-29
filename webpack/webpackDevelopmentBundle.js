/* Webpack hot loading / automatic refreshes (for development)
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var webpack = require('webpack'),
    path = require('path'),
    webpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpackDevelopmentConfig.js')

module.exports = function () {

  // Fire up webpack and pass configuration
  var bundleStart = null
  var compiler = webpack(webpackConfig)

  // Give a heads up when it starts bundling
  compiler.plugin('compile', function() {
    console.log('Webpack is bundling...')
    bundleStart = Date.now()
  })

  // Give a heads up when it's done bundling
  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!')
  })

  var bundler = new webpackDevServer(compiler, {

    // We need to tell Webpack to serve our bundled application
    // from the build path. When proxying:
    // http://localhost:3000/server/public/build -> http://localhost:8080/server/public/build
    publicPath: path.resolve('/build/'),

    // Configure hot replacement
    hot: true,

    // Terminal configurations
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  })

  bundler.listen(8080, 'localhost', function () {
    console.log('Bundling...')
  })
}
