import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { hashHistory } from 'react-router'
import { apiValidateSearch, apiUpdatePatient } from '../apis/ApiPatient'
import SearchPatientComponent from '../components/SearchPatientComponent';
import PatientFormComponent from '../components/patient/PatientFormComponent'

class EditPatientContainer extends Component {
  state = {
    patients: {}
  }
  componentDidMount() {
    apiValidateSearch(this.setPatient()).then(
      (responseSuccess)=>{
        this.setState({patients: responseSuccess[0]});
      },(responseFail) => {}
    );
  }
  
  setPatient() {
    return {
        "idPatient": this.props.params.id
    }
  }

  render() {
    return (
      <div>
        <PatientFormComponent patients={this.state.patients}/>
      </div>
    )
  }

}
export default EditPatientContainer;
