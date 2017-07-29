import React, { Component } from 'react';
import LoginComponent from './components/LoginComponent'
import HomeComponent from './components/HomeComponent'
import SearchPatientContainer from './containers/SearchPatientContainer'
import HeaderComponent from './components/HeaderComponent'
import EditPatientContainer from './containers/EditPatientContainer'
import GenerateMedicalCertificateContainer from './containers/print/GenerateMedicalCertificateContainer'
import MedicalExpenseReportContainer from './containers/report/MedicalExpenseReportContainer'
import CreatePatientContainer from './containers/patient/CreatePatientContainer'
import SaveFeeContainer from './containers/fee/SaveFeeContainer'
import ScheduleComponent from './components/ScheduleComponent'

import './App.css'

import {Router, Route, hashHistory, IndexRoute} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <HeaderComponent />
        </div>
        <div className="App-intro">
        <Router history={hashHistory}>
          <Route path='/' component={LoginComponent} />
          <Route path='/home' component={HomeComponent} />
          <Route path='/search' component={SearchPatientContainer} />
          <Route path='/editPatient'>
            <IndexRoute component={EditPatientContainer}/>
            <route path=':id' component={EditPatientContainer} />
          </Route>
          <Route path='/generateMedicalCertificate' component={GenerateMedicalCertificateContainer}/>
          <Route path='/medicalExpenseReport' component={MedicalExpenseReportContainer}/>
          <Route path='/saveFee' component={SaveFeeContainer}/>
          <Route path='/createPatient' component={CreatePatientContainer}/>
          <Route path='/schedule' component={ScheduleComponent}/>
        </Router>
        </div>
      </div>
    );
  }
}
export default App;
