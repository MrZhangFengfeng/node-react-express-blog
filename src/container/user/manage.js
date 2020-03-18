import React, { Component }from 'react'
import axios from '../../model/axios'
import { Button } from 'antd'

import './manage.less'

export default class Manage extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    const manageList = [{
      name: '新建博客',
      path: '/blog/add'
    }]

    return (
      <div>
        {
          manageList.map( item => <Button type='primary' className='manage_item'>{item.name}</Button> )
        }
      </div>
    );
  }
}