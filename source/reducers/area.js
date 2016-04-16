
const initialState = {
    area: [
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

export default function areaState(state = initialState, action) {
    switch (action.type) {
        case 'ADD_AREA':
            return {
                ...state,
                area: [
                    ...state.area,
                    action.payload
                ]
            }

        default:
            return state;
    }
}
