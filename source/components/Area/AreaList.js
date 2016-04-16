
import React, { Component, PropTypes } from 'react'
import Area from './Area'


export default class AreaList extends Component {
    render() {
        const { areaList } = this.props

        const hasAreas = !!areaList.length
        const areas = !hasAreas ?
            <div className='c-area-list__empty'>Участки не найдены.</div> :
            areaList.map((area, index) =>
                <Area key={'areakey' + index} index={index} {...area} />
            )

        return <div className='c-area-list'>
            <h2>Area List</h2>
            <p>Всего участков - {areaList.length}</p>
            {areas}
        </div>
    }
}


AreaList.propTypes = {
    areaList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired
    }).isRequired).isRequired
}
