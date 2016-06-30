
import React, {PropTypes} from 'react'

import ProductsListItem from '~/containers/Products/ProductsListItem'


const ProductsList = ({products}) => {
  let tableStyle = {
    border: '1px solid black'
  }

  const hasPoducts = products.length !== 0
  const productsList = products.map((product, index) =>
    <ProductsListItem
      key={index}
      item={product}
      />
  )
  const productsEmpty = <tr><td colSpan={7}>Товаров нет</td></tr>

  return <div className='c-products-list' >
    <h2>Products List</h2>
    <table style={tableStyle} >
      <thead>
        <tr>
          <th>id</th>
          <th>o.name</th>
          <th>template</th>
          <th>edit</th>
          <th>isDeleted</th>
          <th>isActivated</th>
          <th>destroy</th>
        </tr>
      </thead>
      <tbody>
        {hasPoducts ? productsList : productsEmpty}
      </tbody>
    </table>
  </div>
}


ProductsList.propTypes = {
  products: PropTypes.array.isRequired // TODO: details it with PropTypes.shape
}

export default ProductsList
