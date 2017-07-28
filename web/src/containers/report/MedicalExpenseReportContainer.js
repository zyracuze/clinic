import React, {Component} from 'react'
import SearchReportComponent from '../../components/report/SearchReportComponent'
export default class MedicalExpenseReportContainer extends Component{
    onSubmitSearchButton(){

    }
    render(){
        return (
            <div className="form-search-container">
                <SearchReportComponent onSubmitSearchButton={this.onSubmitSearchButton}>
                </SearchReportComponent>
            </div>
        )
    }
} 