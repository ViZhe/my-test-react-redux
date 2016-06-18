
import {
    LOAD_PRODUCTS,
    DESTROY_PRODUCT,
    UPDATE_PRODUCT_FIELD,
    ADD_PRODUCT
} from './constants'


export const loadProducts = (data) => {
    return {
        type: LOAD_PRODUCTS,
        payload: data
    }
}

export const destroyProduct = (data) => {
    return {
        type: DESTROY_PRODUCT,
        payload: data
    }
}

export const updateProductField = (data) => {
    return {
        type: UPDATE_PRODUCT_FIELD,
        payload: data
    }
}

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}
