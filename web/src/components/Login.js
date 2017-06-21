import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>เข้าสู่ระบบ</h2><br/>
          User Name:<br/>
          <input
              type="text" name="userName"
              id="userName" value={this.state.value}
              onChange={this.handleChange}/><br/><br/>

              Password:<br/>
              <input type="text" name="password" id="password"/><br/>
        </label>
            <br/><br/><Button
              bsStyle="primary"
              type="submit"
              className="submit-login"
              onClick={() => alert()}>Login</Button>
      </form>
    );
  }
}
export default Login;
