
/* eslint array-callback-return: "off" */

import React, {Component} from 'react'

import DynamicForm from './DynamicForm'

// TODO: to change the structure of condition and rewrite under it
export default class DynamicFormCreator extends Component {
  render() {
    const {options, onSubmit, submitButtonText} = this.props

    const fields = []
    const initialValues = {}
    const validation = {}
    options.map(option => {
      option.fields.map(field => {
        const name = field.name
        const initialValue = field.default
        const validate = field.validate

        fields.push(name)

        if (initialValue !== '' && typeof initialValue !== 'undefined') {
          initialValues[name] = initialValue
        }

        if (validate !== '' && typeof validate !== 'undefined') {
          validation[name] = validate
        }
      })
    })

    const validate = values => {
      const errors = {}
      fields.map(field => {
        const validField = validation[field]
        if (validField) {
          validField.map(valid => {
            if (!errors[field]) {
              if (valid && valid.allowedChars) {
                const regex = new RegExp(valid.allowedChars, 'i')
                if (!regex.test(values[field])) {
                  errors[field] = valid.title
                }
              }

              if (valid.required && !values[field]) {
                errors[field] = valid.title
              }
              //  TODO: add more validators
            }
          })
        }
      })
      return errors
    }

    return <DynamicForm
      options={options}
      fields={fields}
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      submitButtonText={submitButtonText}
      normalize={{title: value => value && value.toUpperCase()}} //  TODO: check it
      />
  }
}
