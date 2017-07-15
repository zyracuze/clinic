import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import SearchForm from '../elements/SearchForm'
import Table from '../elements/SharedTable'

export default class ModalSearch extends Component{
    static propTypes = {
        isShowingModal: PropTypes.bool.isRequired,
        handleCloseModal: PropTypes.func.isRequired,
        dataObj:  PropTypes.array.isRequired,
        onChooseData: PropTypes.func.isRequired,
        titleSearch: PropTypes.string.isRequired,
        onSubmitSearchButton : PropTypes.func.isRequired
    }
    render(){
        return (
        <div>
            {
                this.props.isShowingModal &&
                <ModalContainer onClose={this.props.handleCloseModal}>
                <ModalDialog onClose={this.props.handleCloseModal}>
                    <h1>Search Patient</h1>
                    <SearchForm titleSearch={this.props.titleSearch} 
                                onSubmitSearchButton={this.props.onSubmitSearchButton}/>
                    <Table dataObj={this.props.dataObj} onChooseData={this.props.onChooseData}/>
                </ModalDialog>
                </ModalContainer>
            }
        </div>
        )
    }
}