import React, { Component } from 'react'

import { Form, FormGroup, FormControl, ControlLabel, Col, Button, Glyphicon, InputGroup } from 'react-bootstrap';

class SaveFee extends Component {

  constructor() {
    super();
    this.state = {
      feeblock: [(
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            รายการค่าใช้จ่าย
             </Col>
          <Col sm={3}>
            <FormControl id="expenseItem0" type="text" placeholder="รายการค่าใช้จ่าย" />
          </Col>
          <Col componentClass={ControlLabel} sm={1}>
            จำนวนเงิน
             </Col>
          <Col sm={3}>
            <FormControl id="amount0" type="text" placeholder="จำนวนเงิน" />
          </Col>
        </FormGroup>
      )],
      firstname: 'Star',
      lastname: 'bug'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.handleSearchPatient = this.handleSearchPatient.bind(this);

  }

  handleSearchPatient() {
    console.log("GGWP");
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  onAddBtnClick(event) {
    const feeblock = this.state.feeblock;
    this.setState({
      feeblock: feeblock.concat((
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            รายการค่าใช้จ่าย
             </Col>
          <Col sm={3}>
            <FormControl id={"expenseItem" + feeblock.length} type="text" placeholder="รายการค่าใช้จ่าย" />
          </Col>
          <Col componentClass={ControlLabel} sm={1}>
            จำนวนเงิน
             </Col>
          <Col sm={3}>
            <FormControl id={"amount" + feeblock.length} type="text" placeholder="จำนวนเงิน" />
          </Col>
        </FormGroup>
      ))
    });
  }

  render() {

    return (

      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            รหัสผู้ป่วย
          </Col>
          <Col sm={3}>
            <InputGroup>
              <FormControl id="idPatient" type="text" placeholder="รหัสผู้ป่วย" />
              <InputGroup.Addon>
                <Glyphicon glyph="search" onClick={this.handleSearchPatient} />
              </InputGroup.Addon>
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ชื่อผู้ป่วย
          </Col>
          <Col componentClass={ControlLabel} sm={3}>
            {this.state.firstname + ' : ' + this.state.lastname}
          </Col>
        </FormGroup>
        {this.state.feeblock}
        <div>
          <Button onClick={this.onAddBtnClick} bsStyle="btn btn-primary width45" type="submit" id="saveBtn" >+</Button>
        </div>
        <Button bsStyle="success" type="submit" id="saveBtn" >เพิ่ม</Button>
      </Form>
    )
  }
}
export default SaveFee;