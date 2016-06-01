
import React, { Component } from 'react'

import {
    ProductList, AddProduct,
    AreaList, AddArea
} from '../components'


export default class App extends Component {
    render() {
        return <div>
            <AddProduct />
            <ProductList />
            <AddArea />
            <AreaList />
        </div>
    }
}
