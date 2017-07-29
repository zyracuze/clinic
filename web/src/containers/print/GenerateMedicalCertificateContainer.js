import React, {Component} from 'react'
import {Form} from 'react-bootstrap';
import SearchByIdComponent from '../../components/SearchByIdComponent'
import DisplayPatientNameComponent from '../../components/DisplayPatientNameComponent'
import { apiSearchPatientById } from '../../apis/ApiPatient';
export default class GenerateMedicalCertificateContainer extends Component{
    state = {
        namePatient: ""
    }
    onChangeIdPatient=(event)=>{
        this.setState({
            namePatient: ""
        })
        if(event.target.value !== ''){
            apiSearchPatientById(event.target.value).then(this.searchPatientSuccess)
        }
    }
    searchPatientSuccess=(response)=>{
        this.setState({
            namePatient: "Data not found."
        })
        if(response){
            this.setState({
                 namePatient: response.firstname + " " + response.lastname,
            })
        }
    }
    render(){
        return(
            <Form horizontal>
                <SearchByIdComponent onAdvanceSearchPatient={this.onAdvanceSearchPatient}
                                    onChangeIdPatient={this.onChangeIdPatient}/>
                <DisplayPatientNameComponent namePatient={this.state.namePatient}/>
            </Form>
        )
    }
}