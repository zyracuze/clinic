import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import { apiValidateSearch } from '../apis/ApiPatient';
import SearchPatientResultComponent from '../components/SearchPatientResultComponent';
import SharedTable from '../components/elements/SharedTable';
import AdvanceSearchForm from '../components/elements/AdvanceSearchForm';

class SearchPatientContainer extends Component {
  state = {
    dataObjTable: [],
    titleSearch: "ค้นหาผู้ป่วย"
  }
  setPatient(patients) {
    if(patients){
      this.setState({
        dataObjTable: patients
      });
    }
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
        <AdvanceSearchForm onAdvanceSearchPatient={this.onAdvanceSearchPatient}
                           titleSearch={this.state.titleSearch}/>
        <SharedTable dataObjTable={this.state.dataObjTable} />     
    </div>
    );
  }
}
export default SearchPatientContainer;
