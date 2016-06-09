
import { ADD_PRODUCT } from './constants'
import { LOAD_PRODUCTS } from './constants'

import { firebaseDb } from '../../utils/firebase/helpers'
export const addProduct = (data) => {
    let info = {
        id: 100,
        deleted: false,
        published: false,
        createdOn: Math.floor(Date.now() / 1000), // get timestamp
        options: data
    }
    
    firebaseDb.push('products/list', {
        data: info
    })
    return {
        type: ADD_PRODUCT,
        payload: info
    }
}

export const loadProducts = (data) => {
    return {
        type: LOAD_PRODUCTS,
        payload: data
    }
}
