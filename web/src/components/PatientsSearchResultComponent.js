import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import {Button} from 'react-bootstrap';
export default class PatientsSearchResultComponent extends Component{
    static propTypes = {
        dataObjTable: PropTypes.array.isRequired,
        showPatientDetail: PropTypes.func.isRequired
    }
    render(){
        const {dataObjTable, showPatientDetail} = this.props
        return(
            <div className="container">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>รหัสผู้ป่วย</th>
                        <th>ชื่อ</th>
                        <th>นามสกุล</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataObjTable.length > 0 &&
                        dataObjTable.map((data,index)=>(
                            <tr key={index}>
                                <td>{data.idPatient}</td>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td><Link to={{pathname:`/editPatient/${data.idPatient}`}} >Edit</Link></td>
                                <td><Button onClick={()=>showPatientDetail(data)}>View</Button></td>
                            </tr>
                        ))
                    }
                    {
                        dataObjTable.length === 0 && 
                        <tr><td>
                            No data
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
            </div>
        )
    }
}