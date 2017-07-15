import React, { Component } from 'react'
import {FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';
export default class FormGroupTwoBlock extends Component {
    render() {
        return (
          <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>รายการค่าใช้จ่าย</Col>
              <Col sm={3}>
                  <FormControl id="expenseItem0" type="text" placeholder="รายการค่าใช้จ่าย" />
                </Col>
              <Col componentClass={ControlLabel} sm={1}>จำนวนเงิน</Col>
              <Col sm={3}>
                  <FormControl id="amount0" type="text" placeholder="จำนวนเงิน" />
              </Col>
          </FormGroup>
        );
    }
}