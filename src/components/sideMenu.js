import React, { Component }from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutline, BarsOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"

const { SubMenu } = Menu;

export default class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
      >
        <Menu.Item key="personal">
          <UserOutlined />
          <a href='/user/show'>个人介绍</a>
        </Menu.Item>
        <Menu.Item key="blog">
          <BarsOutlined />
          <a href='/blog/list'>博客</a>
        </Menu.Item>
        <Menu.Item key="manage">
          <AppstoreOutlined />
          <a href='/manage'>个人中心</a>
        </Menu.Item>
      </Menu>
    );
  }
}