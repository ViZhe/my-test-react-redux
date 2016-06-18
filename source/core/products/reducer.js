
import { fromJS } from 'immutable'

import {
    LOAD_PRODUCTS,
    DESTROY_PRODUCT,
    UPDATE_PRODUCT_FIELD,
    ADD_PRODUCT
} from './constants'


export const initialState = fromJS({
    // categories: {} // for foture: this catalog
    list: []
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

        case ADD_PRODUCT:
            return state.updateIn(['list'], (list) =>
                list.concat(action.payload)
            )

        case LOAD_PRODUCTS:
            return state.updateIn(['list'], () =>
                action.payload
            )

        default:
            return state
    }
}
