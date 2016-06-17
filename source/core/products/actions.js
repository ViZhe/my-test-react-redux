
import {
    LOAD_PRODUCTS,
    REMOVE_PRODUCT,
    ADD_PRODUCT
} from './constants'


export const loadProducts = (data) => {
    return {
        type: LOAD_PRODUCTS,
        payload: data
    }
}

export const removeProduct = (data) => {
    return {
        type: REMOVE_PRODUCT,
        payload: data
    }
}

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}
