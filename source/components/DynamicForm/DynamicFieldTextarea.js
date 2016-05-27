
import React, { Component } from 'react'


export default class DynamicFieldTextarea extends Component {

    render() {
        const { field, option } = this.props

        return <label title={field.name} >
            {field.title}
            <textarea {...option} ></textarea>
            {option.touched && option.error && <div>{option.error}</div>}
            <br/>
        </label>
    }
}
