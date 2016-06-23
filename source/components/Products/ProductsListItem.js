
import React, {PropTypes} from 'react'
import {Link} from 'react-router'


const ProductsListItem = ({item, toggleDeleteHandler, togglePublishHandler, destroyHandler}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  const _id = item._id.$oid

  return <tr>
    <td style={tdStyle} >{_id}</td>
    <td style={tdStyle} >{item.options.name}</td>
    <td style={tdStyle} >{item.template}</td>
    <td style={tdStyle} ><Link to={`/product/${_id}/edit`} activeClassName='active'>edit</Link></td>
    <td style={tdStyle} onClick={toggleDeleteHandler} >{item.deleted ? 'restore' : 'detele'}</td>
    <td style={tdStyle} onClick={togglePublishHandler} >{item.published ? 'unpublish' : 'publish'}</td>
    <td style={tdStyle} onClick={destroyHandler} >destroy</td>
  </tr>
}


ProductsListItem.propTypes = {
  item: PropTypes.object.isRequired, // TODO: details it with PropTypes.shape
  toggleDeleteHandler: PropTypes.func.isRequired,
  togglePublishHandler: PropTypes.func.isRequired,
  destroyHandler: PropTypes.func.isRequired
}

export default ProductsListItem
