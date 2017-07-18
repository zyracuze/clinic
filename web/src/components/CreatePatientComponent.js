import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { hashHistory } from 'react-router';
import { apiCreatePatient } from '../apis/ApiPatient'

import { Form, FormGroup, FormControl, ControlLabel, Col, Radio, Button, Modal } from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

export default class CreatePatientComponent extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      modalAlert: false,
      formValid: true,
      firstname: '',
      firstnameClassName: '',
      lastname: '',
      lastnameClassName: '',
      nickname: '',
      nicknameClassName: '',
      gender: '',
      birthday: moment(),
      birthdayClassName: '',
      idCard: '',
      idCardClassName: '',
      career: '',
      careerClassName: '',
      tel: '',
      telClassName: '',
      workAddress: '',
      workAddressClassName: '',
      homeAddress: '',
      homeAddressClassName: '',
      requiredDocument: '',
      congenitalDisease: '',
      congenitalDiseaseClassName: '',
      beAllergic: '',
      beAllergicClassName: '',
      emergencyContactName: '',
      emergencyContactNameClassName: '',
      emergencyContactRelationship: '',
      emergencyContactRelationshipClassName: '',
      emergencyContactTel: '',
      emergencyContactTelClassName: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModalAlert = this.closeModalAlert.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();

    let inputError = 'input-error';

    let firstnameClassName = '';
    let lastnameClassName = '';
    let nicknameClassName = '';
    let idCardClassName = '';
    let careerClassName = '';
    let telClassName = '';
    let workAddressClassName = '';
    let homeAddressClassName = '';
    let congenitalDiseaseClassName = '';
    let beAllergicClassName = '';
    let emergencyContactNameClassName = '';
    let emergencyContactRelationshipClassName = '';
    let emergencyContactTelClassName = '';
    let formValid = true;

    if (0 >= this.state.firstname.length) {
      firstnameClassName = inputError;
      formValid = false;
    }

    if (0 >= this.state.lastname.length) {
      lastnameClassName = inputError;
      formValid = false;
    }

    if (0 >= this.state.nickname.length) {
      nicknameClassName = inputError;
      formValid = false;
    }

    if (0 >= this.state.idCard.length) {
      idCardClassName = inputError;
      formValid = false;
    }

    if (0 >= this.state.career.length) {
      careerClassName = inputError;
      formValid = false;
    }

    if (0 >= this.state.tel.length) {
      telClassName = inputError;
      formValid = false;
    }

    if (0 >= this.state.workAddress.length) {
      workAddressClassName = inputError;
      formValid = false;
    }

    if (0 >= this.state.homeAddress.length) {
      homeAddressClassName = inputError;
      formValid = false;
    }

    if (0 >= this.state.congenitalDisease.length) {
      congenitalDiseaseClassName = inputError;
      formValid = false;
    }

    if (0 >= this.state.beAllergic.length) {
      beAllergicClassName = inputError;
      formValid = false;
    }
    if (0 >= this.state.emergencyContactName.length) {
      emergencyContactNameClassName = inputError;
      formValid = false;
    }
    if (0 >= this.state.emergencyContactRelationship.length) {
      emergencyContactRelationshipClassName = inputError;
      formValid = false;
    }
    if (0 >= this.state.emergencyContactTel.length) {
      emergencyContactTelClassName = inputError;
      formValid = false;
    }

    this.setState({
      formValid: formValid,
      firstnameClassName: firstnameClassName,
      lastnameClassName: lastnameClassName,
      nicknameClassName: nicknameClassName,
      idCardClassName: idCardClassName,
      careerClassName: careerClassName,
      telClassName: telClassName,
      workAddressClassName: workAddressClassName,
      homeAddressClassName: homeAddressClassName,
      congenitalDiseaseClassName: congenitalDiseaseClassName,
      beAllergicClassName: beAllergicClassName,
      emergencyContactNameClassName: emergencyContactNameClassName,
      emergencyContactRelationshipClassName: emergencyContactRelationshipClassName,
      emergencyContactTelClassName: emergencyContactTelClassName

    });

    if (formValid) {
      let requestObj = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        nickname: this.state.nickname,
        gender: this.state.gender,
        birthday: this.state.birthday.format('DD/MM/YYYY'),
        idCard: this.state.idCard,
        career: this.state.career,
        tel: this.state.tel,
        workAddress: this.state.workAddress,
        homeAddress: this.state.homeAddress,
        requiredDocument: this.state.requiredDocument,
        congenitalDisease: this.state.congenitalDisease,
        beAllergic: this.state.beAllergic,
        emergencyContactName: this.state.emergencyContactName,
        emergencyContactRelationship: this.state.emergencyContactRelationship,
        emergencyContactTel: this.state.emergencyContactTel,
        emergencyContact: {
          name: this.state.emergencyContactName,
          relationship: this.state.emergencyContactRelationship,
          tel: this.state.emergencyContactTel
        }
      };

      apiCreatePatient(requestObj).then(() => {
        this.openModal();
      }, () => {
        this.openModalAlert();
      });

    }

    this.openModalAlert();
  }

  handleChange(date) {
    this.setState({
      birthday: date
    });
  }

  handleInput(e) {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({ [key]: value });
  };

  openModal() {
    this.setState({ modal: true });
  }

  closeModal() {
    this.setState({ modal: false });
    hashHistory.push('/home');
  }

  openModalAlert() {
    this.setState({ modalAlert: true });
  }

  closeModalAlert() {
    this.setState({ modalAlert: false });
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ชื่อ
             </Col>
          <Col sm={3}>
            <FormControl id="firstname" type="text" placeholder="ชื่อ" className={this.state.firstnameClassName} value={this.state.firstname} onChange={this.handleInput} />
          </Col>
          <Col componentClass={ControlLabel} sm={1}>
            นามสกุล
             </Col>
          <Col sm={3}>
            <FormControl id="lastname" type="text" placeholder="นามสกุล" className={this.state.lastnameClassName} value={this.state.lastname} onChange={this.handleInput} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ชื่อเล่น
             </Col>
          <Col sm={3}>
            <FormControl id="nickname" type="text" placeholder="ชื่อเล่น" className={this.state.nicknameClassName} value={this.state.nickname} onChange={this.handleInput} />
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
              selected={this.state.birthday}
              onChange={this.handleChange}
              showMonthDropdown
              showYearDropdown
              dateFormat="DD/MM/YYYY"
              dropdownMode="select"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            บัตรประชาชน
             </Col>
          <Col sm={2}>
            <FormControl id="idCard" type="text" placeholder="บัตรประชาชน" className={this.state.idCardClassName} value={this.state.idCard} onChange={this.handleInput} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            อาชีพ
             </Col>
          <Col sm={2}>
            <FormControl id="career" type="text" placeholder="อาชีพ" className={this.state.careerClassName} value={this.state.career} onChange={this.handleInput} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            โทร
             </Col>
          <Col sm={2}>
            <FormControl id="tel" type="text" placeholder="โทร" className={this.state.telClassName} value={this.state.tel} onChange={this.handleInput} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ที่อยู่ปัจจุบัน
             </Col>
          <Col sm={7}>
            <FormControl id="homeAddress" type="text" placeholder="ที่อยู่ปัจจุบัน" className={this.state.homeAddressClassName} value={this.state.homeAddress} onChange={this.handleInput} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ที่อยู่ที่ทำงาน
             </Col>
          <Col sm={7}>
            <FormControl id="workAddress" type="text" placeholder="ที่อยู่ที่ทำงาน" className={this.state.workAddressClassName} value={this.state.workAddress} onChange={this.handleInput} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            เอกสารที่ต้องการ
              </Col>
          <Col sm={3}>
            <Radio id="doc0" name="requiredDocument" defaultChecked={true} inline>ใบรับรองแพทย์</Radio>{' '}
            <Radio id="doc1" name="requiredDocument" inline>ใบประกันสังคม</Radio>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            โรคประจำตัว
              </Col>
          <Col sm={7}>
            <FormControl id="congenitalDisease" type="text" placeholder="โรคประจำตัว" className={this.state.congenitalDiseaseClassName} value={this.state.congenitalDisease} onChange={this.handleInput} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            แพ้ยา
              </Col>
          <Col sm={7}>
            <FormControl id="beAllergic" type="text" placeholder="แพ้ยา" className={this.state.beAllergicClassName} value={this.state.beAllergic} onChange={this.handleInput} />
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
            <FormControl id="emergencyContactName" type="text" placeholder="ผู้ติดต่อฉุกเฉิน" className={this.state.emergencyContactNameClassName} value={this.state.emergencyContactName} onChange={this.handleInput} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ความสัมพันธ์
              </Col>
          <Col sm={3}>
            <FormControl id="emergencyContactRelationship" type="text" placeholder="ความสัมพันธ์" className={this.state.emergencyContactRelationshipClassName} value={this.state.emergencyContactRelationship} onChange={this.handleInput} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            โทร
              </Col>
          <Col sm={3}>
            <FormControl id="emergencyContactTel" type="text" placeholder="โทร" className={this.state.emergencyContactTelClassName} value={this.state.emergencyContactTel} onChange={this.handleInput} />
          </Col>
        </FormGroup>
        <Button bsStyle="success" type="submit" id="saveBtn" >เพิ่ม</Button>
        <Modal show={this.state.modal} onHide={this.closeModal} backdrop="static" keyboard={false}>
          <Modal.Body>
            เพิ่มผู้ป่วยสำเร็จ
            <div>
              <Button bsStyle="default" type="button" onClick={this.closeModal} id="okBtn">ตกลง</Button>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.modalAlert} onHide={this.closeModalAlert}>
          <div className={"modal-alert-danger"}>
            <strong>ขออภัย</strong>ไม่สามารถเพิ่มผู้ป่วยได้
          </div>
        </Modal>
      </Form >
    )
  }

}

