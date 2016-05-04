
import React, { Component } from 'react'
import PureFields from '../PureFields/PureFields'


export default class addProduct extends Component {
    render() {
        const { optionsList } = this.props

        const hasOptions = !!optionsList.length
        const options = !hasOptions ?
            <div className='c-area-list__empty'>Участки не найдены.</div> :
            optionsList.map((options, index) =>
                <div>{options.name} - {index}
                    <PureFields fieldList={options.fields} />
                </div>
            )

        return <div className='c-area-list'>
            <h2>Add Product</h2>
            <form>
                {options}
            </form>
        </div>
    }
}
