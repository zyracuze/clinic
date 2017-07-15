import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, Col, Glyphicon, InputGroup } from 'react-bootstrap';
export default class SearchForm extends Component{
    static propTypes = {
        onSearchPatient: PropTypes.func.isRequired
    }
    render(){
        return(
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            รหัสผู้ป่วย
          </Col>
          <Col sm={3}>
            <InputGroup>
              <FormControl id="idPatient" type="text" placeholder="รหัสผู้ป่วย" />
              <InputGroup.Addon>
                <Glyphicon glyph="search" onClick={this.props.onSearchPatient} />
              </InputGroup.Addon>
            </InputGroup>
          </Col>
        </FormGroup>
        )
    }
}