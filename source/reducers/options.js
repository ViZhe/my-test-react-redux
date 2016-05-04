
const initialState = {
    options: [
        {
            id: 'group1',
            name: 'Метаданные',
            fields: [
                {
                    name: 'title',
                    title: 'Заголовок',
                    type: 'text'
                },
                {
                    name: 'description',
                    title: 'Крактое описание',
                    type: 'textarea'
                }
            ]
        },
        {
            id: 'group2',
            name: 'Смеситель',
            fields: [
                {
                    name: 'izliv',
                    title: 'Излив',
                    type: 'text'
                },
                {
                    name: 'size',
                    title: 'Ш.В.Г.',
                    type: 'text'
                }
            ]
        }
    ]
}

export default function optionsState(state = initialState) {
    return state;
}
