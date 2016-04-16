
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {reset} from 'redux-form'

import {
    Turn,
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
        return <div>
            <Turn/>
            <AddArea onSubmit={::this.addArea} />
            <AreaList areaList={area} />
        </div>
    }
}


function mapStateToProps(state) {
    return {
        area: state.area
    }
}

export default connect(mapStateToProps)(App)
