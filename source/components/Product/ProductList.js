
import React, { Component } from 'react'
import { connect } from 'react-redux'


export class ProductList extends Component {
    render() {
        const { product } = this.props

        const hasProducts = !!product.length
        const products = !hasProducts ?
            <div className='c-area-list__empty'>Товаров нет</div> :
            product.map((item, index) =>
                <div key={index}>
                    {item.id} - {item.description} - {item.title}
                </div>
            )

        return <div className='c-product-list' >
            <h2>Product List</h2>
            {products}
        </div>
    }
}

export default connect(state => ({
    product: state.product.list
}))(ProductList)
