import React, { Component } from 'react'
import {Form} from 'react-bootstrap';
import ModalSearch from '../../components/fee/ModalSearch'
import ListFee from '../../components/fee/ListFee'
import DisplayPatientName from '../../components/elements/DisplayPatientName'
import SearchForm from '../../components/elements/SearchForm'
import { apiValidateSearch } from '../../apis/ApiPatient';
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
                amount: data.elements["amount"+i].value
            })
        }
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
            <ModalSearch onCloseModal={this.onCloseModal} 
                        isShowingModal={this.state.isShowingModal}
                        dataObjTable={this.state.dataObjTable}
                        onChooseDataTable={this.onChooseDataTable}
                        onAdvanceSearchPatient={this.onAdvanceSearchPatient}/>
        </Form>
        )
    }
}