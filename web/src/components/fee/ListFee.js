import React, { Component } from 'react'
import {FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap';
export default class FormGroupTwoBlock extends Component {
    state = {
        feeblock:[],
        formGroup: [(
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
        )]
    }
    onAddBtnClick=()=>{
        this.setState({feeblock: this.state.feeblock.concat((this.state.formGroup))});
    }
    render() {
        return (
          <div>
            {this.state.formGroup}
            {this.state.feeblock}
            <Button onClick={this.onAddBtnClick} bsStyle="btn btn-primary width45" type="submit" id="saveBtn" >+</Button>
          </div>
        );
    }
}