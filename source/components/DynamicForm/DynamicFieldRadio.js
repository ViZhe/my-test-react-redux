
import React, { Component } from 'react'


export default class DynamicFieldRadio extends Component {
    render() {
        const { field, option } = this.props

        return <label title={field.name} >
            {field.title}
            {/*<input type={field.type} {...option} />*/}
            //DynamicFieldRadio//
            {option.touched && option.error && <div>{option.error}</div>}
            <br/>
        </label>
    }
}
