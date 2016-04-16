
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import area from './area'

export default combineReducers({
    form: formReducer.normalize({
        addAreaForm: {
            number: value => value && Number(value)
        }
    }),
    area
})
