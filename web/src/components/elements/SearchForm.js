import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
import '../../App.css';
export default class SearchFormElement extends Component{
    render(){
        return (
        <form onSubmit = { this.props.onSubmitSearchButton }>
        <label>
          <h2 className="form-signin-heading">{this.props.titleSearch}</h2>
            <input
              type="text"
              className="form-control-signin"
              placeholder="ชื่อ"
              name={this.props.name}/>
            <input
              type="text"
              className="form-control-signin"
              placeholder="นามสกุล"
              name={this.props.lastname}/>
          <input
              type="text"
              className="form-control-signin"
              placeholder="รหัสผู้ป่วย"
              name={this.props.idPatient}/>
        </label>
        <Button
            bsStyle="primary"
            type="submit"
            className="btn btn-lg btn-primary">SEARCH</Button>
        </form>
        )
    }
}