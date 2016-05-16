
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'

import {
    ProductList, AddProduct,
    AreaList, AddArea
} from '../components'


import { addArea, addProduct } from '../actions'

export default class App extends Component {
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


function mapStateToProps(state) {
    return {
        area: state.area,
        options: state.options,
        product: state.product
    }
}

export default connect(mapStateToProps)(App)
