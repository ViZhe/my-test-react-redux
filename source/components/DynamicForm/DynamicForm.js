
import React from 'react'
// import React, {PropTypes} from 'react'
import {reduxForm} from 'redux-form'

import DynamicFieldAuto from './DynamicFieldAuto'


const DynamicForm = ({fields, groupsList, fieldsList, handleSubmit, submitButtonText}) => {
  const optionGroups = groupsList
    .filter(group => groupsList.indexOf(group) >= 0)
    .map((group, index) =>
      <div key={index} className='b-dynamic-form__group' >
        <div className='b-dynamic-form__header' >{group.title} - ({group.fields.length})</div>
        {fieldsList
          .filter(field =>
            fields[field.name] && group.fields.indexOf(field._id.$oid) >= 0
          )
          .map((field, index) =>
            <DynamicFieldAuto
              key={index}
              field={field}
              option={fields[field.name]}
              />
          )}
      </div>
    )

  const empty = <div className='b-dynamic-form__empty' >Параметров нет.</div>
  const form = <form onSubmit={handleSubmit} className='b-dynamic-form'>
    {optionGroups}
    <button>{submitButtonText || 'Отправить'}</button>
  </form>

  return optionGroups ? form : empty
}

// TODO: do it
// DynamicForm.propTypes = {
//   field: PropTypes.object.isRequired
// }

export default reduxForm({
  form: 'dynamicForm',
  getFormState: state => state.form
})(DynamicForm)
