import React, { Component } from 'react'
import moment from 'moment'
import PatientFormComponent from '../../components/patient/PatientFormComponent'
import ModalDisplayMessageComponent from '../../components/ModalDisplayMessageComponent'
import { apiCreatePatient } from '../../apis/ApiPatient'

class CreatePatientContainer extends Component {
    state = {
    patients: {
        requiredDocument: [''],
        beAllergic: {name: ''},
        emergencyContact: {
            name: '',
            relationship: '',
            tel: ''
        },
        birthday: moment()
    }
  }
    setDateForModal(isSuccess, msg) {
        this.setState({
            isShowmodal: true,
            isSuccess: isSuccess,
            titleModal: "Create Patient",
            messageModal: msg,
            nameBtnModal: "OK"
        })
    }

    onClickModal = () => {
        this.setState({
            isShowmodal: false
        })
    }

     onValidatePatientFail=()=>{
        this.setDateForModal(false, "Valid field.")
    }

    createPatientFail = (response) => {
        this.setDateForModal(false, "Failed to save data. Please try again. Or contact the system administrator.")
    }

    createPatientSuccess = (response) => {
        this.setDateForModal(true, "Save successfully.")
    }

    onSubmitPatient = (data) => {
        apiCreatePatient(this.setDataForCreatePatient(data)).then(this.createPatientSuccess, this.createPatientFail)
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

    setDataForCreatePatient = (data) => {
        return {
            firstname: data.firstname.value,
            lastname: data.lastname.value,
            nickname: data.nickname.value,
            gender: data.gender.value,
            birthday: data.birthday.value,
            idCard: data.idCard.value,
            career: data.career.value,
            tel: data.tel.value,
            workAddress: data.workAddress.value,
            homeAddress: data.homeAddress.value,
            requiredDocument: this.setRequiredDocument(data.requiredDocument),
            congenitalDisease: data.congenitalDisease.value,
            beAllergic: data.beAllergic.value,
            emergencyContactName: data.emergencyContactName.value,
            emergencyContactRelationship: data.emergencyContactRelationship.value,
            emergencyContactTel: data.emergencyContactTel.value,
            emergencyContact: {
                name: data.emergencyContactName.value,
                relationship: data.emergencyContactRelationship.value,
                tel: data.emergencyContactTel.value
            }
        }
    }

    render() {
        let patientFormComponent;
        let modalDisplayMessageComponent;
        if(this.state.patients != null){
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
export default CreatePatientContainer;