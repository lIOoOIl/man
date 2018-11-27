import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
export default class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userName: 'Pomelo'
    }
  }

  componentWillMount(){
    
  }

  render() {
    return (
      <div className="header">
        <Row className="user">
          <Col span="24">
            <span>你好，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="info">
          <Col span="2" class="header-title">首页</Col>
          <Col span="22">
            <span className="header-time">2018-11-27</span>
            <span className="header-weather">多云转晴</span>
          </Col>
        </Row>
      </div>
    )
  }
}