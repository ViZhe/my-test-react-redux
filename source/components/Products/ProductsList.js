
import React, {PropTypes} from 'react'

import ProductsListItem from '~/containers/Products/ProductsListItem'


const ProductsList = ({products}) => {
  let tableStyle = {
    border: '1px solid black'
  }

  const productList = products.list || []
  const productsWrap = productList.length
    ? productList.map((item, index) =>
      <ProductsListItem
        key={index}
        item={item}
        />
    )
    : <tr><td className='c-area-list__empty'>Товаров нет</td></tr>

  return <div className='c-products-list' >
    <h2>Products List</h2>
    <table style={tableStyle} >
      <thead>
        <tr>
          <th>_id1</th>
          <th>o.name</th>
          <th>template</th>
          <th>edit</th>
          <th>isDeleted</th>
          <th>isActivated</th>
          <th>destroy</th>
        </tr>
      </thead>
      <tbody>
        {products.isLoading ? 'Данные загружаются' : productsWrap}
      </tbody>
    </table>
  </div>
}


ProductsList.propTypes = {
  products: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default ProductsList
