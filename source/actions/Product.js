
import { ADD_PRODUCT } from '../constants/Product'

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}
