import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, ControlLabel, HelpBlock } from 'react-bootstrap';
import '../App.css';
import ApiSearch from '../apis/ApiSearch'

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {msg: ""};
  }

  handleSubmit(event) {
    event.preventDefault();

    let firstname = this.refs.firstname.value;
    let lastname = this.refs.lastname.value;
    let identifySearch = this.refs.identifySearch.value;
    let data = {
      "idpatient": identifySearch,
      "firstname": firstname,
      "lastame": lastname
    }
    ApiSearch.validateSearch(data).then(
      (responseSuccess) => {
        this.setPatient(responseSuccess[0])},
      (responseFail) => {}
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
  render() {

    return (
      <div>
        <div>
          <label>
            <h2 className="form-signin-heading">ค้นหาผู้ป่วย</h2>
            <label>ชื่อ - นามสกุล : </label>
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

            <label>รหัสผู้ป่วย :</label>
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
      
      <Form horizontal>
        <FormGroup>
          <ControlLabel>รหัสผู้ป่วย :  {this.state.identify}</ControlLabel>
          <ControlLabel> ชื่อ - นามสกุล :  {this.state.name}</ControlLabel>
          <ControlLabel>เบอร์ติดต่อ : {this.state.phoneNumber}</ControlLabel>
          <ControlLabel>วันเกิด : {this.state.birthDate}</ControlLabel>
          <ControlLabel>เพศ : {this.state.gender}</ControlLabel>
          <ControlLabel>ที่อยู่ : {this.state.address}</ControlLabel>
        </FormGroup>
        </Form>
    </div>
    );
  }
}
export default Search;
