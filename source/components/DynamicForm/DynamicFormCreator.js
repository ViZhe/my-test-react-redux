
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  loadOptions
} from '~/core/options/actions'
import * as mlabHelpers from '~/utils/mlab/helpers'
import DynamicForm from './DynamicForm'


class DynamicFormCreator extends Component {
  componentDidMount() {
    mlabHelpers.getOptions().then(response => {
      this.props.loadOptions({
        templates: response[0].data,
        groups: response[1].data,
        fields: response[2].data
      })
    })
  }
  render() {
    const {options, template, onSubmit, submitButtonText} = this.props

    const fields = []
    const initialValues = {}
    const validateList = {}

    const currentTemplate = options.templates.filter(tpl =>
      tpl.name === template
    )[0]
    const currentGroups = options.groups.filter(group =>
      currentTemplate.groups.indexOf(group._id.$oid) >= 0
    )

    currentGroups.forEach(group =>
      options.fields.filter(field => group.fields.indexOf(field._id.$oid) >= 0)
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

      for (const fieldName in validateList) {
        if ({}.hasOwnProperty.call(validateList, fieldName)) {
          const validations = validateList[fieldName]

          validations.forEach(valid => {
            if (errors[fieldName]) {
              return
            }
            const type = valid.type

            if (type === 'regex') {
              const regex = new RegExp(valid.regex, 'i')
              if (!regex.test(values[fieldName])) {
                errors[fieldName] = valid.title
              }
            } else if (type === 'required') {
              if (!values[fieldName]) {
                errors[fieldName] = valid.title
              }
            }

            // TODO: add more validators
          })
        }
      }

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


const mapStateToProps = state => ({
  options: state.options.toJS()
})

const mapDispatchToProps = dispatch => ({
  loadOptions: data => dispatch(loadOptions(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicFormCreator)
