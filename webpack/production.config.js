// webpack.config.js
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.version': JSON.stringify(require("../package.json").version)
    })
 ]
};
