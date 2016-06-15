
import {  fromJS } from 'immutable'

import {
    LOAD_PRODUCTS,
    REMOVE_PRODUCT,
    ADD_PRODUCT
} from './constants'


export const initialState = fromJS({
    // categories: {} // for foture: this catalog
    list: {}
})

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case REMOVE_PRODUCT:
            return state

        case ADD_PRODUCT:
            return state.merge(action.payload)

        case LOAD_PRODUCTS:
            return state.merge(action.payload)

        default:
            return state
    }
}
