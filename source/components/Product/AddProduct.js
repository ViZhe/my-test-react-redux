
import React, { Component } from 'react'

import DynamicFormCreator from '../DynamicForm/DynamicFormCreator'


export default class addProduct extends Component {
    render() {
        const { optionsList, onSubmit } = this.props

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
            <DynamicFormCreator
                options={optionsList}
                onSubmit={onSubmit}
                submitButtonText='Создать товар'
            />
        </div>
    }
}
