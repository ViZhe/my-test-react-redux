
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.common.js')


webpackConfig.devtool = 'cheap-module-eval-source-map'

webpackConfig.entry.push(
    'webpack-hot-middleware/client'
)

webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    })
)

module.exports = webpackConfig
