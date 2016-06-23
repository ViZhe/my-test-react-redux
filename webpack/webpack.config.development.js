
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.common')


webpackConfig.devtool = 'cheap-module-eval-source-map'

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  })
)

webpackConfig.devServer = {
  stats: 'errors-only',
  port: 8000
}

module.exports = webpackConfig
