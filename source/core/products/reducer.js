
import { ADD_PRODUCT } from './constants'
import { LOAD_CATALOG } from './constants'


export const initialState = {
    list: []
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        case LOAD_CATALOG:
            return {
                ...state,
                list: action.payload.list

            }

        default:
            return state
    }
}
