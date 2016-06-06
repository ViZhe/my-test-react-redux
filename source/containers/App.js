
import React, { Component } from 'react'
import { Link } from 'react-router'


export default class App extends Component {
    render() {
        return <div>
            <h1>APP</h1>
            <ul>
                <li><Link to='/' activeClassName='active' onlyActiveOnIndex={true} >Main</Link></li>
                <li><Link to='/product' activeClassName='active' >Product</Link></li>
                <li><Link to='/area' activeClassName='active' >Area</Link></li>
                <li><Link to='/github' activeClassName='active' >Github</Link></li>
                <li><Link to='/github/reactjs' activeClassName='active' >Github</Link></li>
            </ul>
            {this.props.children}
        </div>
    }
}
