
import React, {PropTypes} from 'react'


const DynamicFieldTextarea = ({field, option}) => {
  return <label title={field.name} >
    {field.title}
    <textarea {...option} ></textarea>
    {option.touched && option.error && <div>{option.error}</div>}
    <br />
  </label>
}


DynamicFieldTextarea.propTypes = {
  field: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default DynamicFieldTextarea
