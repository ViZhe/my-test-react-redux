
import { ADD_AREA } from '../constants/Area'

export const addArea = (data) => {
    return {
        type: ADD_AREA,
        payload: data
    }
}
