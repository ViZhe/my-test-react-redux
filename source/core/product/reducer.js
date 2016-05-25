
import { ADD_PRODUCT } from './constants'

export const initialState = {
    list: [
        {
            id: 'item1',
            title: 'Товар 1'
        }
    ]
}


export function productReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }

        default:
            return state;
    }
}
