import React, { Component } from 'react';
import '../App.css';

class CreatePatient extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let requestObj = {
      idPatient: "",
      fullname: this.refs.fullname.value,
      lastname: this.refs.fullname.value,
      nickname: this.refs.nickname.value,
      gender: this.refs.gender.value,
      birthday: this.refs.birthday.value,
      idCard: this.refs.idCard.value,
      career: this.refs.career.value,
      tel: this.refs.tel.value,
      workAddress: this.refs.workAddress.value,
      homeAddress: this.refs.homeAddress.value,
      requiredDocument: this.refs.requiredDocument.value,
      congenitalDisease: this.refs.congenitalDisease.value,
      beAllergic: this.refs.beAllergic.value,
      emergencyContact: {
        name: this.refs.emergencyContactName.value,
        relationship: this.refs.emergencyContactRelationship.value,
        tel: this.refs.emergencyContactTel.value
      }
    };
    console.log(requestObj);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-3 control-label">ชื่อ - นามสกุล</label>
          <div className="col-sm-7">
            <input type="text" placeholder="ชื่อ - นามสกุล" ref="fullname" id="fullname" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">ชื่อเล่น</label>
          <div className="col-sm-2">
            <input type="text" placeholder="ชื่อเล่น" ref="nickname" id="nickname" className="form-control" />
          </div>
          <label className="col-sm-1 control-label">เพศ</label>
          <div className="col-sm-2">
            <select ref="gender" id="gender" className="form-control">
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">วันเกิด</label>
          <div className="col-sm-2">
            <input type="text" placeholder="วันเกิด" ref="birthday" id="birthday" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">บัตรประชาชน</label>
          <div className="col-sm-2">
            <input type="text" placeholder="บัตรประชาชน" ref="idCard" id="idCard" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">อาชีพ</label>
          <div className="col-sm-2">
            <input type="text" placeholder="อาชีพ" ref="career" id="career" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">โทร</label>
          <div className="col-sm-2">
            <input type="text" placeholder="โทร" ref="tel" id="tel" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">ที่อยู่ปัจจุบัน</label>
          <div className="col-sm-7">
            <input type="text" placeholder="ที่อยู่ปัจจุบัน" ref="homeAddress" id="homeAddress" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">ที่อยู่ที่ทำงาน</label>
          <div className="col-sm-7">
            <input type="text" placeholder="ที่อยู่ที่ทำงาน" ref="workAddress" id="workAddress" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">เอกสารที่ต้องการ</label>
          <div className="col-sm-3">
            <label className="radio-inline">
              <input type="radio" id="medicalCertificate" ref="requiredDocument" value="MedicalCertificate" name="requiredDocument" />ใบรับรองแพทย์
            </label>
            <label className="radio-inline">
              <input type="radio" id="socialSecurity" ref="requiredDocument" value="SocialSecurity"name="requiredDocument" />ประกันสังคม
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 control-label">โรคประจำตัว</label>
          <div className="col-sm-7">
            <input type="text" placeholder="โรคประจำตัว" ref="congenitalDisease" id="congenitalDisease" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">แพ้ยา</label>
          <div className="col-sm-7">
            <input type="text" placeholder="แพ้ยา" ref="beAllergic" id="beAllergic" className="form-control" />
          </div>
        </div>

        <div className="clearline"></div>

        <label className="txtheader col-sm-12 control-label">ติดต่อฉุกเฉิน</label>
        <div className="form-group">
          <label className="col-sm-3 control-label">ผู้ติดต่อฉุกเฉิน</label>
          <div className="col-sm-7">
            <input type="text" placeholder="ผู้ติดต่อฉุกเฉิน" ref="emergencyContactName" id="emergencyContactName" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">ความสัมพันธ์</label>
          <div className="col-sm-3">
            <input type="text" placeholder="ความสัมพันธ์" ref="emergencyContactRelationship" id="emergencyContactRelationship" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">โทร</label>
          <div className="col-sm-3">
            <input type="text" placeholder="โทร" ref="emergencyContactTel" id="emergencyContactTel" className="form-control" />
          </div>
        </div>
        <button type="submit" className="btn btn-success">เพิ่ม</button>
      </form>
    )
  }

}
export default CreatePatient;