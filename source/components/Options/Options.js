
import React, {Component} from 'react'

export default class Options extends Component {
  render() {
    return <div>
      <h2>Options</h2>
      {this.props.children}
    </div>
  }
}
