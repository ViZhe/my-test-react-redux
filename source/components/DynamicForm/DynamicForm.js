
import React, {Component} from 'react'
import {reduxForm} from 'redux-form'

import DynamicFieldAuto from './DynamicFieldAuto'


class DynamicForm extends Component {
  render() {
    const {fields, options, handleSubmit, submitButtonText} = this.props

    const optionGroups = options.map((option, index) =>
      <div key={index} className='dynamic-form__group' >
        <div className='dynamic-form__group-header' >{option.title} - ({option.fields.length})</div>
        {option.fields.map((field, index) =>
          <DynamicFieldAuto
            key={index}
            field={field}
            fields={fields}
            />
        )}
      </div>
    )

    const form = <form onSubmit={handleSubmit} >
      {optionGroups}
      <button>{submitButtonText ? submitButtonText : 'Отправить'}</button>
    </form>
    const empty = <div className='c-__empty' >Параметров нет.</div>

    const output = optionGroups ? form : empty

    return <div>
      {output}
    </div>
  }
}

export default reduxForm({
  form: 'dynamicForm',
  getFormState: state => state.form
})(DynamicForm)
