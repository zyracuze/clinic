import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Row, Col, Radio, Button } from 'react-bootstrap';
import '../App.css';

class CreatePatient extends Component {

  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ชื่อ - นามสกุล
            </Col>
          <Col sm={7}>
            <FormControl id="fullname" type="text" placeholder="ชื่อ - นามสกุล" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ชื่อเล่น
            </Col>
          <Col sm={2}>
            <FormControl id="nickname" type="text" placeholder="ชื่อเล่น" />
          </Col>
          <Col sm={1} componentClass={ControlLabel}>
            เพศ
            </Col>
          <Col sm={2}>
            <FormControl id="gender" componentClass="select">
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            วันเกิด
            </Col>
          <Col sm={2}>
            <FormControl id="birthday" type="text" placeholder="วันเกิด" />
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
            <Radio id="doc0" name="requiredDocument" inline>ใบรับรองแพทย์</Radio>{' '}
            <Radio id="doc1" name="requiredDocument" inline>ประกันสังคม</Radio>
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
            <FormControl id="emergencyContact.name" type="text" placeholder="ผู้ติดต่อฉุกเฉิน" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ความสัมพันธ์
            </Col>
          <Col sm={3}>
            <FormControl id="emergencyContact.relationship" type="text" placeholder="ความสัมพันธ์" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            โทร
            </Col>
          <Col sm={3}>
            <FormControl id="emergencyContact.tel" type="text" placeholder="โทร" />
          </Col>
        </FormGroup>
        <Button bsStyle="success" type="submit">เพิ่ม</Button>
      </Form>
    )
  }

}
export default CreatePatient;