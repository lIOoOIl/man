import React, { Component } from 'react'
import './style.css'

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
        <button onClick = { this.plus }> first </button>
        <button onClick = { this.dele }> second </button>
        <h3>{ this.state.count }</h3>
      </div>
    )
  }
}

export default Demo
