import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Modal} from 'react-bootstrap';
import SearchPatientResultComponent from '../SearchPatientResultComponent'
export default class ModalPatientDetailComponent extends Component{
    static propTypes = {
        patient: PropTypes.object.isRequired,
        isShowmodal: PropTypes.bool.isRequired,
        onCloseModal: PropTypes.func.isRequired
    }
    render(){
        const {patient, isShowmodal, onCloseModal} = this.props
        return(
        <Modal show={isShowmodal}  backdrop="static" keyboard={false}>
          <Modal.Header>
              <Modal.Title style={{fontSize: '23px', fontWeight: '400'}} 
                   id="contained-modal-title">Patient Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
               <SearchPatientResultComponent patient={patient}/>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button"  onClick={onCloseModal} id="closeBtn">
                Close
            </Button>
          </Modal.Footer>
        </Modal>
        )
    }
}