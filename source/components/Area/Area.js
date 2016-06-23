
import React, {Component} from 'react'

import AddArea from './AddArea'
import AreaList from './AreaList'


export default class Area extends Component {
  render() {
    return <div>
      <h2>Area</h2>

      <AddArea />
      <AreaList />
    </div>
  }
}
