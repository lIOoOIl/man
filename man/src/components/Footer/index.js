import React from 'react'

export default class Footer extends React.Component {
  
  render(){
    let { value } = this.props
    return (
      <div>{value}</div>
    )
  }
}