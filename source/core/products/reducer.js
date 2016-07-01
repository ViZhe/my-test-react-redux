
import {fromJS} from 'immutable'

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
  data: [
    // {
    //   template: String,
    //   isActivated: Boolean,
    //   isDeleted: Boolen,
    //   createdAt: timestamp,
    //   updateAt: timestamp,
    //   images: [
    //     {
    //       name: '',
    //       i300x300: '' // TODO: think
    //     }
    //   ],
    //   options: {
    //     name: 'value'
    //   }
    // }
  ],
  isLoading: true
})

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case DESTROY_PRODUCT:
      return state.updateIn(['data'], list =>
        list.filter(product => product._id.$oid !== action.payload)
      )

    case UPDATE_PRODUCT_FIELD:
      return state.updateIn(['data'], list =>
        list.map(product => {
          if (product._id.$oid === action.payload.id) {
            product[action.payload.field] = action.payload.value
          }
          return product
        })
      )

    case UPDATE_PRODUCT:
      return state.updateIn(['data'], list =>
        list.map(product => {
          if (product._id.$oid === action.payload.id) {
            product = action.payload
          }
          return product
        })
      )

    case ADD_PRODUCT:
      return state.withMutations(state =>
        state.update('data', list =>
          list.concat(action.payload)
        )
      )

    case LOAD_PRODUCTS:
      return state.withMutations(state => {
        state.set('data', action.payload)
        state.set('isLoading', false)
      })

    case LOAD_PRODUCT:
      return state.set('editable', action.payload)

    default:
      return state
  }
}
