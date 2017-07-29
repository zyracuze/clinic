import React, {Component} from 'react'
import SearchReportComponent from '../../components/report/SearchReportComponent'
import MedicalExpenseReportComponent from '../../components/report/MedicalExpenseReportComponent'
import { apiSearchReport } from '../../apis/ApiFee';
export default class MedicalExpenseReportContainer extends Component{
    state = {
        dataTable: [],
        sumFee: 0
    }
    
    onSubmitSearch=(event)=>{
        event.preventDefault()
        let data = event.target
        this.initialDataTable()
        apiSearchReport(this.prepareDataForSearch(data))
            .then(this.searchReportSuccess)

    }
    initialDataTable=()=>{
        this.setState({
             dataTable: [],
             sumFee: 0
        })
    }
    searchReportSuccess=(response)=>{
        if(response){
            this.setState({
                dataTable: response.fees,
                sumFee: response.sum
            })
        }
    }
    prepareDataForSearch(data){
        return {
            idPatient: data.identifySearch.value,
            firstname: data.firstname.value,
            lastname: data.lastname.value,
            period: parseInt(data.period.value)
        }
    }
    render(){
        return (
            <div className="form-search-container">
                <SearchReportComponent onSubmitSearch={this.onSubmitSearch} >
                </SearchReportComponent>
                <MedicalExpenseReportComponent dataTable={this.state.dataTable}
                                               sumFee={this.state.sumFee}> 
                </MedicalExpenseReportComponent>
            </div>
        )
    }
} 