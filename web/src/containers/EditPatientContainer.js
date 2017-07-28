import React, { Component } from 'react'
import { apiValidateSearch, apiUpdatePatient } from '../apis/ApiPatient'
import PatientFormComponent from '../components/patient/PatientFormComponent'
import ModalDisplayMessageComponent from '../components/ModalDisplayMessageComponent'
export default class EditPatientContainer extends Component {
  state = {
    patients: {}
  }
  componentDidMount() {
    apiValidateSearch(this.setIdPatientForSearch()).then(this.searchPatientSuccess)
  }

  setIdPatientForSearch=()=>{
      return {
      "idPatient": this.props.params.id
      }
  }
  searchPatientSuccess=(response)=>{
      this.setStatePatient({})
      if(response){
          this.setStatePatient(response[0])
      }
  }
  setStatePatient(data){
      this.setState({patients: data})
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
  
  onSubmitPatient=(patients)=> {
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
        requiredDocument: this.setRequiredDocument(patients.requiredDocument),
        congenitalDisease: patients.congenitalDisease.value,
        beAllergic: patients.beAllergic.value,
        emergencyContact: {
          name: patients.emergencyContactName.value,
          relationship: patients.emergencyContactRelationship.value,
          tel: patients.emergencyContactTel.value
        }
      };
      apiUpdatePatient(requestObj).then(this.createPatientSuccess, this.createPatientFail);
  }

  setDateForModal(isSuccess, msg) {
        this.setState({
            isShowmodal: true,
            isSuccess: isSuccess,
            titleModal: "Edit Patient",
            messageModal: msg,
            nameBtnModal: "OK"
        })
    }

    onClickModal =()=> {
        this.setState({
            isShowmodal: false
        })
    }

    onValidatePatientFail=()=>{
        this.setDateForModal(false, "Valid field.")
    }

    createPatientFail= (response) => {
        this.setDateForModal(false, "Failed to save data. Please try again. Or contact the system administrator.")
    }

    createPatientSuccess= (response) => {
        this.setDateForModal(true, "Save successfully.")
    }

  render() {
    let patientFormComponent;
    let modalDisplayMessageComponent;
    if(this.state.patients.firstname != null){
      patientFormComponent = <PatientFormComponent 
                                  patients={this.state.patients}  
                                  onSubmitPatient={this.onSubmitPatient}
                                  onValidatePatientFail={this.onValidatePatientFail}/>
    } else {
      patientFormComponent = null;
    }

    if(this.state.isShowmodal !== undefined){
       modalDisplayMessageComponent =  <ModalDisplayMessageComponent isSuccess={this.state.isSuccess}
                                      isShowmodal={this.state.isShowmodal}
                                      onClickModal={this.onClickModal}
                                      titleModal={this.state.titleModal}
                                      messageModal={this.state.messageModal}
                                      nameBtnModal={this.state.nameBtnModal} />
    }else{
        modalDisplayMessageComponent = null;
    }
    return (
     <div>
        {patientFormComponent}
        {modalDisplayMessageComponent}
      </div>
    )
  }

}
