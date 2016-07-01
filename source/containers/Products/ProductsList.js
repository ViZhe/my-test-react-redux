
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  loadProducts
} from '~/core/products/actions'
import * as hz from '~/utils/horizon/helpers'
import ProductsList from '~/components/Products/ProductsList'


export class ProductsListContainer extends Component {
  componentDidMount() {
    hz.products.watch().subscribe(response => {
      this.props.dispatch(loadProducts(response))
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

export default connect(
  mapStateToProps
)(ProductsListContainer)
