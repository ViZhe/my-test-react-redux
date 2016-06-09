
import { ADD_PRODUCT } from './constants'
import { LOAD_PRODUCTS } from './constants'

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            id: 100,
            deleted: false,
            published: false,
            createdOn: Math.floor(Date.now() / 1000), // get timestamp
            options: data
        }
    }
}

export const loadProducts = (data) => {
    return {
        type: LOAD_PRODUCTS,
        payload: data
    }
}
