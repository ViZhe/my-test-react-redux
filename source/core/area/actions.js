
import {ADD_AREA} from './constants'

export const addArea = data => {
  return {
    type: ADD_AREA,
    payload: data
  }
}
