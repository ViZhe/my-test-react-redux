
import React, {Component} from 'react'

import DynamicFieldDefault from './DynamicFieldDefault'
import DynamicFieldTextarea from './DynamicFieldTextarea'
import DynamicFieldCheckbox from './DynamicFieldCheckbox'
import DynamicFieldRadio from './DynamicFieldRadio'
import DynamicFieldSelect from './DynamicFieldSelect'


export default class DynamicFieldAuto extends Component {
  render() {
    const {field, fields} = this.props
    const option = fields[field.name]

    option.title = field.title

    let output
    switch (field.type) {
      case 'textarea':
        output = <DynamicFieldTextarea field={field} option={option} />
        break
      case 'checkbox':
        output = <DynamicFieldCheckbox field={field} option={option} />
        break
      case 'radio':
        output = <DynamicFieldRadio field={field} option={option} />
        break
      case 'select':
        output = <DynamicFieldSelect field={field} option={option} />
        break
      default:
        output = <DynamicFieldDefault field={field} option={option} />
    }

    return <div>
      {output}
    </div>
  }
}
