
import { fromJS } from 'immutable'

import {
    LOAD_PRODUCTS,
    REMOVE_PRODUCT,
    ADD_PRODUCT
} from './constants'


export const initialState = fromJS({
    // categories: {} // for foture: this catalog
    list: []
})

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case REMOVE_PRODUCT:
            return state.updateIn(['list'], (list) => list.filter(i => i._id.$oid !== action.payload))

        case ADD_PRODUCT:
            return state.updateIn(['list'], (list) => list.concat(action.payload))

        case LOAD_PRODUCTS:
            return state.updateIn(['list'], () => action.payload)

        default:
            return state
    }
}
