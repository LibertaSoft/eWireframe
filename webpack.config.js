'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    library: 'root'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel'
    }]
  }

  watch: NODE_ENV === 'development'
}
