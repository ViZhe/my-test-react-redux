
import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'underscore'

import DynamicForm from './DynamicForm'


class DynamicFormCreator extends Component {
  render() {
    const {options, template, onSubmit, submitButtonText} = this.props

    const fields = []
    const initialValues = {}
    const validateList = {}

    const currentTemplate = options.templates.filter(tpl =>
      tpl.name === template
    )[0]
    const currentGroups = options.groups.filter(group =>
      currentTemplate.groups.indexOf(group._id) >= 0
    )

    currentGroups.forEach(group =>
      options.fields.filter(field => group.fields.indexOf(field._id) >= 0)
        .forEach(field => {
          const fieldName = field.name
          const fieldDefault = field.default
          const fieldValidate = field.validate

          fields.push(fieldName)

          if (fieldDefault !== '' && typeof fieldDefault !== 'undefined') {
            initialValues[fieldName] = fieldDefault
          }

          if (fieldValidate !== '' && typeof fieldValidate !== 'undefined') {
            validateList[fieldName] = fieldValidate
          }
        })
    )

    const validate = values => {
      const errors = {}

      _.each(validateList, (validations, fieldName) => {
        if (!errors[fieldName] && validations) {
          _.each(validations, (val, key) => {
            // regex
            if (val && val.regex) {
              const regex = new RegExp(val.regex, 'i')
              if (!regex.test(values[fieldName])) {
                errors[fieldName] = val.title
              }
            }
            // required
            if (val.required && !values[fieldName]) {
              errors[fieldName] = val.title
            }
            // TODO: add more validators
          })
        }
      })
      return errors
    }

    return <DynamicForm
      groupsList={currentGroups}
      fieldsList={options.fields}
      fields={fields}
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      submitButtonText={submitButtonText}
      // normalize={{title: value => value && value.toUpperCase()}} //  TODO: check it
      />
  }
}


export default connect(state => ({
  options: state.options.toJS()
}))(DynamicFormCreator)
