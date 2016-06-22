
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import {
  loadProducts,
  updateProductField,
  destroyProduct
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
  updateProductField(id, field, value) {
    mlabHelpers.updateProductField(id, field, value).then((response) => {
      const product = response.data
      let data = {
        id: product._id.$oid,
        field: field,
        value: product[field]
      }

      this.props.dispatch(updateProductField(data))
    })
  }
  toggleDeleteProduct(product) {
    this.updateProductField(product._id.$oid, 'deleted', !product.deleted)
  }
  togglePublishProduct(product) {
    this.updateProductField(product._id.$oid, 'published', !product.published)
  }
  destroyProduct(id) {
    mlabHelpers.destroyProduct(id).then((response) => {
      this.props.dispatch(destroyProduct(response.data._id.$oid))
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
    const productsWrap = !productList.length
      ? <tr><td className='c-area-list__empty'>Товаров нет</td></tr>
      : productList.map((item, index) =>
        <tr key={index} >
          <td style={tdStyle} >{item._id.$oid}</td>
          <td style={tdStyle} >{item.options.name}</td>
          <td style={tdStyle} >{item.template}</td>
          <td style={tdStyle} ><Link to={`/product/${item._id.$oid}/edit`} activeClassName='active'>edit</Link></td>
          <td style={tdStyle} onClick={() => ::this.toggleDeleteProduct(item)} >{item.deleted ? 'restore' : 'detele'}</td>
          <td style={tdStyle} onClick={() => ::this.togglePublishProduct(item)} >{item.published ? 'unpublish' : 'publish'}</td>
          <td style={tdStyle} onClick={() => ::this.destroyProduct(item._id.$oid)} >destroy</td>
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
            <th>deleted</th>
            <th>published</th>
            <th>destroy</th>
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
  products: state.products.toJS()
}))(ProductsList)
