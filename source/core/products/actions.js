
import {
    LOAD_PRODUCTS,
    REMOVE_PRODUCT,
    ADD_PRODUCT
} from './constants'

import { firebaseDb } from '../../utils/firebase/helpers'


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
    let result = {
        _id: 100,
        deleted: false,
        published: false,
        createdOn: Math.floor(Date.now() / 1000), // get timestamp
        options: data
    }

    firebaseDb.push('products/list', {
        data: result
    })
    return {
        type: ADD_PRODUCT,
        payload: result
    }
}
