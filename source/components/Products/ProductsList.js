
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadProducts } from '../../core/products/actions'
import { firebaseDb } from '../../utils/firebase/helpers'


export class ProductsList extends Component {
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

        let productKeys = Object.keys(products.list)
        const productsWrap = !productKeys.length ?
            <div className='c-area-list__empty'>Товаров нет</div> :
            productKeys.map((key, index) => {
                let item = products.list[key]
                return <div key={index}>
                    {item.id} // {item.options.name} /// {item.options.article}
                </div>

        })

        // const hasProducts = !!products.list.length
        // const productsWrap = !hasProducts ?
        //     <div className='c-area-list__empty'>Товаров нет</div> :
        //     products.list.map((item, index) =>
        //         <div key={index}>
        //             {item.id} // {item.options.name} /// {item.options.article}
        //         </div>
        //     )

        return <div className='c-product-list' >
            <h2>Products List</h2>
            {loading && 'Данные загружаются' || productsWrap}
        </div>
    }
}

export default connect(state => ({
    products: state.products
}))(ProductsList)
// export default  ProductsList
