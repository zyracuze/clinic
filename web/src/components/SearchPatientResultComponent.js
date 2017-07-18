import React, { Component } from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import '../App.css';

class SearchPatientResultComponent extends Component {

  constructor(props) {
    super(props);
    console.log("Result : "+ JSON.stringify(props.patient));
  }

  render() {
    const {patient} = this.props;
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
          labelValue={patient.idPatient}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="ชื่อ - นามสกุล : "
          labelValue={patient.firstname + " " + patient.lastname}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="เบอร์ติดต่อ : "
          labelValue={patient.tel}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="วันเกิด : "
          labelValue={patient.birthday}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="เพศ : "
          labelValue={patient.gender}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="ที่อยู่ : "
          labelValue={patient.homeAddress}
        />

        <FieldGroup
          id="formControlsName"
          labelPlace="ผู้ติดต่อฉุกเฉิน : "
          labelValue={patient.emergencyContact.name}
        />
        <FieldGroup
          id="formControlsName"
          labelPlace="ความสัมพันธ์ : "
          labelValue={patient.emergencyContact.relationship}
        />
        <FieldGroup
          id="formControlsName"
          labelPlace="โทร : "
          labelValue={patient.emergencyContact.tel}
        />



    </div>
    );
  }
}
export default SearchPatientResultComponent;
