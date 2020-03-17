import React, { Component }from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Layout, Breadcrumb, Button } from 'antd';
import SideMenu from '../../components/sideMenu';
import Home from '../../container/home/Home';
import BlogList from '../../container/blog/list';
import BlogDetail from '../../container/blog/detail';
import BlogAdd from '../../container/blog/add';
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
                  <Router>
                    <Route path="/blog/list" exact component={BlogList}/>
                    <Route path="/blog/list/:id" component={BlogDetail}/>
                    <Route path="/blog/add" component={BlogAdd}/>
                  </Router>
                </Content>
                <Footer className='footer'>春有百花秋有月，夏有凉风冬有雪。若无闲事挂心头，便是人间好时节。</Footer>
            </Layout>
        </Layout>
      );
    }
}