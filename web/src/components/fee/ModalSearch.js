import React,{Component} from 'react'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
export default class ModalSearch extends Component{
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