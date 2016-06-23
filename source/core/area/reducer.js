
import {ADD_AREA} from './constants'

export const initialState = {
  list: [
    {
      id: '1asdasd',
      number: 1,
      turn: 1,
      square: 12.22,
      people: [
        {
          name: 'Иванов Петр Иванович',
          owner: true
        },
        {
          name: 'Иванова Анна Сергеевна'
        }
      ]
    },
    {
      id: '2asdasd',
      number: 2,
      turn: 1,
      square: 10.45,
      people: [
        {
          name: 'Сидорова Елена Сергеевна',
          owner: true
        },
        {
          name: 'Сидоров Семен Алексеевич'
        }
      ]
    }
  ]
}

export function areaReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_AREA:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload
        ]
      }

    default:
      return state
  }
}
