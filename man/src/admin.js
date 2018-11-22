import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import './style/common.less'

export default class Admin extends React.Component {
  
  render(){
    return (
      <Row className='container'>
        <Col span='4' className='menu'>
          <Menu value='this is Menu' />
        </Col>
        <Col span='20' className='main'>
          <Header value='this is Headers' />
          <Row className='content'>
            this is Content
          </Row>
          <Footer value='this is Footer' />
        </Col>
      </Row>
    )
  }
}