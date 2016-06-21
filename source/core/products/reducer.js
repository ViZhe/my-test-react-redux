
import { fromJS } from 'immutable'

import {
  ADD_PRODUCT,
  DESTROY_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FIELD,
  LOAD_PRODUCT,
  LOAD_PRODUCTS
} from './constants'


export const initialState = fromJS({
  // categories: {} // for foture: this catalog
  list: [],
  editable: {}
})

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case DESTROY_PRODUCT:
      return state.updateIn(['list'], (list) =>
        list.filter(product => product._id.$oid !== action.payload)
      )

    case UPDATE_PRODUCT_FIELD:
      return state.updateIn(['list'], (list) =>
        list.map((product) => {
          if (product._id.$oid === action.payload.id) {
            product[action.payload.field] = action.payload.value
          }
          return product
        })
      )

    case UPDATE_PRODUCT:
      return state.updateIn(['list'], (list) =>
        list.map((product) => {
          if (product._id.$oid === action.payload.id) {
            product = action.payload
          }
          return product
        })
      )

    case ADD_PRODUCT:
      return state.updateIn(['list'], (list) =>
        list.concat(action.payload)
      )

    case LOAD_PRODUCTS:
      return state.updateIn(['list'], () =>
        action.payload
      )

    case LOAD_PRODUCT:
      return state.updateIn(['editable'], () =>
        action.payload
      )

    default:
      return state
  }
}
