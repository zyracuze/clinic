import React, { Component } from 'react'
import {Form} from 'react-bootstrap';
import ModalSearch from '../../components/fee/ModalSearch'
import ListFee from '../../components/fee/ListFee'
import DisplayPatientName from '../../components/elements/DisplayPatientName'
import SearchForm from '../../components/elements/SearchForm'
import ModalDisplayMessage from '../../components/elements/ModalDisplayMessage'
import { apiValidateSearch } from '../../apis/ApiPatient';
import { apiCreateFee } from '../../apis/ApiFee';
export default class SaveFeeContainer extends Component{
    state = {
        namePatient: "",
        firstname: "",
        lastname: "",
        idPatient: "",
        disabledListFee: true
    }
    onChangeIdPatient=(event)=>{
        this.setStatePatient("", true)
        if(event.target.value !== ''){
            apiValidateSearch(this.setDataPatientSearch(event)).then(this.searchPatientSuccess)
        }
    }
    setDataPatientSearch(event){
        return {
        "idPatient": event.target.value
        }
    }
    searchPatientSuccess=(response)=>{
        this.setStatePatient("Data not found.", true)
        if(response){
            this.setStatePatient(response[0], false)
        }
    }
    setStatePatient(data, isDisabled){
        this.setState({
            namePatient: data.firstname + " " + data.lastname,
            firstname: data.firstname,
            lastname: data.lastname,
            idPatient: data.idPatient,
            disabledListFee: isDisabled
        })
    }
    onSubmitSaveFee=(event)=>{
        event.preventDefault()
        let data = event.target
        let fees = []
        for(var i=0;i <= data.num.value; i++){
            fees.push({
                expenseItem: data.elements["expenseItem"+i].value,
                amount: parseFloat(data.elements["amount"+i].value.replace(",", ".")) 
            })
        }
        apiCreateFee(this.setDataForSaveFee(fees)).then(this.createFeeSuccess,this.createFeeFail)
    }
    createFeeSuccess=(response)=>{
        this.setDateForModal(true, "Save successfully.")
    }
    onClickModal=()=>{
        this.setState({
             isShowmodal: false
        })
    }
    createFeeFail=(response)=>{
        this.setDateForModal(false, "Failed to save data. Please try again. Or contact the system administrator.")
    }
    setDateForModal(isSuccess,msg){
        this.setState({
            isShowmodal: true,
            isSuccess: isSuccess,
            titleModal: "Fee",
            messageModal: msg,
            nameBtnModal: "OK"
        })
    }
    setDataForSaveFee=(data)=>{
        return{
            idPatient: this.state.idPatient,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            fees: data
        }
    }
    render(){
        return(
        <Form horizontal>
            <SearchForm onAdvanceSearchPatient={this.onAdvanceSearchPatient}
                        onChangeIdPatient={this.onChangeIdPatient}/>
            <DisplayPatientName namePatient={this.state.namePatient}/>
            <ListFee disabledListFee={this.state.disabledListFee}
                     onSubmitSaveFee={this.onSubmitSaveFee}/>
            <ModalDisplayMessage isSuccess={this.state.isSuccess}
                                 isShowmodal={this.state.isShowmodal}
                                 onClickModal={this.onClickModal}
                                 titleModal={this.state.titleModal}
                                 messageModal={this.state.messageModal}
                                 nameBtnModal={this.state.nameBtnModal}/>
            <ModalSearch onCloseModal={this.onCloseModal} 
                        isShowingModal={this.state.isShowingModal}
                        dataObjTable={this.state.dataObjTable}
                        onChooseDataTable={this.onChooseDataTable}
                        onAdvanceSearchPatient={this.onAdvanceSearchPatient}/>
        </Form>
        )
    }
}