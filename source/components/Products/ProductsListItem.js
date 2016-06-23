
// import React, {PropTypes} from 'react'
import React from 'react'
import {Link} from 'react-router'


let tdStyle = {
  border: '1px solid gray'
}

// TODO: Сделать в контейнерах такую же папку с таким же файлом и вынести туда логику а тут оставить оформление
const ProductsListItem = ({item, onClickDelete, onClickPublish, onClickDestroy}) => {
  const _id = item._id.$oid
  return <tr>
    <td style={tdStyle} >{_id}</td>
    <td style={tdStyle} >{item.options.name}</td>
    <td style={tdStyle} >{item.template}</td>
    <td style={tdStyle} ><Link to={`/product/${_id}/edit`} activeClassName='active'>edit</Link></td>
    <td style={tdStyle} onClick={() => onClickDelete(item)} >{item.deleted ? 'restore' : 'detele'}</td>
    <td style={tdStyle} onClick={() => onClickPublish(item)} >{item.published ? 'unpublish' : 'publish'}</td>
    <td style={tdStyle} onClick={() => onClickDestroy(_id)} >destroy</td>
  </tr>
}
// ProductsListItem.propTypes = {
//   index: PropTypes.number.isRequired,
//   number: PropTypes.number.isRequired
// }

export default ProductsListItem
