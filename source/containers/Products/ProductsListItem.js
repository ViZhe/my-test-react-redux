
import React, {Component} from 'react'

import * as hz from '~/utils/horizon/helpers'
import ProductsListItem from '~/components/Products/ProductsListItem'


class ProductsListItemContainer extends Component {
  updateProductField(id, field, value) {
    hz.products.update({
      id,
      [field]: value
    }).subscribe(
      _id => console.info(`
        Type: Product Field Update
        Id: "${_id.id}".
        Field: "${field}".
        Value: "${value}"
      `),
      err => console.error('Update Fail', err)
    )
  }
  toggleDeleteProduct() {
    const product = this.props.product
    this.updateProductField(product.id, 'isDeleted', !product.isDeleted)
  }
  toggleActiveProduct() {
    const product = this.props.product
    this.updateProductField(product.id, 'isActivated', !product.isActivated)
  }
  destroyProduct() {
    hz.products.remove(this.props.product.id).subscribe(
      _id => console.info(`
        Type: Product Destroy
        Id: "${_id.id}".
      `),
      err => console.error('Destroy Fail', err)
    )
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

export default ProductsListItemContainer
