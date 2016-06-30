
import React from 'react'
import {render} from 'react-dom'
// import {Provider} from 'react-redux'
import {Connector as HorizonConnector} from 'horizon-react'
import {Router, browserHistory} from 'react-router'

import configureStore from './core/store'
import {routes} from './routes'

const store = configureStore()


import Horizon from '@horizon/client'

const horizon = new Horizon()

horizon.onReady(() => {
  console.log('Horizon ready')
})

horizon.connect()


render(
  <HorizonConnector store={store}>
    <Router history={browserHistory} routes={routes} />
  </HorizonConnector>,
  // <Provider store={store} >
  //   <Router history={browserHistory} routes={routes} />
  // </Provider>,
  document.getElementById('root')
)
