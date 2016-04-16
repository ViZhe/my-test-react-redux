
import React, { Component, PropTypes } from 'react'


export default class Area extends Component {
    render() {
        const { index, number, people } = this.props

        return <div className='c-area'>
            <span className='c-area__number'>{index + 1})</span>
            <span className='c-area__owner'>{people ? people[0].name : 'Не известен'} / Участок № {number}</span>
        </div>
    }
}


Area.propTypes = {
    index: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired
}
