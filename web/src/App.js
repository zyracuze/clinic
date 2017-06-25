import React, { Component } from 'react';
import LoginFrom from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import CreatePatient from './components/CreatePatient'
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
          <Route path='/' component={LoginFrom} />
          <Route path='/home' component={Home} />
          <Route path='/createPatient' component={CreatePatient}/>
        </Router>
        </div>
      </div>
    );
  }
}
export default App;
