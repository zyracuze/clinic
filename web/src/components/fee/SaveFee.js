import React, { Component } from 'react'
import ModalSearch from './ModalSearch'
import { Form, FormGroup, FormControl, ControlLabel, Col, Button, Glyphicon, InputGroup } from 'react-bootstrap';
import ListFee from './ListFee'
import DisplayPatientName from '../elements/DisplayPatientName'

export default class SaveFee extends Component {
  constructor() {
    super();
    this.state = {
      isShowingModal: false,
      dataObj: [],
      titleSearch: "",
      firstname: 'Star',
      lastname: 'bug',
      lastnamePatient: "",
      firstnamePatient: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSearchPatient = this.handleSearchPatient.bind(this);
  }

  handleCloseModal() {
    this.setState({
      isShowingModal: false
    })
  }

  onSubmitSearchButton(){
    this.setState({
      dataObj: [{
        id:"1",
        name:"kae",
        lastname:"lastname kae"
      }]
    })
  }

  onChooseData(){

  }

  handleSearchPatient() {
    this.setState({
      isShowingModal: true
    })
  }

  handleSubmit(event) {
    event.preventDefault();
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
        <DisplayPatientName firstnamePatient={this.state.firstnamePatient}
                            lastnamePatient={this.state.lastnamePatient}/>
        <ListFee/>
        <Button bsStyle="success" type="submit" id="saveBtn" >เพิ่ม</Button>
        <ModalSearch handleCloseModal={this.handleCloseModal} 
                     isShowingModal={this.state.isShowingModal}
                     dataObj={this.state.dataObj}
                     onChooseData={this.onChooseData}
                     onSubmitSearchButton={this.onSubmitSearchButton}/>
      </Form>
    )
  }
}