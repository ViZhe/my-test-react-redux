
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: [
    'babel-polyfill',
    './source/index'
  ],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: 'hoppas-[hash].js',
    chunkFilename: '[id].[hash].chunk.js' // TODO: test it
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
      //{
      // test: /\.styl$/i,
      // loader: 'url-loader?limit=10000'
      //}
      // Добавить лоадер и разобраться
      //{
      // test: /\.(svg|png|jpg|jpeg)$/,
      // loader: 'url-loader?limit=10000&name=[path][name]-[hash].[ext]'
      //}
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'source/index.html',
      inject: true,
      minify: { // TODO: enable it leter
        // removeComments: true,
        // collapseWhitespace: true,
        // removeRedundantAttributes: true,
        // useShortDoctype: true,
        // removeEmptyAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        // keepClosingSlash: true,
        // minifyJS: true,
        // minifyCSS: true,
        // minifyURLs: true
      }
      // hash: true
    })
  ]
}
