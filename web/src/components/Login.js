import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { browserHistory } from 'react-router'
import '../App.css'

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
        <form onSubmit={this.handleSubmit} className="form-signin">
          <label>
            <h2 className="form-signin-heading">เข้าสู่ระบบ</h2>
            User Name:<br/>
            <input
                type="text" 
                className="form-control-signin"
                placeholder="administrator"
                ref="userName"/>
            <br/><br/>

            Password:<br/>
            <input 
                type="password"
                className="form-control-signin" 
                placeholder="***********"
                ref="password"/>
            <br/>
          </label>
            <br/><br/>
            <Button
                bsStyle="primary"
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                >SIGN IN</Button>
        </form>
    );
  }
}
export default Login;
