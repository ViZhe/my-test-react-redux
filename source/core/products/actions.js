
import {
  ADD_PRODUCT,
  DESTROY_PRODUCT,
  LOAD_PRODUCT,
  LOAD_PRODUCTS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FIELD
} from './constants'


export const loadProducts = data => {
  return {
    type: LOAD_PRODUCTS,
    payload: data
  }
}

export const loadProduct = data => {
  return {
    type: LOAD_PRODUCT,
    payload: data
  }
}

export const destroyProduct = data => {
  return {
    type: DESTROY_PRODUCT,
    payload: data
  }
}

export const updateProductField = data => {
  return {
    type: UPDATE_PRODUCT_FIELD,
    payload: data
  }
}

export const updateProduct = data => {
  return {
    type: UPDATE_PRODUCT,
    payload: data
  }
}

export const addProduct = data => {
  return {
    type: ADD_PRODUCT,
    payload: data
  }
}
