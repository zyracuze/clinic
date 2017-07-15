import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { hashHistory } from 'react-router'
import { apiValidateSearch, apiUpdatePatient } from '../../apis/ApiPatient'
import { Form, FormGroup, FormControl, ControlLabel, Col, Radio, Button, Modal, Checkbox } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import '../../App.css';

class PatientFormComponent extends Component {
  constructor(props) {
    super(props);
    this.setPatient = this.setPatient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModalAlert = this.closeModalAlert.bind(this);
    this.state = {patients: {}};
     this.setPatient(this.props);
  }

  setPatient(patients) {
      this.setState({
      modal: false,
      modalAlert: false,
      formValid: true,
      firstname: patients.firstname,
      firstnameClassName:'',
      lastname: patients.lastname,
      lastnameClassName: '',
      nickname: patients.nickname,
      nicknameClassName: '',
      gender: patients.gender,
      birthday: moment(patients.birthday, "MM-DD-YYYY"),
      birthdayClassName: '',
      idCard: patients.idCard,
      idCardClassName: '',
      career: patients.career,
      careerClassName: '',
      tel: patients.tel,
      telClassName: '',
      workAddress: patients.workAddress,
      workAddressClassName: '',
      homeAddress: patients.homeAddress,
      homeAddressClassName: '',
      requiredDocument: patients.requiredDocument,
      congenitalDisease: patients.con,
      congenitalDiseaseClassName: '',
      beAllergic: '',
      beAllergicClassName: '',
      emergencyContactName: '',
      emergencyContactNameClassName: '',
      emergencyContactRelationship: '',
      emergencyContactRelationshipClassName: '',
      emergencyContactTel: '',
      emergencyContactTelClassName: ''
    });
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
        emergencyContact: {
          name: this.state.emergencyContactName,
          relationship: this.state.emergencyContactRelationship,
          tel: this.state.emergencyContactTel
        }
      };

      apiUpdatePatient(requestObj).then(() => {
        this.openModal();
      }, () => {
        this.openModalAlert();
      });
  }

  handleChange(date) {
    this.setState({
      birthday: date
    });
  }

  handleChangeGender(event){
    this.setState({
      gender: event.target.value
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
      const {patients} = this.props;
    return (
       <Form horizontal onSubmit={this.handleSubmit}>
         <FormGroup>
           <Col componentClass={ControlLabel} sm={3}>
             ชื่อ
              </Col>
           <Col sm={3}>
             <FormControl id="firstname" type="text" placeholder="ชื่อ" className={this.state.firstnameClassName} value={patients.firstname} onChange={this.handleInput} />
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
             <FormControl componentClass="select" id="gender" value={this.state.gender} onChange={this.handleChangeGender.bind(this)}>
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
             <Checkbox id="requiredDocument" name="certMedicine" value={this.state.requiredDocument} inline>ใบรับรองแพทย์</Checkbox>{' '}
             <Checkbox id="requiredDocument" name="socialCert" value={this.state.requiredDocument} inline>ใบประกันสังคม</Checkbox>
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


         <Button bsStyle="success" type="submit" id="saveBtn" >แก้ไข</Button>


         <Modal show={this.state.modal} onHide={this.closeModal} backdrop="static" keyboard={false}>
           <Modal.Body>
             แก้ไขข้อมูลผู้ป่วยสำเร็จแล้ว
             <div>
               <Button bsStyle="default" type="button" onClick={this.closeModal} id="okBtn">ตกลง</Button>
             </div>
           </Modal.Body>
         </Modal>


         <Modal show={this.state.modalAlert} onHide={this.closeModalAlert}>
           <div className={"modal-alert-danger"}>
             <strong>ขออภัย</strong>ไม่สามารถแก้ไขผู้ป่วยได้
          </div>
         </Modal>

       </Form >
    )
  }

}
export default PatientFormComponent;
