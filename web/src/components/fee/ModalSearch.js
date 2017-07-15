import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
export default class ModalSearch extends Component{
    static propTypes = {
        isShowingModal: PropTypes.bool.isRequired,
        handleCloseModal: PropTypes.func.isRequired
    }
    render(){
        return (
        <div>
            {
                this.props.isShowingModal &&
                <ModalContainer onClose={this.props.handleCloseModal}>
                <ModalDialog onClose={this.props.handleCloseModal}>
                    <h1>Search Patient</h1>
                    <p> Comming soon</p>
                </ModalDialog>
                </ModalContainer>
            }
        </div>
        )
    }
}