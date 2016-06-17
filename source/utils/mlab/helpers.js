
import axios from 'axios'

import { MLAB_CONFIG } from './config'


export const getProducts = () =>
    axios.get(`${MLAB_CONFIG.url}/products_test?${MLAB_CONFIG.apiKey}`)

export const addProducts = (data) =>
    axios.post(`${MLAB_CONFIG.url}/products_test?${MLAB_CONFIG.apiKey}`, data)

export const removeProducts = (id) =>
    axios.delete(`${MLAB_CONFIG.url}/products_test/${id}?${MLAB_CONFIG.apiKey}`)
