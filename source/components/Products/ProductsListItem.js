
import React, {PropTypes} from 'react'
import {Link} from 'react-router'


const ProductsListItem = ({product, toggleDeleteHandler, toggleActiveHandler, destroyHandler}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  const id = product.id

  return <tr>
    <td style={tdStyle} >{id}</td>
    <td style={tdStyle} >{product.options && product.options.name}</td>
    <td style={tdStyle} >{product.template}</td>
    <td style={tdStyle} ><Link to={`/product/${id}/edit`} >edit</Link></td>
    <td style={tdStyle} ><button onClick={toggleDeleteHandler} >{product.isDeleted ? 'restore' : 'detele'}</button></td>
    <td style={tdStyle} ><button onClick={toggleActiveHandler} >{product.isActivated ? 'deactivate' : 'activate'}</button></td>
    <td style={tdStyle} ><button onClick={destroyHandler} >destroy</button></td>
  </tr>
}


ProductsListItem.propTypes = {
  product: PropTypes.object.isRequired, // TODO: details it with PropTypes.shape
  toggleDeleteHandler: PropTypes.func.isRequired,
  toggleActiveHandler: PropTypes.func.isRequired,
  destroyHandler: PropTypes.func.isRequired
}

export default ProductsListItem
