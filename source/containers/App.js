
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { AreaList, Turn } from '../components'



export default class App extends Component {
    render() {
        const { area } = this.props.area
        return <div>
            <Turn/>
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
