
import React, { Component } from 'react'


export default class DynamicFieldCheckbox extends Component {
  render() {
    const { field, option } = this.props

    // TODO: do it better
    // TODO: https://github.com/twisty/formsy-react-components/blob/master/src/checkbox-group.js
    // const elements = field.elements? field.elements.map((elem, index) =>
    //     <label key={index} >
    //         {elem.title}
    //         <input type='checkbox'  name={field.name} value={elem.value}/>
    //     </label>
    // ) : <div>Нет элементов</div>

    return <div title={field.name} >
      {field.title}

      {/*If elements > 1 then
      <div>Enable all</div>
      <div>Disable all</div>*/}

      {/*<input type={field.type} {...option} />*/}
      //DynamicFieldCheckbox//
      {/*{elements}*/}
      {option.touched && option.error && <div>{option.error}</div>}
      <br/>
    </div>
  }
}
