import React, {Component} from 'react'
import SearchReportComponent from '../../components/report/SearchReportComponent'
import MedicalExpenseReportComponent from '../../components/report/MedicalExpenseReportComponent'
export default class MedicalExpenseReportContainer extends Component{
    state = {
        dataTable: []
    }
    onSubmitSearchButton(){

    }
    render(){
        return (
            <div className="form-search-container">
                <SearchReportComponent onSubmitSearchButton={this.onSubmitSearchButton}>
                </SearchReportComponent>
                <MedicalExpenseReportComponent dataTable={this.state.dataTable}> </MedicalExpenseReportComponent>
            </div>
        )
    }
} 