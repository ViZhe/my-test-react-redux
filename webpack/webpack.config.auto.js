
if (process.env.NODE_ENV === 'development') {
    module.exports = require('./webpack.config.development.js')
} else {
    module.exports = require('./webpack.config.production.js')
}
