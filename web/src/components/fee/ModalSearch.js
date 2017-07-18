import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import SearchPatientsComponent from '../elements/SearchPatientsComponent'
import PatientsSearchResultComponent from '../elements/PatientsSearchResultComponent'

export default class ModalSearch extends Component{
    static propTypes = {
        isShowingModal: PropTypes.bool.isRequired,
        onCloseModal: PropTypes.func.isRequired,
        dataObjTable:  PropTypes.array.isRequired,
        onChooseDataTable: PropTypes.func.isRequired,
        titleSearch: PropTypes.string.isRequired,
        onAdvanceSearchPatient : PropTypes.func.isRequired
    }
    render(){
        return (
        <div>
            {
                this.props.isShowingModal &&
                <ModalContainer onClose={this.props.onCloseModal}>
                <ModalDialog onClose={this.props.onCloseModal}>
                    <h1>Search Patient</h1>
                    <SearchPatientsComponent  titleSearch={this.props.titleSearch} 
                                        onAdvanceSearchPatient={this.props.onAdvanceSearchPatient}/>
                    <PatientsSearchResultComponent dataObjTable={this.props.dataObjTable} 
                           onChooseDataTable={this.props.onChooseDataTable}/>
                </ModalDialog>
                </ModalContainer>
            }
        </div>
        )
    }
}