const path = require('path');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  watch: true,
  devtool: 'eval-source-map',

  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'artlazer-core.js'
  },

  target: 'node',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [
    new FlowBabelWebpackPlugin(),
    new WebpackShellPlugin({
      onBuildEnd: ['nodemon dist/artlazer-core.js --watch']
    })
  ]
}
