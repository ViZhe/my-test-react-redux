
import React, { Component } from 'react'

import {
    ProductsList, AddProduct,
    AreaList, AddArea
} from '../'


export default class Home extends Component {
  render() {
    return <div>
      <h2>Home</h2>

      <AddProduct />
      <ProductsList />
      <AddArea />
      <AreaList />
    </div>
  }
}
