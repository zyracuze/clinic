import React, {Component} from 'react'
import {FormGroup, ControlLabel, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
export default class DisplayPatientNameComponent extends Component{
    static propTypes = {
        namePatient: PropTypes.string.isRequired
    }
    render(){
        const {namePatient} = this.props
          return(
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                ชื่อผู้ป่วย : 
              </Col>
              <Col componentClass={ControlLabel} sm={3}>
                <label> {namePatient}</label>
              </Col>
            </FormGroup>
          )
    }
}