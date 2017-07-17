import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, Col, Glyphicon, InputGroup } from 'react-bootstrap';
export default class SearchForm extends Component{
    static propTypes = {
        onAdvanceSearchPatient: PropTypes.func.isRequired,
        onChangeIdPatient: PropTypes.func.isRequired
    }
    render(){
        return(
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            รหัสผู้ป่วย
          </Col>
          <Col sm={3}>
            <InputGroup>
              <FormControl id="idPatient" 
                           type="text" 
                           placeholder="รหัสผู้ป่วย" 
                           onChange={this.props.onChangeIdPatient}/>
              <InputGroup.Addon>
                <Glyphicon glyph="search" onClick={this.props.onAdvanceSearchPatient} />
              </InputGroup.Addon>
            </InputGroup>
          </Col>
        </FormGroup>
        )
    }
}