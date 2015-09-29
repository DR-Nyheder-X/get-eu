var webpack = require('webpack'),
    path = require('path')

var config = {
  devtool: ['source-map', 'eval'],
  entry: [
    // For hot style updates
    'webpack/hot/dev-server',

    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080',

    // Entry point
    path.resolve('./app/components/App.js')
  ],
  output: {
    path: path.resolve('./server/public/build/'),
    publicPath: '/build/',
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  // We have to manually add the Hot Replacement plugin when running from Node
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = config
