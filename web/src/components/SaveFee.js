import React, { Component } from 'react'

class SaveFee extends Component {

  constructor() {
    super();
    this.state = {
      feeblock: [(
        <div key="0" className="form-group">
          <label className="col-sm-3 control-label">รายการค่าใช้จ่าย</label>
          <div className="col-sm-2">
            <input type="text" placeholder="รายการค่าใช้จ่าย" ref="expenseItem" id="expenseItem0" className="form-control" />
          </div>
          <label className="col-sm-1 control-label">จำนวนเงิน</label>
          <div className="col-sm-2">
            <input type="text" placeholder="จำนวนเงิน" ref="amount" id="amount0" className="form-control" />
          </div>
        </div>
      )]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onAddBtnClick = this.onAddBtnClick.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.refs.idPatient.value)
    console.log(this.refs.fullname.value)
    console.log(this.refs.expenseItem.value)
  }

  onAddBtnClick(event) {
    const feeblock = this.state.feeblock;
    this.setState({
      feeblock: feeblock.concat((
        <div key={feeblock.length} className="form-group">
          <label className="col-sm-3 control-label">รายการค่าใช้จ่าย</label>
          <div className="col-sm-2">
            <input type="text" placeholder="รายการค่าใช้จ่าย" id={"expenseItem" + feeblock.length} className="form-control" />
          </div>
          <label className="col-sm-1 control-label">จำนวนเงิน</label>
          <div className="col-sm-2">
            <input type="text" placeholder="จำนวนเงิน" id={"amount" + feeblock.length} className="form-control" />
          </div>
        </div>
      ))
    });
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-3 control-label">รหัสผู้ป่วย</label>
          <div className="col-sm-2">
            <input type="text" placeholder="รหัสผู้ป่วย" ref="idPatient" id="idPatient" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">ชื่อผู้ป่วย</label>
          <div className="col-sm-2">
            <input type="text" placeholder="ชื่อผู้ป่วย" ref="fullname" id="fullname" className="form-control" />
          </div>
        </div>
        {this.state.feeblock}
        <div>
          <button onClick={this.onAddBtnClick} type="button" className="btn btn-primary width45">+</button>
        </div>
        <button type="submit" className="btn btn-success">เพิ่ม</button>
      </form>
    )
  }
}
export default SaveFee;