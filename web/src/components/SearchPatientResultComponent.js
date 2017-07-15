import React, { Component } from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import '../App.css';

class SearchPatientResultComponent extends Component {
  
  constructor(props) {
    super(props);
    console.log("Result : "+ JSON.stringify(props.patients));
  }

  render() {
    const {patients} = this.props;
    function FieldGroup({ id, labelPlace, labelValue, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{labelPlace} {labelValue}</ControlLabel>
        </FormGroup>
      );
    }
    
    return (
      <div>
        <FieldGroup
          id="formControlsIdentify"
          labelPlace="รหัสผู้ป่วย : "
          labelValue={patients.idPatient}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="ชื่อ - นามสกุล : "
          labelValue={patients.firstname + " " + patients.lastname}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="เบอร์ติดต่อ : "
          labelValue={patients.tel}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="วันเกิด : "
          labelValue={patients.birthday}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="เพศ : "
          labelValue={patients.gender}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="ที่อยู่ : "
          labelValue={patients.homeAddress}
        />
        
    </div>
    );
  }
}
export default SearchPatientResultComponent;
