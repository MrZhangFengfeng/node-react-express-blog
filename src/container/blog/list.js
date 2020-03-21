import React, { Component }from 'react'
import axios from '../../model/axios'
import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

export default class BlogList extends Component {

  constructor(props){
    super(props);
    this.state= {
        blogList: [],
        pageSize: 3
    }
  }

  componentDidMount() {
    const that = this
    axios.get('/api/blog/list',{
      params: {
        author: 'summer'
    }
    }).then(res =>{
        that.setState({
            blogList: res.data
        })
    })

    axios.post('/api/blog/add',{
        author: 'summer',
        title: 'hahahha',
        content: 'thanks'
    }).then(res =>{
          console.log(res,'sssssssssssssssssssss')
      })
  }

  render() {
    const { blogList, pageSize } = this.state
    const IconText = ({ icon, text }) => (
        <span>
          {React.createElement(icon, { style: { marginRight: 8 } })}
          {text}
        </span>
      );
      return (
        <div>
          <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: pageSize,
                }}
                dataSource={blogList}
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    />
                    {item.content}
                </List.Item>
                )}
            />
        </div>
      );
    }
}