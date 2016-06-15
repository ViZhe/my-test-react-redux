
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    loadProducts,
    removeProduct
} from '../../core/products/actions'
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
    removeProduct(id = '-KJu9-4HjKF99V9aiYfM') {
        this.props.dispatch(removeProduct(id))
    }
    render() {
        const { products } = this.props
        const { loading } = this.state

        let tableStyle = {
            border: '1px solid black'
        }
        let tdStyle = {
            border: '1px solid gray'
        }

        let productKeys = products.list ? Object.keys(products.list) : []
        const productsWrap = !productKeys.length ?
            <tr><td className='c-area-list__empty'>Товаров нет</td></tr> :
            productKeys.map((key, index) => {
                let item = products.list[key]

                return <tr key={index} >
                    <td style={tdStyle} >{key}</td>
                    <td style={tdStyle} >{item._id}</td>
                    <td style={tdStyle} >{item.options.name}</td>
                    <td style={tdStyle} >{item.template}</td>
                    <td style={tdStyle} >edit</td>
                    <td style={tdStyle} onClick={::this.removeProduct} >delete</td>
                </tr>
            })

        return <div className='c-products-list' >
            <h2>Products List</h2>
            <table style={tableStyle} >
                <thead>
                    <tr>
                        <th>key</th>
                        <th>_id</th>
                        <th>o.name</th>
                        <th>template</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && 'Данные загружаются' || productsWrap}
                </tbody>
            </table>
        </div>
    }
}

export default connect(state => ({
    products: state.toJS().products
}))(ProductsList)
