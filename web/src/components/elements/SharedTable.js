import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class SharedTableElement extends Component{
    static propTypes = {
        dataObjTable: PropTypes.array.isRequired,
        onChooseDataTable: PropTypes.func.isRequired
    }
    render(){
        const {dataObjTable, onChooseDataTable} = this.props
        return(
            <table>
                <thead>
                    <tr>
                        <th>รหัสผู้ป่วย</th>
                        <th>ชื่อ</th>
                        <th>นามสกุล</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataObjTable.length > 0 &&
                        dataObjTable.map((data)=>(
                            <tr onClick={()=> onChooseDataTable(data)}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.lastname}</td>
                            </tr>
                        ))
                    }
                    {
                        dataObjTable.length === 0 && 
                        <tr><td colSpan="3">No data</td></tr>
                    }
                </tbody>
            </table>
        )
    }
}