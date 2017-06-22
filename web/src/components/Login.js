import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { browserHistory } from 'react-router'

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let userName = this.refs.userName.value;
    let password = this.refs.password.value;
    axios.post('http://localhost:8888/login', {
      userName: userName,
      password: password
    })
    .then(function (response) {
      const path = '/home'
      browserHistory.push(path)
    })
    .catch(function (error) {
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>เข้าสู่ระบบ</h2><br/>
          User Name:<br/>
          <input
              type="text" 
              ref="userName"/>
          <br/><br/>

          Password:<br/>
          <input 
              type="password" 
              ref="password"/>
          <br/>
        </label>
          <br/><br/>
          <Button
              bsStyle="primary"
              type="submit"
              className="submit-login">Login</Button>
      </form>
    );
  }
}
export default Login;
