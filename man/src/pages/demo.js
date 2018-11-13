import React, { Component } from 'react'
import './style.less'
import { Button } from 'antd'
// import 'antd/dist/antd.css'

class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  plus = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  dele = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render () {
    return (
      <div>
        <h3>this is first test for react demo</h3>
        <Button onClick = { this.plus }> plus </Button>
        <Button onClick = { this.dele }> dele </Button>
        <h3>{ this.state.count }</h3>
      </div>
    )
  }
}

export default Demo
