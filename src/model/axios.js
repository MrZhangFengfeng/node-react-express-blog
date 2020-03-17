import Axios from 'axios'
import { message } from 'antd';

let axios = Axios.create({
    baseURL: process.env.API_ROOT
});

// 请求拦截器
axios.interceptors.request.use(
    config => {
		console.log('axios interceptors',config);
		return config 
	},
	error => {  // 当发生错误时，执行该部分代码
	    console.log('- - axios  error',error); //调试用
	    return Promise.reject(error)
	}
)

// 响应拦截器
axios.interceptors.response.use(
	response => { 
		const res = response.data; 
		if ('正常情况') {
			return res
		} else {
			return Promise.reject('error')
		}
	},
	error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    message.error('未登录？');
                    break;
                case 403:
                    message.error('token过期？');
                    break;
                case 404:
                    message.error('404');
                    break;
                default:
                    message.error(error);
            }
        }
        console.log(error)
		return Promise.reject(error)
	}
)

export default axios