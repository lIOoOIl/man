import React from 'react'
import { Menu, Icon } from 'antd'
import './index.less'

const { SubMenu } = Menu
export default class Nav extends React.Component {

  render() {
    return (
      <div>
        <div className='logo'>
          <img src='/assets/logo-ant.svg'></img>
          <h1>Man</h1>
        </div>
        <Menu theme='dark'>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}