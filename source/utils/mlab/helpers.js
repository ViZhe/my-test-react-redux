
import axios from 'axios'

import { MLAB_CONFIG } from './config'


export const getProducts = () =>
  axios.get(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.products}?${MLAB_CONFIG.apiKey}`)

export const getProduct = (id) =>
  axios.get(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.products}/${id}?${MLAB_CONFIG.apiKey}`)

export const addProducts = (data) =>
  axios.post(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.products}?${MLAB_CONFIG.apiKey}`, data)

export const destroyProduct = (id) =>
  axios.delete(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.products}/${id}?${MLAB_CONFIG.apiKey}`)

export const removeProducts = (id) =>
  axios.delete(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.products}/${id}?${MLAB_CONFIG.apiKey}`)

export const updateProduct = (id, data) => {
  return axios.put(`${MLAB_CONFIG.url}/products_test/${id}?${MLAB_CONFIG.apiKey}`, {
    $set: data
  })
}

export const updateProductField = (id, field, value) => {
  let data = {}
  data[field] = value
  return axios.put(`${MLAB_CONFIG.url}/products_test/${id}?${MLAB_CONFIG.apiKey}`, {
    $set: data
  })
}
