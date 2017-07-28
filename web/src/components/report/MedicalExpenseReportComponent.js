import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class MedicalExpenseReportComponent extends Component {
  static propTypes = {
        dataTable: PropTypes.array.isRequired
    }
  render() {
    const {dataTable} = this.props
    return(
        <div className="container">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>รหัสผู้ป่วย</th>
                        <th>ชื่อ-นามสกุล</th>
                        <th>วันที่เข้ารักษา</th>
                        <th>ค่ารักษา</th>
                        <th>ยอดสุทธิ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataTable.length > 0 &&
                        dataTable.map((data,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.idPatient}</td>
                                <td>{data.firstname} {data.lastname}</td>
                                <td>{data.createDateTime}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))
                    }
                    {
                        dataTable.length === 0 && 
                        <tr>
                          <td>
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
