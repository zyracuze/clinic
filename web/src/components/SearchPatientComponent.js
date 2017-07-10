import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

class SearchPatientComponent extends Component {


  constructor(props) {
    super(props);
    this.onSubmitSearchButton = this.onSubmitSearchButton.bind(this);
  }


  onSubmitSearchButton() {
    //validation

    //prepare data
    let data = {
      "idpatient": this.refs.identifySearch.value,
      "firstname": this.refs.firstname.value,
      "lastame": this.refs.lastname.value
    }

    //Send action
    this.props.onSearch(data);
  }

  render() {
    return (
      <div> 
        <form onSubmit = { this.onSubmitSearchButton }>
        <label>
          <h2 className="form-signin-heading">ค้นหาผู้ป่วย</h2>
            <input
              type="text"
              className="form-control-signin"
              placeholder="ชื่อ"
              ref="firstname"/>
            <input
              type="text"
              className="form-control-signin"
              placeholder="นามสกุล"
              ref="lastname"/>
          <input
              type="text"
              className="form-control-signin"
              placeholder="รหัสผู้ป่วย"
              ref="identifySearch"/>
        </label>
        <Button
            bsStyle="primary"
            type="submit"
            className="btn btn-lg btn-primary">SEARCH</Button>
        </form>
      </div>
    );
  }
}
export default SearchPatientComponent;
