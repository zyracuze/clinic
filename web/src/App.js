import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import LoginFrom from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import './App.css'

import {Router, Route, hashHistory} from 'react-router'

class App extends React.Component {
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
        </Router>
        </div>
      </div>
    );
  }
}
export default App;
