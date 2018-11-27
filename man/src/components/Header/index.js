import React from 'react'
import { Row, Col } from 'antd'
import util from '../../utils'
import './index.less'

export default class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userName: 'Pomelo'
    }
  }

  componentWillMount(){
    setInterval(() => {
      let time = util.getTime(new Date())
      this.setState({
        currentTime: time
      })
    }, 500)
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
            <span className="header-time">{this.state.currentTime}</span>
            <span className="header-weather">多云转晴</span>
          </Col>
        </Row>
      </div>
    )
  }
}