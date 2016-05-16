
import { ADD_PRODUCT } from '../constants/Product'

const initialState = {
    list: [
        {
            id: 'item1',
            title: 'Товар 1'
        }
    ]
}


export default function productState(state = initialState, action) {
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
