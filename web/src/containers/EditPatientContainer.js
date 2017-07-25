import React, { Component } from 'react'
import { apiValidateSearch, apiUpdatePatient } from '../apis/ApiPatient'
import PatientFormComponent from '../components/patient/PatientFormComponent'
export default class EditPatientContainer extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    patients: {}
  }
  componentDidMount() {
    apiValidateSearch(this.setPatient()).then(
      (responseSuccess)=>{
        this.setState({patients: responseSuccess[0]});
      },(responseFail) => {}
    );
  }

  setPatient() {
    return {
        "idPatient": this.props.params.id
    }
  }
  setRequiredDocument(requiredDocumentList){
    var resultRequireds = []
    for(var index = 0 ; index < requiredDocumentList.length ; index++ ){
      if(requiredDocumentList[index].checked){
          resultRequireds.push(requiredDocumentList[index].value)
      }
    }
    return resultRequireds
  }
  
  updatePatienSubmit=(event)=> {
   event.preventDefault()
   console.log("REQ [0] > > :: " + event.target.requiredDocument[0].value + "+" + event.target.requiredDocument[0].checked)
   console.log("REQ [1] > > :: " + event.target.requiredDocument[1].value + "+" + event.target.requiredDocument[1].checked)
    let patients = event.target
      let requestObj = {
        idPatient: this.props.params.id,
        firstname: patients.firstname.value,
        lastname: patients.lastname.value,
        nickname: patients.nickname.value,
        gender: patients.gender.value,
        birthday: patients.birthday.value,
        idCard: patients.idCard.value,
        career: patients.career.value,
        tel: patients.tel.value,
        workAddress: patients.workAddress.value,
        homeAddress: patients.homeAddress.value,
        requiredDocument: this.setRequiredDocument(event.target.requiredDocument),
        congenitalDisease: patients.congenitalDisease.value,
        beAllergic: patients.beAllergic.value,
        emergencyContact: {
          name: patients.emergencyContactName.value,
          relationship: patients.emergencyContactRelationship.value,
          tel: patients.emergencyContactTel.value
        }
      };
      
      console.log("requestObj > > :: " + JSON.stringify(requestObj))
      apiUpdatePatient(requestObj).then(() => {
        console.log("Edit Success :::: ");
      }, () => {
        console.log("Edit Fail :::: ");
      });
  }

  render() {
    let patientFormComponent;
    if(this.state.patients.firstname != null){
      patientFormComponent = <PatientFormComponent 
                                  patients={this.state.patients}  
                                  updatePatienSubmit={this.updatePatienSubmit}/>
    } else {
      patientFormComponent = null;
    }
    return (
      <div>
        {patientFormComponent}
      </div>
    )
  }

}
