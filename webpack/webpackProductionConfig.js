var hash = require('hash-webpack-plugin'),
    path = require('path')

module.exports = {
  devtool: ['source-map'],
  entry: {
    app: "./app/components/App.js"
  },
  output: {
    path: path.resolve('./server/public/build/'),
    publicPath: '/build/',
    filename: "[name].[hash].js",
    chunkFilename: "[id].[hash].js"
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
  plugins: [
    // Put hash in a txt file, so that we can grab it from ./server/index.js
    new hash({ path: './server/public/build', fileName: 'hash.txt' })
  ]
}
