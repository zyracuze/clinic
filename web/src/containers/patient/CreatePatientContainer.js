import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import PatientFormComponent from '../../components/patient/PatientFormComponentBO'
import ModalDisplayMessageComponent from '../../components/ModalDisplayMessageComponent'
import { apiCreatePatient } from '../../apis/ApiPatient'

class CreatePatientContainer extends Component {
    state = {}

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

    createPatientFail = (response) => {
        this.setDateForModal(false, "Failed to save data. Please try again. Or contact the system administrator.")
    }

    createPatientSuccess = (response) => {
        this.setDateForModal(true, "Save successfully.")
    }

    onSubmitCreatePatient = (event) => {
        event.preventDefault();
        let data = event.target;
        apiCreatePatient(this.setDataForCreatePatient(data)).then(this.createPatientSuccess, this.createPatientFail)
    }

    setDataForCreatePatient = (data) => {
        return {
            firstname: data.firstname.value,
            lastname: data.lastname.value,
            nickname: data.nickname.value,
            gender: data.gender.value,
            birthday: '01/01/0001',
            idCard: data.idCard.value,
            career: data.career.value,
            tel: data.tel.value,
            workAddress: data.workAddress.value,
            homeAddress: data.homeAddress.value,
            requiredDocument: data.requiredDocument.value,
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
        return (
            <Form horizontal>
                <PatientFormComponent onSubmitCreatePatient={this.onSubmitCreatePatient}></PatientFormComponent>
                <ModalDisplayMessageComponent isSuccess={this.state.isSuccess}
                    isShowmodal={this.state.isShowmodal}
                    onClickModal={this.onClickModal}
                    titleModal={this.state.titleModal}
                    messageModal={this.state.messageModal}
                    nameBtnModal={this.state.nameBtnModal} />
            </Form>
        )
    }

}
export default CreatePatientContainer;