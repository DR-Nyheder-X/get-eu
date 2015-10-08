var path = require('path')
var webpack = require('webpack')

var isProduction = process.env.NODE_ENV === 'production'

var entry = './client/index.js'
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

module.exports = {
  devtool: isProduction ? null : 'eval-sourcemaps',
  entry: isProduction ? entry : [
    'webpack-hot-middleware/client',
    entry
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
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
};

