import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap';
import ModalSearch from '../../components/fee/ModalSearch'
import ListFee from '../../components/fee/ListFee'
import DisplayPatientName from '../../components/elements/DisplayPatientName'
import SearchForm from '../../components/elements/SearchForm'
import { apiValidateSearch } from '../../apis/ApiPatient';
export default class SaveFeeContainer extends Component{
    state = {
        namePatient: ""
    }
    onChangeIdPatient=(event)=>{
        this.setStatePatient("")
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
        this.setStatePatient("Data not found.")
        if(response){
            this.setStatePatient(response[0].firstname + " " + response[0].lastname)
        }
    }
    setStatePatient(data){
        this.setState({
            namePatient: data
        })
    }
    searchPatientFail=()=>{

    }
    render(){
        return(
        <Form horizontal onSubmit={this.onSubmitSaveFee}>
            <SearchForm onAdvanceSearchPatient={this.onAdvanceSearchPatient}
                        onChangeIdPatient={this.onChangeIdPatient}/>
            <DisplayPatientName namePatient={this.state.namePatient}/>
            <ListFee/>
            <Button bsStyle="success" type="submit" id="saveBtn" >เพิ่ม</Button>
            <ModalSearch onCloseModal={this.onCloseModal} 
                        isShowingModal={this.state.isShowingModal}
                        dataObjTable={this.state.dataObjTable}
                        onChooseDataTable={this.onChooseDataTable}
                        onAdvanceSearchPatient={this.onAdvanceSearchPatient}/>
        </Form>
        )
    }
}