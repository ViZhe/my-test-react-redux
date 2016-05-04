
import React, { Component } from 'react'
import { reduxForm, addArrayValue } from 'redux-form'

class PureFields extends Component {
    render() {
        const { fieldList } = this.props

        const fields = fieldList.map((field) =>
            <div>
                {field.length}
                {field.addField({
                    name: 'Bobby Tables',
                    age: 13,
                    awards: [ 'Input Sanitation', 'Best XKCD Meme' ]
                })}

            </div>
        )


        return <div>
            {fields ? fields : '<div className="c-__empty">Параметров нет.</div>'}
        </div>
    }
}


export default reduxForm({
    form: 'pureFieldsForm'
}, undefined, {
    addValue: addArrayValue

})(PureFields)
