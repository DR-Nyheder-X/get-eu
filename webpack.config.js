var path = require('path')
var webpack = require('webpack')

var isProduction = process.env.NODE_ENV === 'production'

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __PRODUCTION: isProduction,
    __DEVELOPMENT: process.env.NODE_ENV === 'development'
  })
]

if (!isProduction) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
}

var hotClient = 'webpack-hot-middleware/client'
var entry = {
  quiz: './client/quiz.js',
  leksikon: './client/leksikon.js'
}

module.exports = {
  devtool: isProduction ? null : 'eval-sourcemaps',
  entry: Object.keys(entry).reduce((entries, key) => {
    entries[key] = isProduction
      ? entry[key]
      : [entry[key], hotClient]
    return entries
  }, {}),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    publicPath: '/client/'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?stage=0'],
        exclude: path.resolve(__dirname, 'node_modules')
      }, {
        test: /\.s?css?$/,
        loader: 'style!css!autoprefixer!sass?includePaths[]=./node_modules'
      }
    ]
  }
}
