
import React, {Component} from 'react'
import {reduxForm, reset} from 'redux-form'

import {addArea} from '~/core/area/actions'


const validate = values => {
  const errors = {}
  if (!values.id) {
    errors.id = 'Required'
  }
  if (!values.number) {
    errors.number = 'Required'
  }
  if (!values.turn) {
    errors.turn = 'Required'
  } else if (Number(values.turn) > 3) {
    errors.turn = 'Такой очереди не существует'
  }
  if (!values.square) {
    errors.square = 'Required'
  }
  return errors
}

class AddArea extends Component {
  addArea(data) {
    this.props.dispatch(addArea(data))
    this.props.dispatch(reset('addAreaForm'))
  }
  render() {
    const {fields: {id, number, turn, square}} = this.props

    return <div className='c-add-area'>
      <h3>Add Area</h3>
      <form className='c-form' onSubmit={::this.addArea}>
        <label className='c-form__label'>Id
          <input className={(id.touched && id.error && ' c-form__field_has-error')} {...id} />
          {id.touched && id.error && <div>{id.error}</div>}
        </label>
        <label className='c-form__label'>Number
          <input className={(number.touched && number.error && ' c-form__field_has-error')} {...number} />
          {number.touched && number.error && <div>{number.error}</div>}
        </label>
        <label className='c-form__label'>Turn
          <input className={(turn.touched && turn.error && ' c-form__field_has-error')} {...turn} />
          {turn.touched && turn.error && <div>{turn.error}</div>}
        </label>
        <label className='c-form__label'>Square
          <input className={(square.touched && square.error && ' c-form__field_has-error')} {...square} />
          {square.touched && square.error && <div>{square.error}</div>}
        </label>
        <button className='c-btn c-btn_color_green'>Добавить участок</button>
      </form>
    </div>
  }
}

export default reduxForm({
  form: 'addAreaForm',
  fields: ['id', 'number', 'turn', 'square'],
  getFormState: state => state.form,
  validate
})(AddArea)
