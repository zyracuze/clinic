import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap';
import ModalSearch from '../../components/fee/ModalSearch'
import ListFee from '../../components/fee/ListFee'
import DisplayPatientName from '../../components/elements/DisplayPatientName'
import SearchForm from '../../components/elements/SearchForm'
export default class SaveFeeContainer extends Component{
    state = {
        firstnamePatient: "",
        lastnamePatient: ""
    }
    render(){
        return(
        <Form horizontal onSubmit={this.onSubmitSaveFee}>
            <SearchForm onSearchPatient={this.onSearchPatient}/>
            <DisplayPatientName firstnamePatient={this.state.firstnamePatient}
                                lastnamePatient={this.state.lastnamePatient}/>
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