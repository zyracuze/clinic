import React, { Component } from 'react';
import Login from './components/Login'
import Home from './components/Home'
import Search from './components/Search'
import Header from './components/Header'
import CreatePatient from './components/CreatePatient'
import GenerateMedicalCertificate from './components/GenerateMedicalCertificate'
import MedicalExpenseReport from './components/MedicalExpenseReport'
import SaveFee from './components/SaveFee'
import EditPatient from './components/EditPatient'
import Schedule from './components/Schedule'
import Logout from './components/Logout'

import './App.css'

import {Router, Route, hashHistory} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-intro">
        <Router history={hashHistory}>
          <Route path='/' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/createPatient' component={CreatePatient}/>
          <Route path='/generateMedicalCertificate' component={GenerateMedicalCertificate}/>
          <Route path='/medicalExpenseReport' component={MedicalExpenseReport}/>
          <Route path='/saveFee' component={SaveFee}/>
          <Route path='/editPatient' component={EditPatient}/>
          <Route path='/schedule' component={Schedule}/>
          <Route path='/logout' component={Logout}/>
        </Router>
        </div>
      </div>
    );
  }
}
export default App;
