
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Github from './containers/Github/Github'

import {
    Home,
    Product,
    Area
} from './components'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/product' component={Product} />
            <Route path='/area' component={Area} />
            <Route path='/github' component={Github} >
                <Route path='/github/:username' component={Github} />
            </Route>
        </Route>
        <Route path='*' component={Home} />
    </div>
)
