import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import LoginFrom from './LoginFrom'
import Home from './Home'
import Header from './Header'
import './Login.css'
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
