import React,{ Component } from 'react'
import '../App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
export default class HomeComponent extends Component{
  render(){
    return (
      <div>
        <Grid fluid>
          <Row>
              <Col xs={2} md={3}/>
              <Col xs={3} md={2}>
                <Button href="#/search" className="btn-warning">ค้นหาข้อมูลผู้ป่วย</Button>
              </Col>
              <Col xs={3} md={2}>
                <Button href="#/createPatient" bsStyle="warning">เพิ่มข้อมูลผู้ป่วย</Button>
              </Col>
              <Col xs={3} md={2}>
                <Button href="#/generateMedicalCertificate" bsStyle="warning">พิมพ์ใบรับรองแพทย์</Button>
              </Col>
              <Col xs={3} md={3}/>
          </Row>
          </Grid>
          <Grid fluid>
          <Row>
              <Col xs={2} md={3}/>
              <Col xs={3} md={2}>
                <Button href="#/medicalExpenseReport" bsStyle="warning">ดูรายงานค่ารักษา</Button>
              </Col>
              <Col xs={3} md={2}>
                <Button href="#/saveFee" bsStyle="warning">บันทึกค่ารักษาพยาบาล</Button>
              </Col>
              <Col xs={3} md={2}>
                <Button href="#/editPatient" bsStyle="warning">แก้ไขข้อมูลผู้ป่วย</Button>
              </Col>
              <Col xs={3} md={3}/>
          </Row>
          </Grid>
          <Grid fluid>
          <Row>
              <Col xs={2} md={3}/>
              <Col xs={3} md={2}>
                <Button href="#/schedule" bsStyle="warning">ตารางนัด</Button>
              </Col>
              <Col xs={3} md={2}/>
              <Col xs={2} md={3}/>
          </Row>
        </Grid>
      </div>
    )
  }
}