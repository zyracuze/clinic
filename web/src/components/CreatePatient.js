import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { hashHistory } from 'react-router';
import { apiCreatePatient } from '../apis/ApiPatient'

import Dialog from 'react-bootstrap-dialog'

import { Form, FormGroup, FormControl, ControlLabel, Row, Col, Radio, Button, DropdownButton, MenuItem, Modal, Alert } from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

class CreatePatient extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment(),
      modal: {
        active: false,
        body: ''
      },
      modalAlert: {
        active: false,
        body: ''
      },
      firstname: '',
      lastname: '',
      nickname: '',
      gender: '',
      birthday: '',
      idCard: '',
      career: '',
      tel: '',
      workAddress: '',
      homeAddress: '',
      requiredDocument: '',
      congenitalDisease: '',
      beAllergic: '',
      emergencyContact: {
        name: '',
        relationship: '',
        tel: ''
      }

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModalAlert = this.closeModalAlert.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let requestObj = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      nickname: e.target.nickname.value,
      gender: e.target.gender.value,
      birthday: this.state.startDate.format('DD/MM/YYYY'),
      idCard: e.target.idCard.value,
      career: e.target.career.value,
      tel: e.target.tel.value,
      workAddress: e.target.workAddress.value,
      homeAddress: e.target.homeAddress.value,
      requiredDocument: e.target.requiredDocument.value,
      congenitalDisease: e.target.congenitalDisease.value,
      beAllergic: e.target.beAllergic.value,
      emergencyContact: {
        name: e.target.emergencyContactName.value,
        relationship: e.target.emergencyContactRelationship.value,
        tel: e.target.emergencyContactTel.value
      }
    };
    console.log(requestObj)
    apiCreatePatient(requestObj).then(() => {
      this.openModal();
    }, () => {
      this.openModalAlert();
    });
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  openModal() {
    this.setState({ modal: { active: true } });
  }

  closeModal() {
    this.setState({ modal: { active: false } });
    hashHistory.push('/home');
  }

  openModalAlert() {
    this.setState({ modalAlert: { active: true } });
  }

  closeModalAlert() {
    this.setState({ modalAlert: { active: false } });
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ชื่อ
             </Col>
          <Col sm={3}>
            <FormControl id="firstname" type="text" placeholder="ชื่อ" />
          </Col>
          <Col componentClass={ControlLabel} sm={1}>
            นามสกุล
             </Col>
          <Col sm={3}>
            <FormControl id="lastname" type="text" placeholder="นามสกุล" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ชื่อเล่น
             </Col>
          <Col sm={3}>
            <FormControl id="nickname" type="text" placeholder="ชื่อเล่น" />
          </Col>
          <Col componentClass={ControlLabel} sm={1}>
            เพศ
             </Col>
          <Col sm={3}>
            <FormControl componentClass="select" id="gender">
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            วันเกิด
             </Col>
          <Col sm={3}>
            <DatePicker
              id="birthday"
              selected={this.state.startDate}
              onChange={this.handleChange}
              showMonthDropdown
              showYearDropdown
              dateFormat="DD/MM/YYYY"
              dropdownMode="select"
              className="form-control" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            บัตรประชาชน
             </Col>
          <Col sm={2}>
            <FormControl id="idCard" type="text" placeholder="บัตรประชาชน" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            อาชีพ
             </Col>
          <Col sm={2}>
            <FormControl id="career" type="text" placeholder="อาชีพ" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            โทร
             </Col>
          <Col sm={2}>
            <FormControl id="tel" type="text" placeholder="โทร" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ที่อยู่ปัจจุบัน
             </Col>
          <Col sm={7}>
            <FormControl id="homeAddress" type="text" placeholder="ที่อยู่ปัจจุบัน" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ที่อยู่ที่ทำงาน
             </Col>
          <Col sm={7}>
            <FormControl id="workAddress" type="text" placeholder="ที่อยู่ที่ทำงาน" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            เอกสารที่ต้องการ
              </Col>
          <Col sm={3}>
            <Radio id="doc0" name="requiredDocument" inline>ใบรับรองแพทย์</Radio>{' '}
            <Radio id="doc1" name="requiredDocument" inline>ประกันสังคม</Radio>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            โรคประจำตัว
              </Col>
          <Col sm={7}>
            <FormControl id="congenitalDisease" type="text" placeholder="โรคประจำตัว" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            แพ้ยา
              </Col>
          <Col sm={7}>
            <FormControl id="beAllergic" type="text" placeholder="แพ้ยา" />
          </Col>
        </FormGroup>
        <Col className="clearline" />
        <Col className="txtheader" componentClass={ControlLabel} sm={12}>
          ติดต่อฉุกเฉิน
            </Col>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ผู้ติดต่อฉุกเฉิน
              </Col>
          <Col sm={7}>
            <FormControl id="emergencyContactName" type="text" placeholder="ผู้ติดต่อฉุกเฉิน" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ความสัมพันธ์
              </Col>
          <Col sm={3}>
            <FormControl id="emergencyContactRelationship" type="text" placeholder="ความสัมพันธ์" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            โทร
              </Col>
          <Col sm={3}>
            <FormControl id="emergencyContactTel" type="text" placeholder="โทร" />
          </Col>
        </FormGroup>
        <Button bsStyle="success" type="submit" id="saveBtn" >เพิ่ม</Button>
        <Modal show={this.state.modal.active} onHide={this.closeModal} backdrop="static" keyboard="false">
          <Modal.Body>
            เพิ่มผู้ป่วยสำเร็จ
            <div>
              <Button bsStyle="default" type="button" onClick={this.closeModal} id="okBtn">ตกลง</Button>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.modalAlert.active} onHide={this.closeModalAlert}>
          <Alert bsStyle="danger">
            <strong>ขออภัย</strong>ไม่สามารถเพิ่มผู้ป่วยได้
          </Alert>
        </Modal>
      </Form >
    )
  }

}
export default CreatePatient;
