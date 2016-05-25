
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'

import {
    ProductList, AddProduct,
    AreaList, AddArea
} from '../components'

// TODO: вынести действия в соответствующие компоненты
// import { addArea, addProduct } from '../actions'
// import { areaActions } from '../core/area/actions'
// import { productActions } from 'source/core/product/actions'
import { addArea } from '../core/area/actions'
import { addProduct } from '../core/product/actions'

export class App extends Component {
    addArea(data) {
        this.props.dispatch(addArea(data))
        this.props.dispatch(reset('addAreaForm'))
    }
    addProduct(data) {
        this.props.dispatch(addProduct(data))
        this.props.dispatch(reset('dynamicForm'))
    }
    render() {
        const { area, options, product } = this.props
        return <div>
            <AddProduct optionsList={options} onSubmit={::this.addProduct} />
            <ProductList productList={product.list} />
            <AddArea onSubmit={::this.addArea} />
            <AreaList areaList={area.list} />
        </div>
    }
}

export default connect(state => ({
    area: state.area,
    options: state.options,
    product: state.product
}))(App)
