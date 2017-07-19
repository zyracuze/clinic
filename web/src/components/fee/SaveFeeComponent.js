import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Form, FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap';
export default class SaveFeeComponent extends Component {
    static propTypes = {
       disabledListFee: PropTypes.bool.isRequired,
       onSubmitSaveFee: PropTypes.func.isRequired
    }
    state = {
        feeblock:[]
    }
    onAddBtnClick=(number)=>{
        let index = number + 1
        let idExpense = "expenseItem"+index
        let idAmount = "amount"+index
        this.setState({
            feeblock: this.state.feeblock.concat(
                (<FormGroup key={index}>
                    <Col componentClass={ControlLabel} sm={3}>รายการค่าใช้จ่าย</Col>
                    <Col sm={3}>
                        <FormControl id={idExpense} type="text" placeholder="รายการค่าใช้จ่าย" name={idExpense} />
                        </Col>
                    <Col componentClass={ControlLabel} sm={1}>จำนวนเงิน</Col>
                    <Col sm={3}>
                        <FormControl id={idAmount} type="text" placeholder="จำนวนเงิน" name={idAmount} />
                    </Col>
                </FormGroup>))
        });
    }
    render() {
        if(this.props.disabledListFee && (this.state.feeblock.length > 0 || !this.state.feeblock)){
            this.setState({
                feeblock: []
            })
        }
        return (
          <Form horizontal onSubmit={this.props.onSubmitSaveFee}>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>รายการค่าใช้จ่าย</Col>
              <Col sm={3}>
                  <FormControl id="expenseItem0" disabled={this.props.disabledListFee} 
                               type="text" placeholder="รายการค่าใช้จ่าย"
                               name="expenseItem0" />
                </Col>
              <Col componentClass={ControlLabel} sm={1}>จำนวนเงิน</Col>
              <Col sm={3}>
                  <FormControl id="amount0" disabled={this.props.disabledListFee} 
                               type="text" placeholder="จำนวนเงิน"
                               name="amount0" />
                  <FormControl id="num" 
                               type="hidden" 
                               value={this.state.feeblock.length}
                               name="num" />
              </Col>
            </FormGroup>
            {this.state.feeblock}
            <Button onClick={()=>this.onAddBtnClick(this.state.feeblock.length)} 
                    disabled={this.props.disabledListFee} bsStyle="btn btn-primary width45" 
                    type="button" id="saveBtn" >+</Button><br/>
            <Button bsStyle="success" type="submit" id="saveBtn" 
                    disabled={this.props.disabledListFee}>บันทึกข้อมูล</Button>
          </Form>
        );
    }
}