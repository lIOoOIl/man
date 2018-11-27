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
    let timer = setInterval(() => {
      let time = util.getTime(new Date())
      this.setState({
        currentTime: time
      })
    }, 500)
    util.fetch('武汉').then(msg => {
      this.setState({
        currentWeather: msg.weather,
        windpower: msg.windpower
      })
    })
  }

  componentWillUnmout(){
    clearInterval('timer')
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
          <Col span="2" className="header-title">首页</Col>
          <Col span="22">
            <span className="header-time">{this.state.currentTime}</span>
            <span className="header-weather">{this.state.currentWeather}/风力{this.state.windpower}级</span>
          </Col>
        </Row>
      </div>
    )
  }
}