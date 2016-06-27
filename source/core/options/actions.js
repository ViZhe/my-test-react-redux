
import {
  LOAD_OPTIONS
} from './constants'


export const loadOptions = data => {
  return {
    type: LOAD_OPTIONS,
    payload: data
  }
}
