
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'

import DynamicFormCreator from '../DynamicForm/DynamicFormCreator'
import { addProduct } from '../../core/products/actions'
import * as mlabHelpers from '../../utils/mlab/helpers'


export class AddProduct extends Component {
  addProduct(data) {
    const { dispatch } = this.props

    const product = {
      id: 100,
      deleted: false,
      published: false,
      createdOn: Math.floor(Date.now() / 1000), // get timestamp
      options: data
    }

    mlabHelpers.addProducts(product).then((response) => {
      dispatch(addProduct(response.data))
      dispatch(reset('dynamicForm'))
    })
  }
  render() {
    const { options } = this.props

    return <div className='c-area-list'>
      <h2>Add Product</h2>
      <p>Групп параметров: {options.length}</p>
      <DynamicFormCreator
        options={options.defaultTemplate}
        onSubmit={::this.addProduct}
        submitButtonText='Создать товар'
      />
    </div>
  }
}

export default connect(state => ({
  options: state.toJS().options
}))(AddProduct)
