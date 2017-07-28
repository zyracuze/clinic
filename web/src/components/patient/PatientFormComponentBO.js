import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { Form, FormGroup, FormControl, ControlLabel, Col, Radio, Button } from 'react-bootstrap';

export default class PatientFormComponentBO extends Component {
  
  static propTypes = {
    onSubmitPatient: PropTypes.func.isRequired
  }
  
  onClickChecked=(event)=> {
    const { value } = event.target;
    const requiredDocument = [ ...this.state.requiredDocument ];
    const indexOf = requiredDocument.indexOf(value);

    if (indexOf === -1) {
      requiredDocument.push(value);
    }else {
      requiredDocument.splice(indexOf, 1);
    }
    
    this.setState({ requiredDocument });
  }
  
  render() {
    let CheckboxItemRequiredDoc

    const requiredDoc = [{id:'certMedicine', value: 'ใบรับรองแพทย์'},{id:'socialCert', value:'ใบประกันสังคม'}]
    CheckboxItemRequiredDoc = requiredDoc.map((requiredDocObj,index) => {
      return (
        <CheckboxItem key={index}
                      value={requiredDocObj.id}
                      display={requiredDocObj.value}
                      checked={}
                      onClick={this.onClick}
                      onChange={()=>{}} />
      );
    });

    function CheckboxItem({ value, display, checked, onClick }) {
      return (
        <label className="CheckboxItem">
          <input 
                name="requiredDocument"
                type="checkbox"
                value={value}
                checked={checked}
                onClick={onClick} /> {display}
        </label>
      );
    }

    return (
      <Form horizontal onSubmit={this.props.onSubmitPatient}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ชื่อ
             </Col>
          <Col sm={3}>
            <FormControl id="firstname" type="text" placeholder="ชื่อ" />
          </Col>
          <Col componentClass={ControlLabel} sm={1}>
            นามสกุล
             </Col>
          <Col sm={3}>
            <FormControl id="lastname" type="text" placeholder="นามสกุล" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ชื่อเล่น
             </Col>
          <Col sm={3}>
            <FormControl id="nickname" type="text" placeholder="ชื่อเล่น" />
          </Col>
          <Col componentClass={ControlLabel} sm={1}>
            เพศ
             </Col>
          <Col sm={3}>
            <FormControl componentClass="select" id="gender" >
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup>
           <Col componentClass={ControlLabel} sm={3}>
             วันเกิด
              </Col>
           <Col sm={3}>
             <DatePicker
               id="birthday"
               name="birthday"
               selected={moment()}
               onSelect={this.handleChangeDatePicker}
               showMonthDropdown
               showYearDropdown
               dateFormat="DD/MM/YYYY"
               dropdownMode="select"
               className="form-control"
             />
           </Col>
         </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            บัตรประชาชน
             </Col>
          <Col sm={2}>
            <FormControl id="idCard" type="text" placeholder="บัตรประชาชน" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            อาชีพ
             </Col>
          <Col sm={2}>
            <FormControl id="career" type="text" placeholder="อาชีพ" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            โทร
             </Col>
          <Col sm={2}>
            <FormControl id="tel" type="text" placeholder="โทร" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ที่อยู่ปัจจุบัน
             </Col>
          <Col sm={7}>
            <FormControl id="homeAddress" type="text" placeholder="ที่อยู่ปัจจุบัน" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ที่อยู่ที่ทำงาน
             </Col>
          <Col sm={7}>
            <FormControl id="workAddress" type="text" placeholder="ที่อยู่ที่ทำงาน" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            เอกสารที่ต้องการ
              </Col>
          <Col sm={3}>
             {CheckboxItemRequiredDoc}
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            โรคประจำตัว
              </Col>
          <Col sm={7}>
            <FormControl id="congenitalDisease" type="text" placeholder="โรคประจำตัว" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            แพ้ยา
              </Col>
          <Col sm={7}>
            <FormControl id="beAllergic" type="text" placeholder="แพ้ยา" />
          </Col>
        </FormGroup>
        <Col className="clearline" />
        <Col className="txtheader" componentClass={ControlLabel} sm={12}>
          ติดต่อฉุกเฉิน
            </Col>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ผู้ติดต่อฉุกเฉิน
              </Col>
          <Col sm={7}>
            <FormControl id="emergencyContactName" type="text" placeholder="ผู้ติดต่อฉุกเฉิน" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ความสัมพันธ์
              </Col>
          <Col sm={3}>
            <FormControl id="emergencyContactRelationship" type="text" placeholder="ความสัมพันธ์" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            โทร
              </Col>
          <Col sm={3}>
            <FormControl id="emergencyContactTel" type="text" placeholder="โทร" />
          </Col>
        </FormGroup>
        <Button bsStyle="success" type="submit" id="saveBtn">เพิ่ม</Button>
      </Form >
    )
  }
}