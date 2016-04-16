
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    Turn,
    AreaList, AddArea
} from '../components'



export default class App extends Component {
    render() {
        const { area } = this.props.area
        return <div>
            <Turn/>
            <AddArea/>
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
