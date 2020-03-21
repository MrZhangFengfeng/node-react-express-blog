import React, { Component }from 'react'
import { Link, withRouter } from "react-router-dom"
import './404.less'
class NotFound extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <div className="not_found">404</div>
        <Link to="/">返回首页</Link>
      </div>
    );
  }
}

export default withRouter(NotFound)