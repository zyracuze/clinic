import React from 'react'
import '../App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';

export default React.createClass({
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
                <Button href="#/" bsStyle="warning">เพิ่มข้อมูลผู้ป่วย</Button>
              </Col>
              <Col xs={3} md={2}>
                <Button href="#/" bsStyle="warning">พิมพ์ใบรับรองแพทย์</Button>
              </Col>
              <Col xs={3} md={3}/>
          </Row>
          </Grid>
          <Grid fluid>
          <Row>
              <Col xs={2} md={3}/>
              <Col xs={3} md={2}>
                <Button href="#/" bsStyle="warning">ดูรายงานค่ารักษา</Button>
              </Col>
              <Col xs={3} md={2}>
                <Button href="#/" bsStyle="warning">บันทึกค่ารักษาพยาบาล</Button>
              </Col>
              <Col xs={3} md={2}>
                <Button href="#/" bsStyle="warning">แก้ไขข้อมูลผู้ป่วย</Button>
              </Col>
              <Col xs={3} md={3}/>
          </Row>
          </Grid>
          <Grid fluid>
          <Row>
              <Col xs={2} md={3}/>
              <Col xs={3} md={2}>
                <Button href="#/" bsStyle="warning">ตารางนัด</Button>
              </Col>
              <Col xs={3} md={2}>
                <Button href="#/" bsStyle="warning">ออกจากระบบ</Button>
              </Col>
              <Col xs={2} md={3}/>
          </Row>
        </Grid>
      </div>
    )
  }
})
