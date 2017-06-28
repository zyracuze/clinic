import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, ControlLabel } from 'react-bootstrap';
import '../App.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {msg: ""};
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let identifySearch = this.refs.identifySearch.value;

    this.setState({
      identify: "",
      address: "",
      gender: "",
      birthDate: "",
      phoneNumber: ""});
  }

  render() {

    return (
      <div>

        <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            <h2 className="form-signin-heading">ค้นหาผู้ป่วย</h2>
            <label>ชื่อ - นามสกุล : </label>
            <input
                type="text"
                className="form-control-signin"
                placeholder="ชื่อ - นามสกุลผู้ป่วย"
                ref="name"/>

            <label>รหัสผู้ป่วย :</label>
            <input
                type="text"
                className="form-control-signin"
                placeholder="รหัสผู้ป่วย"
                ref="identifySearch"/>

           <span className="msg-error"> {this.state.msg}</span>
          </label>
            <Button
                bsStyle="primary"
                type="submit"
                className="btn btn-lg btn-primary">SEARCH</Button>
        </div>
      </form>



      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            <label>รหัสผู้ป่วย : </label>
          </Col>
          <Col componentClass={ControlLabel} sm={6}>
              <label> {this.state.identify} </label>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            <label>ชื่อ - นามสกุล : </label>
          </Col>
          <Col componentClass={ControlLabel} sm={6}>
            <label> {this.state.name} </label>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            <label>เบอร์ติดต่อ : </label>
          </Col>
          <Col componentClass={ControlLabel} sm={6}>
            <label> {this.state.phoneNumber} </label>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            <label>วันเกิด : </label>
          </Col>
          <Col componentClass={ControlLabel} sm={6}>
            <label> {this.state.birthDate} </label>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            <label>เพศ : </label>
          </Col>
          <Col componentClass={ControlLabel} sm={6}>
            <label> {this.state.gender} </label>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            <label>ที่อยู่ : </label>
          </Col>
          <Col componentClass={ControlLabel} sm={6}>
            <label> {this.state.address} </label>
          </Col>
        </FormGroup>
        </Form>
    </div>
    );
  }
}
export default Search;
