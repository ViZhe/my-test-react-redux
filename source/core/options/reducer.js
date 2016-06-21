
import { fromJS } from 'immutable'


export const initialState = fromJS({
  defaultTemplate: [
    {
      id: '123d1dwd11fwf1w',
      name: 'testProduct',
      title: 'Тест продуктов',
      fields: [
        {
          name: 'article',
          title: 'Article',
          type: 'text',
          default: '',
          validate: [
            {
              required: true,
              title: 'Обязательно заполните Артикул'
            },
            {
              allowedChars: '^[0-9]*?$',
              title: 'Допускаются только цифры'
            }
          ]
        },
        {
          name: 'name',
          title: 'Name',
          type: 'text',
          default: '',
          validate: [
            {
              required: true,
              title: 'Обязательно заполните Название'
            },
            {
              allowedChars: '^[а-яА-ЯёЁa-zA-Z]+$',
              title: 'Допускаются только буквы'
            }
          ]
        },
        {
          name: 'price',
          title: 'Price',
          type: 'text',
          default: ''
        },
        {
          name: 'oldPrice',
          title: 'Old Price',
          type: 'text',
          default: ''
        },
        {
          name: 'introtext',
          title: 'Introtext',
          type: 'textarea',
          default: 'Default Introtext'
        },
        {
          name: 'color',
          title: 'Color',
          type: 'text',
          default: ''
        },
        {
          name: 'desinfection',
          title: 'Desinfection',
          type: 'textarea',
          default: 'Default Desinfection'
        },
        {
          name: 'form',
          title: 'Form',
          type: 'text',
          default: 'rectangular'
        },
        {
          name: 'humans',
          title: 'Humans',
          type: 'text',
          // type: 'number',
          default: '2'
        }
      ]
    },
    {
      id: '124133vt32bt32s412',
      name: 'seodata',
      title: 'СЕО Данные',
      fields: [
        {
          name: 'seoTitle',
          title: 'СЕО: Заголовок',
          type: 'text',
          default: ''
        },
        {
          name: 'seoDescription',
          title: 'СЕО: Крактое описание',
          type: 'textarea',
          default: 'Default Text'
        }
      ]
    }
    // {
    //     id: 'group2',
    //     name: 'smesitel',
    //     title: 'Смеситель',
    //     fields: [
    //         },
    //         {
    //             name: 'sale',
    //             title: 'Скидки',
    //             type: 'checkbox',
    //             default: ['true'],
    //             elements: [
    //                 {
    //                     title: 'Да',
    //                     value: 'true'
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'dopi',
    //             title: 'Дополнительные опции',
    //             type: 'checkbox',
    //             default: ['val1', 'val3'],
    //             elements: [
    //                 {
    //                     title: 'Сборка',
    //                     value: 'val1'
    //                 },
    //                 {
    //                     title: 'Доставка',
    //                     value: 'val2'
    //                 },
    //                 {
    //                     title: 'Склейка',
    //                     value: 'val3'
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'garant',
    //             title: 'Гарантия',
    //             type: 'radio',
    //             default: ['val2'],
    //             elements: [
    //                 {
    //                     title: '1 год',
    //                     value: 'val1'
    //                 },
    //                 {
    //                     title: '2 годa',
    //                     value: 'val2'
    //                 },
    //                 {
    //                     title: '3 годa',
    //                     value: 'val3'
    //                 }
    //             ]
    //         TODO: add select example
    //     ]
    // }
  ]
})


export function optionsReducer(state = initialState) {
  return state
}
