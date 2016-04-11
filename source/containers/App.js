
import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        const { name, age } = this.props.user

        return <div>
            <p>Hellow, {name}!</p>
            <p>You're {age} years old</p>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(App)
