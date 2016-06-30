
import React, {PropTypes} from 'react'
import {Link} from 'react-router'


const ProductsListItem = ({item, toggleDeleteHandler, toggleActiveHandler, destroyHandler}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  const id = item.id

  return <tr>
    <td style={tdStyle} >{id}</td>
    <td style={tdStyle} >{item.options.name}</td>
    <td style={tdStyle} >{item.template}</td>
    <td style={tdStyle} ><Link to={`/product/${id}/edit`} >edit</Link></td>
    <td style={tdStyle} ><button onClick={toggleDeleteHandler} >{item.isDeleted ? 'restore' : 'detele'}</button></td>
    <td style={tdStyle} ><button onClick={toggleActiveHandler} >{item.isActivated ? 'deactivate' : 'activate'}</button></td>
    <td style={tdStyle} ><button onClick={destroyHandler} >destroy</button></td>
  </tr>
}


ProductsListItem.propTypes = {
  item: PropTypes.object.isRequired, // TODO: details it with PropTypes.shape
  toggleDeleteHandler: PropTypes.func.isRequired,
  toggleActiveHandler: PropTypes.func.isRequired,
  destroyHandler: PropTypes.func.isRequired
}

export default ProductsListItem
