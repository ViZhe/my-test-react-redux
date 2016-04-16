
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addArea } from '../../actions'

class AddArea extends Component {
    render() {
        let input
        const { dispatch } = this.props
        return <div className='c-add-area'>
            <p>Add Area</p>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addArea(input.value))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button className='c-btn c-btn_color_green' type='submit'>Добавить участок</button>
            </form>
        </div>
    }
}

export default connect()(AddArea)
