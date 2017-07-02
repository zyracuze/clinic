import React, { Component } from 'react';
import { FormGroup, Button, ControlLabel } from 'react-bootstrap';
import '../App.css';
import { apiValidateSearch } from '../apis/ApiPatient';

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editPatienSubmit = this.editPatienSubmit.bind(this);
    this.state = {msg: ""};
  }

  editPatienSubmit(event) {
      event.preventDefault();
      this.props.history.push("/createPatient?id="+this.setState.identify);
  }

  handleSubmit(event) {
    event.preventDefault();
    let identifySearch = this.refs.identifySearch.value;
    let firstname = this.refs.firstname.value;
    let lastname = this.refs.lastname.value;
    
    let data = {
      "idpatient": identifySearch,
      "firstname": firstname,
      "lastame": lastname
    }
    apiValidateSearch(data).then(
      (responseSuccess)=>{
        this.setPatient(responseSuccess[0])
      },(responseFail) => {

      }
    );
  }
  
 setPatient(patient) {
      this.setState({
      identify: patient.idPatient,
      name:patient.firstname + " " + patient.lastname,
      address: patient.address,
      gender: patient.gender,
      birthDate: patient.birthday,
      phoneNumber: patient.tel});
  }
  render(
    
  ) {

    function FieldGroup({ id, labelPlace, labelValue, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{labelPlace} {labelValue}</ControlLabel>
        </FormGroup>
      );
    }

    return (
      <div>
         <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            <h2 className="form-signin-heading">ค้นหาผู้ป่วย</h2>
              <input
                type="text"
                className="form-control-signin"
                placeholder="ชื่อ"
                ref="firstname"/>
              <input
                type="text"
                className="form-control-signin"
                placeholder="นามสกุล"
                ref="lastname"/>
            <input
                type="text"
                className="form-control-signin"
                placeholder="รหัสผู้ป่วย"
                ref="identifySearch"/>

           <span className="msg-error"> {this.state.msg}</span>
          </label>
            <Button
                bsStyle="primary"
                type="submit"
                className="btn btn-lg btn-primary">SEARCH</Button>
        </div>
        </form>

        <FieldGroup
          id="formControlsIdentify"
          labelPlace="รหัสผู้ป่วย : "
          labelValue={this.state.identify}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="ชื่อ - นามสกุล : "
          labelValue={this.state.name}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="เบอร์ติดต่อ : "
          labelValue={this.state.phoneNumber}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="วันเกิด : "
          labelValue={this.state.birthDate}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="เพศ : "
          labelValue={this.state.gender}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="ที่อยู่ : "
          labelValue={this.state.address}
        />

        <Button
           onClick={this.editPatienSubmit}
           bsStyle="primary"
           type="submit"
           className="btn btn-lg btn-primary">แก้ไขข้อมูลผู้ป่วย</Button>
        
    </div>
    );
  }
}
export default Search;
