import React, {Component} from 'react'
import {Form,FormGroup, ControlLabel, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
export default class DisplayPatientNameComponent extends Component{
    static propTypes = {
        namePatient: PropTypes.string.isRequired
    }
    render(){
        const {namePatient} = this.props
          return(
            <div className="container">
            <Form horizontal>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={4}>
                ชื่อผู้ป่วย : 
              </Col>
              <Col sm={4}>
                <label> {namePatient}</label>
              </Col>
            </FormGroup>
            </Form>
            </div>
          )
    }
}