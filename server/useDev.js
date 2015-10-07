export default function useDev (app) {
  console.log('Using webpack-dev-middleware')

  const webpack = require('webpack')
  const config = require('../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
  app.use(webpackHotMiddleware(compiler))
}
