
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

    currentGroups.map(group =>
      options.fields.filter(field => group.fields.indexOf(field._id) >= 0)
        .map(field => {
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
          return ''
        })
    )

    const validate = values => {
      const errors = {}

      _.map(validateList, (validations, fieldName) => {
        if (!errors[fieldName] && validations) {
          _.map(validations, (val, key) => {
            // allowedChars
            if (val && val.allowedChars) {
              const regex = new RegExp(val.allowedChars, 'i')
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
