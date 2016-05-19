
import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        const { productList } = this.props

        const hasProducts = !!productList.length
        const products = !hasProducts ?
            <div className='c-area-list__empty'>Товаров нет</div> :
            productList.map((product, index) =>
                <div key={index}>
                    {product.id} - {product.description} - {product.title}
                </div>
            )

        return <div className='c-product-list' >
            <h2>Product List</h2>
            {products}
        </div>
    }
}
