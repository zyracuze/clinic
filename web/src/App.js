import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import LoginFrom from './LoginFrom'
import Header from './Header'
import './Login.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-intro">
          <LoginFrom />
        </div>
      </div>
    );
  }
}
export default App;
