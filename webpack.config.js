const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: { algorithms: './src/index.js', 'algorithms.min': './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'alds',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: [/\.es6$/, /\.js$/],
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader', options: { presets: 'es2015' } }
      }
    ]
  },
  optimization: {
    minimize: true,
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
