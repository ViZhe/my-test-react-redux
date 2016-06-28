
import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'

import {
  App,
  Options,
  OptionsFieldsList,
  Github
} from './containers'
import {
  Home,
  Products,
  AddProduct,
  EditProduct,
  Area
} from './components'


export const routes = (
  <div>
    <Route path='/' component={App} >
      <IndexRoute component={Home} />

      <Route path='options' component={Options} >
        <IndexRoute component={OptionsFieldsList} /> {/* TODO: optionsIndex */}
        <Route path='fields' component={OptionsFieldsList} />
      </Route>

      <Route path='products' component={Products} />
      <Redirect from='product' to='products' />
      <Route path='product' >
        <Route path='add' component={AddProduct} />
        <Route path=':id' >
          <IndexRoute component={EditProduct} /> {/* TODO: pageProduct */}
          <Route path='edit' component={EditProduct} />
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
