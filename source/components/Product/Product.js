
import React, { Component } from 'react'

import AddProduct from './AddProduct'
import ProductList from './ProductList'


export default class Product extends Component {
    render() {
        return <div>
            <h2>Product</h2>

            <AddProduct />
            <ProductList />
        </div>
    }
}
