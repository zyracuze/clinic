import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import { apiValidateSearch } from '../apis/ApiPatient';
import SearchPatientResultComponent from '../components/SearchPatientResultComponent';
import PatientsSearchResultComponent from '../components/PatientsSearchResultComponent';
import SearchPatientsComponent from '../components/SearchPatientsComponent';
import ModalPatientDetailComponent from '../components/patient/ModalPatientDetailComponent'

class SearchPatientContainer extends Component {
  state = {
    dataObjTable: [],
    titleSearch: "ค้นหาผู้ป่วย",
    patients: {},
    isShowmodal: false
  }
  setPatient(patients) {
    if(patients){
      this.setState({
        dataObjTable: patients
      });
    }
  }
  showPatientDetail=(patient)=>{
    this.setState({
      patient: patient,
      isShowmodal: true
    })
  }
  onCloseModal=()=>{
  this.setState({
      isShowmodal: false
    })
  }
  onAdvanceSearchPatient=(event)=>{
    event.preventDefault()
    var patient = event.target
    var data = {
      "idPatient": patient.idPatient.value,
      "firstname": patient.namePatient.value,
      "lastname": patient.lastnamePatient.value
    }
    apiValidateSearch(data).then(
      (responseSuccess)=>{
        this.setPatient(responseSuccess)
      },(responseFail) => {}
    );
  }
  render() {
    return (
      <div className="form-search-container">
        <SearchPatientsComponent onAdvanceSearchPatient={this.onAdvanceSearchPatient}
                           titleSearch={this.state.titleSearch}/>
        <PatientsSearchResultComponent dataObjTable={this.state.dataObjTable} 
                                       showPatientDetail={this.showPatientDetail}/>     
        <ModalPatientDetailComponent patient={this.state.patient}
                                     isShowmodal={this.state.isShowmodal}
                                     onCloseModal={this.onCloseModal}/>                     
    </div>
    );
  }
}
export default SearchPatientContainer;
