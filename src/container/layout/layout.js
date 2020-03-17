import React, { Component }from 'react'
import { Layout, Breadcrumb, Button } from 'antd';
import SideMenu from '../../components/sideMenu';
import Home from '../../container/home/Home';
import axios from '../../model/axios'
const { Header, Footer, Sider, Content } = Layout;
require('./layout.css')

export default class BlankLayout extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    axios.get('/demo',{}).then(res =>{
      
    })
  }

  render() {
      return (
        <Layout>
            <Sider>
              <div className="logo">
                <div className="avatar"></div>
              </div>
              <SideMenu/>
            </Sider>
            <Layout>
              <Button type="primary">zxf</Button>
                <Header style={{background: 'transparent', paddingTop: '20px'}}>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <a href="">Application Center</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <a href="">Application List</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
                </Header>

                <Content>
                  <Home/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
      );
    }
}