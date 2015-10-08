export default function useDev (app) {
  console.log('Using webpack-hot-middleware')

  const webpack = require('webpack')
  const config = require('../webpack.config')
  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log
  }))
}
