import React from 'react'

export default class Menu extends React.Component {

  render() {
    let { value } = this.props
    return (
      <div>{value}</div>
    )
  }
}