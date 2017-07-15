import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { hashHistory } from 'react-router'
import { apiValidateSearch, apiUpdatePatient } from '../apis/ApiPatient'
import SearchPatientComponent from '../components/SearchPatientComponent';
import PatientFormComponent from '../components/patient/PatientFormComponent'


class EditPatientContainer extends Component {
  constructor(props) {
    super(props);
    console.log("Edit EditPatientContainer : "+ JSON.stringify(props));
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModalAlert = this.closeModalAlert.bind(this);
    this.state = {patients: {}};

    let localtion = this.props.location
    if(localtion === 'undefind'){
        this.onSearch = this.onSearch.bind(this);
    }else{
      let data = {
          "idpatient": localtion.query.id
        }
        apiValidateSearch(data).then(
          (responseSuccess)=>{
            console.log("API EditPatientContainer validate : " + JSON.stringify(responseSuccess[0]));
            this.setPatient(responseSuccess[0])
          },(responseFail) => {

          }
        );
    }
    
  }

  onSearch(data) {
    console.log("Data EditPatientContainer onSearch : " + JSON.stringify(data))
    apiValidateSearch(data).then(
      (responseSuccess)=>{
        console.log("API EditPatientContainer onSearch : " + JSON.stringify(responseSuccess[0]));
        this.setPatient(responseSuccess[0])
      },(responseFail) => {

      }
    );
  }

  setPatient(patients) {
      this.setState({
        "patients": patients
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
    return (
      <div>
        <SearchPatientComponent onSearch={this.onSearch.bind(this)}/>
        <PatientFormComponent patients={this.state.patients}/>
      </div>
    )
  }

}
export default EditPatientContainer;
