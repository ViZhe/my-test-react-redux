
import React, {PropTypes} from 'react'


const DynamicFieldSelect = ({field, option}) => {
  return <label title={field.name} >
    {field.title}
    {/* <input type={field.type} {...option} />*/}
    //DynamicFieldSelect//
    {option.touched && option.error && <div>{option.error}</div>}
    <br />
  </label>
}


DynamicFieldSelect.propTypes = {
  field: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default DynamicFieldSelect
