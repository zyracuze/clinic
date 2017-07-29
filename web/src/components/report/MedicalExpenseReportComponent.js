import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class MedicalExpenseReportComponent extends Component {
  static propTypes = {
        dataTable: PropTypes.array.isRequired,
        sumFee: PropTypes.number.isRequired
    }
  render() {
    const {dataTable, sumFee} = this.props
    return(
        <div className="container">
            <b>รวมยอดสุทธิทั้งหมด : {sumFee.toLocaleString('en-US', { style: 'currency', currency: 'THB' })} </b><hr/>
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
                                <td>
                                    {
                                       data.fees.length > 0 &&
                                       data.fees.map((fee,feeIndex)=>(
                                           <div key={feeIndex}>{fee.expenseItem} {fee.amount}</div>
                                       ))
                                    }
                                </td>
                                <td>{data.sumFeeItem}</td>
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
