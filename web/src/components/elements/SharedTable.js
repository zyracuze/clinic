import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class SharedTableElement extends Component{
    static propTypes = {
        dataObj: PropTypes.array.isRequired,
        onSearchButton: PropTypes.func.isRequired
    }
    render(){
        const {dataObj, onChooseData} = this.props
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
                        dataObj.length > 0 &&
                        dataObj.map((data)=>(
                            <tr onClick={()=> onChooseData(data)}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.lastname}</td>
                            </tr>
                        ))
                    }
                    {
                        dataObj.length === 0 && 
                        <tr><td colSpan="3">No data</td></tr>
                    }
                </tbody>
            </table>
        )
    }
}