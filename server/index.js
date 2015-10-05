import express from 'express'
import path from 'path'

const isProduction = process.env.NODE_ENV === 'production'
const app = express()

app.disable('x-powered-by')
app.set('view engine', 'ejs') // Set view engine
app.set('views', __dirname + '/views') // Set views directory
app.use(express.static(__dirname + '/public')) // Set public directory

app.get('*', (req, res) => {
  res.end('Not found', 404)
})

const port = process.env.PORT || 3000
app.listen(port, err => {
  if (err) console.log(err)
  console.log(`Running server on port ${port}`)
})

if (!isProduction) {
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

