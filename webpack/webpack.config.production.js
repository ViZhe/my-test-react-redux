
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.common')


// webpackConfig.devtool = 'source-map' // TODO: think: it need?

webpackConfig.plugins.push(
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
