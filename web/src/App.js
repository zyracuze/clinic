import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import LoginFrom from './LoginFrom'
import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <LoginFrom />
      </div>
    );
  }
}
export default App;
