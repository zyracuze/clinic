import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { validateLogin} from '../apis/ApiLogin';
import '../App.css';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {msg: ""};
  }

  handleSubmit(event) {
    event.preventDefault();
    let userName = this.refs.userName.value;
    let password = this.refs.password.value;
    let dataLogin = {
      userName: userName,
      password: password
    };
    validateLogin(dataLogin).then(()=> {
      this.props.history.push("/home");
    },()=>{
      this.setState({msg: "One or both Username or Password are invalid."});
    });
  }

  render() {
    const message = this.state.msg;
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
           <span className="msg-error"> {message}</span>
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
