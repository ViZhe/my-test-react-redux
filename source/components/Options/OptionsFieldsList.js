
import React, {PropTypes} from 'react'

import OptionsFieldsListItem from './OptionsFieldsListItem'


const OptionsFieldsList = ({options}) => {
  let tableStyle = {
    border: '1px solid black'
  }

  const optionsFields = options.fields || []
  const fieldsWrap = optionsFields.length
    ? optionsFields.map((field, index) =>
      <OptionsFieldsListItem
        key={index}
        field={field}
        />
    )
    : <tr><td>Полей нет</td></tr>

  return <div>
    <h2>Options Fields List</h2>
    <table style={tableStyle} >
      <thead>
        <tr>
          <th>_id</th>
          <th>name</th>
          <th>title</th>
          <th>type</th>
          <th>default</th>
          <th>destroy(TODO)</th>
        </tr>
      </thead>
      <tbody>
        {options.isLoading ? 'Данные загружаются' : fieldsWrap}
      </tbody>
    </table>
  </div>
}


OptionsFieldsList.propTypes = {
  options: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default OptionsFieldsList
