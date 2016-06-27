
import axios from 'axios'

import {MLAB_CONFIG} from './config'


export const getOptionsTemplates = () =>
  axios.get(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.options.templates}?${MLAB_CONFIG.apiKey}`)

export const getOptionsGroups = () =>
  axios.get(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.options.groups}?${MLAB_CONFIG.apiKey}`)

export const getOptionsFields = () =>
  axios.get(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.options.fields}?${MLAB_CONFIG.apiKey}`)

export const getOptions = () =>
  axios.all([getOptionsTemplates(), getOptionsGroups(), getOptionsFields()])


export const getProducts = () =>
  axios.get(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.products}?${MLAB_CONFIG.apiKey}`)

export const getProduct = id =>
  axios.get(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.products}/${id}?${MLAB_CONFIG.apiKey}`)

export const addProducts = data =>
  axios.post(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.products}?${MLAB_CONFIG.apiKey}`, data)

export const destroyProduct = id =>
  axios.delete(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.products}/${id}?${MLAB_CONFIG.apiKey}`)

export const removeProducts = id =>
  axios.delete(`${MLAB_CONFIG.url}/${MLAB_CONFIG.collections.products}/${id}?${MLAB_CONFIG.apiKey}`)

export const updateProduct = (id, data) => {
  return axios.put(`${MLAB_CONFIG.url}/products_test/${id}?${MLAB_CONFIG.apiKey}`, {
    $set: data
  })
}

export const updateProductField = (id, field, value) => {
  const data = {}
  data[field] = value
  return axios.put(`${MLAB_CONFIG.url}/products_test/${id}?${MLAB_CONFIG.apiKey}`, {
    $set: data
  })
}
