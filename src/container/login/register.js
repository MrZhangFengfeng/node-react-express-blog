import React, { Component, useState  }from 'react'
import axios from '../../model/axios'
import './login.less'
import {Form, Input, Tooltip, Select, Row, Col, Checkbox, Button, message} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const { Option } = Select;


export default class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            toLogin: false
        }
    }

  handleRegister(values) {
    console.log('Received values of form: ', values);
    if(values.agreement) {
        const that = this
        axios.post('/api/user/register',{
            ...values
        }).then(res =>{
            console.log('注册成功', res)
            if(res.errCode == 0) {
                message.success('注册成功')
                that.setState({
                    toLogin: true
                })
            }
        })
    } else {
        message.error('您未同意注册条例，还不能注册哦~')
    }
  };

  render() {
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
          </Select>
        </Form.Item>
      );
    return (
         <div className="login_box">
            <div className="login_form">
            <Form
                {...formItemLayout}
                name="register"
                onFinish={this.handleRegister}
                initialValues={{
                    prefix: '86',
                }}
                >
                <Form.Item
                    name="username"
                    label="昵称"
                    rules={[{ required: true, message: '请输入您的昵称', whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="密码"
                    rules={[
                    {
                        required: true,
                        message: '请输入密码',
                    },
                    ]}
                    hasFeedback
                    >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="确认密码"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: '请确认您的密码',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject('密码前后输入不一致');
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="电子邮箱"
                    rules={[
                    {
                        type: 'email',
                        message: '这不是合法的邮箱',
                    },
                    {
                        required: true,
                        message: '请输入您的电子邮箱',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="手机号"
                    rules={[{ required: true, message: '请输入您的手机号' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>
                

                <Form.Item label="Captcha">
                    <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item
                        name="captcha"
                        noStyle
                        rules={[{ required: true, message: '请输入您收到的验证码' }]}
                        >
                        <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Button>获取验证码</Button>
                    </Col>
                    </Row>
                </Form.Item>

                <Form.Item name="agreement" valuePropName="checked" {...tailFormItemLayout}>
                    <Checkbox>
                    我已经同意 <a href="">注册条例</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                    注册
                    </Button>
                </Form.Item>
                </Form>
            </div>
        </div>
    );
  }
};