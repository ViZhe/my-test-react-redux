
const initialState = {
    options: [
        {
            id: 'group1',
            name: 'Метаданные',
            fields: [
                {
                    name: 'title',
                    title: 'Заголовок',
                    type: 'text',
                    default: 'text'
                },
                {
                    name: 'description',
                    title: 'Крактое описание',
                    type: 'textarea',
                    default: 'textarea'
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
                },
                {
                    name: 'sale',
                    title: 'Скидки',
                    type: 'checkbox'
                },
                {
                    name: 'weekend_sale',
                    title: 'Выходные скидки',
                    type: 'checkbox',
                    default: true
                }
            ]
        }
    ]
}

export default function optionsState(state = initialState) {
    return state;
}
