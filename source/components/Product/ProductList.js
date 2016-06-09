
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadProducts } from '../../core/product/actions'
import { firebaseDb } from '../../utils/firebase/helpers'


export class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        const { dispatch } = this.props

        this.ref = firebaseDb.listenTo('products', {
            context: this,
            then(data) {
                dispatch(loadProducts(data))
                this.setState({
                    loading: false
                })
            }
        })

    }
    componentWillUnmount(){
        firebaseDb.removeBinding(this.ref)
    }
    render() {
        const { products } = this.props
        const { loading } = this.state

        const hasProducts = !!products.list.length
        const productsWrap = !hasProducts ?
            <div className='c-area-list__empty'>Товаров нет</div> :
            products.list.map((item, index) =>
                <div key={index}>
                    {item.id} // {item.options.name} /// {item.options.article}
                </div>
            )

        return <div className='c-product-list' >
            <h2>Product List</h2>
            {loading && 'Данные загружаются' || productsWrap}
        </div>
    }
}

export default connect(state => ({
    products: state.products
}))(ProductList)
// export default  ProductList
