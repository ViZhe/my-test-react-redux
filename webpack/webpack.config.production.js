
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.common.js')


webpackConfig.devtool = 'source-map'

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
