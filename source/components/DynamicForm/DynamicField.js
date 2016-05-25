
import React, { Component } from 'react'

export default class DynamicField extends Component {

    render() {
        const { field, fields } = this.props
        const option = fields[field.name]

        option.title = field.title

        let output;
        switch (field.type) {
            case 'textarea':
                output = <textarea {...option} ></textarea>
                break
            case 'checkbox':
                // output = <input type='checkbox' {...option} />
                output = 'todo' // defaultChecked
                break
            case 'radio':
                output = 'todo' // defaultChecked
                break
            case 'select':
                output = 'todo' // defaultValue
                break
            default:
                output = <input type={field.type} {...option} />
        }

        return <label title={field.name} >
            {field.title}
            {output}
            {option.touched && option.error && <div>{option.error}</div>}
            <br/>
        </label>
    }
}

// TODO: Radio fields
// TODO: Select fields
