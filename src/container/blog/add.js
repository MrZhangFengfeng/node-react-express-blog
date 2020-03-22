import React, { Component }from 'react'
import axios from '../../model/axios'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Input, Button } from 'antd'

import './add.less'

export default class BlogAdd extends Component {

  constructor(props){
    super(props);
    this.state = {
      content: '',
      title: ''
    }
  }

  componentDidMount() {
    
  }
  addBlog() {
    const that = this
    axios.post('/api/blog/add',{
      title: this.state.title,
      content: this.state.content,
      author: 'zxf'
    }).then(res =>{
        console.log('新建博客结果:', res)
    })
  }

  render() {
      return (
        <div>
          <div className="editBlock">
            <Input 
              placeholder="博客标题" 
              className="title"
              onChange={(e) => {
                this.setState({
                  title: e.target.value
                })
              }}/>
            <CKEditor
                editor={ ClassicEditor }
                data={this.state.content}
                onInit={ editor => {

                } }
                onChange={ ( event, editor ) => {
                  const data = editor.getData();
                } }
                onBlur={ ( event, editor ) => {
                  const data = editor.getData();
                    this.setState({
                      content:data
                    });
                } }
                onFocus={ editor => {
                    console.log( 'Focus.', editor );
                } }
            />
          </div>

          <div className="showBlock">
            <div className="title">{this.state.title}</div>
            <div className="content" dangerouslySetInnerHTML={{__html: this.state.content}}/>
            <Button onClick={() => this.addBlog()} type="primary"  className="submit">新建</Button>
          </div>
        </div>
      );
    }
}