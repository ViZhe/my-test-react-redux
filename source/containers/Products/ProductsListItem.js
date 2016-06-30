
import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as mlabHelpers from '~/utils/mlab/helpers'
import ProductsListItem from '~/components/Products/ProductsListItem'
import {
  updateProductField,
  destroyProduct
} from '~/core/products/actions'


class ProductsListItemContainer extends Component {
  updateProductField(id, field, value) {
    mlabHelpers.updateProductField(id, field, value).then(response => {
      const product = response.data
      const data = {
        id: product.id,
        field,
        value: product[field]
      }

      this.props.updateProductField(data)
    })
  }
  toggleDeleteProduct() {
    const item = this.props.item
    this.updateProductField(item.id, 'isDeleted', !item.isDeleted)
  }
  toggleActiveProduct() {
    const item = this.props.item
    this.updateProductField(item.id, 'isActivated', !item.isActivated)
  }
  destroyProduct() {
    const itemId = this.props.item.id
    mlabHelpers.destroyProduct(itemId).then(response => {
      this.props.destroyProduct(response.data.id)
    })
  }
  render() {
    return <ProductsListItem
      toggleDeleteHandler={::this.toggleDeleteProduct}
      toggleActiveHandler={::this.toggleActiveProduct}
      destroyHandler={::this.destroyProduct}
      {...this.props}
      />
  }
}


// const mapStateToProps = state => ({
//   products: state.products.toJS()
// })

const mapDispatchToProps = dispatch => ({
  updateProductField: data => dispatch(updateProductField(data)),
  destroyProduct: id => dispatch(destroyProduct(id))
})

export default connect(
  null,
  mapDispatchToProps
)(ProductsListItemContainer)
