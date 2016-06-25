
import React, {PropTypes} from 'react'


const DynamicFieldRadio = ({field, option}) => {
  return <label title={field.name} >
    {field.title}
    {/* <input type={field.type} {...option} />*/}
    //DynamicFieldRadio//
    {option.touched && option.error && <div>{option.error}</div>}
    <br />
  </label>
}


DynamicFieldRadio.propTypes = {
  field: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default DynamicFieldRadio
