import React, {Component} from 'react'
import {FormGroup, ControlLabel, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
export default class DisplayPatientName extends Component{
    static propTypes = {
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired
    }
    render(){
        return(
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ชื่อผู้ป่วย
          </Col>
          <Col componentClass={ControlLabel} sm={3}>
            {this.props.firstnamePatient + ' ' + this.props.lastnamePatient}
          </Col>
        </FormGroup>
        )
    }
}