
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import DynamicField from '../DynamicForm/DynamicField'

class DynamicForm extends Component {
    render() {
        const { fields, options, handleSubmit, submitButtonText } = this.props

        const optionGroups = options.map((option, index) =>
            <div key={index} className='dynamic-form__group' >
                {option.id} - {option.name} - ({option.fields.length})
                {option.fields.map((field, index) =>
                    <DynamicField
                        key={index}
                        field={field}
                        fields={fields}
                    />
                )}
            </div>
        )

        let output = !optionGroups ?
            <div className='c-__empty' >Параметров нет.</div> :
            <form onSubmit={handleSubmit} >
                {optionGroups}
                <button>{submitButtonText ? submitButtonText : 'Отправить'}</button>
            </form>

        return <div>
            {output}
        </div>
    }
}

export default reduxForm({
    form: 'dynamicForm'
})(DynamicForm)
