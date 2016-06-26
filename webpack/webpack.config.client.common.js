
const path = require('path')
const webpack = require('webpack')


module.exports = {
  resolve: {
    alias: {
      '~': path.resolve(process.cwd(), 'source')
    },
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    main: [
      'babel-polyfill',
      './source/index'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-form',
      'immutable',
      'axios'
    ]
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js' // TODO: test it
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel-loader'],
        plugins: ['transform-runtime'],
        exclude: /node_modules/
      }
      // http://stackoverflow.com/questions/30006607/getting-started-with-stylus-loader-for-webpack
      // Найти лоадер и разобраться
      // npm install css-loader style-loader stylus-loader stylus --save-dev
      //
      // {
      //  test: /\.styl$/i,
      //  loader: 'url-loader?limit=10000'
      // }
      // Добавить лоадер и разобраться
      // {
      //  test: /\.(svg|png|jpg|jpeg)$/,
      //  loader: 'url-loader?limit=10000&name=[path][name]-[hash].[ext]'
      // }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  stats: {
    version: false,
    hash: false,
    timings: true,
    colors: true,
    chunk: false,
    chunkModules: false
  }
}
