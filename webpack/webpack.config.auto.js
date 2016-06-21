
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./webpack.config.production.js')
} else {
  module.exports = require('./webpack.config.development.js')
}
