import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {msg: ""};
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let identify = this.refs.identify.value;
    let dataLogin = {
      name: name,
      identify: identify
    };
  }

  render() {
    const message = this.state.msg;
    return (
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            <h2 className="form-signin-heading">ค้นหาผู้ป่วย</h2>
            Name:
            <input
                type="text"
                className="form-control-signin"
                placeholder="ชื่อ - นามสกุลผู้ป่วย"
                ref="name"/>

            <label>ID:</label>
            <input
                type="text"
                className="form-control-signin"
                placeholder="รหัสผู้ป่วย"
                ref="identify"/>
           <span className="msg-error"> {message}</span>
          </label>
            <Button
                bsStyle="primary"
                type="submit"
                className="btn btn-lg btn-primary">SEARCH</Button>
        </div>
        </form>
    );
  }
}
export default Search;
