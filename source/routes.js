
import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import { App, Github } from './containers'
import {
    Home,
    Products,
    addProduct,
    editProduct,
    Area
} from './components'


export const routes = (
    <div>
        <Route path='/' component={App} >
            <IndexRoute component={Home} />

            <Route path='products' component={Products} />
            <Redirect from='product' to='products' />
            <Route path='product' >
                <Route path='add' component={addProduct} />
                <Route path=':id' >
                    <IndexRoute component={editProduct} /> {/* TODO: pageProduct */}
                    <Route path='edit' component={editProduct} />
                </Route>
            </Route>

            <Route path='area' component={Area} />
            <Route path='github' >
                <IndexRoute component={Github} />
                <Route path=':username' component={Github} />
            </Route>
        </Route>
        <Route path='*' component={Home} /> {/* NotFound */}
    </div>
)
