import React, { Component } from 'react'
import { apiValidateSearch, apiUpdatePatient } from '../apis/ApiPatient'
import PatientFormComponent from '../components/patient/PatientFormComponent'
import { Button } from 'react-bootstrap';


class EditPatientContainer extends Component {
  constructor(props) {
    super(props);
    console.log("Edit EditPatientContainer : "+ JSON.stringify(props));
    this.state = {
      modal: false,
      modalAlert: false,
      formValid: true,
      patients: {}};
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

    this.updatePatienSubmit = this.updatePatienSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openModalAlert = this.openModalAlert.bind(this);
  }
  
  updatePatienSubmit(patients) {
      let requestObj = {
        firstname: patients.firstname,
        lastname: patients.lastname,
        nickname: patients.nickname,
        gender: patients.gender,
        birthday: patients.birthday,
        idCard: patients.idCard,
        career: patients.career,
        tel: patients.tel,
        workAddress: patients.workAddress,
        homeAddress: patients.homeAddress,
        requiredDocument: patients.requiredDocument,
        congenitalDisease: patients.congenitalDisease,
        beAllergic: patients.beAllergic,
        emergencyContact: {
          name: patients.emergencyContactName,
          relationship: patients.emergencyContactRelationship,
          tel: patients.emergencyContactTel
        }
      };

       apiUpdatePatient(requestObj).then(() => {
        this.openModal();
      }, () => {
        this.openModalAlert();
      });
  }

  openModal() {
    this.setState({ modal: true });
  }

  openModalAlert() {
    this.setState({ modalAlert: true });
  }

  setPatient(patients) {
    console.log("Data EditPatientContainer  SetPatient: " + JSON.stringify(patients))
      this.setState({
        "patients": patients
      });
  }
    
  render() {
    console.log("Patient Edit Container : " + JSON.stringify(this.state.patients));
    return (
      <div>
        <PatientFormComponent patients={this.state.patients}/>
         <Button
           onClick={()=> this.updatePatienSubmit(this.state.patients)}
           bsStyle="primary"
           type="submit"
           className="btn btn-lg btn-primary">แก้ไข</Button>
      </div>
    )
  }

}
export default EditPatientContainer;
