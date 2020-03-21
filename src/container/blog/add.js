import React, { Component }from 'react'
import axios from '../../model/axios'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Input } from 'antd'

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
  handleChange() {
    console.log(this.state.editorState)
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
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                  const data = editor.getData();
                    this.setState({
                      content:data
                    });
                    
                    console.log( { event, editor, data } );
                } }
                onBlur={ editor => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ editor => {
                    console.log( 'Focus.', editor );
                } }
            />
          </div>
          <div className="showBlock">
            <div className="title">{this.state.title}</div>
            <div className="content" dangerouslySetInnerHTML={{__html: this.state.content}}/>
          </div>
        </div>
      );
    }
}