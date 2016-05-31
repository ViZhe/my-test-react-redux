
export const initialState = [
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
                default: 'Default Text'
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
            // },
            // {
            //     name: 'sale',
            //     title: 'Скидки',
            //     type: 'checkbox',
            //     default: ['true'],
            //     elements: [
            //         {
            //             title: 'Да',
            //             value: 'true'
            //         }
            //     ]
            // },
            // {
            //     name: 'dopi',
            //     title: 'Дополнительные опции',
            //     type: 'checkbox',
            //     default: ['val1', 'val3'],
            //     elements: [
            //         {
            //             title: 'Сборка',
            //             value: 'val1'
            //         },
            //         {
            //             title: 'Доставка',
            //             value: 'val2'
            //         },
            //         {
            //             title: 'Склейка',
            //             value: 'val3'
            //         }
            //     ]
            // },
            // {
            //     name: 'garant',
            //     title: 'Гарантия',
            //     type: 'radio',
            //     default: ['val2'],
            //     elements: [
            //         {
            //             title: '1 год',
            //             value: 'val1'
            //         },
            //         {
            //             title: '2 годa',
            //             value: 'val2'
            //         },
            //         {
            //             title: '3 годa',
            //             value: 'val3'
            //         }
            //     ]
            }
            // TODO: add select example
        ]
    }
]


export function optionsReducer(state = initialState) {
    return state;
}
