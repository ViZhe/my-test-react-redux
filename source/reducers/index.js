
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import area from './area'
import options from './options'

export default combineReducers({
    form: formReducer.normalize({
        addAreaForm: {
            number: value => value && Number(value)
        }
    }),
    area,
    options
})
