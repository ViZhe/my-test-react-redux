
import {fromJS} from 'immutable'


export const initialState = fromJS({
  templates: [
    {
      _id: 'templateID1',
      name: 'defaultTemplate',
      groups: [
        'groupID1',
        'groupID2'
      ]
    }
  ],
  groups: [
    {
      _id: 'groupID1',
      name: 'testProduct',
      title: 'Тест продуктов',
      fields: [
        'fieldID1x1',
        'fieldID1x2',
        'fieldID1x3',
        'fieldID1x4',
        'fieldID1x5',
        'fieldID1x6',
        'fieldID1x7',
        'fieldID1x8',
        'fieldID1x9'
      ]
    },
    {
      _id: 'groupID2',
      name: 'seodata',
      title: 'СЕО Данные',
      fields: [
        'fieldID2x1',
        'fieldID2x2'
      ]
    }
  ],
  fields: [
    {
      _id: 'fieldID1x1',
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
      _id: 'fieldID1x2',
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
      _id: 'fieldID1x3',
      name: 'price',
      title: 'Price',
      type: 'text',
      default: ''
    },
    {
      _id: 'fieldID1x4',
      name: 'oldPrice',
      title: 'Old Price',
      type: 'text',
      default: ''
    },
    {
      _id: 'fieldID1x5',
      name: 'introtext',
      title: 'Introtext',
      type: 'textarea',
      default: 'Default Introtext'
    },
    {
      _id: 'fieldID1x6',
      name: 'color',
      title: 'Color',
      type: 'text',
      default: ''
    },
    {
      _id: 'fieldID1x7',
      name: 'desinfection',
      title: 'Desinfection',
      type: 'textarea',
      default: 'Default Desinfection'
    },
    {
      _id: 'fieldID1x8',
      name: 'form',
      title: 'Form',
      type: 'text',
      default: 'rectangular'
    },
    {
      _id: 'fieldID1x9',
      name: 'humans',
      title: 'Humans',
      type: 'text',
      // type: 'number',
      default: '2'
    },
    {
      _id: 'fieldID2x1',
      name: 'seoTitle',
      title: 'СЕО: Заголовок',
      type: 'text',
      default: ''
    },
    {
      _id: 'fieldID2x2',
      name: 'seoDescription',
      title: 'СЕО: Крактое описание',
      type: 'textarea',
      default: 'Default Text'
    }
  ]
})


export function optionsReducer(state = initialState) {
  return state
}
