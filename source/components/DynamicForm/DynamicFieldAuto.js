
import React, {PropTypes} from 'react'

import DynamicFieldDefault from './DynamicFieldDefault'
import DynamicFieldTextarea from './DynamicFieldTextarea'
import DynamicFieldCheckbox from './DynamicFieldCheckbox'
import DynamicFieldRadio from './DynamicFieldRadio'
import DynamicFieldSelect from './DynamicFieldSelect'


const DynamicFieldAuto = ({field, option}) => {
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

  return output
}


DynamicFieldAuto.propTypes = {
  field: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default DynamicFieldAuto
