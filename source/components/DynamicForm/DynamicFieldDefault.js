
import React, {PropTypes} from 'react'


const DynamicFieldDefault = ({field, option}) => {
  return <label title={field.name} >
    {field.title}
    <input type={field.type} {...option} />
    {option.touched && option.error && <div>{option.error}</div>}
    <br />
  </label>
}


DynamicFieldDefault.propTypes = {
  field: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default DynamicFieldDefault
