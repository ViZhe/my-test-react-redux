
import { ADD_PRODUCT } from './constants'

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}
