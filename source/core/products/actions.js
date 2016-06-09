
import { ADD_PRODUCT } from './constants'
import { LOAD_CATALOG } from './constants'

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

export const loadCatalog = (data) => {
    return {
        type: LOAD_CATALOG,
        payload: data
    }
}
