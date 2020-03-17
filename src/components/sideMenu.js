import React, { Component }from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutline, BarsOutlined, UserOutlined } from '@ant-design/icons';

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
          <span>个人介绍</span>
        </Menu.Item>
        <SubMenu
          key="blog"
          title={
            <span>
              <BarsOutlined />
              <span>博客</span>
            </span>
          }
        >
          <Menu.Item key="blogList">列表</Menu.Item>
          <Menu.Item key="addBlog">新建</Menu.Item>
        </SubMenu>
        <SubMenu
          key="arts"  
          title={
            <span>
              <AppstoreOutlined />
              <span>作品展示</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}