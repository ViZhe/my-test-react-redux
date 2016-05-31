
const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './source/index'
    ],
    output: {
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, '..',  'source')
                ]
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                plugins: ['transform-runtime'],
                include: [
                    path.resolve(__dirname, '..',  'source')
                ]
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()

        // Tолько на продакшене
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
}
