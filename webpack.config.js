const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    algorithms: './src/index.js',
    'algorithms.min': './src/index.js'
  },
  output: { path: path.resolve(__dirname, 'dist'), filename: '[name].js' },
  module: {
    rules: [{
      test: [/\.es6$/, /\.js$/],
      exclude: /(node_modules|bower_components)/,
      include: /\.min\.js$/,
      use: { loader: 'babel-loader', options: { presets: 'es2015' } }
    }]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin(
      { include: /\.min\.js$/, minimize: true })],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
