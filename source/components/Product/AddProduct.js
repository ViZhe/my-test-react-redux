
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'

import DynamicFormCreator from '../DynamicForm/DynamicFormCreator'
import { addProduct } from '../../core/product/actions'


export class AddProduct extends Component {
    addProduct(data) {
        this.props.dispatch(addProduct(data))
        this.props.dispatch(reset('dynamicForm'))
    }
    render() {
        const { options } = this.props

        return <div className='c-area-list'>
            <h2>Add Product</h2>
            <p>Групп параметров: {options.length}</p>
            <DynamicFormCreator
                options={options}
                onSubmit={::this.addProduct}
                submitButtonText='Создать товар'
            />
        </div>
    }
}

export default connect(state => ({
    options: state.options
}))(AddProduct)
