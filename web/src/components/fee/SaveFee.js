import React, { Component } from 'react'
import ModalSearch from './ModalSearch'
import { Form, Button} from 'react-bootstrap';
import ListFee from './ListFee'
import DisplayPatientName from '../elements/DisplayPatientName'
import SearchForm from '../elements/SearchForm'

export default class SaveFee extends Component {
  constructor() {
    super();
    this.state = {
      isShowingModal: false,
      dataObjTable: [],
      titleSearch: "",
      firstname: 'Star',
      lastname: 'bug',
      lastnamePatient: "",
      firstnamePatient: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.setState({
      isShowingModal: false
    })
  }

  onSubmitSearchButton(){
    this.setState({
      dataObjTable: [{
        id:"1",
        name:"kae",
        lastname:"lastname kae"
      }]
    })
  }

  onChooseDataTable(data){
    console.log("onChooseDataTable" + data)
  }
  onAdvanceSearchPatient(){
    console.log("onAdvanceSearchPatient 11")
  }

  onSearchPatient=()=> {
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
        <SearchForm onSearchPatient={this.onSearchPatient}/>
        <DisplayPatientName firstnamePatient={this.state.firstnamePatient}
                            lastnamePatient={this.state.lastnamePatient}/>
        <ListFee/>
        <Button bsStyle="success" type="submit" id="saveBtn" >เพิ่ม</Button>
        <ModalSearch onCloseModal={this.onCloseModal} 
                     isShowingModal={this.state.isShowingModal}
                     dataObjTable={this.state.dataObjTable}
                     onChooseDataTable={this.onChooseDataTable}
                     onAdvanceSearchPatient={this.onAdvanceSearchPatient}/>
      </Form>
    )
  }
}