import React from 'react'

export default class Header extends React.Component {

  render() {
    let { value } = this.props
    return (
      <div>{value}</div>
    )
  }
}