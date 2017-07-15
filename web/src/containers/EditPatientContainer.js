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
    this.state = {patients: {}};
    let localtion = this.props.location
      let data = {
          "idpatient": localtion.query.id
        }
        apiValidateSearch(data).then(
          (responseSuccess)=>{
            console.log("API EditPatientContainer validate : " + JSON.stringify(responseSuccess[0]));
            this.setPatient(responseSuccess[0])
            console.log("Data EditPatientContainer this.state.patients  SetPatient: " + JSON.stringify(this.state.patients))
          },(responseFail) => {

          }
        );
  }

  setPatient(patients) {
    console.log("Data EditPatientContainer  SetPatient: " + JSON.stringify(patients))
      this.setState({
        "patients": patients
      });
  }

  // handleSubmit(e) {
    //  e.preventDefault();
      // let requestObj = {
      //   firstname: this.state.firstname,
      //   lastname: this.state.lastname,
      //   nickname: this.state.nickname,
      //   gender: this.state.gender,
      //   birthday: this.state.birthday.format('DD/MM/YYYY'),
      //   idCard: this.state.idCard,
      //   career: this.state.career,
      //   tel: this.state.tel,
      //   workAddress: this.state.workAddress,
      //   homeAddress: this.state.homeAddress,
      //   requiredDocument: this.state.requiredDocument,
      //   congenitalDisease: this.state.congenitalDisease,
      //   beAllergic: this.state.beAllergic,
      //   emergencyContact: {
      //     name: this.state.emergencyContactName,
      //     relationship: this.state.emergencyContactRelationship,
      //     tel: this.state.emergencyContactTel
      //   }
      // };

      // apiUpdatePatient(requestObj).then(() => {
      //   this.openModal();
      // }, () => {
      //   this.openModalAlert();
      // });
  // }
    
  render() {
    console.log("Patient Edit Container : " + JSON.stringify(this.state.patients));
    return (
      <div>
        <PatientFormComponent patients={this.state.patients}/>
      </div>
    )
  }

}
export default EditPatientContainer;
