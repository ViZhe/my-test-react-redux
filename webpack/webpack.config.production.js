
const webpack = require('webpack')
const AssetsWebpackPlugin = require('assets-webpack-plugin')

const webpackConfig = require('./webpack.config.common')


// webpackConfig.devtool = 'source-map' // TODO: think: it need?
webpackConfig.output.filename = '[name]-[hash].js'

webpackConfig.plugins.push(
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name]-[hash].js'),
  new AssetsWebpackPlugin({
    filename: 'assets.json'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
)


module.exports = webpackConfig
