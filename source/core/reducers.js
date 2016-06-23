
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {areaReducer} from './area'
import {optionsReducer} from './options'
import {productsReducer} from './products'


export default combineReducers({
  // form: formReducer.normalize({
  //     addAreaForm: {
  //         number: value => value && Number(value)
  //     }
  // }),
  form: formReducer,
  area: areaReducer,
  options: optionsReducer,
  products: productsReducer
})
