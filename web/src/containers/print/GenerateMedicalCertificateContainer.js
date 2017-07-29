import React, {Component} from 'react'
import moment from 'moment';
import SearchByIdComponent from '../../components/SearchByIdComponent'
import DisplayPatientNameComponent from '../../components/DisplayPatientNameComponent'
import GenerateMedicalCertificateComponent from '../../components/print/GenerateMedicalCertificateComponent'
import { apiSearchPatientById } from '../../apis/ApiPatient';
export default class GenerateMedicalCertificateContainer extends Component{
    state = {
        namePatient: "",
        requestDate: moment(),
        doctorOfPatient: "",
        symptom: ""
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
    handleChangeRequestDate=(date)=>{
        this.setState({
            requestDate: date
        });
    }
    render(){
        return(
            <div className="form-search-container">
                <h2>พิมพ์ใบรับรองแพทย์</h2>
                <SearchByIdComponent onAdvanceSearchPatient={this.onAdvanceSearchPatient}
                                    onChangeIdPatient={this.onChangeIdPatient}/>
                <DisplayPatientNameComponent namePatient={this.state.namePatient}/>
                <GenerateMedicalCertificateComponent requestDate={this.state.requestDate}
                                                     doctorOfPatient={this.state.doctorOfPatient}
                                                     symptom={this.state.symptom}
                                                     handleChangeRequestDate={this.handleChangeRequestDate}/>
            </div>
        )
    }
}