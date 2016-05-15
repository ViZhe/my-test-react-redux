
import React, { Component } from 'react'
import DynamicForm from '../DynamicForm/DynamicForm'
import { reset } from 'redux-form'

export default class addProduct extends Component {
    addProduct() {
        this.props.dispatch(reset('dynamicForm'))
    }
    render() {
        const { optionsList } = this.props

        // const hasOptions = !!optionsList.length
        // const options = !hasOptions ?
        //     <div className='c-area-list__empty'>Участки не найдены.</div> :
        //     optionsList.map((options, index) =>
        //         <div key={index}>{options.name} - {index}
        //
        //             {/*{options.fields.map((field, index) =>
        //                 <div key={index}>
        //                     {field.title}
        //                     {field.type}
        //                 </div>
        //             )}*/}
        //         </div>
        //     )

        return <div className='c-area-list'>
            <h2>Add Product</h2>
            <p>Групп параметров: {optionsList.length}</p>
            <DynamicForm options={optionsList} onSubmit={::this.addProduct} />
        </div>
    }
}
