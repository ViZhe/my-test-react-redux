
const initialState = [
    {
        id: 'group1',
        name: 'metadata',
        title: 'Метаданные',
        fields: [
            {
                name: 'id',
                title: 'ID',
                type: 'text',
                default: '',
                validate: [
                    {
                        required: true,
                        title: 'Обязательно заполните id'
                    },
                    {
                        allowedChars: '^[0-9]*?$',
                        title: 'Допускаются только цифры'
                    }
                ]
            },
            {
                name: 'title',
                title: 'Заголовок',
                type: 'text',
                default: '',
                validate: [
                    {
                        required: true,
                        title: 'Обязательно заполните Title'
                    },
                    {
                        allowedChars: '^[а-яА-ЯёЁa-zA-Z]+$',
                        title: 'Допускаются только буквы'
                    }
                ]
            },
            {
                name: 'description',
                title: 'Крактое описание',
                type: 'textarea',
                default: 'DEFtextarea'
            }
        ]
    },
    {
        id: 'group2',
        name: 'smesitel',
        title: 'Смеситель',
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
                type: 'checkbox',
                default: false
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


export default function optionsState(state = initialState) {
    return state;
}
