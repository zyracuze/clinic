import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import '../../App.css';
import '../../PatientForm.css';

export default class PatientFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = props.patients;
  }

  static propTypes = {
    onSubmitPatient: PropTypes.func.isRequired,
  }

  setPatient=(patients)=> {
      this.setState({
      requiredDocument: patients.requiredDocument,
      firstname: patients.firstname,
      firstnameClassName:'',
      lastname: patients.lastname,
      lastnameClassName: '',
      nickname: patients.nickname,
      nicknameClassName: '',
      gender: patients.gender,
      birthday: moment(patients.birthday, "DD/MM/YYYY"),
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
      congenitalDisease: patients.con,
      congenitalDiseaseClassName: '',
      beAllergic: patients.beAllergic.name,
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

  handleChangeDatePicker=(event)=>{
    this.setState({
      birthday: event
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

  setChecked=(name)=> {
    return this.state.requiredDocument.indexOf(name) > -1;
  }
  
  onClickChecked=(event)=> {
    PropTypes.checkPropTypes(this.propTypes, this.props, 'prop', 'PatientFormComponent');
    const { value } = event.target;
    const requiredDocument = [ ...this.state.requiredDocument ];
    const indexOf = requiredDocument.indexOf(value);

    if (indexOf === -1) {
      requiredDocument.push(value);
    }else {
      requiredDocument.splice(indexOf, 1);
    }
    
    this.setState({ requiredDocument });
  }

  validation(data, isPass){
    isPass = this.isValidation(data.firstname.value, isPass)
    isPass = this.isValidation(data.lastname.value, isPass)
    isPass = this.isValidation(data.nickname.value, isPass)
    isPass = this.isValidation(data.gender.value, isPass)
    isPass = this.isValidation(data.birthday.value, isPass)
    isPass = this.isValidation(data.idCard.value, isPass)
    isPass = this.isValidation(data.career.value, isPass)
    isPass = this.isValidation(data.tel.value, isPass)
    isPass = this.isValidation(data.workAddress.value, isPass)
    isPass = this.isValidation(data.homeAddress.value, isPass)
    isPass = this.isValidation(data.requiredDocument, isPass)
    isPass = this.isValidation(data.congenitalDisease.value, isPass)
    isPass = this.isValidation(data.beAllergic.value, isPass)
    isPass = this.isValidation(data.emergencyContactName.value, isPass)
    isPass = this.isValidation(data.emergencyContactRelationship.value, isPass)
    isPass = this.isValidation(data.emergencyContactTel.value, isPass)
    isPass = this.isValidation(data.emergencyContactName.value, isPass)
    isPass = this.isValidation(data.emergencyContactRelationship.value, isPass)
    isPass = this.isValidation(data.emergencyContactTel.value, isPass)
    return isPass
  }
  
  isValidation(field, isPass){
    if(field === ''){
      isPass = false
    }
    return isPass
  }
  
  submit=(event)=> {
    event.preventDefault();
    let data = event.target;
    var isPass = true
    isPass = this.validation(data, isPass)

    if(isPass) {
      this.props.onSubmitPatient(data)
    }else{
      this.props.onValidatePatientFail()
    }
  }

  render() {
    let CheckboxItemRequiredDoc

    const requiredDoc = [{id:'certMedicine', value: 'ใบรับรองแพทย์'},{id:'socialCert', value:'ใบประกันสังคม'}]
    if(this.state.requiredDocument !== undefined){
      CheckboxItemRequiredDoc = requiredDoc.map((requiredDocObj,index) => {
        return (
          <CheckboxItem key={index}
                        value={requiredDocObj.id}
                        display={requiredDocObj.value}
                        checked={this.setChecked(requiredDocObj.id)}
                        onClick={this.onClickChecked}
                        onChange={()=>{}} />
        );
      });
    }else{
      CheckboxItemRequiredDoc = null
    }
    

    function CheckboxItem({ value, display, checked, onClick }) {
      return (
        <label className="CheckboxItem">
          <input 
                name="requiredDocument"
                type="checkbox"
                value={value}
                checked={checked}
                onClick={onClick} /> {display}
        </label>
      );
    }



    return (
       <Form horizontal onSubmit={this.submit}>
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
               selected={moment(this.state.birthday, "DD/MM/YYYY")}
               onSelect={this.handleChangeDatePicker}
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
              {CheckboxItemRequiredDoc}
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
         <Button bsStyle="success" type="submit" >บันทึก</Button>
       </Form >
    )
  }
}
