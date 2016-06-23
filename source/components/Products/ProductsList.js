
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  loadProducts,
  updateProductField,
  destroyProduct
} from '~/core/products/actions'
import * as mlabHelpers from '~/utils/mlab/helpers'
import ProductsListItem from './ProductsListItem'

// TODO: Сделать в контейнерах такую же папку с таким же файлом и вынести туда логику а тут оставить оформление
export class ProductsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true // TODO: go to action
    }
  }
  componentDidMount() {
    mlabHelpers.getProducts().then(response => {
      this.props.loadProducts(response.data)
      this.setState({
        loading: false
      })
    })
  }
  updateProductField(id, field, value) {
    mlabHelpers.updateProductField(id, field, value).then(response => {
      const product = response.data
      const data = {
        id: product._id.$oid,
        field,
        value: product[field]
      }

      this.props.updateProductField(data)
    })
  }
  toggleDeleteProduct(product) {
    this.updateProductField(product._id.$oid, 'deleted', !product.deleted)
  }
  togglePublishProduct(product) {
    this.updateProductField(product._id.$oid, 'published', !product.published)
  }
  destroyProduct(id) {
    mlabHelpers.destroyProduct(id).then(response => {
      this.props.destroyProduct(response.data._id.$oid)
    })
  }
  render() {
    const {products} = this.props
    const {loading} = this.state

    let tableStyle = {
      border: '1px solid black'
    }

    const productList = products.list || []
    const productsWrap = productList.length
      ? productList.map((item, index) =>
        <ProductsListItem
          key={index}
          item={item}
          onClickDelete={::this.toggleDeleteProduct}
          onClickPublish={::this.togglePublishProduct}
          onClickDestroy={::this.destroyProduct}
          />
      )
      : <tr><td className='c-area-list__empty'>Товаров нет</td></tr>

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
          {(loading && 'Данные загружаются') || productsWrap}
        </tbody>
      </table>
    </div>
  }
}


const mapStateToProps = state => ({
  products: state.products.toJS()
})

const mapDispatchToProps = dispatch => ({
  loadProducts: data => dispatch(loadProducts(data)),
  updateProductField: data => dispatch(updateProductField(data)),
  destroyProduct: id => dispatch(destroyProduct(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)
