
import React, { Component } from 'react'

export default class DynamicField extends Component {
    render() {
        const { field } = this.props

        let output;
        switch (field.type) {
            case 'textarea':
                output =  <textarea name={field.name} defaultValue={field.default}></textarea>
                break;
            case 'checkbox':
                output = <input type={field.type} name={field.name} defaultChecked={field.default} />
                break;
            case 'radio':
                output = 'todo' // defaultChecked
                break;
            case 'select':
                output = 'todo' // defaultValue
                break;
            default:
                output = <input type={field.type} name={field.name} defaultValue={field.default} />
        }

        return <label title={field.name}>
            {field.title}
            {output}
            <br/>
        </label>
    }
}

// TODO: Validation for All
// TODO: Radio fields
// TODO: Select fields
