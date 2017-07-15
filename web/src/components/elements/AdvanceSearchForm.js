import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'
import '../../App.css';
export default class AdvanceSearchFormElement extends Component{
    static propTypes = {
        onAdvanceSearchPatient: PropTypes.func.isRequired,
        titleSearch: PropTypes.string.isRequired,
        namePatient: PropTypes.string.isRequired,
        lastnamePatient: PropTypes.string.isRequired,
        idPatient: PropTypes.string.isRequired
    }
    render(){
        return (
        <form onSubmit = { this.props.onAdvanceSearchPatient }>
        <label>
          <h2 className="form-signin-heading">{this.props.titleSearch}</h2>
            <input
              type="text"
              className="form-control-signin"
              placeholder="ชื่อ"
              value={this.props.namePatient}
              name="namePatient"/>
            <input
              type="text"
              className="form-control-signin"
              placeholder="นามสกุล"
              value={this.props.lastnamePatient}
              name="lastnamePatient"/>
          <input
              type="text"
              className="form-control-signin"
              placeholder="รหัสผู้ป่วย"
              value={this.props.idPatient}
              name="idPatient"/>
        </label>
        <Button
            bsStyle="primary"
            type="submit"
            className="btn btn-lg btn-primary">SEARCH</Button>
        </form>
        )
    }
}