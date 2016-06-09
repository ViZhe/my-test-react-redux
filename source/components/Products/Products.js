
import React, { Component } from 'react'

import AddProduct from './AddProduct'
import ProductsList from './ProductsList'


export default class Products extends Component {
    render() {
        return <div>
            <h2>Products</h2>

            <AddProduct />
            <ProductsList />
        </div>
    }
}
