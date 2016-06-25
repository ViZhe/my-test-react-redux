
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  updateProduct,
  loadProduct
} from '~/core/products/actions'
import * as mlabHelpers from '~/utils/mlab/helpers'
import DynamicFormCreator from '../DynamicForm/DynamicFormCreator'


export default class EditProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    mlabHelpers.getProduct(this.props.params.id).then(response => {
      this.props.dispatch(loadProduct(response.data))
      this.setState({
        loading: false
      })
    })
  }
  updateProduct(data) {
    const product = {
      updatedOn: Math.floor(Date.now() / 1000), // get timestamp
      options: data
    }

    mlabHelpers.updateProduct(this.props.params.id, product).then(response => {
      this.props.dispatch(updateProduct(response.data))
    })
  }
  render() {
    const {loading} = this.state
    const {product} = this.props

    const former = <DynamicFormCreator
      template={product.template || 'defaultTemplate'}
      onSubmit={::this.updateProduct}
      submitButtonText='Обновить товар'
      />
    return <div>
      <h2>Edit Product - {this.props.params.id}</h2>
      {(loading && 'Данные загружаются') || former}
    </div>
  }
}

export default connect(state => ({
  product: state.products.toJS().editable
}))(EditProduct)
