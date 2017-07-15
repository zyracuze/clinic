import React, { Component } from 'react'
import ModalSearch from './ModalSearch'
import { Form, FormGroup, FormControl, ControlLabel, Col, Button, Glyphicon, InputGroup } from 'react-bootstrap';
import ListFee from './ListFee'
import DisplayPatientName from '../elements/DisplayPatientName'

class SaveFee extends Component {

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
      feeblock: [(
        <ListFee />
      )]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
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

  onAddBtnClick(event) {
    const feeblock = this.state.feeblock;
    this.setState({
      feeblock: feeblock.concat((
        <ListFee />
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
        <DisplayPatientName firstnamePatient={this.state.firstnamePatient}
                            lastnamePatient={this.state.lastnamePatient}/>
        {this.state.feeblock}
        <div>
          <Button onClick={this.onAddBtnClick} bsStyle="btn btn-primary width45" type="submit" id="saveBtn" >+</Button>
        </div>
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
export default SaveFee;