
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App, Github } from './containers'
import {
    Home,
    Products,
    Area
} from './components'


export const routes = (
    <div>
        <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='product' component={Products} />
            <Route path='area' component={Area} />
            <Route path='github' >
                <IndexRoute component={Github} />
                <Route path=':username' component={Github} />
            </Route>
        </Route>
        <Route path='*' component={Home} /> {/* NotFound */}
    </div>
)
