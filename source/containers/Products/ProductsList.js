
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  loadProducts
} from '~/core/products/actions'
import * as mlabHelpers from '~/utils/mlab/helpers'
import ProductsList from '~/components/Products/ProductsList'


export class ProductsListContainer extends Component {
  componentDidMount() {
    mlabHelpers.getProducts().then(response => {
      this.props.loadProducts(response.data)
    })
  }
  render() {
    return <ProductsList
      {...this.props}
      />
  }
}


const mapStateToProps = state => ({
  products: state.products.toJS()
})

const mapDispatchToProps = dispatch => ({
  loadProducts: data => dispatch(loadProducts(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListContainer)
