import React, {Component} from 'react'
import '../App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
export default class HeaderComponent extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Row>
              <Col xs={4} md={4} className="App-home" >
               <a href="#/home">
                <img src="home.png" className="home-size" alt={"clinic"}/> กลับสู่หน้าหลัก
               </a>
              </Col>
              <Col xs={4} md={4}>
                <img src="clinic.png" className="App-logo"  alt={"clinic"}/>
              </Col>
              <Col xs={4} md={4} className="App-logout">
                <a href="#/">
                 <img src="logout.png" className="logout-size" alt={"clinic"}/> ออกจากระบบ
                </a>
              </Col>
          </Row>
          </Grid>
        </div>
    )
  }
}
