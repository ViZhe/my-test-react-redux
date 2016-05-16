
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import area from './area'
import options from './options'
import product from './product'

export default combineReducers({
    form: formReducer.normalize({
        addAreaForm: {
            number: value => value && Number(value)
        }
    }),
    area,
    options,
    product
})
