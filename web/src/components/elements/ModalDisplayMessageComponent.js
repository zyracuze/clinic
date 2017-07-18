import React, {Component} from 'react'
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types'
export default class ModalDisplayMessageComponent extends Component{
    static propTypes = {
        isShowmodal: PropTypes.bool.isRequired,
        onClickModal: PropTypes.func.isRequired,
        titleModal: PropTypes.string.isRequired,
        messageModal: PropTypes.string.isRequired,
        nameBtnModal: PropTypes.string.isRequired,
        isSuccess: PropTypes.bool.isRequired
    }
    render(){
        const {isSuccess, isShowmodal, onClickModal, titleModal, messageModal, nameBtnModal} = this.props
        return (
        <Modal show={isShowmodal}  backdrop="static" keyboard={false}>
          <Modal.Header>
              <Modal.Title style={{fontSize: '23px', fontWeight: '400'}} 
                   id="contained-modal-title">{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{display: 'flex', justifyContent: 'center', fontSize: isSuccess ? '25px' : '18px', color: isSuccess ? "#5cb85c" : "#d9534f"}}>
                {messageModal}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button"  onClick={onClickModal} id="closeBtn">
                {nameBtnModal}
            </Button>
          </Modal.Footer>
        </Modal>
        )
    }
}