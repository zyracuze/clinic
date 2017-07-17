import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import { apiValidateSearch } from '../apis/ApiPatient';
import SearchPatientResultComponent from '../components/SearchPatientResultComponent';
import AdvanceSearchForm from '../components/elements/AdvanceSearchForm';

class SearchPatientContainer extends Component {
  constructor(props) {
    super(props);
    this.editPatienSubmit = this.editPatienSubmit.bind(this);
    this.state = {
      patients: {},
      titleSearch: "ค้นหาผู้ป่วย"
    };
  }

  editPatienSubmit(patients) {
      this.props.history.push("/editPatient?id="+ patients.idPatient);
  }

 setPatient(patients) {
    if(patients){
      this.setState({
        "patients": patients
      });
    }
  }

  onAdvanceSearchPatient=(event)=>{
    let patient = event.target
    let data = {
      "idPatient": patient.idPatient.value,
      "firstname": patient.namePatient.value,
      "lastname": patient.lastnamePatient.value
    }
    apiValidateSearch(data).then(
      (responseSuccess)=>{
        console.log("API : " + responseSuccess);
        this.setPatient(responseSuccess[0])
      },(responseFail) => {

      }
    );
  }

  render() {
    return (
      <div>
        <AdvanceSearchForm onAdvanceSearchPatient={this.onAdvanceSearchPatient}
                           titleSearch={this.state.titleSearch}/>
        <SearchPatientResultComponent patients={this.state.patients}/>
        <Button
           onClick={()=> this.editPatienSubmit(this.state.patients)}
           bsStyle="primary"
           type="submit"
           className="btn btn-lg btn-primary">แก้ไขข้อมูลผู้ป่วย</Button>      
    </div>
    );
  }
}
export default SearchPatientContainer;
