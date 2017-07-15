import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
export default class SharedTableElement extends Component{
    static propTypes = {
        dataObjTable: PropTypes.array.isRequired
    }
    render(){
        const {dataObjTable} = this.props
        return(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>รหัสผู้ป่วย</th>
                        <th>ชื่อ</th>
                        <th>นามสกุล</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataObjTable.length > 0 &&
                        dataObjTable.map((data)=>(
                            <tr>
                                <td>{data.idPatient}</td>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td><Link to={{pathname:`/editPatient/${data.idPatient}`}} >Edit</Link></td>
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