import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import { apiValidateSearch } from '../apis/ApiPatient';
import SearchPatientComponent from '../components/SearchPatientComponent';
import SearchPatientResultComponent from '../components/SearchPatientResultComponent';

class SearchPatientContainer extends Component {
  
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.editPatienSubmit = this.editPatienSubmit.bind(this);
    this.state = {patients: {}};
  }

  editPatienSubmit(id) {
      this.props.history.push("/createPatient?id="+ id);
  }

  onSearch(data) {
    console.log("Data : " + JSON.stringify(data))
    apiValidateSearch(data).then(
      (responseSuccess)=>{
        console.log("API : " + JSON.stringify(responseSuccess[0]));
        this.setPatient(responseSuccess[0])
      },(responseFail) => {

      }
    );
  }
  
 setPatient(patients) {
      this.setState({
        "patients": patients
      });
  }
  
  render() {
    return (
      <div>
        <SearchPatientComponent onSearch={this.onSearch.bind(this)}/>
        <SearchPatientResultComponent patients={this.state.patients}/>
        <Button
           onClick={()=> this.editPatienSubmit(this.state.identify)}
           bsStyle="primary"
           type="submit"
           className="btn btn-lg btn-primary">แก้ไขข้อมูลผู้ป่วย</Button>      
    </div>
    );
  }
}
export default SearchPatientContainer;
