
import React, {PropTypes} from 'react'

// Stateless Functional Components
const AreaListItem = ({index, people, number}) =>
  <div className='c-area'>
    <span className='c-area__number'>{index + 1})</span>
    <span className='c-area__owner'>{people ? people[0].name : 'Не известен'} / Участок № {number}</span>
  </div>

AreaListItem.propTypes = {
  index: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired
}

export default AreaListItem
