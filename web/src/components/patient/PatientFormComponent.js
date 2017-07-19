import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, ControlLabel, Col, Button, Checkbox } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import '../../App.css';

class PatientFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = props.patients;
  }

  static propTypes = {
    updatePatienSubmit: PropTypes.func.isRequired
  }

  setPatient=(patients)=> {
      this.setState({
      firstname: patients.firstname,
      firstnameClassName:'',
      lastname: patients.lastname,
      lastnameClassName: '',
      nickname: patients.nickname,
      nicknameClassName: '',
      gender: patients.gender,
      birthday: moment(patients.birthday, "MM/DD/YYYY"),
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
      emergencyContactName: patients.emergencyContact.name,
      emergencyContactNameClassName: '',
      emergencyContactRelationship: patients.emergencyContact.relationship,
      emergencyContactRelationshipClassName: '',
      emergencyContactTel: patients.emergencyContact.tel,
      emergencyContactTelClassName: '',
    });
  }

  handleChangeGender=(event)=>{
    this.setState({
      gender: event.target.value
    });
  }

  handleInput=(event)=> {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };
  
  componentDidMount() {
    this.setPatient(this.props.patients);
  }

  render() {
    return (
       <Form horizontal onSubmit={this.props.updatePatienSubmit}>
         <FormGroup>
           <Col componentClass={ControlLabel} sm={3}>
             ชื่อ
              </Col>
           <Col sm={3}>
             <FormControl id="firstname" name="firstname" type="text" placeholder="ชื่อ" value={this.state.firstname} onChange={this.handleInput} />
           </Col>
           <Col componentClass={ControlLabel} sm={1}>
             นามสกุล
              </Col>
           <Col sm={3}>
             <FormControl id="lastname" name="lastname" type="text" placeholder="นามสกุล" value={this.state.lastname} onChange={this.handleInput} />
           </Col>
         </FormGroup>
         <FormGroup>
           <Col componentClass={ControlLabel} sm={3}>
             ชื่อเล่น
              </Col>
           <Col sm={3}>
             <FormControl id="nickname" name="nickname" type="text" placeholder="ชื่อเล่น"
             value={this.state.nickname} onChange={this.handleInput} />
           </Col>
           <Col componentClass={ControlLabel} sm={1}>
             เพศ
              </Col>
           <Col sm={3}>
             <FormControl componentClass="select" id="gender" name="gender"  value={this.state.gender}
             onChange={this.handleChangeGender}>
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
               name="birthday"
               selected={moment(this.state.birthday, "MM-DD-YYYY")}
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
             <FormControl id="idCard" name="idCard" type="text" placeholder="บัตรประชาชน"
             className={this.state.idCardClassName} value={this.state.idCard} onChange={this.handleInput} />
           </Col>
         </FormGroup>
         <FormGroup>
           <Col componentClass={ControlLabel} sm={3}>
             อาชีพ
              </Col>
           <Col sm={2}>
             <FormControl id="career" name="career" type="text" placeholder="อาชีพ"
             className={this.state.careerClassName} value={this.state.career} onChange={this.handleInput} />
           </Col>
         </FormGroup>
         <FormGroup>
           <Col componentClass={ControlLabel} sm={3}>
             โทร
              </Col>
           <Col sm={2}>
             <FormControl id="tel" name="tel" type="text" placeholder="โทร" className={this.state.telClassName}
             value={this.state.tel} onChange={this.handleInput} />
           </Col>
         </FormGroup>
         <FormGroup>
           <Col componentClass={ControlLabel} sm={3}>
             ที่อยู่ปัจจุบัน
              </Col>
           <Col sm={7}>
             <FormControl id="homeAddress" name="homeAddress" type="text" placeholder="ที่อยู่ปัจจุบัน"
             className={this.state.homeAddressClassName} value={this.state.homeAddress} onChange={this.handleInput} />
           </Col>
         </FormGroup>
         <FormGroup>
           <Col componentClass={ControlLabel} sm={3}>
             ที่อยู่ที่ทำงาน
              </Col>
           <Col sm={7}>
             <FormControl id="workAddress" name="workAddress" type="text" placeholder="ที่อยู่ที่ทำงาน"
             className={this.state.workAddressClassName} value={this.state.workAddress} onChange={this.handleInput} />
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
             <FormControl id="congenitalDisease" name="congenitalDisease" type="text" placeholder="โรคประจำตัว"
             className={this.state.congenitalDiseaseClassName} value={this.state.congenitalDisease} onChange={this.handleInput} />
           </Col>
         </FormGroup>
         <FormGroup>
           <Col componentClass={ControlLabel} sm={3}>
             แพ้ยา
               </Col>
           <Col sm={7}>
             <FormControl id="beAllergic" name="beAllergic" type="text" placeholder="แพ้ยา" className={this.state.beAllergicClassName}
             value={this.state.beAllergic} onChange={this.handleInput} />
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
             <FormControl id="emergencyContactName" name="emergencyContactName" type="text"
             placeholder="ผู้ติดต่อฉุกเฉิน" className={this.state.emergencyContactNameClassName}
             value={this.state.emergencyContactName} onChange={this.handleInput} />
           </Col>
         </FormGroup>
         <FormGroup>
           <Col componentClass={ControlLabel} sm={3}>
             ความสัมพันธ์
               </Col>
           <Col sm={3}>
             <FormControl id="emergencyContactRelationship" name="emergencyContactRelationship" type="text"
             placeholder="ความสัมพันธ์" className={this.state.emergencyContactRelationshipClassName}
             value={this.state.emergencyContactRelationship} onChange={this.handleInput} />
           </Col>
         </FormGroup>
         <FormGroup>
           <Col componentClass={ControlLabel} sm={3}>
             โทร
               </Col>
           <Col sm={3}>
             <FormControl id="emergencyContactTel" name="emergencyContactTel" type="text"
             placeholder="โทร" className={this.state.emergencyContactTelClassName}
             value={this.state.emergencyContactTel} onChange={this.handleInput} />
           </Col>
         </FormGroup> 
         <Button bsStyle="success" type="submit" >แก้ไข</Button>
       </Form >
    )
  }

}
export default PatientFormComponent;
