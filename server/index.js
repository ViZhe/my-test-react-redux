
import Express from 'express'
import horizon from '@horizon/server'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack/webpack.config.client.development'
import {configDb} from './config.rethinkdb'


const server = new Express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || '3000'
const __PROD__ = process.env.NODE_ENV === 'production'

const assets = __PROD__ ? require('../assets.json') : ''

const compiler = webpack(config)
server.use(webpackDevMiddleware(compiler, {
  stats: {
    version: false,
    hash: false,
    timings: true,
    colors: true,
    chunk: false,
    chunkModules: false
  }
}))
server.use(webpackHotMiddleware(compiler))


server.get('*', (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="ru-RU">
      <head>
        <meta charset="utf-8" >
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" >
      </head>
      <body>
        <div id="root"></div>
        <script src="${__PROD__ ? assets.vendor.js : '/vendor.js'}"></script>
        <script async src="${__PROD__ ? assets.main.js : '/main.js'}" ></script>
      </body>
    </html>
  `)
})

const httpServer = server.listen(port, host, () =>
  console.info(`
######### (╮°-°)╮┳━━┳ #########

# ==> Server was started.
# ==> Link: http://${host}:${port}
# ==> Mode: ${__PROD__ ? 'Production ' : 'Development'}

######### ( ╯°□°)╯ ┻━━┻ #########
`)
)

horizon(httpServer, configDb)
