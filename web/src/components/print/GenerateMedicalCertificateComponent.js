import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import {Form,FormGroup, ControlLabel, Col, FormControl } from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker.css'
import PropTypes from 'prop-types'
export default class GenerateMedicalCertificateComponent extends Component {
  static propTypes = {
    requestDate: PropTypes.string.isRequired,
    doctorOfPatient: PropTypes.string.isRequired,
    symptom: PropTypes.string.isRequired,
    handleChangeRequestDate: PropTypes.func.isRequired,
    printMedicalCertificate: PropTypes.func.isRequired
  }
  render() {
    const {requestDate, doctorOfPatient, symptom, handleChangeRequestDate, printMedicalCertificate} = this.props
    return(
        <div className="container">
          <Form horizontal onSubmit={printMedicalCertificate}>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={4}> แพทย์เจ้าของไข้ : </Col>
              <Col sm={4}>
                <FormControl  id="doctorOfPatient" 
                              type="text" 
                              placeholder="แพทย์เจ้าของไข้" 
                              onChange={doctorOfPatient}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={4}>อาการ : </Col>
              <Col sm={4}>
                <FormControl  id="symptom" 
                              type="text" 
                              placeholder="อาการ" 
                              onChange={symptom}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={4}>วันที่ขอ : </Col>
              <Col sm={4}>
                <DatePicker   id="requestDate"
                              name="requestDate"
                              selected={moment(requestDate, "DD/MM/YYYY")}
                              onSelect={handleChangeRequestDate}
                              showMonthDropdown
                              showYearDropdown
                              dateFormat="DD/MM/YYYY"
                              dropdownMode="select"
                              className="form-control"
                  />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={7}>
                <button type="submit"
                    className="btn btn-lg btn-primary">PRINT</button>
              </Col>
            </FormGroup>
            </Form>
        </div>
    )
  }
}
