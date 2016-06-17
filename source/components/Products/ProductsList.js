
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    loadProducts,
    removeProduct
} from '../../core/products/actions'
import * as mlabHelpers from '../../utils/mlab/helpers'


export class ProductsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        mlabHelpers.getProducts().then((response) => {
            this.props.dispatch(loadProducts(response.data))
            this.setState({
                loading: false
            })
        })

    }
    removeProduct(id) {
        mlabHelpers.removeProducts(id).then((response) => {
            console.log('del - response')
            console.log(response)
            this.props.dispatch(removeProduct(response.data._id.$oid))
        })
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

        let productList = products.list || []
        const productsWrap = !productList.length ?
            <tr><td className='c-area-list__empty'>Товаров нет</td></tr> :
            productList.map((item, index) =>
                <tr key={index} >
                    <td style={tdStyle} >{item._id.$oid}</td>
                    <td style={tdStyle} >{item.options.name}</td>
                    <td style={tdStyle} >{item.template}</td>
                    <td style={tdStyle} >edit</td>
                    <td style={tdStyle} onClick={() => ::this.removeProduct(item._id.$oid)} >delete</td>
                </tr>
            )

        return <div className='c-products-list' >
            <h2>Products List</h2>
            <table style={tableStyle} >
                <thead>
                    <tr>
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
