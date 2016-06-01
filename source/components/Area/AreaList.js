
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Area from './Area'


export class AreaList extends Component {
    render() {
        const { area } = this.props

        const hasAreas = !!area.length
        const areas = !hasAreas ?
            <div className='c-area-list__empty'>Участки не найдены.</div> :
            area.map((item, index) =>
                <Area key={'areakey' + index} index={index} {...item} />
            )

        return <div className='c-area-list'>
            <h2>Area List</h2>
            <p>Всего участков - {area.length}</p>
            {areas}
        </div>
    }
}


AreaList.propTypes = {
    area: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired
    }).isRequired).isRequired
}

export default connect(state => ({
    area: state.area.list
}))(AreaList)
