import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './style/common.less'

export default class Admin extends React.Component {
  
  render(){
    return (
      <Row className='container'>
        <Col span='4' className='menu'>
          <Nav/>
        </Col>
        <Col span='20' className='main'>
          <Header/>
          <Row className='content'>
            this is Content
          </Row>
          <Footer/>
        </Col>
      </Row>
    )
  }
}