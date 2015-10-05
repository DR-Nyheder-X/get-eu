var path = require('path')
var webpack = require('webpack')

var isProduction = process.env.NODE_ENV === 'production'

var entry = './client/index.js'
var plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __PRODUCTION__: isProduction
  })
]

if (!isProduction) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
  devtool: isProduction ? null : 'eval-sourcemaps',
  color: true,
  entry: isProduction ? entry : [
    'webpack-hot-middleware/client',
    entry
  ],
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: path.resolve(__dirname, 'node_modules')
    }]
  }
};

