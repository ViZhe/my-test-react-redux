
import React, {Component} from 'react'
import {subscribe} from 'horizon-react'

import ProductsList from '~/components/Products/ProductsList'


export class ProductsListContainer extends Component {
  render() {
    return <ProductsList
      {...this.props}
      />
  }
}


const mapDataToProps = {
  products: hz => hz('products')
}

export default subscribe({
  mapDataToProps
})(ProductsListContainer)
