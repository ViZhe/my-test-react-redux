
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'

import {
    Product, ProductList, AddProduct,
    AreaList, AddArea
} from '../components'


import { addArea } from '../actions'

export default class App extends Component {
    addArea(data) {
        this.props.dispatch(addArea(data))
        this.props.dispatch(reset('addAreaForm'))
    }
    render() {
        const { area } = this.props.area
        const { options } = this.props.options
        return <div>
            <Product />
            <AddProduct optionsList={options} />
            <ProductList />
            <AddArea onSubmit={::this.addArea} />
            <AreaList areaList={area} />
        </div>
    }
}


function mapStateToProps(state) {
    return {
        area: state.area,
        options: state.options
    }
}

export default connect(mapStateToProps)(App)
