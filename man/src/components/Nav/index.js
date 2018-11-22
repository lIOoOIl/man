import React from 'react'
import { Menu, Icon } from 'antd'
import menuList from '../../config/menuConfig'
import './index.less'

const { SubMenu } = Menu
export default class Nav extends React.Component {
  constructor(props){
    super(props)
    // this.state = {
    //   menuTreeNode: []
    // }
  }
  componentWillMount(){
    const menuTreeNode = this.renderMenu(menuList)
    this.setState({
      menuTreeNode
    })
  }

  renderMenu = (data) => {
    return data.map(item => {
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} kety={item.key}>
          {item.title}
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <div>
        <div className='logo'>
          <img src='/assets/logo-ant.svg'></img>
          <h1>Man</h1>
        </div>
        <Menu theme='dark'>{this.state.menuTreeNode}</Menu>
      </div>
    )
  }
}